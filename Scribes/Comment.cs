using System;
using System.Collections.Generic;
using System.Text;

namespace Scribes
{
    public class Comment
    {
        private readonly string topCommentBlock = "/******************************************************************************";
        private string keyValueContentCommentBlock(string key, string value) => $"* {key}\t\t : {value}";
        private string simpleContentCommentBlock(string content) => $"* {content}";
        private readonly string bottomCommentBlock = "*******************************************************************************/";
        
        private string inlineComment(string content) => $"// {content}";

        public Comment()
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
            strBldr.Append(keyValueContentCommentBlock("Function Name",functionName));
            strBldr.Append(keyValueContentCommentBlock("Description",description));
            strBldr.Append(keyValueContentCommentBlock("Input", string.Join(", ",inputs)));
            strBldr.Append(keyValueContentCommentBlock("Output",output));
            strBldr.Append(keyValueContentCommentBlock("Return",returnValue));
            
            return WrapBlock(strBldr.ToString());
        }

        public string ProjectCommentBlock(
            string projectName, 
            string fileName, 
            string version, 
            string device, 
            string software = "", 
            string author = "",
            IEnumerable<string> other = null)
        {
            var strBldr = new StringBuilder();
            strBldr.Append(keyValueContentCommentBlock("Project Name",projectName));
            strBldr.Append(keyValueContentCommentBlock("File Name",fileName));
            strBldr.Append(keyValueContentCommentBlock("Version", version));
            strBldr.Append(keyValueContentCommentBlock("Device Used",device));
            strBldr.Append(keyValueContentCommentBlock("Software Used",software));
            strBldr.Append(keyValueContentCommentBlock("Author",author));
            //strBldr.Append(keyValueContentCommentBlock("Other",string.Join(", ",other)));
            
            return WrapBlock(strBldr.ToString());
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
