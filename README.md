# mkdirpSync

Creates nested directories like `mkdir -p`

## Install

```bash
npm install fs-mkdirp-sync
```

## Usage

```js
// directory path
const mkdirpSync = require("fs-mkdirp-sync");
mkdirpSync("src\\components\\Modal\\tests");
```

## API

### mkdirpSync(dir)

| Param | Type   | Default | Description        |
| ----- | ------ | ------- | ------------------ |
| dir   | string |         | direcory to create |
