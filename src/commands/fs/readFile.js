import { createReadStream } from 'fs';
import { access } from "fs/promises";
import * as path from 'path';
import { pathToCurrentDir } from "../../utils/getPathToDir.js";

export const read = async (data) => {
    const newPath = data.trim().replace('cat ', '');
    let pathToFile = path.isAbsolute(newPath) ? newPath : path.join(pathToCurrentDir, `${newPath}`)

    try {
        await access(pathToFile);

        let readStream = createReadStream(pathToFile);

        readStream.on('data', (chunk) => {
            process.stdout.write(chunk);
        });
        readStream.on('end', () => {
            console.log(`\n\nYou are currently in ${pathToCurrentDir}\n`);
        });

    } catch (err) {
        console.log('\nOperation failed\n');
    }
};
