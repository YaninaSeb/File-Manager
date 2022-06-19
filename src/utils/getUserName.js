export const userName = () => {
    const args = process.argv.slice(2);
    const name = args.join('').replace('--username=', '');
    return name;
}