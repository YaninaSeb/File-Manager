export const homeDir = () => {
    return process.env.HOME || process.env.USERPROFILE;
}