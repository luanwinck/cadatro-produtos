const express = require('express');
const router = express.Router();
router.get('/teste/:user', function (req, res, next) {

    let user = req.params.user

    res.status(200).send({
        title: "Teste",
        text: "texto texto texto texto texto texto texto texto texto texto texto ",
        user
    });
});
module.exports = router;