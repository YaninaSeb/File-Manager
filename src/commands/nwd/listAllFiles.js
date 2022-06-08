import { access, readdir } from "fs/promises";
import { pathToCurrentDir } from "../../utils/getPathToDir.js";

export const list = async () => {
    try {
        await access(pathToCurrentDir); 
        let res = await readdir(pathToCurrentDir);
        console.log(res);
    } catch (err) {
        console.log('Operation failed\n');
    }
};
