const firstName = "Stephen";
let age = 36;
const birthday = "february 20";
const pineapplePizza = false;
const lifeEvents = [
  "I was born in Baroda, Michigan.",
  "I have three kids.",
  "I went to Albion College.",
  "I drive a truck",
];

if (pineapplePizza) {
  console.log(
    `My name is ${firstName} I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${firstName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
let randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

while (randomNumber !== 5) {
  let randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    console.log(
      `${randomNumber} === 5! and it took ${counter} iterations to complete`
    );
    break;
  }
}
