// First Solution
function add_commas_and_underscore(num) {
  let result = [];
  num = num.toString();
  let symbol = "_";
  let target = 3;
  for (let i = num.length - 1; i >= 0; i--) {
    if (num.length > 3) {
      if (i + 1 === num.length - target) {
        result.push(symbol);
        result.push(num[i]);
        target += 3;
        symbol = ",";
      } else {
        result.push(num[i]);
      }
    } else {
      return num;
    }
  }
  return result.reverse().join("");
}

console.log(add_commas_and_underscore(120)); // 120
console.log(add_commas_and_underscore(1530)); // 1_530
console.log(add_commas_and_underscore(120510650)); // 120,510_650
console.log(add_commas_and_underscore(510650480910)); // 510,650,480_910
console.log(add_commas_and_underscore(12069057014032)); // 12,069,057,014_032

// Second Solution
function add_commas_and_underscore2(num) {
  let result = "";
  num = num.toString();
  let symbol = "_";
  let target = 3;
  for (let i = num.length - 1; i >= 0; i--) {
    if (num.length > 3) {
      if (i + 1 === num.length - target) {
        result += symbol;
        result += num[i];
        target += 3;
        symbol = ",";
      } else {
        result += num[i];
      }
    } else {
      return num;
    }
  }
  return result.split("").reverse().join("");
}

console.log(add_commas_and_underscore2(120)); // 120
console.log(add_commas_and_underscore2(1530)); // 1_530
console.log(add_commas_and_underscore2(120510650)); // 120,510_650
console.log(add_commas_and_underscore2(510650480910)); // 510,650,480_910
console.log(add_commas_and_underscore2(12069057014032)); // 12,069,057,014_032
