export default function Header({ count, isWin, playAgain }) {
  return (
    <div className="header">
      <h1>Memory Game Studio Ghibli</h1>
      <p>
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      <p>{isWin ? "You Won!" : `Score: ${count}`}</p>
      {isWin ? (
        <button className="button" onClick={playAgain}>
          Play Again
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
