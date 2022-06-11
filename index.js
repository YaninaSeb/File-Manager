import readline from 'readline';
import { userName } from './src/utils/getUserName.js';
import { pathToDefaultDir } from './src/utils/getPathToDir.js';
import { pathToCurrentDir } from './src/utils/getPathToDir.js';
import { setPathToCurrentDir } from './src/utils/getPathToDir.js';
import { list } from './src/commands/nwd/listAllFiles.js';
import { getPathToFolder } from './src/commands/nwd/toFolder.js';
import { getPathToUpperDir } from './src/commands/nwd/toUpDir.js';
import { calculateHash } from './src/commands/hash/calcHash.js';
import { compress } from './src/commands/zip/compress.js';
import { decompress } from './src/commands/zip/decompress.js';
import { read } from './src/commands/fs/readFile.js';
import { create } from './src/commands/fs/createFile.js';
import { remove } from './src/commands/fs/deleteFile.js';
import { renameFile } from './src/commands/fs/renameFile.js';
import { copy } from './src/commands/fs/copyFile.js';
import { move } from './src/commands/fs/moveFile.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(`Welcome to the File Manager, ${userName()}!\n`);
console.log(`You are currently in ${pathToDefaultDir()}\n`);
console.log(`Please, enter the command...\n`);

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
            if (pathToFolder) { 
                setPathToCurrentDir(pathToFolder);
                console.log(`\nYou are currently in ${pathToCurrentDir}\n`);
            }
            break;
        case 'ls':
            await list();
            break;
        case 'cat':
            await read(line);
            break;
        case 'add':
            await create(line);
            break;
        case 'rn':
            await renameFile(line);
            break;
        case 'cp':
            await copy(line);
            break;
        case 'mv':
            await move();
            break;
        case 'rm':
            await remove(line);
            break;
        case 'os':
            break;
        case 'hash':
            await calculateHash(line);
            break;
        case 'compress':
            await compress(line);
            break;
        case 'decompress':
            await decompress(line);
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
