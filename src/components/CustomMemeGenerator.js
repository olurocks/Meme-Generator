import React, { useState, useRef, useEffect } from "react";
import Meme from "./Meme.js";
import html2canvas from 'html2canvas';
// import domtoimage from 'dom-to-image';

// import { direction } from "html2canvas/dist/types/css/property-descriptors/direction.js";

const attributeOptions = {
    backgrounds: ['Backgrounds/2.png', 'Backgrounds/3.png', 'Backgrounds/plain.png'],
    bodys: ['empty.png', 'Body/chef.png', 'Body/hood.png', 'Body/plain.png', 'Body/suit.png', 'Body/sweater.png'],
    heads: ['empty.png', 'Head/afro.png', 'Head/blonde.png', 'Head/chef.png', 'Head/flat.png', 'Head/shark.png', 'Head/wiff.png',  'Head/construction.png', 'Head/crown.png', 'Head/gladiator.png', 'Head/pirate.png', 'Head/redcross.png', 'Head/sailor.png'],
    walls: ['Wall/brick.png', 'Wall/building.png', 'Wall/bus.png', 'Wall/cake.png', 'Wall/cloud.png', 'Wall/door.png', 'Wall/ice.png', 'Wall/tree.png'],
    bases: ['base.png'],
    eyes: ['empty.png', 'Eye/maxshy.png', 'Eye/mog.png', 'Eye/shades.png']
};

const iconOptions = {
    backgrounds: ['Backgrounds/2.png', 'Backgrounds/3.png', 'Backgrounds/plain.png'],
    bodys: ['empty.png', 'Body/chef.png', 'props/hood.png', 'props/plain.png', 'props/suit.png', 'Body/sweater.png'],
    heads: ['empty.png', 'props/afro.png', 'props/blonde.png', 'props/chef.png', 'props/flat.png', 'props/shark.png', 'props/wiff.png', 'props/construction.png', 'props/crown.png','props/gladiator.png', 'props/pirate.png', 'props/redcross.png', 'props/sailor.png'],
    walls: ['empty.png', 'Wall/brick.png', 'Wall/building.png', 'Wall/bus.png', 'Wall/cake.png', 'Wall/cloud.png', 'Wall/door.png', 'Wall/ice.png', 'Wall/tree.png'],
    bases: ['base.png'],
    eyes: ['empty.png', 'props/maxshy.png', 'props/mog.png', 'props/shades.png']

};

const CustomMemeGenerator = () => {
    const [meme, setMeme] = useState({
        background: attributeOptions.backgrounds[0],
        body: attributeOptions.bodys[0],
        head: attributeOptions.heads[0],
        wall: attributeOptions.walls[0],
        base: attributeOptions.bases[0],
        eye: attributeOptions.eyes[0]
    });

    const [overflowingRows, setOverflowingRows] = useState({});
    const memeRef = useRef(null);
    const downloadButtonRef = useRef(null)
    const rowRef = useRef(Object.keys(attributeOptions).reduce((acc, key) => {
        acc[key] = React.createRef();
        return acc;
    }, {}));


    const checkOverflow = () => {
        const newOverflowingRows = {};
        Object.keys(rowRef.current).forEach(key => {
            const element = rowRef.current[key].current;

            if (element && element.scrollWidth > element.clientWidth) {
                newOverflowingRows[key] = true;
            } else {
                newOverflowingRows[key] = false;
            }
        });
        setOverflowingRows(newOverflowingRows);
    };

    useEffect(() => {
        
        setTimeout(() => {
            checkOverflow();
        }, 100);
        checkOverflow();
        window.addEventListener("resize", checkOverflow);
        return () => window.removeEventListener("resize", checkOverflow);
    }, []);

        useEffect(() => {
        checkOverflow();
    }, [meme]);


    const handleAttributeChange = (attribute, value) => {
        setMeme(prevMeme => ({ ...prevMeme, [attribute]: value }));
    };

    const handleDownload = () => {
        if (memeRef.current) {
            // downloadButtonRef.current.style.display = 'none'
            html2canvas(memeRef.current, {useCORS:true, allowTaint:true, backgroundColor: null, button: null }).then(canvas => {
                const link = document.createElement('a');
                link.download = 'meme.png';
                link.href = canvas.toDataURL();
                link.click();

                // downloadButtonRef.current.style.display = "inline-flex"
                memeRef.current.style.backgroundImage = '';
            }).catch((error) => {
                console.error('Error capturing meme image', error);
                downloadButtonRef.current.style.display = "inline-flex";
                memeRef.current.style.backgroundImage = '';
            });
        }
    };

    
    
    const scrollRow = (key, direction) => {
        if (rowRef.current[key] && rowRef.current[key].current) {
            rowRef.current[key].current.scrollBy({ left: direction * 100, behavior: 'smooth' });
        }
    };

    return (
        <div className="custom-meme-generator">
            <div className="attributes-panel">
                {Object.keys(attributeOptions).map(attribute => {
                    return (
                        <div key={attribute}>
                            <h3>{attribute.charAt(0).toUpperCase() + attribute.slice(1)}</h3>
                            <div className="attribute-row-container">
                                {overflowingRows[attribute] &&(<button className="scroll-btn" onClick={() => scrollRow(attribute, -1)}>&lt;</button>)}
                                <div className="attribute-row" ref={rowRef.current[attribute]}>
                                    {attributeOptions[attribute].map((item, index) => (
                                        <img
                                            key={item}
                                            src={`${process.env.PUBLIC_URL}/images/${iconOptions[attribute][index]}`}
                                            alt={item}
                                            onClick={() => handleAttributeChange(attribute.slice(0, -1), item)}
                                            className={meme[attribute.slice(0, -1)] === item ? 'selected' : ''}
                                        />
                                    ))}
                                </div>
                                {overflowingRows[attribute] &&(<button className="scroll-btn" onClick={() => scrollRow(attribute, 1)}>&gt;</button>)}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="custom-meme-wrapper">
                <div ref={memeRef} id="meme-canvas" className="meme-wrapper" style={{ paddingBottom: '20px' }}>
                {meme && <Meme {...meme} />}
                </div>
                <button className="custom-btn" ref={downloadButtonRef} onClick={handleDownload}>Download Meme</button>

            </div>
        </div>
    );
};


export default CustomMemeGenerator;
