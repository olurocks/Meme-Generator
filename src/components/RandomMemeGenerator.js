import React, { useState } from "react";
import Meme from "./Meme.js"

// const attributes = {
//     backgrounds: ['space', 'forest', 'beach'],
//     bodys: ['spacesuit', 'superhero', 'pirate'],
//     jetpacks: ['classic', 'futuristic', 'steampunk']
//   };

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

    const handleGenerate = () => { 
        const memeAttributes = generateRandomMeme()
        setMeme(memeAttributes)
    };



    return (
        <div className="random-meme-generator">
        <button onClick={handleGenerate}>Generate Random Meme</button>
        {meme && <Meme {...meme} />}
        </div>
    );
};

export default RandomMemeGenerator;