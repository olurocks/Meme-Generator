import React, { useState, useRef, useEffect } from "react";
import Meme from "./Meme.js";
import html2canvas from 'html2canvas';

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const generateRandomMeme = () => {
  const background = getRandomElement(['Backgrounds/2.png', 'Backgrounds/3.png', 'Backgrounds/plain.png']);
  const body = getRandomElement(['Body/chef.png', 'Body/hood.png', 'Body/plain.png', 'Body/suit.png', 'Body/sweater.png']);
  const head = getRandomElement(['Head/Afro.png', 'Head/blonde.png', 'Head/chef.png', 'Head/flat.png', 'Head/maxshy.png', 'Head/mog.png', 'Head/shades.png', 'Head/shark.png', 'Head/wiff.png']);
  const wall = getRandomElement(['Wall/brick.png', 'Wall/building.png', 'Wall/bus.png', 'Wall/cake.png', 'Wall/cloud.png', 'Wall/door.png', 'Wall/ice.png', 'Wall/tree.png']);
  const base = getRandomElement(['base.png']);
  return { background, body, head, wall, base };
};

const RandomMemeGenerator = () => {
  const [meme, setMeme] = useState(null);
  const memeRef = useRef(null);
  const downloadButtonRef = useRef(null);

  const handleGenerate = () => {
    const memeAttributes = generateRandomMeme();
    setMeme(memeAttributes);
  };

  const handleDownload = () => {
    if (memeRef.current && downloadButtonRef.current) {
      const originalBackground = document.body.style.backgroundImage; // Save the original background
      downloadButtonRef.current.style.display = 'none';

      html2canvas(memeRef.current, { backgroundColor: null }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'meme.png';
        link.href = canvas.toDataURL();
        link.click();

        // Restore the original background
        document.body.style.backgroundImage = originalBackground;
        downloadButtonRef.current.style.display = 'inline-flex';
      }).catch(() => {
        // Restore the original background in case of an error
        document.body.style.backgroundImage = originalBackground;
        downloadButtonRef.current.style.display = 'inline-flex';
      });
    }
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  return (
    <div className="random-meme-generator">
      <button className="btn" onClick={handleGenerate}>Generate Random Meme</button>
      <div className="meme-wrapper" ref={memeRef} id="meme-canvas">
        {meme && <Meme {...meme} />}
      </div>
      {meme && <button className="btn" ref={downloadButtonRef} onClick={handleDownload}>Download Meme</button>}
    </div>
  );
};

export default RandomMemeGenerator;
