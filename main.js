//La boucle for in
//Avec un tableau

const livresLaTourSombre = [
  "La Tour Sombre 1",
  "La Tour Sombre 2",
  "La Tour Sombre 3",
  "La Tour Sombre 4",
  "La Tour Sombre 5",
  "La Tour Sombre 6",
  "La Tour Sombre 7",
  "La Tour Sombre 8",
];

function boucleForIn() {
  for (let value in livresLaTourSombre) {
    console.log(`Le livre ${livresLaTourSombre[value]}`);
  }
}

//Avec un objet
const livresLaTourSombrePages = {
  LTS1: 250,
  LTS2: 480,
  LTS3: 650,
};

console.log(livresLaTourSombrePages);
for (let value in livresLaTourSombrePages) {
  console.log(`Le livre ${value} a ${livresLaTourSombrePages[value]} pages`);
}

//Autre exemple
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property} = ${object[property]}`);
}
