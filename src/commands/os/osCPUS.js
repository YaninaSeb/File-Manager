import os from 'os';
import { pathToCurrentDir } from '../../utils/getPathToDir.js';

export const getOsCPUS = () => {
    // `model: '${core.model}', speed: '${core.speed}'`;

    const arrCPUS = os.cpus();
    let res = ''; 
    arrCPUS.forEach((core) => {
        while (core.speed > 10) {
            core.speed /= 10;
        }
        res += `model: '${core.model}', clock rate: ${core.speed}GHz` + '\n';
    });

    console.log('\nOverall amount of CPUS: ' + os.cpus().length);
    console.table(res);

    console.log(`You are currently in ${pathToCurrentDir}\n`);
}
