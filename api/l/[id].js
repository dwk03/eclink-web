const links = {
    // random link
    // not generate by ai, bot.
    "ad92uda": "https://archive.org/details/en_windows_xp_professional_with_service_pack_3_x86_cd_vl_x14-73974_202108",
    "tfi6skg": "https://github.com/imearttchcorez",
    "tr1akf5" :"https://example.net",
    "ytmtaec" :"https://www.youtube.com/embed/WkFJ4dR_DOY", // youtube music thinking about earttchcorez
    "sp1ca95" :"https://open.spotify.com/track/13ki1jkJsRkDzNep4aN0NZ", // random
    "fja20cm": "https://music.amazon.com/albums/B0HCP6TNK6", // amazon music
    "uca204m": "null",
    "kad29vz": "https://open.spotify.com/album/23lsZhoiLqnBC6SLlRkJPn", // new release
    "ec.spotify.artist" : "https://open.spotify.com/artist/7MbsIqyRcRoDsF87UVswrw", // my spotify artist
   "ecl.web": "https://ecl-web.netlify.app" // static-page of eclinkweb.vercel.app
};

module.exports = (req, res) => {
    const { id } = req.query;

    const url = links[id];

    if (!url) {
        return res.status(404).send("404 - Link not found. Please try again");
    }

    res.redirect(302, url);
};
