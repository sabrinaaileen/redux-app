import React, { useState, useEffect } from "react";
import "./CSS/Quote.css";

export default function SecondQuote() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getRandomQuote = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://go-quote.azurewebsites.net/api/quote/random"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched data: ", data);
        setQuote({
          text: data.text,
          author: data.author,
        });
      } catch (error) {
        console.error("Error fetching quote: ", error);
        setError(
          "Failed to fetch the quote. Please try again. Update: The API is currently not working."
        );
      } finally {
        setLoading(false);
      }
    };
    getRandomQuote();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1 className="quote-heading">Your Quote</h1>
      <p className="quote-paragraph">"{quote.text}"</p>
      <p className="quote-author">- {quote.author}</p>
    </div>
  );
}
