const reset = '\x1b[0m';
const green = '\x1b[32m';

export const logEnvironment = () => {
    if (process.env.NODE_ENV !== 'production') {
        console.log('===Environment===');
        console.log(green, `  ${process.env.NODE_ENV}` + reset);
        console.log('=================');
    }
};
