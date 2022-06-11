import { access, readdir } from "fs/promises";
import { pathToCurrentDir } from "../../utils/getPathToDir.js";

export const list = async () => {
    try {
        await access(pathToCurrentDir); 
        let res = await readdir(pathToCurrentDir);

        console.log(res);
        console.log(`\nYou are currently in ${pathToCurrentDir}\n`);
        
    } catch (err) {
        console.log('\nOperation failed\n');
    }
};
