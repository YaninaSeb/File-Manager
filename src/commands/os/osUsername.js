import os from 'os';
import { pathToCurrentDir } from '../../utils/getPathToDir.js';

export const getOsUsername = () => {

    console.log('\nUsername: ' +os.userInfo().username);
    console.log(`\nYou are currently in ${pathToCurrentDir}\n`);
}
