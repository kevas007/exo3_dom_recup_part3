let myObject = {
    nom: 'nicolas',
    age: 18,
}
console.log(myObject);

let myElement = document.getElementById('object').children

console.log(myElement);

let tab = Object.entries(myObject);

console.log(tab);

tab.forEach(element => {
    console.log(element[0]);
});

let myElements = document.querySelector("div#object").children;
console.log(myElements);


Object.keys(myObject).forEach((e, i) => {
    myElements[i].innerText = myObject[e];
});