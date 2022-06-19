import { unlink } from "fs/promises";
import * as path from 'path';
import { pathToCurrentDir } from "../../utils/getPathToDir.js";

export const remove = async (data) => {
    const file =  data.trim().replace('rm ', '');
    let pathToFile = path.isAbsolute(file) ? file : path.join(pathToCurrentDir, `${file}`);

    try {
        await unlink(pathToFile);

        console.log(`\nYou are currently in ${pathToCurrentDir}\n`);

    } catch (err) {
        console.log('\nOperation failed\n');
    }
};
