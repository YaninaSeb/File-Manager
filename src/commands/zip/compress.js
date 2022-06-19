import { createReadStream, createWriteStream } from 'fs';
import { stat } from 'fs/promises';
import path from 'path';
import { createBrotliCompress } from 'zlib';
import { pathToCurrentDir } from '../../utils/getPathToDir.js';

export const compress = async (data) => {
    const pathSourceAndDest =  data.trim().replace('compress ', '');
    const [ source, destination ] = pathSourceAndDest.split(' ');

    try {
        let pathToSource = path.isAbsolute(source) ? source : path.join(pathToCurrentDir, `${source}`);
        let pathToDestination = path.isAbsolute(destination) ? destination : path.join(pathToCurrentDir, `${destination}`);

        const statsSource = await stat(pathToSource);
        if (!statsSource.isFile()) throw err;

        const readStream = createReadStream(pathToSource);
        const writeStream = createWriteStream(pathToDestination);

        const brotli = createBrotliCompress();

        readStream.pipe(brotli).pipe(writeStream);

        console.log(`\nYou are currently in ${pathToCurrentDir}\n`);

    } catch (err) {
        console.log('\nOperation failed\n');
    }
};
