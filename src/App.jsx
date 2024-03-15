import { useEffect, useState } from "react";
import api_keys_data from "../api_keys.json";

function App() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [captionId, setCaptionId] = useState("");

  const API_KEY = api_keys_data.api_key[0].key;
  const VIDEO_ID = "S1rnfgxoMvU";

  const getCaptionId = () => {
    // Example: Fetch video information
    fetch(
      `https://www.googleapis.com/youtube/v3/captions?part=id&videoId=${VIDEO_ID}&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCaptionId(data.items[0].id);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getCaptions = () => {
    // Example: Fetch video information
    fetch(
      `https://www.googleapis.com/youtube/v3/captions/${VIDEO_ID}?key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getCaptionId();
    setUrl("");
  };

  useEffect(() => {
    getCaptions();
    setSummary(captionId);
  }, [captionId]);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <p>Api Key : {API_KEY}</p>
        <h1 className="text-5xl text-center  font-bold text-red-500">
          Video Summarizer
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center"
        >
          <input
            name="videoUrl"
            value={url}
            onChange={handleInputChange}
            placeholder="Your Youtube URL"
            className="border-2 border-gray-300 w-2/3 h-14 rounded pl-4 mt-10"
          />
          <button
            type="submit"
            className="mt-10 px-5 py-3 rounded text-white bg-red-500 hover:bg-red-600 duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Summarize
          </button>
        </form>
        {summary && (
          <div>
            <h2>Summary :</h2>
            <p>{summary}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
