import BitGroup from "./BitGroup";
import RegisterDependency from "./RegisterDependency";

type Register = {
  name: string;
  address: number;
  description: string;
  bitGroups: BitGroup[];
  registerDependencies: RegisterDependency[];
};

export default Register;
