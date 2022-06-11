import { rename, access } from "fs/promises";

export const renameFile = async (data) => {
    const pathSourceAndDest =  data.trim().replace('rn ', '');
    const [ pathToSource, pathToDestination ] = pathSourceAndDest.split(' ');

    try {
        await access(pathToSource);
        if (!pathToDestination) throw err;

        await rename(pathToSource, pathToDestination);

        console.log(`\nYou are currently in ${pathToCurrentDir}\n`);

    } catch (err) {
        console.log('\nOperation failed\n');
    }
};