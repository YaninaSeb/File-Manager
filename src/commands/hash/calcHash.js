import { createReadStream } from 'fs';
import { stat } from 'fs/promises';
import path from 'path';
import { pathToCurrentDir } from '../../utils/getPathToDir.js';
const { createHash } = await import('crypto');

export const calculateHash = async (data) => {
    const file =  data.trim().replace('hash ', '');
    let pathToFile = path.isAbsolute(file) ? file : path.join(pathToCurrentDir, `${file}`);

    try {
        const stats = await stat(pathToFile);
        if (!stats.isFile()) throw err;

        const readStream = createReadStream(pathToFile);

        let fileContent = '';

        readStream.on('data', (chunk) => {
            fileContent += chunk;
        });
        readStream.on('end', () => {
            const hash = createHash('sha256').update(fileContent).digest('hex');

            console.log('\n' + hash);
            console.log(`\nYou are currently in ${pathToCurrentDir}\n`);
        });

    } catch (err) {
        console.log('\nOperation failed\n');
    }
};
