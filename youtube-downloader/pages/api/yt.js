const fs = require('fs');
const ytdl = require('ytdl-core');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above



  export default async function handler(req, res) {
    // if (req.method === 'GET') {
      // Process a POST request
      var url = 'http://www.youtube.com/watch?v=aqz-KE-bpKQ';
      // // res.header('Content-Disposition', 'attachment; filename="video.mp4"');
      // // ytdl(URL, {
      // //     format: 'mp4'
      // //     }).pipe(res);
      // if(!ytdl.validateURL(url)) {
      //   return res.sendStatus(400);
      // }
      let title = 'video';
  
      await ytdl.getBasicInfo(url, {
        format: 'mp4'
      }, (err, info) => {
        title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
      });
  
      res.setHeader('Content-Disposition', `attachment; filename="${title}.mp4"`);
      ytdl(url, {
        format: 'mp4',
      }).pipe(fs.createWriteStream('video.mp4'));
      // ytdl(URL)
      // .pipe(fs.createWriteStream('video.mp4'));
      res.status(200).json({ result: true })
    // } else {
    //   // Handle any other HTTP method
    //   res.status(400).json({ result: false })
    // }
  }