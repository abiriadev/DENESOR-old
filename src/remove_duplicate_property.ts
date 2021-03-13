// const fs = require('fs').promises
// const fs = require('fs/promises')
// import {promises as fs} from "fs";
// import fs from "fs/promises"
// import {fs} from 'fs';
// let fs = require('fs');
// fs = fs.promises
// let fs = require('fs')
// var fs = require('fs');

import fs from 'fs/promises';

// (async () => {
//    let json_list = await fs.readFile("./bad_words_list.json")
//
//     // for (const property of json_list) {
//     //
//     // }
//
//     json_list.bad_words.forEach(e => console.log(e))
// })()

// import bad_word_list from './bad_words_list.json'


import bad_word_list from './bad_words_list.json';

// const count_repeat = (array, ele) => {
//     let count_array = [];
//     array.forEach((ele2, i) => ele2 == ele ? count_array.push(i) : 0);
//     return count_array
// };
//
// bad_word_list.bad_words.forEach((ele, i, array) => {
//     let countRepeat = count_repeat(array, ele);
//     if (2 <= countRepeat.length)
//         countRepeat.forEach()
//
//
//         });

const remove_duplication = original => original.reduce((new_arr, ele) => new_arr.indexOf(ele) == -1 ? [...new_arr, ele] : new_arr, []);
//
// console.log(remove_duplication([
//     1, 2, 3, 4, 5, 12, 34, 55, 21, 123, 4, 3, 2, 4, 5, 2, 23, 44,
// ]));

console.log('runed');
(async () => {
    console.log('runed');
    let length1 = bad_word_list.bad_words.length;

    bad_word_list.bad_words = remove_duplication(bad_word_list.bad_words);
    let result = bad_word_list;

    console.log(bad_word_list);

    await fs.writeFile(
        './bad_words_list.json',
        JSON.stringify(
            result,
        ),
    );
    let length2 = bad_word_list.bad_words.length;
    console.log(`${length1 - length2} 개의 중복 항목을 제거했습니다`);
})();