/******************************************************************************
* Project Name      : Door Sensor
* File Name         : lis3dh_driver.c
* Version 			: 1.0
* Device Used		: BLE Sensor Board (R&D version)
* Software Used		: R&D Version
* Author            : Shane Petcavich 
*******************************************************************************/
#include "lis3dh_driver.h"

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
    // insert code here
    return 1;
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
    // insert code here
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
    // insert code here
    return 1;
}
