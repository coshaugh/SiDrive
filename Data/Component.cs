using System.Collections.Generic;

namespace Data
{
    public class Component
    {
        public string Name { get; set; }
        public string DataSheetURL { get; set; }
        public List<Register> Registers { get; set; }
    }
}
