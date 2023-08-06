const fs = require("fs");

const color_list = new Array();
const list_h = [45, 135, 225, 315];
const list_s = [33.3, 50, 66.6];
const list_l = [33.3, 50, 66.6];

let count = 0;

for (let h = 0; h < 4; h++) {
  for (let s = 0; s < 3; s++) {
    for (let l = 0; l < 3; l++) {
      color_list[count] = [list_h[h], list_s[s], list_l[l]];
      count++;
    }
  }
}

fs.writeFile("test\\hsl_list1.json", JSON.stringify(color_list), (err) => {
  if (err) throw err;
  console.log("正常に書き込みが完了しました");
});
