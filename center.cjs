const fs = require('fs');

const pathStr = "M102 46 C80 43 56 60 56 76 C56 88 68 94 82 94 C95 94 102 88 94 80 C85 72 72 80 62 80 C53 80 50 74 56 67 C64 58 86 52 101 58 C114 62 100 76 86 82 C68 90 44 103 44 118 C44 128 58 131 76 128 C97 124 118 110 128 100";

const coords = pathStr.match(/-?\d+(\.\d+)?/g).map(Number);
let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

for(let i=0; i<coords.length; i+=2) {
    let x = coords[i];
    let y = coords[i+1];
    if(x < minX) minX = x;
    if(x > maxX) maxX = x;
    if(y < minY) minY = y;
    if(y > maxY) maxY = y;
}

const cx = (minX + maxX) / 2;
const cy = (minY + maxY) / 2;

const dx = 80 - cx;
const dy = 80 - cy;

let newPath = pathStr.replace(/-?\d+(\.\d+)?/g, (match, p1, offset, string) => {
    // We need to know if it's x or y. In SVG path, they come in pairs.
    // A simple regex might not maintain parity if not careful, but let's do it via iteration
});

// better:
const parts = pathStr.split(/([A-Z])/).filter(Boolean);
let res = "";
for (let i = 0; i < parts.length; i+=2) {
    let cmd = parts[i];
    let nums = parts[i+1].trim().split(/[\s,]+/).map(Number);
    for(let j=0; j<nums.length; j+=2) {
        nums[j] += dx;
        nums[j+1] += dy;
    }
    res += cmd + nums.join(" ") + " ";
}

console.log(res.trim());
