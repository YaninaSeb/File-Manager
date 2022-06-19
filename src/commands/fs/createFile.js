import * as path from 'path';
import { writeFile } from "fs/promises";
import { pathToCurrentDir } from '../../utils/getPathToDir.js';

export const create = async (data) => {
    const newPath = data.trim().replace('add ', '');
    let pathToFile = path.isAbsolute(newPath) ? newPath : path.join(pathToCurrentDir, `${newPath}`)

    try {
        if (!pathToFile) throw err;

        await writeFile(pathToFile, '', { flag: 'wx'});

        console.log(`\nYou are currently in ${pathToCurrentDir}\n`);

    } catch (err) {
        console.log('\nOperation failed\n');
    }
}
