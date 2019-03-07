using System.IO;

namespace Translator
{
    public class Translator : ITranslator
    {
        private Stream inputStream;

        public Translator()
        {
            
        }

        public bool Initialize(Stream input)
        {
            if(inputStream != null)
                return false;

            inputStream = input;
            return true;
        }

        public void Reset()
        {
            inputStream = null;
        }

        public Stream GetHeader()
        {
            return Stream.Null;
        }

        public Stream GetSource()
        {
            return Stream.Null;
        }
    }
}