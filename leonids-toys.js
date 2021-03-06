const toyToFind = 2;

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

const captianAmerica = {
  id: 4,
  name: "Captian America",
  type: "Action Figure",
  color: "red and blue",
  manufacturer: "McFarlane Toys",
  price: 45,
};
const thanos = {
  id: 5,
  name: "Thanos",
  type: "Action Figure",
  color: "gold and purple",
  manufacturer: "McFarlane Toys",
  price: 80,
};

toys.push(captianAmerica, thanos);

// for (const toy of toys) {
//   console.log(toy.name);
// }

// for (const toy of toys) {
//   console.log(
//     `${toy.manufacturer}'s ${toy.name} ${toy.type} has the colors of ${toy.color} and costs $${toy.price}.`
//   );
// }
for (const toy of toys) {
  if (toy.id === toyToFind) {
    toy.price = toy.price * 1.05;
    console.log(
      `${toy.manufacturer}'s ${toy.name} ${toy.type} has the colors of ${toy.color} and costs $${toy.price}.`
    );
  }
}

const michelangelo = {
  name: "Michelangelo",
  type: "Ninja Turtle",
  color: "Orange",
  manufacturer: "Playmates Holdings Ltd",
  price: 25.0,
};

const addToyToInventory = (toyObj) => {
  const lastIndex = toys.length - 1;
  const currentLastToy = toys[lastIndex];
  const maxId = currentLastToy.id;
  const idForNewToy = maxId + 1;

  toyObj.id = idForNewToy;
  toys.push(toyObj);
};

addToyToInventory(michelangelo);

for (const toy of toys) {
  console.log(
    `${toy.manufacturer}'s ${toy.name} ${toy.type} has the colors of ${toy.color} and costs $${toy.price}.`
  );
}
