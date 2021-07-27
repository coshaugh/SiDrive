import Register from "./Register";

type Chip = {
  name: string;
  partNumber: string;
  manufacturer: string;
  description: string;
  registers: Register[];
};

export default Chip;
