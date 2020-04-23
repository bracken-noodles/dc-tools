const fileRegex = /[\\/]{1}(\w+)\.\w+/i;
export default (filePath: string): string => filePath.match(fileRegex)[1];
