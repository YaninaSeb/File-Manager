export const pathToDefaultDir = () => {
    // return process.env.HOME || process.env.USERPROFILE;
    return '/';
}
export let pathToCurrentDir = pathToDefaultDir();

export let setPathToCurrentDir = (path) => {
    pathToCurrentDir = path;
}
