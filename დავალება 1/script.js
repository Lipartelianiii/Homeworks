let number = 100;

if (number < 50) {
  console.log("less than 50");
} else if (number > 20) {
  console.log("more than 20");
} else {
  console.log("false");
}

let name1 = "mariam";

name1 === "mariam" ? console.log(true) : console.log(false);

let name2 = "mariam";

switch (name2) {
  case "mariam":
    console.log(true);
    break;
  default:
    console.log(false);
}