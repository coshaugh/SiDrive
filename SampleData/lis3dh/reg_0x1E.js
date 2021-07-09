const REG_0x1E = {
  Name: "CTRL_REG0",
  Address: 0x1e,
  Description: "Control register 0",
  BitGroups: [
    {
      Bits: [
        {
          Position: 0,
        },
      ],
      States: [
        {
          Values: [0],
        },
      ],
    },
    {
      Bits: [
        {
          Position: 1,
        },
      ],
      States: [
        {
          Values: [0],
        },
      ],
    },
    {
      Bits: [
        {
          Position: 2,
        },
      ],
      States: [
        {
          Values: [0],
        },
      ],
    },
    {
      Bits: [
        {
          Position: 3,
        },
      ],
      States: [
        {
          Values: [0],
        },
      ],
    },
    {
      Bits: [
        {
          Position: 4,
        },
      ],
      States: [
        {
          Values: [1],
        },
      ],
    },
    {
      Bits: [
        {
          Position: 5,
        },
      ],
      States: [
        {
          Values: [0],
        },
      ],
    },
    {
      Bits: [
        {
          Position: 6,
        },
      ],
      States: [
        {
          Values: [0],
        },
      ],
    },
    {
      Bits: [
        {
          Name: "SDO_PU_DISC",
          Position: 7,
          Default: 0,
        },
      ],
      Description: "SDO/SA0 pull-up",
      States: [
        {
          Values: [0],
          Description: "pull-up connected",
        },
        {
          Values: [1],
          Description: "pull-up disconnected",
        },
      ],
    },
  ],
  Register_Dependencies: null,
};

export { REG_0x1E };
