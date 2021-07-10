const REG_0x24 = {
  Name: "CTRL_REG5",
  Address: 0x24,
  Description: "reboot, FIFO, and various interrupts",
  BitGroups: [
    {
      Bits: [
        {
          Name: "D4D_INT2",
          Position: 0,
          Default: 0,
        },
      ],
      Description:
        "4D enable. 4D detection is enabled on INT2 pin when 6D bit on INT2_CFG is set to 1",
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
          Name: "LIR_INT2",
          Position: 1,
          Default: 0,
        },
      ],
      Description:
        "Latch interrupr request on INT2_SRC register with INT2_SRC register cleared by reading INT2_SRC itself",
      States: [
        {
          Values: [0],
          Description: "interrupt request not latched",
        },
        {
          Values: [1],
          Description: "interrupt request latched",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "D4D_INT1",
          Position: 2,
          Default: 0,
        },
      ],
      Description:
        "4D enable: 4D detection is enabled on INT1 when 6D bit on INT1_CFG is set to 1",
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
          Name: "LIR_INT1",
          Position: 3,
          Default: 0,
        },
      ],
      Description:
        "Latch interrupt request on INT1_SRC register with INT1_SRC register cleared by reading INT1_SRC itself",
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
          Name: "--",
          Position: 4,
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
          Name: "--",
          Position: 5,
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
          Name: "FIFO_EN",
          Position: 6,
          Default: 0,
        },
      ],
      Description: "FIFO enable",
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
          Name: "BOOT",
          Position: 7,
          Default: 0,
        },
      ],
      Description: "Reboot memory",
      States: [
        {
          Values: [0],
          Description: "normal mode",
        },
        {
          Values: [1],
          Description: "reboot memory content",
        },
      ],
    },
  ],
  Register_Dependencies: [
    {
      Description:
        "4D detection on is on INT2 when 6D bit on INT2_CFG is set to 1",
      // bit 3 @ 0x23 impacts state "1" @ bit6 locally
      // 1-to-1 array correspondance bewteen remote.states and local.states
      Remote: {
        Register: 0x34,
        BitPositions: [6],
        States: [
          {
            Values: [1],
            Description: "6-direction detection function enabled",
          },
        ],
      },
      Local: {
        Register: null, // doesnt matter, THIS register
        BitPositions: [0],
        States: [
          {
            Values: [1],
          },
        ],
      },
    },
    {
      Description:
        "4D detection on is on INT1 when 6D bit on INT1_CFG is set to 1",
      // bit 3 @ 0x23 impacts state "1" @ bit6 locally
      // 1-to-1 array correspondance bewteen remote.states and local.states
      Remote: {
        Register: 0x34,
        BitPositions: [6],
        States: [
          {
            Values: [1],
            Description: "6-direction detection function enabled",
          },
        ],
      },
      Local: {
        Register: null, // doesnt matter, THIS register
        BitPositions: [2],
        States: [
          {
            Values: [1],
          },
        ],
      },
    },
  ],
};

export { REG_0x24 };
