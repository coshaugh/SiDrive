const REG_0x1F = {
  Name: "TEMP_CFG_REG",
  Address: 0x1f,
  Description: "Temp sensor/ ADC enable",
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
          Values: [0],
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
          Name: "TEMP_EN",
          Position: 6,
          Default: 0,
        },
      ],
      Description: "Temperature sensor",
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
          Name: "ADC_EN",
          Position: 7,
          Default: 0,
        },
      ],
      Description: "ADC",
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

export { REG_0x1F };
