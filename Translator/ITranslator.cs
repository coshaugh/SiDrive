using System.IO;

namespace Translator
{
    public interface ITranslator
    {
        bool Initialize(Stream input);

        void Reset();

        Stream GetHeader();

        Stream GetSource();
    }
}