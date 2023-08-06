let converted_list = require("../combination_list_converted.json");

for (let i = 0; i < converted_list.length; i++) {
  if (converted_list[i][0][0] == converted_list[i + 1][0][0]) {
    console.log("error");
  } else {
    console.log("ok");
  }
}
