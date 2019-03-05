using System;
using System.IO;
using System.Reflection;

namespace Test.Interpreters
{
    /// <summary>
    /// This path will hold all the path information to target test data
    /// Paths are relative to ProjectRoot/TestData
    /// </summary>
    public static class PathConstants
    {
        public static string AssemblyDirectory
        {
            get
            {
                string codeBase = Assembly.GetExecutingAssembly().CodeBase;
                UriBuilder uri = new UriBuilder(codeBase);
                string path = Uri.UnescapeDataString(uri.Path);
                return Path.GetDirectoryName(path);
            }
        }

        public static string Root = Path.Combine(AssemblyDirectory, "TestData/");

        public static string JsonData = Root + "Json";

        public static string YamlData = Root + "Yaml";

        public static string Sandbox = Root + "Sandbox";
    }
}
