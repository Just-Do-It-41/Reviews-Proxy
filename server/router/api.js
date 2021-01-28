const { Router } = require('express');
const { createProxyMiddleware} = require('http-proxy-middleware');
const { service3 } = require('../config/services.js');

const router = Router();

router.use(service3.api1, createProxyMiddleware({target: service3.url, changeOrigin: true }));
router.use(service3.api2, createProxyMiddleware({target: service3.url, changeOrigin: true }));
router.use(service3.api3, createProxyMiddleware({target: service3.url, changeOrigin: true }));
router.use(service3.api4, createProxyMiddleware({target: service3.url, changeOrigin: true }));
router.use(service3.api5, createProxyMiddleware({target: service3.url, changeOrigin: true }));
router.use(service3.api6, createProxyMiddleware({target: service3.url, changeOrigin: true }));
router.use(service3.api7, createProxyMiddleware({target: service3.url, changeOrigin: true }));
router.use(service3.api8, createProxyMiddleware({target: service3.url, changeOrigin: true }));

module.exports = router;