import { getOsEOL } from "./osEOL.js";
import { getOsHomedir } from "./osHomedir.js";
import { getOsUsername } from "./osUsername.js";
import { getOsArchitecture } from "./osArchitecture.js";
import { getOsCPUS } from "./osCPUS.js";
 
export const setAttrOs = (data) => {
    const attr = data.replace('os ', '').trim();

    switch(attr) {
        case '--EOL':
            getOsEOL();
            break;
        case '--cpus':
            getOsCPUS();
            break;
        case '--homedir':
            getOsHomedir();
            break;
        case '--username':
            getOsUsername();
            break;
        case '--architecture':
            getOsArchitecture();
            break;
        default:
            console.log('\nOperation failed\n');
            break;
    }
};
