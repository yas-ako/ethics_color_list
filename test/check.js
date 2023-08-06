combination_list = require("../color-combination1.json");

for (let i = 0; i < combination_list.length; i++) {
  // console.log();
  if (Math.abs(combination_list[i][0][0] - combination_list[i][1][0]) == 270) {
    console.log(
      Math.abs(combination_list[i][0][1] - combination_list[i][1][1])
    );
  }
}
