let text='JavaScript is an awesome Programming Language.'
let text2=' I love it.'
let item="1";
    console.log(text);
console.log('text lenght = ',text.length);
console.log('Katta harflarda = ',text.toUpperCase());
console.log('Kichik harflarda = ',text.toLowerCase());
console.log('Textni index si bo`yicha kesib olish = ',text.substring(17,24));
console.log('index dagi harfni o`zini olib tashlash = ',text.substring(26));
console.log('Textni belgilar bilan bo`lish yoki ajratish = ',text.split(' '));
console.log('Yuqoridagilarni bir qatorda ishlatilsa, masalan: text.substring(17,24).toUpperCase().split(" ") = ',text.substring(17,24).toUpperCase().split(""));
console.log('Textdagi Language so`zini qidirganda uning bosh index raqamini ko`rsatadi  = ',text.search("Language"));
console.log('Agar Language so`zini noto`g`ri yozsak  = ',text.search("language"));
console.log('Agar Language so`zini noto`g`ri yozsakda bizga chiqarib berishini xohlasak /.../i dan foydalanamiz  = ',text.search(/LaNguagE/i));
console.log('Textdagi bir so`zni masalan "JavaScript" so`zini almashtiraganda = ',text.replace('JavaScript','Python'));
console.log('Textimizga yana bir textni qoshsak = ',text.concat (text2));
console.log(item.padStart(10,0));
console.log(item.padEnd(10,0));