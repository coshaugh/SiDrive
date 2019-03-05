using System;
using Microsoft.Extensions.Logging;
using NLog;
using NLog.Extensions.Logging;

namespace Listeners
{
    public class Program
    {
        public static void Main(String[] args)
        {
            // parse out the path information - should be config driven

            // check if directory exists, if not throw error

            // gather all the files currently in the directory

            // data object should encapsulate state of the directory. list metrics for object below
            // directory state:
            //  current count of files
            //  list of files

            // file objects: name, type

            // paralell task queue that will assign a parser to each file separately
            //////////////////////////////////
            // mechanism to poll a directory, or maybe listen for events
            // mechanism to determine file type i.e. json, yaml, other
            // apply instantiate correct parser based on the file type ovsered
            // spin up singleton
            // asks for a dir
            // set up listener
            // hashes file and compares with existing hash

            Console.WriteLine("Please enter the path to a directory you want me to monitor.");
            Console.Write("Directory: ");

            var userInputDirectoryPath = Console.ReadLine();

            if (string.IsNullOrWhiteSpace(userInputDirectoryPath))
            {
                userInputDirectoryPath = "/Users/conoroshaughnessy/Desktop/listenHere";
            }
            var loggerFactory = new LoggerFactory();
            loggerFactory.AddProvider(new NLogLoggerProvider());

            var logger = loggerFactory.CreateLogger<Program>();
            var dirManager = new FileSystemListener(userInputDirectoryPath, logger);

            dirManager.Listen();
            // do wtvr you need to here

            Console.WriteLine("Waiting on user input, allowing thread to run in background and monitor dir.");


            Console.ReadLine();
            dirManager.Silence();
        }
    }

}