document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const cells = [];

    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    // Create cells and add click event listeners
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", handleCellClick);
        board.appendChild(cell);
        cells.push(cell);
    }

    // Handle cell click
    function handleCellClick() {
        const index = this.dataset.index;

        // Check if the cell is empty
        if (gameBoard[index] === "") {
            gameBoard[index] = currentPlayer;
            updateBoard();
            checkWinner();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }

    // Update the board UI
    function updateBoard() {
        cells.forEach((cell, index) => {
            cell.textContent = gameBoard[index];
        });
    }

    // Check for a winner
    function checkWinner() {
        // Check rows, columns, and diagonals for a winner
        // Update UI or take action if there is a winner
    }
});
