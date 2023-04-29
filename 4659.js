const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

while (true) {
  let passwordOrigin = input.shift().trim();
  if (passwordOrigin === "end") return;

  let password = passwordOrigin.split("");
  console.log(password);
  const moum = ["a", "e", "i", "o", "u"];
  let check = false;
  for (let i = 0; i < moum.length; i++) {
    if (password.includes(moum[i])) {
      check = true;
      break;
    }
  }

  if (!check) {
    console.log(`<${passwordOrigin}> is not acceptable.`);
    continue;
  }

  let chk1 = false;
  for (let i = 0; i < password.length - 1; i++) {
    if (password[i] === password[i + 1]) {
      if (password[i] !== "e" && password[i] !== "o") {
        console.log(`<${passwordOrigin}> is not acceptable.`);
        chk1 = true;
        break;
      }
    }
  }

  if (chk1) continue;

  let chk2 = false;
  for (let i = 0; i < password.length - 2; i++) {
    const substring = password.slice(i, i + 3);
    let cnt = 0;
    for (let i = 0; i < substring.length; i++) {
      if (moum.includes(substring[i])) {
        cnt++;
      }
    }

    if (cnt === 0 || cnt === 3) {
      console.log(`<${passwordOrigin}> is not acceptable.`);
      chk2 = true;
      break;
    }
  }

  if (chk2) continue;
  console.log(`<${passwordOrigin}> is acceptable.`);
}
