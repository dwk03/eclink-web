const http = require("http");
// links
const links = {
   "ad92uda": "https://archive.org/details/en_windows_xp_professional_with_service_pack_3_x86_cd_vl_x14-73974_202108"
}
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
         // link not available error
        res.writeHead(404);
        return res.end("404 - Link not found. Please try again");
    }

    res.writeHead(200);
    res.end(":)");
});
// localhost
server.listen(3000, () => {
    console.log("http://localhost:3000");
});
