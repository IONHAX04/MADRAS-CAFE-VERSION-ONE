const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src');
const newColor = '#fee9ba';
const oldColors = ['#f6e0b0', '#ffd430', '#fdf003', '#fef4cd', '#fff105', '#fef006', '#FCEF91', '#ffdf8a', '#fdc74c'];

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.js') || file.endsWith('.cjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;
            for (const oldColor of oldColors) {
                const upper = oldColor.toUpperCase();
                const lower = oldColor.toLowerCase();
                
                if (content.includes(upper)) {
                    content = content.split(upper).join(newColor);
                    changed = true;
                }
                if (content.includes(lower)) {
                    content = content.split(lower).join(newColor);
                    changed = true;
                }
            }
            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

processDir(targetDir);
console.log('Color replacement complete.');
