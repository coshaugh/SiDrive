using Translator.Data;
using System.IO;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Translator.Parsers
{
    public sealed class JsonParser : Parser
    {
        public JsonParser(string filePath, ILogger logger = null) : base(filePath, logger)
        {
        }

        public override Component Parse()
        {
            string document = File.ReadAllText(_filePath);
            var input = new StringReader(document);

            return JsonConvert.DeserializeObject<Component>(input.ToString());
        }

    }
}
