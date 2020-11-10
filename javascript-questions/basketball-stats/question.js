/**
 * Requirements
 * 1. There are 4 functions to fill in.
 * 2. Some functions will use other functions to complete their answers.
 * 3. Avoid using for, forEach, for...in or for...of.
 * 4. Do not mutate objects that are being passed to functions.
 * 6. Run the file using `node question.js` in your terminal and you will see the output.
 */

/**
 * Returns all the points a team had in the game.
 *
 * @param pointsPerQuarter {Array<number>} - An array of numbers that represent all the points a team had in the game.
 * @returns {number} - Sum of all points that a team had in the game.
 */
const totalScore = (pointsPerQuarter) => {

  // @TODO 
  // cycle through each array item using reduce method, add amount to current total 

    var sum = pointsPerQuarter.reduce((total, amount) => total + amount);
    return sum;

};


const raptorsScore = totalScore([26, 21, 25, 21]);
console.log('Total Score', raptorsScore);

/**
 * Calculates and returns the average points of all players' points.
 *
 * @param players {Object<string, Object<points, number>>}
 * @returns {number} - Average points per starting player
 */
const playerArr = {};
const newTimeArr = {};


const getAveragePoints = (players) => {
  // @TODO
  // convert startingPlayers object into multidemensional array
  // isolate points value in array
  // reduce isolated points get a total value, then divide total value by array length


  var isolatePoints = Object.keys(startingPlayers).map(players => {
    playerArr[players] = startingPlayers[players]['points']
    var pointsArr = playerArr[players] 
    return pointsArr;

    console.log(players);
  });

   var average = isolatePoints.reduce(( total, amount ) => total + amount) / isolatePoints.length
   return average

};
const startingPlayers = {
  ibaka: {
    points: 12,
  },
  miles: {
    points: 13,
  },
  anunoby: {
    points: 2,
  },
  lowry: {
    points: 5,
  },
  derozen: {
    points: 13,
  },
};

const averageScore = getAveragePoints(startingPlayers);
console.log('Scoring Average', averageScore);


/**
 * Returns a new players object that excludes starting players who scored less than the the average.
 * - Return value of the function should be in the same format as the `players` parameter of the function.
 * - Make use of `startingPlayers` and `averageScore` that were created in the question #2.
 *
 * @param players {Object<string, Object<points, number>>}
 * @param average {number}
 * @returns {Object<string, Object<points, number>>}
 */
const getHighestScorers = (players, average) => {
  // @TODO
  // filter through object keys (players)
  // find players with points value higher that


  var findHighestScorers = Object.keys(startingPlayers).filter((key, i, a) =>{

    if(startingPlayers[key].points > averageScore){
      return startingPlayers[key].points
    }

  });

  return findHighestScorers

}
const highestScoringPlayers = getHighestScorers(startingPlayers, averageScore);
console.log('Highest Scoring Players', highestScoringPlayers);

/**
 * Returns a new players object where each player object has a new field `perQuarter` whose value represents each player's time played in each quarter.
 * - `time` field in each player's object represent the total time they played in the game.
 * - assuming every player played all quarters, add a `perQuarter` field to each player's object.
 *
 * @param timePlayedArr {Array<{ name: string, time: number }>}
 * @returns {Array<{ name: string, time: number, perQuarter: number }>}
 */
const addTimePlayedPerQuarter = (timePlayedArr) => {
  // @TODO
  // assign variable to player time array by reducing object to time values only
  // divide all values in player time array by 4 to get perQuarter values 
  // create a perQuarter array field 
  // push field to existing timePlayed array

  var timePlayedArr = timePlayed.reduce((acc, player) =>{
    acc[player.time] = {}
    return acc
  },{})

  var perQuarter = Object.keys(timePlayedArr).map(time =>{
    return time / 4
  });



var quartArray = perQuarter.map((v, i) =>
  ({"perQuarter": perQuarter[i]}));


var newTimePlayed = Object.values(timePlayed).map(players =>{
  var res = ['players'].push({perQuarter})

  return res
});
return newTimePlayed

// my output was not as expected
// insight and feedback is apprecaited, i am dying to know 
// how the result ended up this way 


};
const timePlayed = [
  {
    name: 'ibaka',
    time: 18,
  },
  {
    name: 'miles',
    time: 23,
  },
  {
    name: 'anunoby',
    time: 20,
  },
  {
    name: 'lowry',
    time: 30,
  },
  {
    name: 'derozen',
    time: 30,
  },
];

const timePerQuarter = addTimePlayedPerQuarter(timePlayed);
console.log('Players with time per quarter', timePerQuarter);


// thanks for taking the time to read through my code
// i appreciate your consideration
// have a nice day! :) 
