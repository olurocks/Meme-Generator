import React, { useState } from "react";

import Meme from "./Meme";

const CustomMemeGenerator = () => {
    const [ attributes, setAttributes ] = useState({
        background: 'Backgrounds/2.png',
        body: 'Body/plain.png',
        head: 'Head/mog.png',
        wall: 'Wall/building.png',
        base: 'base.png'
    });

    // const handleAttributeChange = (e) => {
    //     const { name, value } = e.target;
    //     setAttributes((prevAttributes) => ({
    //         ...prevAttributes,
    //         [name]: value,
    //     }));
    // };

    return (
        <div>
            {/* <select name="background" onChange={handleAttributeChange}>
                <option value="Backgrounds/2.png">Bg 1</option>
                <option value="Backgrounds/3.png">Bg 2</option>
                <option value="Backgrounds/plain.png">Bg 3</option>
            </select>

            <select name="body" onChange={handleAttributeChange}>
                <option value="Body/chef.png">body1</option>
                <option value="Body/hood.png">body2</option>
                <option value="Body/plain.png">body3</option>
                <option value="Body/suit.png">body4</option>
                <option value="Body/sweater.png">body5</option>
            </select>

            <select name="head" onChange={handleAttributeChange}>
                <option value="Head/Afro.png">head1</option>
                <option value="Head/blonde.png">head 2</option>
                <option value="Head/flat.png">head3</option>
                <option value="Head/maxshy.png">head 4</option>
                <option value="Head/mog.png">head 5</option>
                <option value="Head/shades.png">head 6</option>
                <option value="Head/shark.png">head 7</option>
                <option value="Head/wiff.png">head 8</option>
                <option value="Head/chef.png">head 9</option>
            </select>

            <select name="wall" onChange={handleAttributeChange}>
                <option value="Wall/brick.png"></option>
                <option value="Wall/building.png"></option>
                <option value="Wall/bus.png"></option>
                <option value="Wall/cloud.png"></option>
                <option value="Wall/door.png"></option>
                <option value="Wall/ice.png"></option>
                <option value="Wall/tree.png"></option>
                <option value="Wall/cake.png"></option>
            </select> */}
            <div className="custom-meme-generator">
                <div className="attributes-panel">
                    <h3>Backgrounds</h3>
                    <div className="attribute-row">
                        <img src="./images/Backgrounds/2.png" alt ="background1" onClick={()=>setAttributes({...attributes, background: 'Backgrounds/2.png'})} />
                        <img src="./images/Backgrounds/3.png" alt ="background2" onClick={()=>setAttributes({...attributes, background: 'Backgrounds/3.png'})} />
                        <img src="./images/Backgrounds/plain.png" alt ="background1" onClick={()=>setAttributes({...attributes, background: 'Backgrounds/plain.png'})} />
                    </div>

                    <h3>Base</h3>
                    <div className="attribute-row">
                        <img src="./images/base.png" alt ="base" onClick={()=>setAttributes({...attributes, base: 'base.png'})} />
                    </div>

                    <h3>Outfits</h3>
                    <div className="attribute-row">
                        <img src="./images/body/chef.png" alt ="body1" onClick={()=>setAttributes({...attributes, body: 'body/chef.png'})} />
                        <img src="./images/body/hood.png" alt ="body2" onClick={()=>setAttributes({...attributes, body: 'body/hood.png'})} />
                        <img src="./images/body/plain.png" alt ="body3" onClick={()=>setAttributes({...attributes, body: 'body/plain.png'})} />
                        <img src="./images/body/suit.png" alt ="body4" onClick={()=>setAttributes({...attributes, body: 'body/suit.png'})} />
                        <img src="./images/body/sweater.png" alt ="body" onClick={()=>setAttributes({...attributes, body: 'body/sweater.png'})} />
                    </div>

                    <h3>Head</h3>
                    <div className="attribute-row">
                        <img src="./images/head/chef.png" alt ="head1" onClick={()=>setAttributes({...attributes, head: 'head/chef.png'})} />
                        <img src="./images/head/blonde.png" alt ="head2" onClick={()=>setAttributes({...attributes, head: 'head/blonde.png'})} />
                        <img src="./images/head/afro.png" alt ="head3" onClick={()=>setAttributes({...attributes, head: 'head/afro.png'})} />
                        <img src="./images/head/flat.png" alt ="head4" onClick={()=>setAttributes({...attributes, head: 'head/flat.png'})} />
                        <img src="./images/head/shades.png" alt ="head" onClick={()=>setAttributes({...attributes, head: 'head/shades.png'})} />
                        <img src="./images/head/maxshy.png" alt ="head" onClick={()=>setAttributes({...attributes, head: 'head/maxshy.png'})} />
                        <img src="./images/head/mog.png" alt ="head" onClick={()=>setAttributes({...attributes, head: 'head/mog.png'})} />
                        <img src="./images/head/shark.png" alt ="head" onClick={()=>setAttributes({...attributes, head: 'head/shark.png'})} />
                        <img src="./images/head/wiff.png" alt ="head" onClick={()=>setAttributes({...attributes, head: 'head/wiff.png'})} />
                    </div>

                    <h3>Wall</h3>
                    <div className="attribute-row">
                        <img src="./images/wall/brick.png" alt ="wall1" onClick={()=>setAttributes({...attributes, wall: 'wall/brick.png'})} />
                        <img src="./images/wall/building.png" alt ="wall2" onClick={()=>setAttributes({...attributes, wall: 'wall/building.png'})} />
                        <img src="./images/wall/bus.png" alt ="wall3" onClick={()=>setAttributes({...attributes, wall: 'wall/bus.png'})} />
                        <img src="./images/wall/cake.png" alt ="wall4" onClick={()=>setAttributes({...attributes, wall: 'wall/cake.png'})} />
                        <img src="./images/wall/cloud.png" alt ="wall" onClick={()=>setAttributes({...attributes, wall: 'wall/cloud.png'})} />
                        <img src="./images/wall/door.png" alt ="wall" onClick={()=>setAttributes({...attributes, wall: 'wall/door.png'})} />
                        <img src="./images/wall/ice.png" alt ="wall" onClick={()=>setAttributes({...attributes, wall: 'wall/ice.png'})} />
                        <img src="./images/wall/tree.png" alt ="wall" onClick={()=>setAttributes({...attributes, wall: 'wall/tree.png'})} />
                    </div>
                </div>

            </div>
            <Meme {...attributes} />
        </div>
    )
}

export default CustomMemeGenerator;

