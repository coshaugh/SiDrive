const REG_0x26 = {
  Name: "REFERENCE",
  Address: 0x26,
  ReadOnly: true, //TODO-SPET/DADDICORN read only register issue
  Description: "x,y,z data status",
  BitGroups: [
    {
      Bits: [
        {
          Name: "REF7",
          Position: 7,
          Default: 0,
        },
        {
          Name: "REF6",
          Position: 6,
          Default: 0,
        },
        {
          Name: "REF5",
          Position: 5,
          Default: 0,
        },
        {
          Name: "REF4",
          Position: 4,
          Default: 0,
        },
        {
          Name: "REF3",
          Position: 3,
          Default: 0,
        },
        {
          Name: "REF2",
          Position: 2,
          Default: 0,
        },
        {
          Name: "REF1",
          Position: 1,
          Default: 0,
        },
        {
          Name: "REF0",
          Position: 0,
          Default: 0,
        },
        {
          Name: "REF7",
          Position: 7,
          Default: 0,
        },
      ],
      Description: "reference value for interrupt generation. in reference mode the configuration output data is calculated as difference between the input acceleration and the content of this register",
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
  ],
  Register_Dependencies: null,
};

export { REG_0x26 };
