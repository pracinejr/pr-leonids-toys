const toys = [
  {
    id: 1,
    name: "Leonardo",
    type: "Ninja Turtle",
    color: "Emerald Green",
    manufacturer: "Playmates Holdings Ltd",
    price: 22.99,
  },

  {
    id: 2,
    name: "Iron Man",
    type: "Action Figure",
    color: "red and gold",
    manufacturer: "Hasboro Pluse",
    price: 20.0,
  },

  {
    id: 3,
    name: "Cyberpunk",
    type: "Action Figure",
    color: "black and brown",
    manufacturer: "McFarlane Toys",
    price: 26.95,
  },
];
// console.log(toys);

for (const toy of toys) {
  console.log(toy.name);
}
