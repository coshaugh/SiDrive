/******************************************************************************
* Project Name		: Door Sensor
* File Name			: lis3dh_driver.c
* Version 			: 1.0
* Device Used		: BLE Sensor Board (R&D version)
* Software Used		: R&D Version
* Author            : Shane Petcavich 
*******************************************************************************/
#include "lis3dh_driver.h"
#include "I2C.h"

/*******************************************************************************
* Function Name		: LIS3DH_ReadReg
* Description		: Generic Reading function. It must be fullfilled with either
*			: I2C or SPI reading functions					
* Input			: Register Address
* Output		: Data REad
* Return		: None
*******************************************************************************/
uint8_t LIS3DH_ReadReg(uint8_t Reg, uint8_t* Data) 
{
    uint32 ERROR;
    //Write device address
    I2C_I2CMasterWriteBuf(LIS3DH_I2C_ADDR, &Reg, 1, I2C_I2C_MODE_NO_STOP);
    
    //Waits until master complete read transfer
    while (0u == (I2C_I2CMasterStatus() & I2C_I2C_MSTAT_WR_CMPLT));
    
    I2C_I2CMasterReadBuf(LIS3DH_I2C_ADDR, Data, 1, I2C_I2C_MODE_REPEAT_START);

    //Waits until master complete read transfer
    while (0u == (I2C_I2CMasterStatus() & I2C_I2C_MSTAT_RD_CMPLT));

    I2C_I2CMasterClearStatus();
    
    return ERROR; 
}


/*******************************************************************************
* Function Name		: LIS3DH_WriteReg
* Description		: Generic Writing function. It must be fullfilled with either
*			: I2C or SPI writing function
* Input			: Register Address, Data to be written
* Output		: None
* Return		: None
*******************************************************************************/
uint8_t LIS3DH_WriteReg(uint8_t Reg, uint8_t Data) 
{
  
    uint8 DataLength = 1; 
 
    I2C_I2CMasterSendStart(LIS3DH_I2C_ADDR, I2C_I2C_WRITE_XFER_MODE, 0);//Send start and device address
    I2C_I2CMasterWriteByte(Reg, 0);//Send Register to write to
    
    //Send all the data
    for(int i=0; i<DataLength; i++){
        I2C_I2CMasterWriteByte(Data, 0);
    }

    I2C_I2CMasterSendStop(0);
    I2C_I2CMasterClearStatus();
   
   return 1;
}

