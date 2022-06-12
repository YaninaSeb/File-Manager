import { homedir } from 'os';
import { pathToCurrentDir } from '../../utils/getPathToDir.js';

export const getOsHomedir = () => {

    console.log('\nHome directory: ' + homedir);
    console.log(`\nYou are currently in ${pathToCurrentDir}\n`);
}
