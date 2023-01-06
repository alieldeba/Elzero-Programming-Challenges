// First Solution
function find_position_for(letter) {
  return letter.toLowerCase().charCodeAt(0) - 96;
}
console.log(find_position_for("C"));
console.log(find_position_for("P"));

// Second Solution
function find_position_for2(letter) {
  let index = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  return index[letter.toLowerCase()];
}
console.log(find_position_for2("C"));
console.log(find_position_for2("P"));

// Third Solution
function find_position_for3(letter) {
  let index = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return index.indexOf(letter.toLowerCase()) + 1;
}
console.log(find_position_for3("C"));
console.log(find_position_for3("P"));