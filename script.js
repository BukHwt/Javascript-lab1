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

while (true) {
  let randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `${randomNumber} === 5! and it took ${counter} iterations to complete`
    );
    break;
  }
}

// ---------Extended Challenge

const hours = 30;
const wage = 10;

if (hours <= 40) {
  const pay = hours * wage;
  const weeks = Math.floor(1000000 / pay);
  console.log(
    `Your paycheck comes out to ${
      hours * wage
    }. It will take ${weeks} to make $1,000,000`
  );
} else {
  const pay = hours * wage;
  const weeks = Math.floor(1000000 / pay);
  console.log(
    `Your pay will be $${
      wage * 40 + (hours - 40) * (wage * 1.5)
    }. It will take ${weeks} to make $1,000,000`
  );
}
