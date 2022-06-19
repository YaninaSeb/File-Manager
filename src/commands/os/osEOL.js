import { EOL } from 'os';
import { pathToCurrentDir } from '../../utils/getPathToDir.js';

export const getOsEOL = () => {

    console.log('\nEOL: ' + JSON.stringify(EOL));
    console.log(`\nYou are currently in ${pathToCurrentDir}\n`);
};