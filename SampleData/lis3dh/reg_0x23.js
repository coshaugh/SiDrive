const REG_0x23 = {
  Name: "CTRL_REG4",
  Address: 0x23,
  Description: "Interrupt Control",
  BitGroups: [
    {
      Bits: [
        {
          Name: "SIM",
          Position: 0,
        },
      ],
      Description: "SPI serial interface mode selection",
      States: [
        {
          Values: [0],
          Description: "4-wire interface",
        },
        {
          Values: [1],
          Description: "3-wire interface",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "ST1",
          Position: 2,
          Default: 0,
        },
        {
          Name: "ST0",
          Position: 1,
          Default: 0,
        },
      ],
      Description: "Self-test enable",
      States: [
        {
          Values: [0, 0],
          Description: "Normal mode",
        },
        {
          Values: [0, 1],
          Description: "Self-test 0",
        },
        {
          Values: [1, 0],
          Description: "Self-test 1",
        },
        {
          Values: [1, 1],
          Description: "--",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "HR",
          Position: 3,
        },
      ],
      Description: "High-resolution output mode",
      States: [
        {
          Values: [0],
          Description: "high-resolution disabled",
        },
        {
          Values: [1],
          Description: "high-resolution enabled",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "FS1",
          Position: 5,
        },
        {
          Name: "FS0",
          Position: 4,
        },
      ],
      Description: "Full-scale selection",
      States: [
        {
          Values: [0, 0],
          Description: "+/- 2g",
        },
        {
          Values: [0, 1],
          Description: "+/- 4g",
        },
        {
          Values: [1, 0],
          Description: "+/- 8g",
        },
        {
          Values: [1, 1],
          Description: "+/- 16g",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "BLE",
          Position: 6,
          Default: 0,
        },
      ],
      Description: "Big/little endian data selection.",
      States: [
        {
          Values: [0],
          Description: "Data LSB @ lower address",
        },
        {
          Values: [1],
          Description: "Data MSB @ lower address",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "BDU",
          Position: 7,
          Default: 0,
        },
      ],
      Description: "Block data update",
      States: [
        {
          Values: [0],
          Description: "Continous update",
        },
        {
          Values: [1],
          Description: "output registers not updated until MSB and LSB reading",
        },
      ],
    },
  ],
  Register_Dependencies: [
    {
      Description:
        "The BLE function can be activated only in high-resolution mode",
      // bit 3 @ 0x23 impacts state "1" @ bit6 locally
      // 1-to-1 array correspondance bewteen remote.states and local.states
      Remote: {
        Register: 0x23,
        BitPositions: [3],
        States: [
          {
            Values: [1],
            Description: "high-resolution mode enabled",
          },
        ],
      },
      Local: {
        Register: null, // doesnt matter, THIS register
        BitPositions: [6],
        States: [
          {
            Values: [1],
          },
        ],
      },
    },
  ],
};

export { REG_0x23 };
