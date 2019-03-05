using System;

namespace Scribes
{
    // we should support both C and C++ syntax
    public class Comments
    {
        private readonly string topCommentBlock = "/******************************************************************************";
        private readonly string bottomCommentBlock = "*******************************************************************************/";
        private string simpleContentCommentBlock(string content) => $"* {content}";
        private string keyValueContentCommentBlock(string key, string value) => $"* {key}\t\t : {value}";
        private string inlineComment(string content) => $"// {content}";

        public Comments()
        {

        }

        public string FunctionCommentBlock(
            string functionName,
            string description,
            IEnumerable<string> inputs,
            string output,
            string returnValue)
        {
            var strBldr = new StringBuilder();
            var innerContent = "";
            return WrapBlock(innerContent);
        }

        public string ProjectCommentBlock(
            string projectName, 
            string fileName, 
            string version, 
            string device, 
            string software = null, 
            string author = null,
            IEnumerable<string> other)
        {
            var strBldr = new StringBuilder();
            var innerContent = "";
            return WrapBlock(innerContent);
        }

        private string WrapBlock(string innerContent)
        {
            var strBldr = new StringBuilder();
            strBldr.Append(topCommentBlock + "\n");
            strBldr.Append(innerContent + "\n");
            strBldr.Append(bottomCommentBlock + "\n");

            return strBldr.ToString();
        }
    }
}
