import { useState } from "react";
import Link from "next/link";



const randomWords = ["potato","spaghetti","cat","clock"];



export default function Letsgo(){
    const [selectedPhrase,setSelectedPhrase] = useState('hola')

    function giveMeAWord(){
        const randomNumber = Math.floor(Math.random() * randomWords.length)
        return randomWords[randomNumber]
    }

    const pressWordButton = () => {
        console.log('button was pressed')
        setSelectedPhrase(giveMeAWord())
    }
        

    return (
        <><div className="fondo" style={{ minHeight: '100vh' }}>
            <div className="motherbox">
                <h1 className="box">AAAAAAAA letsgo</h1>
                <div className="box">
                    <button onClick={e => pressWordButton()}>
                        Word
                    </button>
                    <div>{selectedPhrase}</div>
                </div>
                <br />
                </div>
        </div></>
    
    )

}