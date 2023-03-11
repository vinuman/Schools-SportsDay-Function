function OpeningCeremony(callback) {
    console.log("Let the games begin");
    let score = {red:0,blue:0,green:0,yellow:0};
    setTimeout(function() {
      Race100M(score, callback);
    }, 1000);
  }
  
  function Race100M(score, callback) {
    console.log("Score before Race100M:", score);
    let times = {red: Math.floor(Math.random() * 6) + 10,
                 blue: Math.floor(Math.random() * 6) + 10,
                 green: Math.floor(Math.random() * 6) + 10,
                 yellow: Math.floor(Math.random() * 6) + 10};
    console.log("Race100M times:", times);
    let sortedTimes = Object.entries(times).sort((a,b) => a[1]-b[1]);
    score[sortedTimes[0][0]] += 50;
    score[sortedTimes[1][0]] += 25;
   /*  console.log(`${sortedTimes[0][0]} won Race100M and got 50 points`);
    console.log(`${sortedTimes[1][0]} came second in Race100M and got 25 points`); */
    console.log(`${sortedTimes[0][0]} came first in the race with a time of ${sortedTimes[0][1]}`);
   console.log(`${sortedTimes[1][0]} came second in the race with a time of ${sortedTimes[1][1]}`);
    console.log("Score after Race100M:", score);
    setTimeout(function() {
      LongJump(score, callback);
    }, 1000);
  }
  
  function LongJump(score, callback) {
    console.log("Score before LongJump:", score);
    let winner = Object.keys(score)[Math.floor(Math.random() * 4)];
    score[winner] += 150;
    console.log(`${winner} won LongJump and got 150 points`);
    console.log("Score after LongJump:", score);
    setTimeout(function() {
      HighJump(score, callback);
    }, 1000);
  }
  
  function HighJump(score, callback) {
    console.log("Score before HighJump:", score);
    let answer = prompt("Which colour secured the highest jump?");
    if (answer === null || answer === "") {
      console.log("Event was cancelled");
    } else if (Object.keys(score).includes(answer)) {
      score[answer] += 100;
      console.log(`${answer} secured the highest jump and got 100 points`);
    } else {
      console.log("Invalid input");
    }
    console.log("Score after HighJump:", score);
    AwardCeremony(score);
  }
  
  function AwardCeremony(score) {
    console.log("Final Scores:");
    let sortedScores = Object.entries(score).sort((a,b) => b[1]-a[1]);
    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points`);
  }
  
  OpeningCeremony(function(score) {});
  