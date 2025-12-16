function rankingPoints(rank) {
  if (rank <= 5) return 48;
  if (rank <= 10) return 43;
  if (rank <= 15) return 39;
  if (rank <= 20) return 36;
  if (rank <= 25) return 33;
  if (rank <= 29) return 28;
  if (rank <= 39) return 24;
  if (rank <= 49) return 20;
  if (rank <= 59) return 16;
  if (rank <= 69) return 12;
  if (rank <= 79) return 9;
  if (rank <= 89) return 6;
  if (rank <= 99) return 3;
  if (rank <= 115) return 1;
  return 0;
}

function recordBonus(winPct) {
  if (winPct === 1) return 2.0;
  if (winPct >= 0.9) return 1.6;
  if (winPct >= 0.825) return 1.2;
  if (winPct >= 0.75) return 0.8;
  if (winPct >= 0.65) return 0.4;
  if (winPct >= 0.5) return 0.2;
  return 0;
}

function starPoints(stars) {
  return ((stars - 0.5) / 4.5) * 2.5;
}

function difficulty(score) {
  if (score < 20) return "Easy";
  if (score < 40) return "Medium";
  if (score < 60) return "Hard";
  return "Extreme";
}

function calculate() {
  let rank = Number(document.getElementById("ranking").value);
  let winPct = Number(document.getElementById("winPct").value);
  let location = Number(document.getElementById("location").value);
  let gameType = Number(document.getElementById("gameType").value);
  let power = Number(document.getElementById("power").value);
  let offStars = Number(document.getElementById("offStars").value);
  let defStars = Number(document.getElementById("defStars").value);

  let total =
    rankingPoints(rank) +
    (winPct * 23.5) +
    recordBonus(winPct) +
    location +
    gameType +
    power +
    starPoints(offStars) +
    starPoints(defStars);

  document.getElementById("result").innerHTML =
    "Score: " + total.toFixed(1) + "<br>Difficulty: " + difficulty(total);
}
