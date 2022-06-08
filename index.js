import readline from 'readline';
import { userName } from './src/utils/getUserName.js';
import { pathToDefaultDir } from './src/utils/getPathToDir.js';
import { pathToCurrentDir } from './src/utils/getPathToDir.js';
import { setPathToCurrentDir } from './src/utils/getPathToDir.js';
import { list } from './src/commands/nwd/listAllFiles.js';
import { getPathToFolder } from './src/commands/nwd/toFolder.js';
import { getPathToUpperDir } from './src/commands/nwd/toUpDir.js';
import { calculateHash } from './src/commands/hash/calcHash.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(`Welcome to the File Manager, ${userName()}!\n`);
console.log(`You are currently in ${pathToDefaultDir()}\n`);

rl.on('line', async (line) => {
    const command = line.trim().split(' ')[0];
    switch (command) {
        case 'up':
            let pathToUpDir = await getPathToUpperDir();
            setPathToCurrentDir(pathToUpDir);
            console.log(`\nYou are currently in ${pathToCurrentDir}\n`);
            break;
        case 'cd':
            let pathToFolder = await getPathToFolder(line);
            setPathToCurrentDir(pathToFolder);
            console.log(`\nYou are currently in ${pathToCurrentDir}\n`);
            break;
        case 'ls':
            await list();
            console.log(`\nYou are currently in ${pathToCurrentDir}\n`);
            break;
        case 'cat':
            break;
        case 'add':
            break;
        case 'rn':
            break;
        case 'cp':
            break;
        case 'mv':
            break;
        case 'rm':
            break;
        case 'os':
            break;
        case 'hash':
            await calculateHash(line);
            console.log(`\nYou are currently in ${pathToCurrentDir}\n`);
            break;
        case 'compress':
            break;
        case 'decompress':
            break;
        case '.exit':
            console.log(`\nThank you for using File Manager, ${userName()}!\n`);
            rl.close();
            process.exit(0);
            break;
        default:
            console.log('\nInvalid input\n');
            break;
    }
});

rl.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${userName()}!\n`);
    rl.close();
    process.exit(0);
});
