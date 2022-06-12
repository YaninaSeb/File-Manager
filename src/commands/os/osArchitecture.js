import os from 'os';
import { pathToCurrentDir } from '../../utils/getPathToDir.js';

export const getOsArchitecture = () => {

    console.log('\nArchitecture: ' + os.arch());
    console.log(`\nYou are currently in ${pathToCurrentDir}\n`);
}
