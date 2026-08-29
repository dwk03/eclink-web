const http = require("http");
// links
const links = {
   
  "ad92uda": "https://archive.org/details/en_windows_xp_professional_with_service_pack_3_x86_cd_vl_x14-73974_202108",
    "ytmtaec" :"https://www.youtube.com/watch?v=WkFJ4dR_DOY", 
    "ta.spotify" :"https://open.spotify.com/track/13ki1jkJsRkDzNep4aN0NZ", 
    "amznsic1": "https://music.amazon.com/albums/B0HCP6TNK6", 
    "icptp.yt": "https://www.youtube.com/watch?v=SJFk-d0mxIo",
    "icptp.spotify": "https://open.spotify.com/album/23lsZhoiLqnBC6SLlRkJPn", 
    "ec.spotify.artist" : "https://open.spotify.com/artist/7MbsIqyRcRoDsF87UVswrw", 
    "applemusic" : "https://music.apple.com/us/song/thinking-about/6802273553",
    "relaxing.for.you": "https://www.youtube.com/watch?v=is8UDe2PhKQ",
   "hellohello":"https://www.google.com/search?sa=X&sca_esv=9903076582d09d59&hl=en&sxsrf=APpeQnspiH1VW81YF2rd3nkuwAgW56QlOw:1788015196379&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832cY0rzciwbWdjW1sV3VNzLwFidMQk-ln2aImlXwRYpp2eZropjFKX5yTo8xG7PVx_Ygld5qquQSBgve2IY4xgktHHPHIvfFrzpT3vWjeUSTHq9byAXChwXqDBit7prTEgBRTHFGQ6jRmk82xFcPxFD_1gm6jg8nSeYytdzzgjndHFm2Dcg&q=scary+video+for+meme&ved=2ahUKEwi994fVi8aWAxXpsVYBHSnfMkQQtKgLegQIFBAB&biw=1515&bih=675&dpr=0.9",

};
// server
const server = http.createServer((req, res) => {
    if (req.url.startsWith("/l/")) {
        const id = req.url.slice(3);

        if (links[id]) {
            res.writeHead(302, {
                Location: links[id]
            });
            return res.end();
        }
         // link not available
        res.writeHead(404);
        return res.end("404 - Link not found. Please try again");
    }

    res.writeHead(200);
    res.end("👁👄👁");
});
// localhost
server.listen(3000, () => {
    console.log("http://localhost:3000");
});
