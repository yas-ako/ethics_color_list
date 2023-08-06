const shuffleArray = (array) => {
  return array.slice().sort(() => Math.random() - Math.random());
};

const fs = require("fs");
const combination_list = require("./test/color-combination1.json");
const combination_list_shuffle = shuffleArray(combination_list);
const combination_list_splited = [[[]]];
combination_list_splited[0][0] = 1;

console.log(combination_list_shuffle);
let count = 0;
for (let i = 0; i < 20; i++) {
  let tmp = [];
  for (let j = 0; j < 63; j++) {
    tmp[j] = combination_list_shuffle[count];
    count++;
  }
  combination_list_splited[i] = tmp;
}

fs.writeFile(
  "test\\combination_list_converted2.json",
  JSON.stringify(combination_list_splited),
  (err) => {
    if (err) throw err;
    console.log("正常に書き込みが完了しました");
  }
);
