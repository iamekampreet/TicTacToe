import React, { useState, useEffect } from "react";

import ButtonUI from "./Button";

const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const ButtonsGrid = ({ didSomeoneWin, onWinning }) => {
  const [player, setPlayer] = useState("X");
  const [buttonStates, setButtonStates] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  useEffect(() => {
    if (!didSomeoneWin) {
      for (let p of ["X", "O"]) {
        winningPositions.find((arrayOfWinPos) => {
          if (
            buttonStates[arrayOfWinPos[0]] === p &&
            buttonStates[arrayOfWinPos[1]] === p &&
            buttonStates[arrayOfWinPos[2]] === p
          ) {
            setButtonStates((prev) => {
              prev[arrayOfWinPos[0]] = p + " ";
              prev[arrayOfWinPos[1]] = p + " ";
              prev[arrayOfWinPos[2]] = p + " ";

              return prev.map((val) => (val === "" ? " " : val));
            });
            onWinning(p + " won!");
            return true;
          }

          return false;
        });
      }
    }
  }, [buttonStates, onWinning, didSomeoneWin]);

  const buttonClickHandler = (index) => {
    setButtonStates((b) => {
      b[index] = player;
      return b.slice();
    });

    setPlayer((p) => (p === "X" ? "O" : "X"));
  };

  return (
    <div className="gameFlexBox">
      {buttonStates.map((v, i) => (
        <ButtonUI
          valueAndIndex={{ v, i }}
          key={i}
          onClick={buttonClickHandler}
        />
      ))}
    </div>
  );
};

export default ButtonsGrid;
