using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;

using Data;

namespace Listeners.Parsers
{
    public abstract class Parser
    {
        private ILogger _logger;

        public string _filePath { get; private set; }

        public Parser(string filePath, ILogger logger = null)
        {
            _filePath = filePath;
            _logger = logger ?? NullLogger.Instance;
        }

        public abstract Component Parse();
    }

}
