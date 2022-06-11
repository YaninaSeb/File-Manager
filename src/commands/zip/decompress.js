import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { access } from 'fs/promises';
import { createBrotliDecompress } from 'zlib';
import { pathToCurrentDir } from '../../utils/getPathToDir.js';

export const decompress = async (data) => {
    const pathSourceAndDest =  data.trim().replace('decompress ', '');
    const [ pathToSource, pathToDestination ] = pathSourceAndDest.split(' ');

    try {
        await access(path.join(pathToCurrentDir, `${pathToSource}`));
        if (!pathToDestination) throw err;

        const source = createReadStream(path.join(pathToCurrentDir, `${pathToSource}`));
        const destination = createWriteStream(path.join(pathToCurrentDir, `${pathToDestination}`));

        const brotli = createBrotliDecompress();

        source.pipe(brotli).pipe(destination);

        console.log(`\nYou are currently in ${pathToCurrentDir}\n`);

    } catch (err) {
        console.log('\nOperation failed\n');
    }
};
