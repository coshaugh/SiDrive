const REG_0x22 = {
  Name: "CTRL_REG3",
  Address: 0x22,
  Read: true,
  Write: true,
  Description: "Interrupt Control",
  BitGroups: [
    {
      Bits: [
        {
          Name: "I1_CLICK",
          Position: 7,
        },
      ],
      Description: "Click interrupt on INT1",
      States: [
        {
          Values: [0],
          Description: "disable",
        },
        {
          Values: [1],
          Description: "enable",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "I1_IA1",
          Position: 6,
        },
      ],
      Description: "IA1 interrupt on INT1",
      States: [
        {
          Values: [0],
          Description: "disable",
        },
        {
          Values: [1],
          Description: "enable",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "I1_IA2",
          Position: 5,
        },
      ],
      Description: "IA2 interrupt on INT1",
      States: [
        {
          Values: [0],
          Description: "disable",
        },
        {
          Values: [1],
          Description: "enable",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "I1_ZYXDA",
          Position: 4,
        },
      ],
      Description: "ZYXDA interrupt on INT1",
      States: [
        {
          Values: [0],
          Description: "disable",
        },
        {
          Values: [1],
          Description: "enable",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "I1_321DA",
          Position: 3,
        },
      ],
      Description: "321DA interrupt on INT1",
      States: [
        {
          Values: [0],
          Description: "disable",
        },
        {
          Values: [1],
          Description: "enable",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "I1_WTM",
          Position: 2,
        },
      ],
      Description: "FIFO watermark interrupt on INT1",
      States: [
        {
          Values: [0],
          Description: "disable",
        },
        {
          Values: [1],
          Description: "enable",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "I1_OVERRUN",
          Position: 1,
        },
      ],
      Description: "FIFO overrun interrupt on INT1",
      States: [
        {
          Values: [0],
          Description: "disable",
        },
        {
          Values: [1],
          Description: "enable",
        },
      ],
    },
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
  ],
  Register_Dependencies: null,
};

export { REG_0x22 };
