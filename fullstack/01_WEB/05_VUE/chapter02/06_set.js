//Set : Unique Value
// map과 달리 객체들이 중복되지 않음
const animal2 = [
  { name: "앵무새", category: "bird" },
  { name: "매", category: "bird" },
  { name: "참치", category: "fish" },
  { name: "메뚜기", category: "insect" },
  { name: "거미", category: "insect" },
];
let category = animal2.map((a) => a.category);
console.log(category); // ['bird', 'bird', 'fish', 'insect', 'insect']
category = new Set(animal2.map((a) => a.category));
console.log(category); // {'bird', 'fish', 'insect'}
console.log([...category]); //['bird', 'fish', 'insect']
