let number = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let maxAttempts = 7;

    function checkGuess() {
      let guess = document.getElementById("guessInput").value;
      let message = document.getElementById("message");
      let attemptsText = document.getElementById("attempts");

      if (!guess) {
        message.textContent = "❌ Please enter a number.";
        return;
      }

      guess = Number(guess);
      attempts++;

      if (guess === number) {
        message.textContent = "🎉 Correct! You guessed it in " + attempts + " tries.";
        disableGame();
      } else if (guess < number) {
        message.textContent = "📉 Too low!";
      } else {
        message.textContent = "📈 Too high!";
      }

      if (attempts >= maxAttempts && guess !== number) {
        message.textContent = "😢 Out of attempts! The number was " + number + ".";
        disableGame();
      }

      attemptsText.textContent = "Attempts: " + attempts + " / " + maxAttempts;
      document.getElementById("guessInput").value = "";
    }

    function disableGame() {
      document.getElementById("guessInput").disabled = true;
    }