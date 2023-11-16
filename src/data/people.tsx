import { Person } from "../types/personTypes";
function getRandomEmoji(): string {
  const emojis = ["😀", "😎", "👩‍💻", "🌟", "🚀", "🎉", "🌈"];
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}
export let peopleArray: Person[] = [
  {
    name: "John Doe",
    age: 25,
    height: 175,
    portrait: getRandomEmoji(),
  },
  {
    name: "Jane Smith",
    age: 30,
    height: 160,
    portrait: getRandomEmoji(),
  },
  {
    name: "Bob Johnson",
    age: 40,
    height: 180,
    portrait: getRandomEmoji(),
  },
  {
    name: "Emily Davis",
    age: 28,
    height: 165,
    portrait: getRandomEmoji(),
  },
  {
    name: "Mike Miller",
    age: 35,
    height: 190,
    portrait: getRandomEmoji(),
  },
];

export let morePeopleArray: Person[] = [
  {
    name: "Alice Johnson",
    age: 28,
    height: 160,
    portrait: getRandomEmoji(),
  },
  {
    name: "Charlie Brown",
    age: 35,
    height: 175,
    portrait: getRandomEmoji(),
  },
  {
    name: "Eva Martinez",
    age: 42,
    height: 168,
    portrait: getRandomEmoji(),
  },
  {
    name: "David Turner",
    age: 32,
    height: 185,
    portrait: getRandomEmoji(),
  },
  {
    name: "Grace Thompson",
    age: 27,
    height: 155,
    portrait: getRandomEmoji(),
  },
];
export default peopleArray;
