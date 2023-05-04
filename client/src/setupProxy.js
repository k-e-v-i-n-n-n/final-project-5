const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/exp',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_EXPRESS_SERVER}`,
      changeOrigin: true,
    })
  );
};
