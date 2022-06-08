import readline from 'readline';
import { userName } from './src/utils/getUserName.js';
import { homeDir } from './src/utils/getCurrentDir.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


console.log(`Welcome to the File Manager, ${userName()}!`);
console.log(`You are currently in ${homeDir()}` + '\n');


rl.on('line', (line) => {
    switch (line.trim()) {
        case 'up':
            console.log('world!');
            break;
        case 'cd':
            console.log('world!');
            break;
        case 'cat':
            console.log('world!');
            break;
        case 'add':
            console.log('world!');
            break;
        case 'rn':
            console.log('world!');
            break;
        case 'cp':
            console.log('world!');
            break;
        case 'mv':
            console.log('world!');
            break;
        case 'rm':
            console.log('world!');
            break;
        case 'os':
            console.log('world!');
            break;
        case 'hash':
            console.log('world!');
            break;
        case 'compress':
            console.log('world!');
            break;
        case 'decompress':
            console.log('world!');
            break;

        default:
            console.log('Invalid input');
            break;
    }
})


rl.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${userName()}!`);
    rl.close();
    process.exit(0);
});


