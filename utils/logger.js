const logger = (req, res, next) => {
    console.log(req.method, " ", req.path, " ", req.query, " ", req.session.username, " ", req.session.id);
    next()
}

export default logger