import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { createBrotliDecompress } from 'zlib';
import { pathToCurrentDir } from '../../utils/getPathToDir.js';

export const decompress = async (data) => {
    const pathSourceAndDest =  data.trim().replace('decompress ', '');
    const [ source, destination ] = pathSourceAndDest.split(' ');

    try {
        let pathToSource = path.isAbsolute(source) ? source : path.join(pathToCurrentDir, `${source}`);
        let pathToDestination = path.isAbsolute(destination) ? destination : path.join(pathToCurrentDir, `${destination}`);

        const readStream = createReadStream(pathToSource);
        const writeStream = createWriteStream(pathToDestination);

        const brotli = createBrotliDecompress();

        readStream.pipe(brotli).pipe(writeStream);

        console.log(`\nYou are currently in ${pathToCurrentDir}\n`);

    } catch (err) {
        console.log('\nOperation failed\n');
    }
};
