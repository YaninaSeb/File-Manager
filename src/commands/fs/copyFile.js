import * as path from 'path';
import { pathToCurrentDir } from '../../utils/getPathToDir.js';
import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises';

export const copy = async (data) => {
    const pathSourceAndDest =  data.trim().replace('cp ', '');
    const [ source, destination ] = pathSourceAndDest.split(' ');

    try {
        let pathToSource = path.isAbsolute(source) ? source : path.join(pathToCurrentDir, `${source}`);
        let fileName = path.basename(pathToSource);
        let pathToDestination = path.isAbsolute(destination) ? path.join(`${destination}`, `${fileName}`) : path.join(pathToCurrentDir, `${destination}`, `${fileName}`);

        await access(pathToSource);

        let readStream = createReadStream(pathToSource);
        let writeStream = createWriteStream(pathToDestination);

        readStream.pipe(writeStream);
        
        console.log(`\nYou are currently in ${pathToCurrentDir}\n`);

    } catch (err) {
        console.log('\nOperation failed\n');
    }
}
