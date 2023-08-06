// import * as fs from "fs";
// import hsl_list from "./hsl_list.json";
const fs = require("fs");
const hsl_list = require("./hsl_list.json");
const combination_list = [];
let count = 0;

for (let i = 0; i < hsl_list.length; i++) {
  for (let j = 0; j < hsl_list.length; j++) {
    if (j == i) {
    } else {
      combination_list[count] = [hsl_list[i], hsl_list[j]];
      count++;
    }
  }
}

fs.writeFile(
  "test\\color-combination1.json",
  JSON.stringify(combination_list),
  (err) => {
    if (err) throw err;
    console.log("正常に書き込みが完了しました");
  }
);
