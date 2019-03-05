using System;
using System.Collections.Generic;

namespace Data
{
    public class Group
    {
        public String GroupName;
        public String Bits;
        public String Description;
        public Boolean Enumerate;
        public String TemplateString;
        public List<State> States;
        public List<RegisterDependency> RegisterDependencies;
    }
}