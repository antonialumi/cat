import { useState } from "react";
import Home from ".";


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
        

    return (<>
        <div className="font-sans" >AAAAAAAA letsgo</div> <br/>
        <button onClick={ e => pressWordButton()}>
            Word
        </button> <br/>
        {selectedPhrase}
        <br />
        <a href="/">Home</a>
    </>)

}