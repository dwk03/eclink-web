const links = {
    // random link
    // not generate by ai, bot.
   
  "ad92uda": "https://archive.org/details/en_windows_xp_professional_with_service_pack_3_x86_cd_vl_x14-73974_202108",

    "ytmtaec" :"https://www.youtube.com/watch?v=WkFJ4dR_DOY", 
    
    "ta.spotify" :"https://open.spotify.com/track/13ki1jkJsRkDzNep4aN0NZ", 
    "amznsic1": "https://music.amazon.com/albums/B0HCP6TNK6", 
    "applemusic" : "https://music.apple.com/us/song/thinking-about/6802273553"
    // i can't play the piano on streamming musics
    "icptp.yt": "https://www.youtube.com/watch?v=SJFk-d0mxIo",
    "icptp.spotify": "https://open.spotify.com/album/23lsZhoiLqnBC6SLlRkJPn", 
    // uhm
    "ec.spotify.artist" : "https://open.spotify.com/artist/7MbsIqyRcRoDsF87UVswrw", 
   "relaxing.for.you": "https://www.youtube.com/watch?v=is8UDe2PhKQ", //pls don't open
    "hellohello": "https://www.google.com/search?sa=X&sca_esv=9903076582d09d59&hl=en&sxsrf=APpeQnspiH1VW81YF2rd3nkuwAgW56QlOw:1788015196379&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832cY0rzciwbWdjW1sV3VNzLwFidMQk-ln2aImlXwRYpp2eZropjFKX5yTo8xG7PVx_Ygld5qquQSBgve2IY4xgktHHPHIvfFrzpT3vWjeUSTHq9byAXChwXqDBit7prTEgBRTHFGQ6jRmk82xFcPxFD_1gm6jg8nSeYytdzzgjndHFm2Dcg&q=scary+video+for+meme&ved=2ahUKEwi994fVi8aWAxXpsVYBHSnfMkQQtKgLegQIFBAB&biw=1515&bih=675&dpr=0.9",

};

module.exports = (req, res) => {
    const { id } = req.query;

    const url = links[id];

    if (!url) {
        return res.status(404).send("404 - Link not found. Please try again");
    }

    res.redirect(302, url);
};
