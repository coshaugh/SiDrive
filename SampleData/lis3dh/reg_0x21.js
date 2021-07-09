const REG_0x21 = {
  Name: "CTRL_REG2",
  Address: 0x21,
  Description: "high pass filter configuration",
  BitGroups: [
    {
      Bits: [
        {
          Name: "HP_IA2",
          Position: 1,
          Default: 0,
        },
        {
          Name: "HP_IA1",
          Position: 0,
          Default: 0,
        },
      ],
      Description: "High-pass filter mode selection",
      States: [
        {
          Values: [0, 0],
          Description: "Normal mode",
        },
        {
          Values: [0, 1],
          Description: "Reference signal for filering",
        },
        {
          Values: [1, 0],
          Description: "Normal mode",
        },
        {
          Values: [1, 1],
          Description: "Autoreset on interrupt event",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "HPCLICK",
          Position: 2,
          Default: 0,
        },
      ],
      Description: "High-pass filter enabled for CLICK function",
      States: [
        {
          Values: [0],
          Description: "bypassed",
        },
        {
          Values: [1],
          Description: "enabled",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "FDS",
          Position: 3,
          Default: 0,
        },
      ],
      Description: "Send data from internal filter to output register and FIFO",
      States: [
        {
          Values: [0],
          Description: "bypassed",
        },
        {
          Values: [1],
          Description: "send it",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "HPCF2",
          Position: 5,
          Default: 0,
        },
        {
          Name: "HPCF1",
          Position: 4,
          Default: 0,
        },
      ],
      Description: "High-pass filter cutoff frequency selection",
      States: [
        {
          Values: [0, 0],
          Description: "TODO-SPET",
        },
        {
          Values: [0, 1],
          Description: "TODO-SPET",
        },
        {
          Values: [1, 0],
          Description: "TODO-SPET",
        },
        {
          Values: [1, 1],
          Description: "TODO-SPET",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "HPM1",
          Position: 7,
          Default: 0,
        },
        {
          Name: "HPM0",
          Position: 6,
          Default: 0,
        },
      ],
      Description: "High-pass filter mode selection",
      States: [
        {
          Values: [0, 0],
          Description: "Normal mode",
        },
        {
          Values: [0, 1],
          Description: "Reference signal for filtering",
        },
        {
          Values: [1, 0],
          Description: "Normal mode",
        },
        {
          Values: [1, 1],
          Description: "Autoreset on interrupt event",
        },
      ],
    },
  ],
  Register_Dependencies: null,
};

export { REG_0x21 };
