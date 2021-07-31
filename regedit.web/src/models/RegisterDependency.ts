import DependencyMeta from "./DependencyMeta";

type RegisterDependency = {
  description: string;
  remote: DependencyMeta;
  local: DependencyMeta;
};

export default RegisterDependency;
