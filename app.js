let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true//playerX, playerO
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const restGame = () => {
    turnO = true;
    enabledBoxes;
    msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if (turnO) {
            //playerO
            box.innerText = "0";
            turnO = false;
        }
        else
        {
            //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
};

const showWinner = (winner) => {
    msg.innerText = 'Congratulations, Winner is ${winner}';
    msgContainer.classList.remove("hide")
};
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos1Va2 = boxes[pattern[1]].innerText;
        let pos1Va3 = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val  === pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }

    }
    
};
resetBtn.addEventListener("click", ResetGame);

