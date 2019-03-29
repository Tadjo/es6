const fs = require('fs');
const util = require('util');

const [read, write] = [fs.readdir, fs.writeFile].map(util.promisify);

read(process.cwd())
    .then(res => {
        if (res && res.includes('index.js')) {
            throw new Error('File already exist');
        }
        return res.filter(name => name !== 'presentation.js').map(filename => {
            return `import './${filename}';\n`;
        }).join('');
    })
    .then(imports => write('index.js', imports))
    .catch(console.log)
