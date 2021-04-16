const ytdl = require('ytdl-core');
const fs = require('fs');

  export default async function handler(req, res) {
    if (req.method === 'POST') {
      try{
        const url  = req.body.url;
        const type = req.body.type;
        if(type === "mp3"){
          res.setHeader('content-type', "audio/mpeg");
          await ytdl(url, {
            format: 'mp3',
            filter: 'audioonly',
          }).pipe(res);
        }else if(type === "mp4"){
          res.setHeader('content-type', "video/mp4");
          await ytdl(url).pipe(res);
        }
      }catch(err){
        console.log('err: ', err);
      }
    } else {
      res.status(400).json({ result: false })
    }
  }