/* 
Short Intro

Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or emulating it nowadays with the numerous emulators for retro consoles.

Can you solve this kata? Suuure-You-Can!

UPDATE: a new kata's harder version is available here.

The Kata

You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:

alt text

Selection Grid Layout in text:

| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |

Input

    the list of game characters in a 2x6 grid;
    the initial position of the selection cursor (top-left is (0,0));
    a list of moves of the selection cursor (which are up, down, left, right);

Output

    the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, wether successful or not, see tests);

Rules

Selection cursor is circular horizontally but not vertically!

As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

Test

For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

Notice : changing some of the input data might not help you.

Examples

1.

fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['up', 'left', 'right', 'left', 'left']

then I should get:

['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']

as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

2.

fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']

Result:

['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']

OFF-TOPIC

Some music to get in the mood for this kata :

Street Fighter 2 - selection theme
*/

function streetFighterSelection(fighters, position, moves){
  // returns an array of chars if move was successful or same char if not successful
  // if no moves for function call, return empty array; 

  // if in row 1 cannot move up 
  // if in row 2 cannot move down 
  // if at index 0 can move wrapping left 
  // if at index end can move wrapping right 
  let charsSelected = [];
  let currentPosition = position;
  const charsArr = fighters;

  if(moves.length < 1) {
    return charsSelected;
  }
  
  // currentPosition is [x, y]
  moves.forEach(move => {
    if(move === 'up' && currentPosition[1] - 1 < 0) {
      charsSelected.push(charsArr[currentPosition[1]][currentPosition[0]]);
      // console.log('wrap around', currentPosition);
    } else if(move === 'up'){
      currentPosition[1]--;
      charsSelected.push(charsArr[currentPosition[1]][currentPosition[0]]);
      // console.log(currentPosition);
    }
    if(move === 'down' && currentPosition[1] + 1 > 1) {
      charsSelected.push(charsArr[currentPosition[1]][currentPosition[0]]);
    } else if(move === 'down'){
      currentPosition[1]++;
      charsSelected.push(charsArr[currentPosition[1]][currentPosition[0]]);
      // console.log(currentPosition);
    }
    if(move === 'left' && currentPosition[0] - 1 < 0) {
      currentPosition = [charsArr[0].length - 1, currentPosition[1]];
      charsSelected.push(charsArr[currentPosition[1]][currentPosition[0]]);
      // console.log('wrap around', currentPosition);
    } else if(move === 'left'){
      currentPosition[0]--;
      charsSelected.push(charsArr[currentPosition[1]][currentPosition[0]]);
      // console.log(currentPosition);
    }
    if(move === 'right' && currentPosition[0] + 1 > charsArr[0].length - 1) {
      currentPosition = [0, currentPosition[1]];
      charsSelected.push(charsArr[currentPosition[1]][currentPosition[0]]);
    } else if (move === 'right'){
      currentPosition[0]++;
      charsSelected.push(charsArr[currentPosition[1]][currentPosition[0]]);
      // console.log(currentPosition);
    }
  })
  console.log(charsSelected);
  return charsSelected;
}

// const fightersArr = [
//   ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//   ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// const initial_position = [0,0]
// const moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']

// streetFighterSelection(fightersArr, initial_position, moves);