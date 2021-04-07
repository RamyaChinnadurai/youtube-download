const fs = require('fs');
const ytdl = require('ytdl-core');

  export default async function handler(req, res) {
    if (req.method === 'POST') {
      try{
        var url = req.body.url;
        const videoInfo = await ytdl.getBasicInfo(url, {
        format: 'mp4'
      }, (err, info) => {
        title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
        return title;
      });
      const title = videoInfo.videoDetails.title.replace(/[^\x00-\x7F]/g, "") || "video.mp4";
      encodeURI(title)
      res.setHeader('content-type', "video/mp4");
      // await ytdl(url, {
      //   format: 'mp3',
      //   filter: 'audioonly',
      // }).pipe(res);
      await ytdl(url).pipe(res);
      // res.status(200).json({ result: true, title })
      }catch(err){
        console.log('err: ', err);

      }
      
    } else {
      res.status(400).json({ result: false })
    }
  }