using Translator.Data;
using System.IO;
using Microsoft.Extensions.Logging;
using YamlDotNet.Serialization;

namespace Translator.Parsers
{
    public sealed class YamlParser : Parser
    {
        public YamlParser(string filePath, ILogger logger = null) : base(filePath, logger)
        {
        }

        public override Component Parse()
        {
            string document = File.ReadAllText(_filePath);
            var input = new StringReader(document);

            var deserializer = new Deserializer();

            return deserializer.Deserialize<Component>(input);
        }

    }
}