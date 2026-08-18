const links = {
    // random link
    // not generate by ai, bot.
    "ad92uda": "https://archive.org/details/en_windows_xp_professional_with_service_pack_3_x86_cd_vl_x14-73974_202108",
    "ytmtaec" :"https://www.youtube.com/watch?v=WkFJ4dR_DOY", // youtube music thinking about earttchcorez
    "sp1ca95" :"https://open.spotify.com/track/13ki1jkJsRkDzNep4aN0NZ", // random
    "amznsic1": "https://music.amazon.com/albums/B0HCP6TNK6", // amazon music
    "uca204m": "https://www.youtube.com/watch?v=SJFk-d0mxIo",
    "kad29vz": "https://open.spotify.com/album/23lsZhoiLqnBC6SLlRkJPn", 
    "ec.spotify.artist" : "https://open.spotify.com/artist/7MbsIqyRcRoDsF87UVswrw", // my spotify artist
    "🍎🎵" : "https://music.apple.com/us/song/thinking-about/6802273553"
};

module.exports = (req, res) => {
    const { id } = req.query;

    const url = links[id];

    if (!url) {
        return res.status(404).send("404 - Link not found. Please try again");
    }

    res.redirect(302, url);
};
