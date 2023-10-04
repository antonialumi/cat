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
            <div className="container">
                <p className="box">AAAAAAAA letsgo</p>
                <div className="box">
                    <button className="grid-item" onClick={e => pressWordButton()}>
                        Word
                    </button>
                    <div className="grid-item">{selectedPhrase}</div>
                </div>
                <br />
                </div>
        </div></>
    
    )

}