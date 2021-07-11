const REG_0x25 = {
  Name: "CTRL_REG6",
  Address: 0x25,
  Description: "INT2 controls",
  BitGroups: [
    {
      Bits: [
        {
          Name: "--",
          Position: 0,
          Default: 0,
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
          Name: "INT_POLARITY",
          Position: 1,
          Default: 0,
        },
      ],
      Description: "INT1 and INT2 pin polarity",
      States: [
        {
          Values: [0],
          Description: "active-high",
        },
        {
          Values: [1],
          Description: "active-low",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "--",
          Position: 2,
          Default: 0,
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
          Name: "I2_ACT",
          Position: 3,
          Default: 0,
        },
      ],
      Description: "Enable activity interrupt on INT2 pin",
      States: [
        {
          Values: [0],
          Description: "disabled",
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
          Name: "I2_BOOT",
          Position: 4,
          Default: 0,
        },
      ],
      Description: "Enable boot on INT2 pin",
      States: [
        {
          Values: [0],
          Description: "disabled",
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
          Name: "I2_IA2",
          Position: 5,
          Default: 0,
        },
      ],
      Description: "Enable interrupt 2 function on INT2 pin",
      States: [
        {
          Values: [0],
          Description: "disabled",
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
          Name: "I2_IA1",
          Position: 6,
          Default: 0,
        },
      ],
      Description: "Enable interrupt 1 function on INT2 pin",
      States: [
        {
          Values: [0],
          Description: "disabled",
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
          Name: "I2_CLICK",
          Position: 7,
          Default: 0,
        },
      ],
      Description: "Enable interrupt on INT2 pin",
      States: [
        {
          Values: [0],
          Description: "disabled",
        },
        {
          Values: [1],
          Description: "enabled",
        },
      ],
    },
  ],
  Register_Dependencies: null,
};

export { REG_0x25 };
