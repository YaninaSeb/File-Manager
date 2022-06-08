import { access } from 'fs/promises';
import * as fs from 'fs/promises';
import * as path from 'path';
import { pathToCurrentDir } from "../../utils/getPathToDir.js";

export const getPathToFolder = async (data) => {
    const newPath = data.trim().replace('cd ', '');
    let pathToFolder = path.join(pathToCurrentDir, `${newPath}`);

    try {
        await fs.lstat(pathToFolder);
        return pathToFolder;
    } catch (err) {
        console.log('Operation failed\n');
        return pathToCurrentDir;
    }
};
