import * as fs from 'fs/promises';
import * as path from 'path';
import { pathToCurrentDir } from "../../utils/getPathToDir.js";

export const getPathToFolder = async (data) => {
    const newPath = data.trim().replace('cd ', '');
    let pathToFolder = path.isAbsolute(newPath) ? newPath : path.join(pathToCurrentDir, `${newPath}`)

    try {
        const stats = await fs.stat(pathToFolder);
        if (stats.isFile()) throw err;

        await fs.access(pathToFolder);
        return pathToFolder;
    } catch (err) {
        console.log('\nOperation failed\n');
    }
};