/*******************************************************************************
* Function Name		: LIS3DH_Setup
* Description		: complete register map with descriptions and commented out
*                     calls to write to each register
* Input			: None
* Output		: None
* Return		: None
*******************************************************************************/
uint8_t LIS3DH_Setup()
{
    uint8 regVal; 
    /*******************************************************************************
    * Reg: STATUS_REG_AUX (07h)
    * Description:
    * Bit   [ 7   ][ 6 ][ 5 ][ 4 ][  3  ][ 2 ][ 1 ][ 0 ]
    *       [321OR][3OR][2OR][1OR][321DA][3DA][2DA][1DA]
    * 321OR 1, 2 and 3-axis data overrun. Default value: 0
    * (0: no overrun has occurred; 1: a new set of data has overwritten the previous set)
    * 3OR 3-axis data overrun. Default value: 0
    * (0: no overrun has occurred; 1: new data for the 3-axis has overwritten the previous data)
    * 2OR 2-axis data overrun. Default value: 0
    * (0: no overrun has occurred; 1: new data for the 2-axis has overwritten the previous data)
    * 1OR 1-axis data overrun. Default value: 0
    * (0: no overrun has occurred;1: new data for the 1-axis has overwritten the previous data)
    * 321DA 1, 2 and 3-axis new data available. Default value: 0
    * (0: a new set of data is not yet available; 1: a new set of data is available)
    * 3DA 3-axis new data available. Default value: 0
    * (0: new data for the 3-axis is not yet available; 1: new data for the 3-axis is available)
    * 2DA 2 -axis new data available. Default value: 0
    * (0: new data for the 2-axis is not yet available; 1: new data for the 2-axis is available)
    * 1DA 1-axis new data available. Default value: 0
    * (0: new data for the 1-axis is not yet available; 1: new data for the 1-axis is available)
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_REG_STATUS_AUX, 0x00)
    
    /*******************************************************************************
    * Reg: WHO_AM_I (0Fh)
    * Description:
    * Bit   [ 7 ][ 6 ][ 5 ][ 4 ][ 3 ][ 2 ][ 1 ][ 0 ]
    * Value [ 0 ][ 0 ][ 1 ][ 1 ][ 0 ][ 0 ][ 1 ][ 1 ]
    * Device Identification register
    *******************************************************************************/
   //LIS3DH_ReadReg(LIS3DH_WHO_AM_I_RESPONSE, &regVal); 
    
    /*******************************************************************************
    * Reg: CTRL_REG0 (1Eh)
    * Description:
    * Bit   [      7      ][ 6 ][ 5 ][ 4 ][ 3 ][ 2 ][ 1 ][ 0 ]
    * Value [ SDO_PU_DISC ][ 0 ][ 0 ][ 1 ][ 0 ][ 0 ][ 0 ][ 0 ]
    * SDO_PU_DISC: Disconnect SDO/SA0 pull-up. Default value: 00010000 
    *       0: pull-up connected to SDO/SA0 pin;
    *       1: pull-up disconnected to SDO/SA0 pin)
    *******************************************************************************/
    //LIS3DH_ReadReg(LIS3DH_REG_CTRL_REG0,&regVal); 
    //uint8 write = regVal | 0x01; 
    //LIS3DH_WriteReg(LIS3DH_REG_CTRL_REG0, write); 
    
    /*******************************************************************************
    * Reg: TEMP_CFG_REG (1Fh)
    * Description:
    * Bit   [    7   ][    6    ][ 5 ][ 4 ][ 3 ][ 2 ][ 1 ][ 0 ]
    * Value [ ADC_EN ][ TEMP_EN ][ 0 ][ 0 ][ 0 ][ 0 ][ 0 ][ 0 ]
    * TEMP_EN Temperature sensor (T) enable. Default value: 0 (0: T disabled; 1: T enabled)
    * ADC_EN ADC enable. Default value: 0 (0: ADC disabled; 1: ADC enabled)
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_TEMP_CFG_REG, 0x10);
    
    /*******************************************************************************
    * Reg: CTRL_REG1 (20h)
    * Description:
    * Bit   [ 7  ][  6 ][  5 ][  4 ][  3 ][ 2 ][ 1 ][ 0 ]
    * Value [ODR3][ODR2][ODR1][ODR0][LPen][Zen][Yen][Xen]
    * ODR[3:0] Data rate selection. Default value: 0000 (0000: power-down mode; others: Refer to Table 31: Data rate configuration)
    *           ODR3 ODR2 ODR1 ODR0 Power mode selection
                0 0 0 0 Power-down mode
                0 0 0 1 HR / Normal / Low-power mode (1 Hz)
                0 0 1 0 HR / Normal / Low-power mode (10 Hz)
                0 0 1 1 HR / Normal / Low-power mode (25 Hz)
                0 1 0 0 HR / Normal / Low-power mode (50 Hz)
                0 1 0 1 HR / Normal / Low-power mode (100 Hz)
                0 1 1 0 HR / Normal / Low-power mode (200 Hz)
                0 1 1 1 HR / Normal / Low-power mode (400 Hz)
                1 0 0 0 Low power mode (1.60 kHz)
                1 0 0 1 HR / normal (1.344 kHz);Low-power mode (5.376 kHz)
    * LPen Low-power mode enable. Default value: 0 (0: high-resolution mode / normal mode, 1: low-power mode)(Refer to section Section 3.2.1)
    * Zen Z-axis enable. Default value: 1 (0: Z-axis disabled; 1: Z-axis enabled)
    * Yen Y-axis enable. Default value: 1 (0: Y-axis disabled; 1: Y-axis enabled)
    * Xen X-axis enable. Default value: 1 (0: X-axis disabled; 1: X-axis enabled)
    *******************************************************************************/
    LIS3DH_WriteReg(LIS3DH_REG_CTRL_REG1, 0x27); //xyz enable odr = 10hz
    
    /*******************************************************************************
    * Reg: CTRL_REG2 (21h) 
    * Description:
    * Bit   [  7 ][  6 ][  5  ][  4  ][ 3 ][   2   ][   1  ][   0  ]
    * Value [HPM1][HPM0][HPCF2][HPCF1][FDS][HPCLICK][HP_IA2][HP_IA1]
    * HPM[1:0] High-pass filter mode selection. Default value: 00 
        0 0 Normal mode (reset by reading REFERENCE (26h))
        0 1 Reference signal for filtering
        1 0 Normal mode
        1 1 Autoreset on interrupt event
    * HPCF[2:1] High-pass filter cutoff frequency selection
    * FDS Filtered data selection. Default value: 0 (0: internal filter bypassed; 1: data from internal filter sent to output register and FIFO)
    * HPCLICK High-pass filter enabled for CLICK function.(0: filter bypassed; 1: filter enabled)
    * HP_IA2 High-pass filter enabled for AOI function on interrupt 2,(0: filter bypassed; 1: filter enabled)
    * HP_IA1 High-pass filter enabled for AOI function on interrupt 1,(0: filter bypassed; 1: filter enabled)
    *******************************************************************************/
    LIS3DH_WriteReg(LIS3DH_REG_CTRL_REG2, 0x0A);
    
    /*******************************************************************************
    * Reg: CTRL_REG3 (22h)
    * Description:
    * Bit   [    7   ][   6  ][   5  ][    4   ][    3   ][   2  ][     1    ][ 0]
    * Value [I1_CLICK][I1_IA1][I1_IA2][I1_ZYXDA][I1_321DA][I1_WTM][I1_OVERRUN][--]
    * I1_CLICK Click interrupt on INT1. Default value: 0 (0: disable; 1: enable)
    * I1_IA1 IA1 interrupt on INT1. Default value: 0 (0: disable; 1: enable)
    * I1_IA2 IA2 interrupt on INT1. Default value: 0 (0: disable; 1: enable)
    * I1_ZYXDA ZYXDA interrupt on INT1. Default value: 0 (0: disable; 1: enable)
    * I1_321DA 321DA interrupt on INT1. Default value: 0 (0: disable; 1: enable)
    * I1_WTM FIFO watermark interrupt on INT1. Default value: 0 (0: disable; 1: enable)
    * I1_OVERRUN FIFO overrun interrupt on INT1. Default value: 0 (0: disable; 1: enable)
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_REG_CTRL_REG3, 0x10);
    
    /*******************************************************************************
    * Reg: CTRL_REG4 (23h)
    * Description:
    * Bit   [    7   ][   6  ][   5  ][    4   ][    3   ][   2  ][     1    ][ 0]
    * Value [BDU][BLE][FS1][FS0][HR][ST1] ST0 SIM
    * BDU Block data update. Default value: 0(0: continuous update;1: output registers not updated until MSB and LSB reading)
    * BLE Big/little endian data selection. Default value 0.(0: Data LSB @ lower address; 1: Data MSB @ lower address)
    * FS[1:0] Full-scale selection. default value: 00(00: ±2 g; 01: ±4 g; 10: ±8 g; 11: ±16 g)
    * HR High-resolution output mode: Default value: 0(0: high-resolution disabled; 1: high-resolution enabled)
    * ST[1:0] Self-test enable. Default value: 00(00: self-test disabled; other: See Table 39)
    * SIM SPI serial interface mode selection. Default value: 0(0: 4-wire interface; 1: 3-wire interface)
    *******************************************************************************/
    LIS3DH_WriteReg(LIS3DH_REG_CTRL_REG4, 0x00);
    
    /*******************************************************************************
    * Reg: CTRL_REG5 (24h)
    * Description:
    * Bit   [  7 ][   6   ][ 5][ 4][    3   ][    2   ][    1   ][    0   ]
    * Value [BOOT][FIFO_EN][--][--][LIR_INT1][D4D_INT1][LIR_INT2][D4D_INT2]
    * BOOT Reboot memory content. Default value: 0(0: normal mode; 1: reboot memory content)
    * FIFO_EN FIFO enable. Default value: 0(0: FIFO disable; 1: FIFO enable)
    * LIR_INT1 Latch interrupt request on INT1_SRC register, with INT1_SRC (31h) registercleared by reading INT1_SRC (31h) itself. Default value: 0.(0: interrupt request not latched; 1: interrupt request latched)
    * D4D_INT1 4D enable: 4D detection is enabled on INT1 when 6D bit on INT1_CFG is set to 1.
    * LIR_INT2 Latch interrupt request on INT2_SRC (35h) register, with INT2_SRC (35h) register cleared by reading INT2_SRC (35h) itself. Default value: 0 (0: interrupt request not latched; 1: interrupt request latched)
    * D4D_INT2 4D enable: 4D detection is enabled on INT2 pin when 6D bit on INT2_CFG (34h) is set to 1.
    *******************************************************************************/
    LIS3DH_WriteReg(LIS3DH_REG_CTRL_REG5, 0x02);
    
    /*******************************************************************************
    * Reg: CTRL_REG6 (25h)
    * Description:
    * Bit   [    7   ][   6  ][   5  ][   4   ][   3  ][2][      1     ][0]
    * Value [I2_CLICK][I2_IA1][I2_IA2][I2_BOOT][I2_ACT][-][INT_POLARITY][-]
    * I2_CLICK Click interrupt on INT2 pin. Default value: 0(0: disabled; 1: enabled)
    * I2_IA1 Enable interrupt 1 function on INT2 pin. Default value: 0(0: function disabled; 1: function enabled)
    * I2_IA2 Enable interrupt 2 function on INT2 pin. Default value: 0(0: function disabled; 1: function enabled)
    * I2_BOOT Enable boot on INT2 pin. Default value: 0(0: disabled; 1:enabled)
    * I2_ACT Enable activity interrupt on INT2 pin. Default value: 0(0: disabled; 1:enabled)
    * INT_POLARITY INT1 and INT2 pin polarity. Default value: 0(0: active-high; 1: active-low)
    *******************************************************************************/
    LIS3DH_WriteReg(LIS3DH_REG_CTRL_REG6, 0x20);
    
    /*******************************************************************************
    * Reg: REFERENCE (26h)
    * Description:
    * Ref[7:0] Reference value for Interrupt generation. Default value: 0000 0000 
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_REG_REFERENCE, 0x10);
    
    
    /*******************************************************************************
    * Reg: STATUS_REG (27h)
    * Bit   [  7  ][ 6 ][ 5 ][ 4 ][  3  ][ 2 ][ 1 ][0]
    * Value [ZYXOR][ZOR][YOR][XOR][ZYXDA][ZDA][YDA][XDA]
    * Description:
    * ZYXOR X, Y and Z-axis data overrun. Default value: 0(0: no overrun has occurred; 1: a new set of data has overwritten the previous set)
    * ZOR Z-axis data overrun. Default value: 0(0: no overrun has occurred;1: a new data for the Z-axis has overwritten the previous data)
    * YOR Y-axis data overrun. Default value: 0(0: no overrun has occurred;1: new data for the Y-axis has overwritten the previous data)
    * XOR X-axis data overrun. Default value: 0(0: no overrun has occurred;1: new data for the X-axis has overwritten the previous data)
    * ZYXDA X, Y and Z-axis new data available. Default value: 0(0: a new set of data is not yet available; 1: a new set of data is available)
    * ZDA Z-axis new data available. Default value: 0(0: new data for the Z-axis is not yet available;1: new data for the Z-axis is available)
    * YDA Y-axis new data available. Default value: 0(0: new data for the Y-axis is not yet available; 1: new data for the Y-axis is available)
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_REG_STATUS_REG, 0x10);
    
    /*******************************************************************************
    * Reg: FIFO_CTRL_REG (2Eh)
    * Bit   [ 7 ][ 6 ][5 ][  4 ][ 3  ][  2 ][  1 ][  0 ]
    * Value [FM1][FM0][TR][FTH4][FTH3][FTH2][FTH1][FTH0]
    * Description:
    * FM[1:0] FIFO mode selection. Default value: 00 
        FM1 FM0
        0   0     Bypass mode
        0   1     FIFO mode
        1   0     Stream mode
        1   1     Stream-to-FIFO
    * TR Trigger selection. Default value: 0 (0: trigger event allows triggering signal on INT11: trigger event allows triggering signal on INT2)
    * FTH[4:0] Default value: 00000
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_REG_FIFO_CTRL_REG, 0x10);
    
    /*******************************************************************************
    * Reg: FIFO_SRC_REG (2Fh)
    * Bit   [ 7 ][    6    ][  5  ][  4 ][ 3  ][  2 ][  1 ][  0 ]
    * Value [WTM][OVRN_FIFO][EMPTY][FSS4][FSS3][FSS2][FSS1][FSS0]
    * Description:
    * WTM WTM bit is set high when FIFO content exceeds watermark level
    * OVRN_FIFO OVRN bit is set high when FIFO buffer is full; this means that the FIFO buffer
    *    contains 32 unread samples. At the following ODR a new sample set replaces the
    *    oldest FIFO value. The OVRN bit is set to 0 when the first sample set has been
    *    read
    * EMPTY EMPTY flag is set high when all FIFO samples have been read and FIFO is empty
    * FSS [4:0] FSS [4:0] field always contains the current number of unread samples stored in the
    *    FIFO buffer. When FIFO is enabled, this value increases at ODR frequency until
    *    the buffer is full, whereas, it decreases every time one sample set is retrieved from
    *    FIFO
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_REG_FIFO_SRC_REG, 0x10);
    
    /*******************************************************************************
    * Reg: INT1_CFG (30h)
    * Bit   [ 7 ][ 6][ 5  ][  4 ][ 3  ][  2 ][  1 ][  0 ]
    * Value [AOI][6D][ZHIE][ZLIE][YHIE][YLIE][XHIE][XLIE]
    * Description:
    * AOI And/Or combination of Interrupt events. Default value: 0 Refer to Table 55: Interrupt mode
    * 6D 6 direction detection function enabled. Default value: 0Refer to Table 55: Interrupt mode
    *     AOI 6D Interrupt mode
    *     0   0   OR combination of interrupt events
    *     0   1   6-direction movement recognition
    *     1   0   AND combination of interrupt events
    *     1   1   6-direction position recognition
    * ZHIE Enable interrupt generation on Z high event or on Direction recognition. Default value: 0(0: disable interrupt request;1: enable interrupt request)
    * ZLIE Enable interrupt generation on Z low event or on Direction recognition. Default value: 0 (0: disable interrupt request;1: enable interrupt request)
    * YHIE Enable interrupt generation on Y high event or on Direction recognition. Default value: 0(0: disable interrupt request; 1: enable interrupt request.)
    * YLIE Enable interrupt generation on Y low event or on Direction recognition. Default value: 0 (0: disable interrupt request; 1: enable interrupt request.)
    * XHIE Enable interrupt generation on X high event or on Direction recognition. Default value: 0(0: disable interrupt request; 1: enable interrupt request.)
    * XLIE Enable interrupt generation on X low event or on Direction recognition. Default value: 0 (0: disable interrupt request; 1: enable interrupt request.)
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_REG_INT1_CFG, 0x10);
    
    /*******************************************************************************
    * Reg: INT1_SRC (31h)
    * Bit   [7][ 6][ 5][ 4][ 3][ 2][ 1][ 0]
    * Value [0][IA][ZH][ZL][YH][YL][XH][XL]
    * Description:
    * IA nterrupt active. Default value: 0(0: no interrupt has been generated; 1: one or more interrupts have been generated)
    * ZH Z high. Default value: 0(0: no interrupt, 1: Z high event has occurred)
    * ZL Z low. Default value: 0(0: no interrupt; 1: Z low event has occurred)
    * YH Y high. Default value: 0(0: no interrupt, 1: Y high event has occurred)
    * YL Y low. Default value: 0(0: no interrupt, 1: Y low event has occurred)
    * XH X high. Default value: 0(0: no interrupt, 1: X high event has occurred)
    * XL X low. Default value: 0 0: no interrupt, 1: X low event has occurred)
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_REG_INT1_SRC, 0x10);
    
    /*******************************************************************************
    * Reg: INT1_THS (32h)
    * Bit   [7][  6 ][  5 ][  4 ][  3 ][  2 ][  1 ][ 0  ]
    * Value [0][THS6][THS5][THS4][THS3][THS2][THS1][THS0]
    * Description:
    *    THS[6:0]
    *    Interrupt 1 threshold. Default value: 000 0000
    *    1 LSb = 16 mg @ FS = ±2 g
    *    1 LSb = 32 mg @ FS = ±4 g
    *    1 LSb = 62 mg @ FS = ±8 g
     *   1 LSb = 186 mg @ FS = ±16 g
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_REG_INT1_THS, 0x10);
    
     /*******************************************************************************
    * Reg: INT1_DURATION (33h)
    * Bit   [7][6 ][ 5][ 4][ 3][ 2][1 ][0 ]
    * Value [0][D6][D5][D4][D3][D2][D1][D0]
    * Description:
    *    D[6:0] Duration value. Default value: 000 0000 1 LSb = 1/ODR
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_REG_INT1_DURATION, 0x10);

    
     /*******************************************************************************
    * Reg: INT2_CFG (30h)
    * Bit   [ 7 ][ 6][ 5  ][  4 ][ 3  ][  2 ][  1 ][  0 ]
    * Value [AOI][6D][ZHIE][ZLIE][YHIE][YLIE][XHIE][XLIE]
    * Description:
    * AOI And/Or combination of Interrupt events. Default value: 0 Refer to Table 55: Interrupt mode
    * 6D 6 direction detection function enabled. Default value: 0Refer to Table 55: Interrupt mode
    *     AOI 6D Interrupt mode
    *     0   0   OR combination of interrupt events
    *     0   1   6-direction movement recognition
    *     1   0   AND combination of interrupt events
    *     1   1   6-direction position recognition
    * ZHIE Enable interrupt generation on Z high event or on Direction recognition. Default value: 0(0: disable interrupt request;1: enable interrupt request)
    * ZLIE Enable interrupt generation on Z low event or on Direction recognition. Default value: 0 (0: disable interrupt request;1: enable interrupt request)
    * YHIE Enable interrupt generation on Y high event or on Direction recognition. Default value: 0(0: disable interrupt request; 1: enable interrupt request.)
    * YLIE Enable interrupt generation on Y low event or on Direction recognition. Default value: 0 (0: disable interrupt request; 1: enable interrupt request.)
    * XHIE Enable interrupt generation on X high event or on Direction recognition. Default value: 0(0: disable interrupt request; 1: enable interrupt request.)
    * XLIE Enable interrupt generation on X low event or on Direction recognition. Default value: 0 (0: disable interrupt request; 1: enable interrupt request.)
    *******************************************************************************/
    LIS3DH_WriteReg(LIS3DH_REG_INT2_CFG, 0x20);
    
    /*******************************************************************************
    * Reg: INT2_SRC (31h)
    * Bit   [7][ 6][ 5][ 4][ 3][ 2][ 1][ 0]
    * Value [0][IA][ZH][ZL][YH][YL][XH][XL]
    * Description:
    * IA nterrupt active. Default value: 0(0: no interrupt has been generated; 1: one or more interrupts have been generated)
    * ZH Z high. Default value: 0(0: no interrupt, 1: Z high event has occurred)
    * ZL Z low. Default value: 0(0: no interrupt; 1: Z low event has occurred)
    * YH Y high. Default value: 0(0: no interrupt, 1: Y high event has occurred)
    * YL Y low. Default value: 0(0: no interrupt, 1: Y low event has occurred)
    * XH X high. Default value: 0(0: no interrupt, 1: X high event has occurred)
    * XL X low. Default value: 0 0: no interrupt, 1: X low event has occurred)
    *******************************************************************************/
    LIS3DH_ReadReg(LIS3DH_REG_INT2_SRC, &regVal);
    
    /*******************************************************************************
    * Reg: INT2_THS (32h)
    * Bit   [7][  6 ][  5 ][  4 ][  3 ][  2 ][  1 ][ 0  ]
    * Value [0][THS6][THS5][THS4][THS3][THS2][THS1][THS0]
    * Description:
    *    THS[6:0]
    *    Interrupt 1 threshold. Default value: 000 0000
    *    1 LSb = 16 mg @ FS = ±2 g
    *    1 LSb = 32 mg @ FS = ±4 g
    *    1 LSb = 62 mg @ FS = ±8 g
     *   1 LSb = 186 mg @ FS = ±16 g
    *******************************************************************************/
    LIS3DH_WriteReg(LIS3DH_REG_INT2_THS, 0x18);
    
    /*******************************************************************************
    * Reg: INT2_DURATION (33h)
    * Bit   [7][6 ][ 5][ 4][ 3][ 2][1 ][0 ]
    * Value [0][D6][D5][D4][D3][D2][D1][D0]
    * Description:
    *    D[6:0] Duration value. Default value: 000 0000 1 LSb = 1/ODR
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_REG_INT2_DURATION, 0x10);
    
    
    /*******************************************************************************
    * Reg: CLICK_CFG (38h)
    * Bit   [7 ][6 ][ 5][ 4][ 3][ 2][1 ][0 ]
    * Value [--][--][zd][zs][yd][ys][xd][xs]
    * Description:
    * ZD Enable interrupt double click on Z-axis. Default value: (0: disable interrupt request;1: enable interrupt request on measured accel. value higher than preset threshold)
    * ZS Enable interrupt single click on Z-axis. Default value: (0: disable interrupt request; 1: enable interrupt request on measured accel. value higher than preset threshold)
    * YD Enable interrupt double click on Y-axis. Default value: 0(0: disable interrupt request;1: enable interrupt request on measured accel. value higher than preset threshold)
    * YS Enable interrupt single click on Y-axis. Default value: 0(0: disable interrupt request;1: enable interrupt request on measured accel. value higher than preset threshold)
    * XD Enable interrupt double click on X-axis. Default value: 0(0: disable interrupt request;1: enable interrupt request on measured accel. value higher than preset threshold)
    * XS Enable interrupt single click on X-axis. Default value: 0(0: disable interrupt request;1: enable interrupt request on measured accel. value higher than preset threshold)
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_REG_CLICK_CFG, 0x10);
    
    /*******************************************************************************
    * Reg: CLICK_THS (3Ah)
    * Bit   [    7    ][ 6  ][  5 ][  4 ][  3 ][  2 ][ 1  ][ 0  ]
    * Value [LIR_Click][Ths6][Ths5][Ths4][Ths3][Ths2][Ths1][Ths0]
    * Description:
    * LIR_Click If the LIR_Click bit is not set, the interrupt is kept high for the duration of the latency window.
    *        If the LIR_Click bit is set, the interrupt is kept high until the CLICK_SRC (39h) register is read.
    * Ths [6:0] Click threshold. Default value: 000 0000
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_REG_CLICK_THS, 0x10);
    
    /*******************************************************************************
    * Reg: TIME_LIMIT (3Bh)
    * Bit   [7][ 6  ][  5 ][  4 ][  3 ][  2 ][ 1  ][ 0  ]
    * Value [-][TLI6][TLI5][TLI4][TLI3][TLI2][TLI1][TLI0]
    * Description:
    * TLI[6:0] Click time limit. Default value: 000 0000
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_REG_TIME_LIMIT, 0x10);
    
    /*******************************************************************************
    * Reg: TIME WINDOW (3Dh)
    * Bit   [ 7 ][ 6 ][ 5 ][ 4 ][ 3 ][ 2 ][ 1 ][ 0 ]
    * Value [TW7][TW6][TW5][TW4][TW3][TW2][TW1][TW0]
    * Description:
    * TW[7:0] Click time window
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_REG_TIME_WINDOW, 0x10);
    
    /*******************************************************************************
    * Reg: ACT_THS (3Eh)
    * Bit   [ 7][  6  ][  5  ][  4  ][  3  ][  2  ][  1  ][  0  ]
    * Value [--][Acth6][Acth5][Acth4][Acth3][Acth2][Acth1][Acth0]
    * Description:
    * Acth[6:0] Sleep-to-wake, return-to-sleep activation threshold in low-power mode
    *    1 LSb = 16 mg @ FS = ±2 g
    *    1 LSb = 32 mg @ FS = ±4 g
    *    1 LSb = 62 mg @ FS = ±8 g
    *    1 LSb = 186 mg @ FS = ±16 g
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_REG_ACT_THS, 0x10);
    
    /*******************************************************************************
    * Reg: ACT_THS (3Eh)
    * Bit   [  7  ][  6  ][  5  ][  4  ][  3  ][  2  ][  1  ][  0  ]
    * Value [ActD7][ActD6][ActD5][ActD4][ActD3][ActD2][ActD1][ActD0]
    * Description:
    * ActD[7:0] Sleep-to-wake, return-to-sleep duration1 LSb = (8*1[LSb]+1)/ODR
    *******************************************************************************/
    //LIS3DH_WriteReg(LIS3DH_REG_ACT_DUR, 0x10);
    return 1; 
}


