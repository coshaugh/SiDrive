# SiDrive
A project led by [@specta](https://github.com/spetca) and implemented by [@coshaugh](https://github.com/coshaugh).

## Summary
A community driven platform aimed to standardize the register maps for ICs (sensors, codecs, any IC that can be configured via a common protocol (i2c/spi) by a host processor).

## Key Features (Immediate Goals)
### Community driven.
* Standardized register maps are created for ICs via YAML/Json configuration files. Development is driven by the founding team and the community to ensure reliable drivers are produced from user generated configuration files.
  
### Platform / hardware independent.
* Sure, drivers exist for arduino and similar platforms for many sensors, but arduino is hobby stuff. People spinning custom boards need platform independent drivers that are not human parsed and configured.

### Automatic read() and write() function filling based on host selection.
* When users generate the drivers all they need to do on their host is enable SPI/i2c and they are already talking to their sensors. - i.e. *I am using an ST processor with I2C fill in the functions with known code that works across all of STs processors. Or I am using a cypress psoc with SPI, fill the read() write() functions automatically.*

### Web searchable database of parts with drivers.
* Much like [snapeda](https://www.snapeda.com/), components are searchable

## Key Features (Further Out)
### Generate custom driver setups and save configurations. 
* Each user (of our web platform) can generate a custom header and c files by using the GUI interface. Users will save configurations to revert back to, keep multiple configurations for testing, etc... This will further drive development accessiblity.

## Instructions
* These will be made available when relevant.
