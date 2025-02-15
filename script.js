let score = 0;
const scoreDisplay = document.getElementById("score");
const clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", function() {
  score++;
  scoreDisplay.textContent = score;
});