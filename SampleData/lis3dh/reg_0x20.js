const REG_0x20 = {
  Name: "CTRL_REG1",
  Address: 0x20,
  Description:
    "Data rate selection, low-power enable, and x y and z axis enable/disable",
  BitGroups: [
    {
      Bits: [
        {
          Name: "Xen",
          Position: 0,
          Default: 1,
        },
      ],
      Description: "X-axis",
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
          Name: "Yen",
          Position: 1,
          Default: 1,
        },
      ],
      Description: "Y-axis",
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
          Name: "Zen",
          Position: 2,
          Default: 1,
        },
      ],
      Description: "Z-axis",
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
          Name: "LPen",
          Position: 3,
          Default: 0,
        },
      ],
      Description: "Low-power mode enable",
      States: [
        {
          Values: [0],
          Description: "high-resolution mode / normal mode",
        },
        {
          Values: [1],
          Description: "low-power mode",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "ODR3",
          Position: 7,
          Default: 0,
        },
        {
          Name: "ODR2",
          Position: 6,
          Default: 0,
        },
        {
          Name: "ODR1",
          Position: 5,
          Default: 0,
        },
        {
          Name: "ODR0",
          Position: 4,
          Default: 0,
        },
      ],
      Description: "Data rate selection",
      States: [
        {
          Values: [0, 0, 0, 0],
          Description: "Power-down mode",
        },
        {
          Values: [0, 0, 0, 1],
          Description: "HR / Nomral / Low-power mode (1 Hz)",
        },
        {
          Values: [0, 0, 1, 0],
          Description: "HR / Nomral / Low-power mode (10 Hz)",
        },
        {
          Values: [0, 0, 1, 1],
          Description: "HR / Nomral / Low-power mode (25 Hz)",
        },
        {
          Values: [0, 1, 0, 0],
          Description: "HR / Nomral / Low-power mode (50 Hz)",
        },
        {
          Values: [0, 1, 0, 1],
          Description: "HR / Nomral / Low-power mode (100 Hz)",
        },
        {
          Values: [0, 1, 1, 0],
          Description: "HR / Nomral / Low-power mode (200 Hz)",
        },
        {
          Values: [0, 1, 1, 1],
          Description: "HR / Nomral / Low-power mode (400 Hz)",
        },
        {
          Values: [1, 0, 0, 0],
          Description: "Low power mode (1.60 kHz)",
        },
        {
          Values: [1, 0, 0, 1],
          Description: "HR / normal (1.344 kHz); Low-power mode (5.376 kHz)",
        },
      ],
    },
  ],
  Register_Dependencies: null,
};

export { REG_0x20 };
