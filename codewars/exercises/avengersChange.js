/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

###Examples:

// === JavaScript ==

tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

*/

function tickets(peopleInLine){
  let tillValue = 0; 
  let till = {
    25: 0, 
    50: 0,
    100:0 
  }
  if(peopleInLine[0] === 50 || peopleInLine[0] === 100) {
    console.log('initial customer unable to give change');
    return 'NO';
  }
  peopleInLine.forEach(customer => {
    if(customer < 50) {
      till['25'] += 1;
      tillValue += customer;
      console.log(till, tillValue);
    } else if (customer < 100) {
      till['50'] += 1;
      till['25'] -= 1;
      tillValue -= customer - 25;
      console.log('50', till, tillValue);
    } else if(customer === 100) {
      till['100'] += 1;
      tillValue += 75;
      if(till['25'] >= 3 ) {
        till['25'] -= 3;
      } else if(till['50'] >= 1 && till['25'] >= 1) {
        till['50'] -= 1;
        till['25'] -= 1;
      } else {
        console.log('not enough change');
        return 'NO';
      }
      console.log('100', till, tillValue);
    }
    if(tillValue < 0 ) {
      console.log('negative till');
      return 'NO';
    }
  });
  return 'YES';
}

tickets([25, 50, 25, 25, 25, 100]);
