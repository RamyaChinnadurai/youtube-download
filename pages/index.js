import React, { useState } from "react";
import Head from "next/head";
import { FiDownloadCloud } from "react-icons/fi";


export default function Home() {
  const [url, setUrl] = useState("");
  const [ downloadLink, setDownloadedLink ] = useState("");

//https://youtu.be/eYq7WapuDLU
  const handleClick = async() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    };
    const response = await fetch("http://localhost:3000/api/yt", requestOptions);
    const res = await response.json(); 
    console.log('res: ', res);
    const title = res.title;
    console.log('title: ', title);
    setDownloadedLink(title);
  };

  const handleMp4 = () => {
     let a = document.createElement('a');
  	  	 a.href = `http://localhost:3000/${downloadLink}.mp4`;
         console.log('downloadLink: ', downloadLink);
         a.setAttribute('download', `${downloadLink}.mp4`);
         a.click();
  }
  
  const handleMp3 = () => {
     let a = document.createElement('a');
  	  	 a.href = `http://localhost:3000/${downloadLink}.mp3`;
         console.log('downloadLink: ', downloadLink);
         a.setAttribute('download', `${downloadLink}.mp3`);
         a.click();
  }

  return (
    <div>
      <Head>
        <title>YT downloader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-12 w-full  h-screen">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 w-full relative top-1/4">
          <h1 className="text-4xl flex justify-center"> <FiDownloadCloud/> &nbsp; YT DOWNLOADER </h1>
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg w-full">
            <div className="p-6 bg-white border-b border-gray-200 flex justify-center w-full">
              <div className="flex w-4/5">
                <input
                    type="text"
                    className="border-2 m-1.5 border-gray-300 p-2 w-4/5"
                    name="title"
                    id="title"
                    value={url}
                    onChange={(e)=>setUrl(e.target.value)}
                    placeholder="Paste the valid youtube link"
                    required
                  ></input>
               <button
                className="p-3 m-1.5 flex w-1/4 justify-center bg-blue-500 text-white hover:bg-blue-400"
                required
                onClick={() => handleClick()}
              >
              Convert Video
            </button>
              </div>
            </div>
            <div className="p-3 flex w-full justify-center">
            <button
              className="p-3 m-1.5 flex w-56 justify-center bg-blue-500 text-white hover:bg-blue-400"
              required
              onClick={() => handleMp3()}
            >
              Download mp3
            </button>
            <button
              className="p-3 m-1.5 flex w-48 justify-center bg-blue-500 text-white hover:bg-blue-400"
              required
              onClick={() => handleMp4()}
            >
              Download mp4
            </button>
            </div>
          </div>
          { downloadLink!== "" && <h3 className="flex justify-center"> Video Converted. Ready for download!</h3>}
        </div>
      </div>
    </div>
  );
}
