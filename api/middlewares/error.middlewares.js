
const endPointNotFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode  === 200 ? 500 : res.statusCode;
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === "production" ? null : error.stack,
    });
};

module.exports = { endPointNotFound, errorHandler}