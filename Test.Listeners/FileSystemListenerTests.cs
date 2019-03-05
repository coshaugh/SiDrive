using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Xunit;
using Listeners;

namespace Test.Interpreters
{
    public class FileSystemListenerTests
    {
        public static string testFile = "testFile";

        public static IEnumerable<object[]> GetFileTypes()
        {
            return new List<object[]> { 
                new object[] { ".txt" },
                //new object[] { ".yml" },
                //new object[] { ".json" } 
            };
        }

        [Theory]
        [MemberData(nameof(GetFileTypes))]
        public void FileAddedAfterMonitorStarted(string extension)
        {
            var sandboxDir = SetupSandbox();

            // 1) create instance of directory monitor
            var dm = new FileSystemListener(sandboxDir);
            dm.Listen();

            // 2) make some changes in the directory
            var newFiles = CreateFile(sandboxDir, testFile, extension);
            WriteFiles(newFiles);

            // 3) inspect events somehow...keep a record in dm obj?

        }

        [Theory]
        [MemberData(nameof(GetFileTypes))]
        public void FileAddedBeforeMonitorStarted(string extension)
        {
            var sandboxDir = SetupSandbox();
            var newFiles = CreateFile(sandboxDir, testFile, extension, 3);

            // 1) create instance of directory monitor
            var dm = new FileSystemListener(sandboxDir);
            dm.Listen();

            // 2) make some changes in the directory
            WriteFiles(newFiles);

            // 3) inspect events somehow...keep a record in dm obj?

        }

        private string SetupSandbox()
        {
            var sandboxDir = PathConstants.Sandbox;
            if (Directory.Exists(sandboxDir))
                Directory.Delete(sandboxDir, true);
            Directory.CreateDirectory(sandboxDir);

            return sandboxDir;
        }

        private List<string> CreateFile(string directory, string fileName, string extension, int numberFilesToCreate = 1)
        {
            var files = new List<string>();
            for (int i = 0; i < numberFilesToCreate; i++)
            {
                var filePath = Path.Combine(directory, fileName + i + extension);
                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                }
                var file = File.Create(filePath);
                file.Close();
                files.Add(filePath);
            }

            return files;
        }

        private void WriteFiles(List<string> filePaths)
        {
            foreach(var f in filePaths)
            {
                WriteFile(f);
            }
        }

        private void WriteFile(string filePath)
        {
            using (TextWriter tw = new StreamWriter(filePath))
            {
                tw.WriteLine("This should trigger an event.");
            }
        }
    }
}
