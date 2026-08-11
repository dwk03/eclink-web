const http = require("http");

const links = {
    "ad92uda": "https://archive.org/details/en_windows_xp_professional_with_service_pack_3_x86_cd_vl_x14-73974_202108",
    "tfi6skg": "https://github.com/imearttchcorez",
    "qw1fah8": "https://archive.org/details/windows-me-iso",
    "tr1akf5": "https://example.net",
    "ytmtaec" :"https://www.youtube.com/embed/WkFJ4dR_DOY", // youtube music thinking about earttchcorez
    "sp1ca95" :"https://open.spotify.com/track/13ki1jkJsRkDzNep4aN0NZ",// random
    "fja20cm": "https://music.amazon.com/albums/B0HCP6TNK6",
    "uca204m": "null",
    "kad29vz": "https://open.spotify.com/album/23lsZhoiLqnBC6SLlRkJPn",
    "ec.spotify.artist" : "https://open.spotify.com/artist/7MbsIqyRcRoDsF87UVswrw" // my spotify artist
};

const server = http.createServer((req, res) => {
    if (req.url.startsWith("/l/")) {
        const id = req.url.slice(3);

        if (links[id]) {
            res.writeHead(302, {
                Location: links[id]
            });
            return res.end();
        }

        res.writeHead(404);
        return res.end("404 - Link not found. Please try again");
    }

    res.writeHead(200);
    res.end("Hello!");
});

server.listen(3000, () => {
    console.log("http://localhost:3000");
});
