function errorHandler(err, req, res, next) {
  // res.header("Content-Type", "application/json");
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  return res.status(status).send(message);
}
module.exports = errorHandler;
