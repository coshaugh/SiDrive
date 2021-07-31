import State from "./State";

type DependencyMeta = {
  register: number;
  bitPositions: number[];
  states: State[];
};

export default DependencyMeta;
