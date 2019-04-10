const fs = require('fs');
const util = require('util');

const [read, write] = [fs.readdir, fs.writeFile].map(util.promisify);
const exclude = ['presentation.js', 'index.js']

read(process.cwd())
    .then(res => {
        return res.filter(name => !exclude.includes(name)).map(filename => {
            return `// import './${filename}';\n`;
        }).join('');
    })
    .then(imports => write('index.js', imports))
    .catch(console.log)
