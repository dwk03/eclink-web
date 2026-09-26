const links = {
    // not generate by ai
   "ad92uda": "https://archive.org/details/en_windows_xp_professional_with_service_pack_3_x86_cd_vl_x14-73974_202108"
};

module.exports = (req, res) => {
    const { id } = req.query;

    const url = links[id];

    if (!url) {
        return res.status(404).send(
            "404 - Link not found. Please try others."
        );
    }

    res.redirect(302, url);
};
