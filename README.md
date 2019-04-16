# weatherCLI

Building a command line application using Node.js - 

## Getting Started

Clone the project repository by running the command below if you use SSH

```bash
$ git clone git@github.com:ammezie/weatherCLI.git
```

If you use https, use this instead

```bash
$ git clone https://github.com/ammezie/weatherCLI.git
```

After cloning, run:

```bash
$ npm install
```

Create an account on [APIXU](https://www.apixu.com) to obtain your API key, and add it inside `src/commands.js`:

```js
// src/commands.js

const APIXU_KEY = "<YOUR APIXU KEY>";
```

Finally, run the command below to see the application usage menu:

```bash
$ node src/index.js --help
```

## Built With

* [Commander](https://github.com/tj/commander.js) - The complete solution for Node.js command-line interfaces
