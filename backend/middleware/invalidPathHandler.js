const invalidPathHandler = () => {
   // Middleware to handle invalid paths
  app.use((req, res, next) => {
    res.status(404).json({
      error: '404 NOT FOUND',
      message: 'The requested resource could not be found'
    });
    next();
  });
}

module.exports = invalidPathHandler
