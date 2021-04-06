const fs = require('fs');
const ytdl = require('ytdl-core');

  export default async function handler(req, res) {
    if (req.method === 'POST') {
      var url = req.body.url;
      const videoInfo = await ytdl.getBasicInfo(url, {
        format: 'mp4'
      }, (err, info) => {
        title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
        return title;
      });
      const title = videoInfo.videoDetails.title || "video.mp4";
      const videoUrl = url;
      await ytdl(url, {
        format: 'mp3',
        filter: 'audioonly',
      }).pipe(fs.createWriteStream(`public/${title}.mp3`));
      await ytdl(url).pipe(fs.createWriteStream(`public/${title}.mp4`));
      res.status(200).json({ result: true, title })
    } else {
      res.status(400).json({ result: false })
    }
  }