console.log("[{=====START=====}]");

import client from "../DENESOR"

client
    .login(process.env.TOKEN)
    .then(tok => {

    })
    .catch(err => {
        console.error(err)
        console.log(`INVALID_TOKEN`)
    })