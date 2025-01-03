import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Quote() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRandomQuote = async () => {
      try {
        console.log("Making API call...");
        const apiKey = "d1d63a45a8e3858c871a84e3ad6b637d";
        const response = await axios.get("https://favqs.com/api/qotd", {
          headers: {
            Authorization: `Token token=${apiKey}`,
          },
        });
        console.log("API Response:", response);
        setInfo({
          quote: response.data.quote.body,
          author: response.data.quote.author,
        });
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch quote. Please try again later...");
        setLoading(false);
      }
    };
    getRandomQuote();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <p>{info.quote}</p>
      <p>{info.author}</p>
    </div>
  );
}
