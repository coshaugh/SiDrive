using System.ComponentModel;

namespace Scribes.Util
{
    public static class EnumerationHelper
    {
        public static string DataTypesDescription(this DataTypes dt)
        {
            return GetDescription<DataTypes>(dt);
        }
        private static string GetDescription<T>(T enumer)
        {
            var type = typeof(T);
            var memInfo = type.GetMember(enumer.ToString());
            var attributes = memInfo[0].GetCustomAttributes(typeof(DescriptionAttribute), false);
            return ((DescriptionAttribute)attributes[0]).Description;
        }
    }
}