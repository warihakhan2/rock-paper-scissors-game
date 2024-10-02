//Rock ,Paper ,Scissors game
import inquirer from "inquirer";
const game = await inquirer.prompt([
  {
    message: "Your turn",
    type: "list",
    name: "player1",
    choices: ["Rock", "Paper", "Scissors"],
  },
  {
    message: "Now it's your turn",
    type: "list",
    name: "player2",
    choices: ["Rock", "Paper", "Scissors"],
  },
]);
if (game.player1 === game.player2) {
  console.log("It's a tie!");
} else if (
  (game.player1 === "Rock" && game.player2 === "Scissors") ||
  (game.player1 === "Paper" && game.player2 === "Rock") ||
  (game.player1 === "Scissors" && game.player2 === "Paper")
) {
  console.log("Player1 wins!");
} else {
  console.log("player2 wins!");
}
