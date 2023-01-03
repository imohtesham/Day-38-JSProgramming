//4. for FlipCoin
//To Simulate a coin flip and print out "Heads" or "Tails" accordingly

const HEAD = 0;

const toss = Math.floor((Math.random() * 10) % 2);

if (toss == 0)
    console.log("Heads");
else
    console.log("Tails")