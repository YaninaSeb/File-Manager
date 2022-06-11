export const pathToDefaultDir = () => {
    return process.env.HOME || process.env.USERPROFILE;
}
export let pathToCurrentDir = pathToDefaultDir();

export let setPathToCurrentDir = (path) => {
    pathToCurrentDir = path;
}
