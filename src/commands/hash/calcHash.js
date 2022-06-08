import { readFile } from 'fs/promises';
import path from 'path';
import { pathToCurrentDir } from '../../utils/getPathToDir.js';
const { createHash } = await import('crypto');

export const calculateHash = async (data) => {
    const file =  data.trim().replace('hash ', '');
    let pathToFile = path.join(pathToCurrentDir, `${file}`);

    try {
        const fileContent = await readFile(pathToFile);
        const hash = createHash('sha256').update(fileContent).digest('hex');
        console.log(hash + '\n');
    } catch (err) {
        console.log('Operation failed\n');
    }
};
