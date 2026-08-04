const links = {
    "ad92uda": "https://archive.org/details/en_windows_xp_professional_with_service_pack_3_x86_cd_vl_x14-73974_202108",
    "tfi6skg": "https://archive.org/details/@fly_fyong"
};

module.exports = (req, res) => {
    const { id } = req.query;

    const url = links[id];

    if (!url) {
        return res.status(404).send("404 - Link not found");
    }

    res.redirect(302, url);
};