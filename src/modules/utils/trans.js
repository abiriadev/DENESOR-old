const translate = require('google-translate-api');

const asd = ""
translate(asd, {
    to: 'ko'
}).then(r => {
    console.log(r);
})