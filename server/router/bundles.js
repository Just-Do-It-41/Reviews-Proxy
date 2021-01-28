const { Router } = require('express');
const { createProxyMiddleware} = require('http-proxy-middleware');
const { service3 } = require('../config/services.js');

const router = Router();

router.use('/service3.js', createProxyMiddleware({
  target: service3.url,
  pathRewrite: {
    '^/bundles/service3.js': service3.bundle,
  },
  changeOrigin: true
}))

module.exports = router;