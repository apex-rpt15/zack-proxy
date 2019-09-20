# Project Name

FEC-Proxy-Server (zack-proxy)

> RPT15 Hack Reactor 2019 - Apex group's FEC project
This component is the reverse proxy that compiles the other 3 ## Related Projects below into one seamless webpage.

  - https://github.com/apex-rpt15/zack-proxy

## Related Projects

  - https://github.com/apex-rpt15/zack-music-player
  - https://github.com/apex-rpt15/alastair-track-player
  - https://github.com/apex-rpt15/ryan-comments

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Installation](#installation)

## Usage

> This component is currently set up to be run with Amazon's EC2. In order to view this proxy on localhost:3000, you must download the 3 ## Related Projects above, and run the server start script for each. Then...

	/public/dist/index.html --> comment out lines 8-31 (EC2 version)
	/public/dist/index.html --> uncomment lines 34-54 (localhost version)
      Terminal: $ npm start

## Requirements

- Node v10.15.3

### Installing Dependencies

From within the root directory:

```
$ npm install
```

