let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

console.log("\n## Map\n");

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Impperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));
// Exercise 6.1.1
console.log(functionalUrls(states).map(state => `http://example.com/${state}`));

console.log("\n## Filter\n");

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// Exercise 6.2.1
function functionalDakota(elements) {
  return elements.filter(element => element.toLowerCase().includes("dakota"));
}
function functionalDoubles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}

console.log(functionalDakota(states));
console.log(functionalDoubles(states));

console.log("\nReduce\n");

let numbers = [1,2,3,4,5,6,7,8,9,10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n){
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum: functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total + n }, 0);
}
console.log(functionalSum(numbers));

// length: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element){
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// length: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {})
}
console.log(functionalLengths(states));
