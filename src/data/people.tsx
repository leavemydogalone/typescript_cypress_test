export interface Person {
  name: string;
  age: number;
  height: number;
  portrait: string;
}
let peopleArray: Person[] = [
  {
    name: "John Doe",
    age: 25,
    height: 175,
    portrait: '<img src="john_doe_thumbnail.jpg" alt="John Doe">',
  },
  {
    name: "Jane Smith",
    age: 30,
    height: 160,
    portrait: '<img src="jane_smith_thumbnail.jpg" alt="Jane Smith">',
  },
  {
    name: "Bob Johnson",
    age: 40,
    height: 180,
    portrait: '<img src="bob_johnson_thumbnail.jpg" alt="Bob Johnson">',
  },
  {
    name: "Emily Davis",
    age: 28,
    height: 165,
    portrait: '<img src="emily_davis_thumbnail.jpg" alt="Emily Davis">',
  },
  {
    name: "Mike Miller",
    age: 35,
    height: 190,
    portrait: '<img src="mike_miller_thumbnail.jpg" alt="Mike Miller">',
  },
];

export default peopleArray;
