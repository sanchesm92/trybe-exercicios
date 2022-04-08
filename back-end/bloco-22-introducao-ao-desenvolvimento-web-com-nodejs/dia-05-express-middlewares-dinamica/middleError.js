const middleError = (err, req, res, next) => {
  res.status(err.statusCode).json({ message: err.message })
}

module.exports = middleError;