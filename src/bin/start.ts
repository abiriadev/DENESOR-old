import client from '../DENESOR';

// @ts-ignore
globalThis.stop = Symbol.for('stop');

process.on('exit', code => {
    console.log(`process exit with code ${code}`);
})

console.log('<start>');

client
    .login(process.env.TOKEN)
    .catch(err => {
        if (err[Object.getOwnPropertySymbols(err)[0]] === 'TOKEN_INVALID') {
            console.log('please change token and try again!');

            process.exit(3)
            // throw err
        } else {
            console.error(err);
            console.log('error occurred during login!');

            throw err
        }
    });
