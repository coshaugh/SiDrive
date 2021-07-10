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
          Description:
            "cutoff frequency dependent on ODR settings [0.02, 0.2, 0.5, 1, 2, 4, 8, 32, 100 Hz cutoff]",
        },
        {
          Values: [0, 1],
          Description:
            "cutoff frequency dependent on ODR settings [0.008, 0.08, 0.2, 0.5, 1, 2, 4, 16, 50 Hz cutoff]",
        },
        {
          Values: [1, 0],
          Description:
            "cutoff frequency dependent on ODR settings [0.004, 0.04, 0.1, 0.2, 0.5, 1, 2, 8, 25 Hz cutoff]",
        },
        {
          Values: [1, 1],
          Description:
            "cutoff frequency dependent on ODR settings [0.002, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 4, 12 Hz cutoff]",
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
  Register_Dependencies: [
    cutoffSamplingRateDependency([0, 0, 0, 1], [0, 0], '0.02', '1'),
    cutoffSamplingRateDependency([0, 0, 1, 0], [0, 0], '0.2', '10'),
    cutoffSamplingRateDependency([0, 0, 1, 1], [0, 0], '0.5', '25'),
    cutoffSamplingRateDependency([0, 1, 0, 0], [0, 0], '1', '50'),
    cutoffSamplingRateDependency([0, 1, 0, 1], [0, 0], '2', '100'),
    cutoffSamplingRateDependency([0, 1, 1, 0], [0, 0], '4', '200'),
    cutoffSamplingRateDependency([0, 1, 1, 1], [0, 0], '8', '400'),
    cutoffSamplingRateDependency([1, 0, 0, 0], [0, 0], '32', '1.6k'),
    cutoffSamplingRateDependency([1, 0, 0, 1], [0, 0], '100', '5k'),


    cutoffSamplingRateDependency([0, 0, 0, 1], [0, 1], '0.008', '1'),
    cutoffSamplingRateDependency([0, 0, 1, 0], [0, 1], '0.08', '10'),
    cutoffSamplingRateDependency([0, 0, 1, 1], [0, 1], '0.2', '25'),
    cutoffSamplingRateDependency([0, 1, 0, 0], [0, 1], '0.5', '50'),
    cutoffSamplingRateDependency([0, 1, 0, 1], [0, 1], '1', '100'),
    cutoffSamplingRateDependency([0, 1, 1, 0], [0, 1], '2', '200'),
    cutoffSamplingRateDependency([0, 1, 1, 1], [0, 1], '3', '400'),
    cutoffSamplingRateDependency([1, 0, 0, 0], [0, 1], '16', '1.6k'),
    cutoffSamplingRateDependency([1, 0, 0, 1], [0, 1], '50', '5k'),

    cutoffSamplingRateDependency([0, 0, 0, 1], [1, 0], '0.004', '1'),
    cutoffSamplingRateDependency([0, 0, 1, 0], [1, 0], '0.04', '10'),
    cutoffSamplingRateDependency([0, 0, 1, 1], [1, 0], '0.1', '25'),
    cutoffSamplingRateDependency([0, 1, 0, 0], [1, 0], '0.2', '50'),
    cutoffSamplingRateDependency([0, 1, 0, 1], [1, 0], '0.5', '100'),
    cutoffSamplingRateDependency([0, 1, 1, 0], [1, 0], '1', '200'),
    cutoffSamplingRateDependency([0, 1, 1, 1], [1, 0], '2', '400'),
    cutoffSamplingRateDependency([1, 0, 0, 0], [1, 0], '8', '1.6k'),
    cutoffSamplingRateDependency([1, 0, 0, 1], [1, 0], '25', '5k'),

    cutoffSamplingRateDependency([0, 0, 0, 1], [1, 1], '0.002', '1'),
    cutoffSamplingRateDependency([0, 0, 1, 0], [1, 1], '0.02', '10'),
    cutoffSamplingRateDependency([0, 0, 1, 1], [1, 1], '0.05', '25'),
    cutoffSamplingRateDependency([0, 1, 0, 0], [1, 1], '0.1', '50'),
    cutoffSamplingRateDependency([0, 1, 0, 1], [1, 1], '0.2', '100'),
    cutoffSamplingRateDependency([0, 1, 1, 0], [1, 1], '0.5', '200'),
    cutoffSamplingRateDependency([0, 1, 1, 1], [1, 1], '1', '400'),
    cutoffSamplingRateDependency([1, 0, 0, 0], [1, 1], '4', '1.6k'),
    cutoffSamplingRateDependency([1, 0, 0, 1], [1, 1], '12', '5k'),
  ],
};

function cutoffSamplingRateDependency(samplingRateState, cutoffState, remark1, remark2)
{
  let obj = 
  {
    Description:
      `cutoff @ ${remark1}  Hz, sampling rate ${remark2}`,
    // bit 3 @ 0x23 impacts state "1" @ bit6 locally
    // 1-to-1 array correspondance bewteen remote.states and local.states
    Remote: {
      Register: 0x20,
      BitPositions: [7, 6, 5, 4],
      States: [
        {
          Values: samplingRateState,
          Description: `sampling frequency ${remark2}`,
        },
      ],
    },
    Local: {
      Register: null, // doesnt matter, THIS register
      BitPositions: [5, 4],
      States: [
        {
          Values: cutoffState,
        },
      ],
    },
  },

  return obj; 
}

export { REG_0x21 };
