export const resetLog = '\x1b[0m';
export const greenLog = '\x1b[32m';
export const yellowLog = '\x1b[33m';

export const logEnvironment = () => {
    if (process.env.NODE_ENV !== 'production') {
        console.log('===Environment===');
        console.log(greenLog, `  ${process.env.NODE_ENV}` + resetLog);
        console.log('=================');
    }
};
