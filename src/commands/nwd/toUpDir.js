import * as path from 'path';
import { pathToCurrentDir, pathToDefaultDir } from '../../utils/getPathToDir.js';

export const getPathToUpperDir = async () => {
    if (pathToCurrentDir == pathToDefaultDir) {
        return pathToCurrentDir;
    } else {
        const pathToUpperDir = path.dirname(pathToCurrentDir);
        return pathToUpperDir;
    }
};
