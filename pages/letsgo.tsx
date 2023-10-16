/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';

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

  const specificWords = ['bean','beans','toe','toes','paw']
  const hasSpecificWord = specificWords.some((word) => fact.toLowerCase().includes(word));
  //condition ? ifTrueExperssion : ifFalseExpression;
  /*averiguar como pingo hacer para mostrar una segunda img con palabras especificas distintas
     ej: si hasSpecificWord contiene a entonces muestra a.img, si contiene b muestra b.img , etc  
  */
  return (
    <>
      <div className="fondo" style={{ minHeight: '100vh' }}>
        <div className="motherbox">
          <div className="box"  style={{ display: 'flex', flexDirection: 'column',   justifyContent: 'center', alignItems: 'center' }}>
            <div>
              {fact && (
                <p style={{textAlign:'left', fontFamily:'Gravitas One', fontSize: '30px',display: 'flex', flexDirection: 'column',   justifyContent: 'center', alignItems: 'center', padding:'10px'}}>{fact}</p>
              )}
            </div>
            <br />
            <button onClick={fetchRandomFact} disabled={isLoading} style={{fontSize:'26px'}}>
              {isLoading ? 'Loading...' : 'Get Random Fact'}
            </button>
          </div>
          <div className='box' style={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
          {hasSpecificWord && (
            <img
                    src="/media/cat.png"
                    alt="cat paw"
                    style={{ width: '360px', height: 'auto', alignContent: 'center', padding: '0px', margin:'0px' }} 
                  />
          )}
          </div>
        </div>
      </div>
    </>
  );
}
