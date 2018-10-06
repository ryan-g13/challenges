/*
Introduction
  	Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
 
Maze Runner
Task
  	You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
 

The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]

..with the following key
  	0 = Safe place to walk
1 = Wall
2 = Start Point
3 = Finish Point
 

  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"

Rules
  	1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
2. The start and finish positions will change for the final tests.
3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
*/ 

let maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];
let directions = ["N","N","N","N","N","E","E","E","E","W"];

function mazeRunner(maze, directions) {
  // find the index for the starting point aka value of 2 
  let startIndex = []; // ['x', 'y']
  for(let i = 0; i < maze.length; i++) {
    for(let j = 0; j < maze.length; j ++) {
      console.log(i, j, maze[i][j]);
      if(maze[i][j] == 2) {
        startIndex.push(i);
        startIndex.push(j);
      } 
    }
  }
  console.log(startIndex);
  console.log(directions);
  // Follow directions until either reach value 3, the exit or hit a wall / go outside maze = dead, run out of moves = lost forever.
  let currentX = startIndex[0];
  let currentY = startIndex[1]; 
  for(let i = 0; i < directions.length; i++) {

    if(directions[i] == 'N') {
      currentX = currentX - 1;
    }
    if(directions[i] == 'E') {
      currentY = currentY + 1; 
    }
    if(directions[i] == 'S') {
      currentX = currentX + 1;
    }
    if(directions[i] == 'W') {
      currentY = currentY - 1;
    }

    if(currentX < 0 || currentY < 0 || currentX >= maze.length || currentY >= maze.length) {
      console.log('You dead, you ran into nowhere');
      return 'Dead';
    }

    if(maze[currentX][currentY] == 3) {
      console.log('Finished successfully');
      return 'Finish';
    }
    if(maze[currentX][currentY] == 1) {
      console.log('You dead, you ran into a wall');
      return 'Dead';
    }

    console.log(maze[currentX][currentY]);
  }
  if(maze[currentX][currentY] !== 3 || maze[currentX][currentY] !== 1) {
    console.log('You are lost forever.');
    return 'Lost';
  }
}

mazeRunner(maze, directions);