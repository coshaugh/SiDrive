using System;
using System.Collections.Generic;
using System.Text;

namespace Scribes
{
    public class Comment
    {
        private readonly string openingBlock = "/******************************************************************************";
        private string keyValueBlock(string key, string value) => $"* {key}\t\t : {value}";
        private readonly string closingBlock = "*******************************************************************************/";
        
        public Comment()
        {
        }

        public string FunctionBlock(
            string functionName,
            string description,
            IEnumerable<string> inputs,
            string output,
            string returnValue)
        {
            var strBldr = new StringBuilder();
            strBldr.Append(keyValueBlock("Function Name",functionName));
            strBldr.Append(keyValueBlock("Description",description));
            strBldr.Append(keyValueBlock("Input", string.Join(", ",inputs)));
            strBldr.Append(keyValueBlock("Output",output));
            strBldr.Append(keyValueBlock("Return",returnValue));
            
            return WrapBlock(strBldr.ToString());
        }

        public string ProjectBlock(
            string projectName, 
            string fileName, 
            string version, 
            string device, 
            string software = "", 
            string author = "",
            IEnumerable<string> other = null)
        {
            var strBldr = new StringBuilder();
            strBldr.Append(keyValueBlock("Project Name",projectName));
            strBldr.Append(keyValueBlock("File Name",fileName));
            strBldr.Append(keyValueBlock("Version", version));
            strBldr.Append(keyValueBlock("Device Used",device));
            strBldr.Append(keyValueBlock("Software Used",software));
            strBldr.Append(keyValueBlock("Author",author));
            //strBldr.Append(keyValueBlock("Other",string.Join(", ",other)));
            
            return WrapBlock(strBldr.ToString());
        }

        private string WrapBlock(string innerContent)
        {
            var strBldr = new StringBuilder();
            strBldr.Append(openingBlock + "\n");
            strBldr.Append(innerContent + "\n");
            strBldr.Append(closingBlock + "\n");

            return strBldr.ToString();
        }
    }
}
