const fs = require('fs');

fs.readdir(process.cwd(), (err, res) => {
    if (res.includes('index.js')) {
        return;
    }

})