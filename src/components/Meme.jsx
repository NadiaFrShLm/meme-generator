import React from 'react';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleCahnge(event) {
    const { name, value } = event.target;
    setMeme((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          name="topText"
          placeholder="Top text"
          className="form--input"
          onChange={handleCahnge}
          value={meme.topText}
        />

        <input
          type="text"
          name="bottomText"
          placeholder="Bottom text"
          className="form--input"
          onChange={handleCahnge}
          value={meme.bottomText}
        />

        <button onClick={getMemeImage} className="form--btn">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
