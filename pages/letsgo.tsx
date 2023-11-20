/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, CSSProperties } from 'react';

const imageStyle = () => ({
  display: 'inline',
  width: '300px',
  height: 'auto' 
} as CSSProperties)

const x = {
  height:10,
  ...imageStyle()
}

export default function Letsgo() {
  const [fact, setFact] = useState('');
  const [isLoading, setIsLoading] = useState(false);



  const fetchRandomFact = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://catfact.ninja/fact?max_length=140');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    
    fetchRandomFact();
  }, []); 

  
  const imageToWordFactory = ( image:string,words:string[] ) => ({
    image,
    words
  })
  type ImageToWordsType = { image:string,words:string[] }
  const imageToWordListMapping: ImageToWordsType[] = [
    imageToWordFactory('/media/cats.png',[
      'lover',
      'companion',
      'mates',
      'partner',
      'love'
    ]),
    imageToWordFactory('/media/cat.png',[
      'paw',
      'paws',
      'bean',
      'beans',
      'toe',
      'toes'
    ]),
    imageToWordFactory('/media/babycat.png',[
      'nap',
      'sleep',
      'dreams',
    ]),
    imageToWordFactory('/media/fish.png',[
      'fish',
      'sardine',
    ]),
    imageToWordFactory('/media/petcat.png',[
      'pet',
      'stroke',
      'fur',
      'purr'
    ]),
    imageToWordFactory('/media/kitten.png',[
      'baby',
      'kitt'
    ]),
    imageToWordFactory('/media/maincat.png',[
      'cat',
    ]),
  ]
  
  const makeWordImageMapping = () => {
    let wordImageMapping:{[key:string]:string} = {} 
    for(let imgToWrd of imageToWordListMapping){
      for(let wrd of imgToWrd.words){
        wordImageMapping[wrd] = imgToWrd.image
      }
    }
    return wordImageMapping
  }

  const wordImageMapping = makeWordImageMapping()
  /*const wordImageMapping: {[key:string]:string} = {
    paw: '/media/cat.png', paws: '/media/cat.png', beans: '/media/cat.png',
    sleep: '/media/babycat.png', naps: '/media/babycat.png', sleeps: '/media/cat.png', rest: '/media/cat.png',
    sardine: '/media/fish.png', fish: '/media/fish.png',
    mates: '/media/cats.png', partner: '/media/cats.png', companion: '/media/cats.png', lover: '/media/cats.png',
  }*/


 
  const hasSpecificWord = (fact: string) => {
    return Object.keys(wordImageMapping).filter((word) => fact.toLowerCase().includes(word));
  };
  //condition ? ifTrueExperssion : ifFalseExpression;
  /*averiguar como pingo hacer para mostrar una segunda img con palabras especificas distintas
     ej: si hasSpecificWord contiene a entonces muestra a.img, si contiene b muestra b.img , etc  
  */

  const ImageForWord = () => {
    const firstAppearingWordKey = Object.keys(wordImageMapping).find(word => fact.toLowerCase().includes(word) )

    return <>{ firstAppearingWordKey && <div className= "box">
          <img src={wordImageMapping[firstAppearingWordKey]} alt={firstAppearingWordKey} style={imageStyle()} />
        </div> }</>
    }

  return (
    <>
      <div className="fondo" style={{ minHeight: '100vh' }}>
        <div className="motherbox">
          <div className="box"  style={{ display: 'flex', flexDirection: 'column',   justifyContent: 'center', alignItems: 'center' }}>
            <div>
              {fact && (
                <p style={{textAlign:'left', fontFamily:'Bebas Neue', fontSize: '50px',display: 'flex', flexDirection: 'column',   justifyContent: 'center', alignItems: 'center', padding:'10px'}}>{fact}</p>
              )}
            </div>
            <br />
            <button onClick={fetchRandomFact} disabled={isLoading} style={{fontSize:'26px'}}>
              {isLoading ? 'Loading...' : 'Get Random Fact'}
            </button>
          </div>
          {fact && <ImageForWord/>}
          </div>
        </div>
    </>
  );
}