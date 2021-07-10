const REG_0x27 = {
  Name: "STATUS_REG",
  Address: 0x27,
  ReadOnly: true, //TODO-SPET/DADDICORN read only register issue
  Description: "x,y,z data status",
  BitGroups: [
    {
      Bits: [
        {
          Name: "XDA",
          Position: 0,
          Default: 0,
        },
      ],
      Description: "new data for x-axis available",
      States: [
        {
          Values: [0],
          Description: "not available",
        },
        {
          Values: [1],
          Description: "available",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "YDA",
          Position: 1,
          Default: 0,
        },
      ],
      Description: "new data for y-axis available",
      States: [
        {
          Values: [0],
          Description: "not available",
        },
        {
          Values: [1],
          Description: "available",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "ZDA",
          Position: 2,
          Default: 0,
        },
      ],
      Description: "new data for z-axis available",
      States: [
        {
          Values: [0],
          Description: "not available",
        },
        {
          Values: [1],
          Description: "available",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "ZYXDA",
          Position: 3,
          Default: 0,
        },
      ],
      Description: "new data for x,y, & z axis available",
      States: [
        {
          Values: [0],
          Description: "not available",
        },
        {
          Values: [1],
          Description: "available",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "XOR",
          Position: 4,
          Default: 0,
        },
      ],
      Description: "overrun on x-axis data",
      States: [
        {
          Values: [0],
          Description: "no overrun",
        },
        {
          Values: [1],
          Description: "new data has overwritten previous data",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "YOR",
          Position: 5,
          Default: 0,
        },
      ],
      Description: "overrun on y-axis data",
      States: [
        {
          Values: [0],
          Description: "no overrun",
        },
        {
          Values: [1],
          Description: "new data has overwritten previous data",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "ZOR",
          Position: 6,
          Default: 0,
        },
      ],
      Description: "overrun on z-axis data",
      States: [
        {
          Values: [0],
          Description: "no overrun",
        },
        {
          Values: [1],
          Description: "new data has overwritten previous data",
        },
      ],
    },
    {
      Bits: [
        {
          Name: "ZYXOR",
          Position: 7,
          Default: 0,
        },
      ],
      Description: "overrun on zyx-axis data",
      States: [
        {
          Values: [0],
          Description: "no overrun",
        },
        {
          Values: [1],
          Description: "new data has overwritten previous data",
        },
      ],
    },
  ],
  Register_Dependencies: null,
};

export { REG_0x27 };
