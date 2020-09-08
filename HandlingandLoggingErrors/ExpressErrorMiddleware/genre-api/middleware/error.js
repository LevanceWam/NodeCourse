module.exports = function (err, req, res, next) {
    // Log the expection
    res.status(500).send('Something Failed')
}