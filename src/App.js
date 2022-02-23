import Card from "./components/Card";
import Header from "./components/Header";
import uniqid from "uniqid";
import { useEffect, useState } from "react";

function importAll(r) {
  let images = [];
  r.keys().forEach((item, index) => {
    images.push({
      name: item.replace("./", "").replace(".jpg", ""),
      src: r(item),
    });
  });
  return images;
}

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

function App() {
  const [clickedImg, setClickedImg] = useState([]);
  const [isWin, setIsWin] = useState(true);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  const cardElem = images.map((img) => (
    <Card
      key={uniqid()}
      name={img.name}
      src={img.src}
      onClick={() => clickImg(img.name)}
    />
  ));
  function clickImg(name) {
    const checkName = clickedImg.every((img) => name !== img);
    console.log(checkName);
    if (checkName) setClickedImg((prev) => [...prev, name]);
    else setClickedImg([]);
    shuffleArray(images);
    console.log(images);
  }

  useEffect(() => {
    console.log(clickedImg);
    if (cardElem.length === clickedImg.length) setIsWin(true);
  }, [clickedImg]);

  function playAgain() {
    setIsWin(false);
    setClickedImg([]);
  }
  return (
    <div className="App">
      <Header count={clickedImg.length} isWin={isWin} playAgain={playAgain} />
      <div className="card-gallery">{cardElem}</div>
    </div>
  );
}

export default App;
