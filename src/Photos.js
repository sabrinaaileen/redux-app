import React, { useState, useEffect } from "react";

export default function Photos() {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let getRandomPhoto = async () => {
      setLoading(true);
      try {
        const apiAccKey = "4718yBpatsOtuRIjweLSSJE8RLNUB6hyPCdlruuAAtg";
        let response = await fetch(
          `https://api.unsplash.com/photos/random/?client_id=${apiAccKey}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json();
        console.log("Fetched data: ", data);
        setPhoto(data);
      } catch (error) {
        console.error("Error fetching quote: ", error);
        setError("Failed to fetch the quote. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    getRandomPhoto();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <p>The photos will be displayed here</p>
      <img className="Photo" alt="random photo" src={photo.urls.regular} />
    </div>
  );
}
