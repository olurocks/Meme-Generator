import React, { useState, useRef, useEffect } from "react";
import Meme from "./Meme.js"
import html2canvas from 'html2canvas';

function getRandomElemnt(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

const generateRandomMeme = () => {
    const background = getRandomElemnt(['Backgrounds/2.png', 'Backgrounds/3.png', 'Backgrounds/plain.png']);
    const body = getRandomElemnt(['Body/chef.png', 'Body/hood.png', 'Body/plain.png', 'Body/suit.png', 'Body/sweater.png']);
    const head = getRandomElemnt(['Head/Afro.png', 'Head/blonde.png', 'Head/chef.png', 'Head/flat.png', 'Head/maxshy.png', 'Head/mog.png', 'Head/shades.png', 'Head/shark.png', 'Head/wiff.png'])
    const wall = getRandomElemnt(['Wall/brick.png', 'Wall/building.png', 'Wall/bus.png', 'Wall/cake.png', 'Wall/cloud.png', 'Wall/door.png','Wall/ice.png', 'Wall/tree.png'])
    const base = getRandomElemnt(['base.png'])
    return { background, body, head, wall, base }

}



const RandomMemeGenerator = () => {
    const [meme, setMeme] = useState(null);
    const memeRef = useRef(null)

    const handleGenerate = () => { 
        const memeAttributes = generateRandomMeme()
        setMeme(memeAttributes)
    };

    const handleDownload = () => {


        if (memeRef.current){
            html2canvas(memeRef.current, {backgroundColor: null}).then(canvas => {
            const link = document.createElement('a');
            link.download = 'meme.png';
            link.href = canvas.toDataURL();
            link.click();
                });

        }
    };

    useEffect(() => {
        handleGenerate();
    }, [])

    return (
        <div className="random-meme-generator">
            <button className="btn" onClick={handleGenerate}>Generate Random Meme</button>
            <div className="meme-wrapper" ref={memeRef} id="meme-canvas">
                {meme && <Meme {...meme} />}
            </div>
            {meme && <button className="btn" onClick={handleDownload}>Download Meme</button>}
        </div>
    );
};

export default RandomMemeGenerator;