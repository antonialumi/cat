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

  return (
    <>
      <div className="fondo" style={{ minHeight: '100vh' }}>
        <div className="motherbox">
          <div className="box">
            <button onClick={fetchRandomFact} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Get Random Fact'}
            </button>
            <div>
              {fact && (
                <p className="box">{fact}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
