import React, { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [url, setUrl] = useState("");

  const handleClick = async() => {
    const response = await fetch("http://localhost:3000/api/yt");
    // var a = document.createElement('a');
  	// 	a.href = `http://localhost:3000/video.mp4`;
  	// 	a.setAttribute('download', '');
		// a.click();
    console.log(response);
  };

  return (
    <div>
      <Head>
        <title>YT downloader by Rams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-12 flex justify-center">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h1 className="text-xl"> YT downloader </h1>
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <div className="mb-4">
                <label className="text-xl text-gray-600 justify-center">
                  Paste the youtube link
                </label>
              </div>
              <div className="flex">
              <input
                  type="text"
                  className="border-2 border-gray-300 p-2 w-full"
                  name="title"
                  id="title"
                  value={url}
                  onChange={(e)=>setUrl(e.target.value)}
                  placeholder="Paste the youtube link"
                  required
                ></input>
                <button className="p-3 flex w-full  bg-blue-500 text-white hover:bg-blue-400"> Convert video </button>
              </div>
            </div>
            <button
              className="p-3 flex w-full justify-center bg-blue-500 text-white hover:bg-blue-400"
              required
              onClick={() => handleClick()}
            >
              Download Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
