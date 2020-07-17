function feetToMile(feet) {
  feet = parseFloat(feet);

  if (feet <= 0) {
    return "Distance can not be 0 or less";
  } else if (typeof feet !== "number") {
    return "Please input a valid distance";
  }

  var mile = feet / 5280;
  return mile;
}

function woodCalculator(chair, table, bed) {
  if (chair < 0 || table < 0 || bed < 0) {
    return "Numbers of tables of chair or bed can not be less than 0 ";
  } else if (
    typeof bed !== "number" ||
    typeof bed !== "number" ||
    typeof bed !== "number"
  ) {
    return "Plese input valid numbers";
  }

  var chairWood = chair * 1;
  var tableWood = table * 3;
  var bedWood = bed * 5;
  var totalWoodNeeded = chairWood + tableWood + bedWood;
  return totalWoodNeeded;
}

function breekCalculator(floor) {
  if (floor <= 0) {
    return "Number of floors can not be 0 or less";
  } else if (typeof floor !== "number") {
    return "Plese input a valid number";
  }

  var bulidingHeight, totalBricks;
  if (floor >= 1 && floor <= 10) {
    bulidingHeight = floor * 15;
  } else if (floor >= 11 && floor <= 20) {
    bulidingHeight = 10 * 15 + (floor - 10) * 12;
  } else {
    bulidingHeight = 10 * 15 + 10 * 12 + (floor - 20) * 10;
  }
  totalBricks = bulidingHeight * 1000;
  return totalBricks;
}

function tinyFriend(friendsArray) {
  if (friendsArray.length === 0) {
    return "There is no name in this array";
  }
  var smallName = friendsArray[0];
  for (var i = 0; i < friendsArray.length; i++) {
    if (friendsArray[i].length < smallName.length) {
      smallName = friendsArray[i];
    }
  }
  return smallName;
}
