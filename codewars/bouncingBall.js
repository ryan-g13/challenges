/*
A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
Three conditions must be met for a valid experiment:

    Float parameter "h" in meters must be greater than 0
    Float parameter "bounce" must be greater than 0 and less than 1
    Float parameter "window" must be less than h.

If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note: The ball can only be seen if the height of the rebounding ball is stricty greater than the window parameter.

Example:

    h = 3, bounce = 0.66, window = 1.5, result is 3

    h = 3, bounce = 1, window = 1.5, result is -1 (Condition 2) not fulfilled).

*/

function bouncingBall(h,  bounce,  window) {
  console.log(h, bounce, window);
  
  // window < h 
  if(window >= h) {
    // console.log('window lower');
    return -1;
  }
  // bounce between 0 and 1 
  if(bounce >= 1 || bounce <= 0) {
    // console.log('bounce issues');
    return -1;
  }
  // h is a float > 0 (if false return -1 )
  if(h <= 0 ) {
    // console.log('too much specifity');
    return -1;
  }
  // viewed only if rebound is > than window !=
  // flag for bouncing upwards
  let viewCount = 0; 
  let aboveWindow = true;
  while (aboveWindow) {
    h = h * bounce;
    viewCount++;
    aboveWindow = false;
    // console.log(viewCount); 
    if (h > window) {
      aboveWindow = true;
      viewCount++;
      // console.log(viewCount);
    }
  }
  // console.log(viewCount);
  return viewCount;
}

bouncingBall(10, .5, 3);

/* ALTERNATE SOLUTION 
const bouncingBall = (h, bounce, window) => {
  let count = -1;
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) 
    while (h > window) {
      h *= bounce;
      count += 2;
    }
  return count;
}
*/