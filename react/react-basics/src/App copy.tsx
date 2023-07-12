import "./App.css";
import {useState, useEffect} from "react";

// RULE 1: YOU HAVE TO HAVE PAGES NOT COMPONENENTS IN THIS FILE
function App() {
  const [state, setState]: any = useState(0);
  const [gameWon, setGameWon]: any = useState(false);
  const [isGameFinished, setisGameFinished]: any = useState(false);
  const [isGameStarted, setisGameStarted]: any = useState(false);
  // // return <button onClick={() => setState(state + 1)}>Count:{state}</button>;

  const gameLogic = () => {
    setState((prev: any) => prev + 1);
  };

  //
  useEffect(() => {
    if (isGameFinished) {
      if (state >= 5) {
        setGameWon(true);
      }
      setGameWon(false);
    }
  }, [isGameFinished, state]);

  const handleStartGame = () => {
    setisGameStarted(true);
    setTimeout(() => {
      // the code inside setTimeout will be trigered once 1500 miliseconds pass
      setisGameFinished(true);
    }, 2000);
  };
  const displayGameWon = () => {
    if (isGameFinished) {
      if (gameWon) {
        return <h1>YOU WON THE GAME</h1>;
      } else {
        return <h1>YOU LOST</h1>;
      }
    }
    setTimeout(() => {
      // the code inside setTimeout will be trigered once 1500 miliseconds pass
      setisGameFinished(true);
    }, 2000);
  };

  return (
    <div>
      <h1>CLICKING GAME</h1>

      {/* below will be visible only when th game is not started */}
      {!isGameStarted && (
        <button
          onClick={() => {
            handleStartGame();
          }}
        >
          START THE GAME
        </button>
      )}

      {/* the below code will be visible only when the game starts */}
      {isGameStarted && !isGameFinished && (
        <div>
          <button
            onClick={() => {
              gameLogic();
            }}
          >
            CLICK ME
          </button>
          <br />
          <br />
          <br />
          <br />
          CLICKED TIMES: {state}
        </div>
      )}
      <div>
        {displayGameWon()}
        {/* {gameWon && isGameFinished ? (
          <h1>YOU WON THE GAME YOU LOST</h1>
        ) : (
          <h1>TRY AGAIN</h1>
        )} */}
      </div>
    </div>
  );
}
export default App;
