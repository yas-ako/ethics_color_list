import * as fs from "fs";
import hsl_list from "./hsl_list.json";
const combination_list: number[][][] = [];
let count = 0;

for (let i = 0; i < hsl_list.length; i++) {
  for (let j = 0; j < hsl_list.length; j++) {
    combination_list[count] = [hsl_list[i], hsl_list[j]];
    count++;
  }
}

fs.writeFile("file2.json", JSON.stringify(combination_list), (err) => {
  if (err) throw err;
  console.log("正常に書き込みが完了しました");
});
