const mongoose = require('mongoose');

module.exports = function (res, req, next) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(404).send('Invalid ID');

    next();
}