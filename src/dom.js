const DOMManipulator = (function() {
    function renderGameboard(player, gameboard) {
        const container = document.querySelector(`#player${player.id}`);
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = gameboard.board[i][j];
                const grid = document.createElement("div");
                grid.addEventListener("click", () => {
                    const attackData = player.attack(i, j);
                    updateGrid(player.id, [i, j], attackData[0]);
                    if (attackData[1]) {
                        // Display winning message
                    } else if (attackData === 0) {
                        // Display error
                    } else {
                        // Resume play
                    }
                });
                grid.classList.add("grid");
                grid.classList.add(`player${player.id}`);
                grid.setAttribute("id", `p${player.id}-${i}-${j}`)
                if (cell.hasShip) {
                    grid.classList.add(`${cell.shipName}`);
                }
                container.appendChild(grid);
            }
        }
    }

    function updateGrid(playerid, coords, attackStatus) {
        const grid = document.querySelector(`div#p${playerid}-${coords[0]}-${coords[1]}`);
        if (attackStatus) {
            grid.classList.add(attackStatus);
        }
    }

    return { renderGameboard }
})();

export default DOMManipulator;