/*******************************************************************************
* Function Name		: LIS3DH_Read_XYZ
* Description		: reads the data in the lis3dh x,y,z registers
* Input			: pointer to XYZ_struct
* Output		: filled XYZ_struct
* Return		: Error/Success
*******************************************************************************/
uint8_t LIS3DH_Read_XYZ(XYZ_struct* buf)
{
    int16_t value;
    uint8_t *valueL = (uint8_t *)(&value);
    uint8_t *valueH = ((uint8_t *)(&value)+1);

    
    if( !LIS3DH_ReadReg(LIS3DH_REG_OUT_X_L, valueL) )
        return LIS3DH_READ_ERROR;

    if( !LIS3DH_ReadReg(LIS3DH_REG_OUT_X_H, valueH) )
        return LIS3DH_READ_ERROR;

    buf->AXIS_X = value;

    if( !LIS3DH_ReadReg(LIS3DH_REG_OUT_Y_L, valueL) )
        return LIS3DH_READ_ERROR;

    if( !LIS3DH_ReadReg(LIS3DH_REG_OUT_Y_H, valueH) )
        return LIS3DH_READ_ERROR;

    buf->AXIS_Y = value;

    if( !LIS3DH_ReadReg(LIS3DH_REG_OUT_Z_L, valueL) )
        return LIS3DH_READ_ERROR;

    if( !LIS3DH_ReadReg(LIS3DH_REG_OUT_Z_H, valueH) )
        return LIS3DH_READ_ERROR;

    buf->AXIS_Z = value;

    return LIS3DH_READ_SUCCESS; 
}


/* [] END OF FILE */
