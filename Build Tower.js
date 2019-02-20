// Kata => https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
  var tower = [];
  var floor = "";
  var space = ((2 * nFloors) - 2) / 2;
  for (var count = 0; count < nFloors; count++) {
    if (count === 0) {
      floor += "*";
    } else {
      floor += "**";
    }
    tower.push(" ".repeat(space) + floor + " ".repeat(space));
    space -= 1;
  }
  return tower;
}
