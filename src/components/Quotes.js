import React, { useState, useEffect } from 'react';
import './Quotes.css';

function Quotes() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchQuotes = async () => {
    try {
      const res = await fetch(
        'https://api.api-ninjas.com/v1/quotes',
        {
          headers: {
            'X-Api-Key': 'wYepI3uwxej9CnQYOZLR8bLI0MclShYFdjAbttfI',
          },
        },
      );

      const data = await res.json();
      setError(null);
      setQuote(data[0].quote);
      setAuthor(data[0].author);
      setCategory(data[0].category);
      setError(null);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchQuotes();
  }, []);

  return (
    <div className="quotes-container">
      <div className="quotes">
        {
        loading || error ? (
          <div className={loading ? 'loading' : 'error'}>
            {loading ? <div className="loader" /> : `Error: ${error}` }
          </div>
        ) : (
          <>
            {quote}
            <div className="author_category">
              -
              {' '}
              {author}
              {' '}
              (
              {category}
              )
            </div>
          </>
        )
      }
      </div>
    </div>
  );
}

export default Quotes;
