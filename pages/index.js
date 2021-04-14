import React, { useState, useEffect } from "react";
import Head from "next/head";
import { FiDownloadCloud } from "react-icons/fi";
import download from 'downloadjs';

const ytApiKey = process.env.YOUTUBEAPI;


export default function Home() {
  const [url, setUrl] = useState("");
  const [ info, setInfo ] = useState(null);

  const liveDomain = "https://youtube-downloader-psi.vercel.app";
  const localDomain = "http://localhost:3000";

  const domain = liveDomain;
  
  const getTitle = async (videoID) => {
      const youtubeAPI = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&fields=items(id%2Csnippet)&key=${ytApiKey}`;
      let response = videoID && await fetch(youtubeAPI);
      const res    = await response.json(); 
      const title  = res.items[0].snippet.title;
      return title;
  }

  useEffect(()=>{
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(err => console.error("Service worker registration failed", err))
    } else {
        console.log("Service worker not supported");
    }
  },[])

  const getVideoID = (url) => {
    if(url.match(/watch/)){
      const videoID = url.split("/")[3].split("?")[1].split("=")[1];
      return videoID;
    }else if(url.match(/youtu.be/)){
      const videoID = url!="" && url.split("/")[3];
      return videoID
    }
  }
  
  const handleMp4 = async () => {
    const videoID = getVideoID(url);
    setInfo("Processing the video...");
    if(videoID){
      const title = await getTitle(videoID);
      try{
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url,type:"mp4"})
        };
        fetch(`${domain}/api/yt`, requestOptions)
        .then( res => res.blob() )
        .then( blob => {
          const sizeInBytes = blob.size;
          console.log('sizeInBytes: ', sizeInBytes);
          if(sizeInBytes <=0){
            setInfo("Unable to download! Maybe File size is too high. Try to download video less than 5MB");
          }else{
            download(blob,`${title}.mp4`,"video/mp4");
            setInfo("Ready for download!");
          }
        });
      }
      catch(err){
        setInfo("Unable to download! Maybe File size is too high. Try to download video less than 5MB");
      }
    }else{
      setInfo("Invalid URL");
    }
    
  }
  
  const handleMp3 = async () => {
    const videoID = getVideoID(url);
    setInfo("Processing the video...");
    if(videoID){
      const title = await getTitle(videoID);
      try{
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url,type:"mp3"})
        };
        fetch(`${domain}/api/yt`, requestOptions)
        .then( res => res.blob() )
        .then( blob => {
          const sizeInBytes = blob.size;
          console.log('sizeInBytes: ', sizeInBytes);
          if(sizeInBytes<=0){
            setInfo("Unable to download! Maybe File size is too high. Try to download video less than 5MB");
          }else{
            download(blob,`${title}.mp3`,"audio/mpeg");
            setInfo("Ready for download!");
          }
        });
      }
      catch(err){
        console.log('err: ', err);
      }
    }else{
      setInfo("Invalid URL");
    }
  }

  return (
    <div>
      <Head>
        <title>YT downloader</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className="py-12 w-full  h-screen">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 w-full relative top-1/4">
          <h3 className="text-4xl flex justify-center"> <FiDownloadCloud/> &nbsp; YT DOWNLOADER </h3>
          <h4 className="text-xs py-1 flex justify-center"> Sample video link : https://youtu.be/videoID </h4>
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg w-full">
            <div className="p-6 bg-white border-b border-gray-200 flex justify-center w-full">
              <div className="flex w-4/5">
                <input
                    type="text"
                    className="border-2 m-1.5 border-gray-300 p-2 w-full"
                    name="title"
                    id="title"
                    value={url}
                    onChange={(e)=>{
                      setInfo(null);
                      setUrl(e.target.value)}
                    }
                    placeholder="Paste the valid youtube link"
                    required
                ></input>
              </div>
            </div>
            <div className="p-3 flex w-full justify-center">
            <button
              className="p-3 m-1.5 flex w-56 justify-center bg-blue-900 text-white hover:bg-blue-600"
              required
              onClick={() => handleMp3()}
            >
              Download mp3
            </button>
            <button
              className="p-3 m-1.5 flex w-48 justify-center bg-blue-900 text-white hover:bg-blue-600"
              required
              onClick={() => handleMp4()}
            >
              Download mp4
            </button>
            </div>
          </div>
          { info && <h3 className="flex justify-center p-3 m-1.5 "> {info} </h3>}
        </div>
      </div>
    </div>
  );
}
