/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Link from "next/link";


const randomWords = ["potato","spaghetti","cat","clock"];



export default function Letsgo(){
    const [selectedPhrase,setSelectedPhrase] = useState(' ')
    const [showImage, setShowImage] = useState(false);

    const wordImageMapping: Record<string, string> = {
        potato: 'potato.jpg',
        spaghetti: 'spaghetti.jpg',
        cat: '/media/cat.png',
        clock: 'clock.jpg',
      };

    function giveMeAWord(){
        const randomNumber = Math.floor(Math.random() * randomWords.length)
        return randomWords[randomNumber]
    }

    const pressWordButton = () => {
        console.log('button was pressed');
        const word = giveMeAWord();
        setSelectedPhrase(word);

        if(word in wordImageMapping){
            setShowImage(true);
        }
        setShowImage(false)
        }

    return (
        <><div className="fondo" style={{ minHeight: '100vh' }}>
            <div className="motherbox">
            <div className="box">
                    {selectedPhrase}
                    <br />
                    <button onClick={e => pressWordButton()}>
                    Press to get a fact
                    </button> 
                    <br />
                    <div> 
            </div>
                </div>
                <div className="box"style={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
                    <img
                    src={wordImageMapping[selectedPhrase]}
                    alt={selectedPhrase}
                    style={{ width: '360px', height: 'auto', alignContent: 'center', padding: '0px', margin:'0px' }} 
                  />
                </div>
                <br />
                </div>
        </div></>
    
    )

}