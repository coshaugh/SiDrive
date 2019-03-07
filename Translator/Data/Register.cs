using System;
using System.Collections.Generic;

namespace Translator.Data
{
    public class Register
    {
        public String Name;
        public Boolean Read;
        public Boolean Write;

        //Default register value (hex). example: 0x33
        public int Default;

        //Register Description. example: Device identification register public String Description;
        //Remarks? (i.e. reserved, dummy, etc...). example: ""
        public String Remarks;

        //Does this register have groups of bits that function together?
        public List<Group> Groups;

        //Does the state of this register effect other registers functionality?
        public List<Register> RegisterDependencies;
        public List<BitDescription> BitDescriptions;
    }
}