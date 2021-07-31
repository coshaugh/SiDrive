import Bit from "./Bit";
import State from "./State";

type BitGroup = {
  description: string;
  bits: Bit[];
  states: State[];
};

export default BitGroup;
