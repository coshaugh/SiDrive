using System;
using System.IO;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Linq;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;

namespace Listeners
{
    public sealed class FileSystemListener
    {
        private ILogger _logger;

        private string _directory;

        //TODO: the below file types should be fed in via app config
        private List<string> _fileTypesToMonitor = new List<string>{".yaml",".json",".txt"};
        private Dictionary<string, FileMeta> _fileMetaList;
        private List<FileSystemWatcher> _fileSystemWatchers = new List<FileSystemWatcher>();

        public FileSystemListener(string rawPath, ILogger logger = null)
        {
            _directory = CleanPath(rawPath);
            _fileMetaList = Directory.GetFiles(_directory)
                                     .ToDictionary( k => k, v => new FileMeta(Path.GetFileName(v), Path.GetExtension(v), ComputeMD5(v)));
            _logger = logger ?? NullLogger.Instance;

            CreateListeners();
        }

        public void Listen()
        {
            _logger.LogInformation("Starting listening to events");

            foreach (var fsw in _fileSystemWatchers)
            {
                fsw.EnableRaisingEvents = true;
            }
        }

        public void Silence()
        {
            _logger.LogInformation("Stopping listening to events");

            foreach (var fsw in _fileSystemWatchers)
            {
                fsw.EnableRaisingEvents = false;
            }
        }

        private string CleanPath(string rawPath)
        {
            if (!Directory.Exists(rawPath))
                throw new ArgumentException("Directory supplied does not exist.");

            return rawPath;
        }

        private byte[] ComputeMD5(string filePath)
        {
            using (var md5 = MD5.Create())
            {
                using (var stream = File.OpenRead(filePath))
                {
                    return md5.ComputeHash(stream);
                }
            }
        }

        private void CreateListeners()
        {
            foreach (var fileType in _fileTypesToMonitor)
            {
                var fsw = CreateListener(fileType);

                _fileSystemWatchers.Add(fsw);
            }
        }

        private FileSystemWatcher CreateListener(string fileType)
        {
            var fsw = new FileSystemWatcher();
            fsw.Path = _directory;
            fsw.Filter = fileType;
            fsw.NotifyFilter = NotifyFilters.LastWrite;
            fsw.Changed += new FileSystemEventHandler(OnChanged);
            fsw.Created += new FileSystemEventHandler(OnCreated);
            fsw.Deleted += new FileSystemEventHandler(OnDeleted);
            //fsw.Renamed += new FileSystemEventHandler(OnRenamed);

            return fsw;
        }

        private void OnChanged(object source, FileSystemEventArgs e)
        {
            WatcherChangeTypes wct = e.ChangeType;
            _logger.LogDebug($"Changed File {Path.GetFileName(e.FullPath)} {wct.ToString()}");
        }

        private void OnCreated(object source, FileSystemEventArgs e)
        {
            WatcherChangeTypes wct = e.ChangeType;
            var fileName = Path.GetFileName(e.FullPath);

            if (!_fileMetaList.ContainsKey(fileName))
                _fileMetaList.Add(fileName, new FileMeta(fileName, Path.GetExtension(e.FullPath), ComputeMD5(e.FullPath)));

            _logger.LogDebug($"Created File {fileName} {wct.ToString()}");
        }

        private void OnDeleted(object source, FileSystemEventArgs e)
        {
            WatcherChangeTypes wct = e.ChangeType;
            var fileName = Path.GetFileName(e.FullPath);

            if (_fileMetaList.ContainsKey(fileName))
                _fileMetaList.Remove(fileName);

            _logger.LogDebug($"Deleted File {fileName} {wct.ToString()}");
        }

        //private void OnRenamed(object source, FileSystemEventArgs e)
        //{

        //}

        private void DisposeOfListeners()
        {
            for (int i = _fileSystemWatchers.Count - 1; i >=0 ; i--)
            {
                var fsw = _fileSystemWatchers[i];
                _fileSystemWatchers.Remove(fsw);
                fsw.Dispose();
            }
        }
    }

    public sealed class FileMeta
    {
        public string FileName { get; private set; }
        public string FileExtension { get; private set; }
        public byte[] MD5Checksum { get; private set; }

        public FileMeta(string fileName, string fileExtension, byte[] md5Checksum)
        {
            FileName = fileName;
            FileExtension = fileExtension;
            MD5Checksum = md5Checksum;
        }
    }
}
