import { rename, access } from "fs/promises";
import * as path from 'path';
import { pathToCurrentDir } from "../../utils/getPathToDir.js";

export const renameFile = async (data) => {
    const pathSourceAndDest =  data.trim().replace('rn ', '');
    const [ source, destination ] = pathSourceAndDest.split(' ');

    try {
        let pathToSource = path.isAbsolute(source) ? source : path.join(pathToCurrentDir, `${source}`);
        let pathToDestination = path.isAbsolute(destination) ? destination : path.join(pathToCurrentDir, `${destination}`);

        await rename(pathToSource, pathToDestination);

        console.log(`\nYou are currently in ${pathToCurrentDir}\n`);

    } catch (err) {
        console.log('\nOperation failed\n');
    }
};