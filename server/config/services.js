// const proxy = require('http-proxy-middleware');
// module.exports = (reviews) {
//   app.use(proxy('/api/reviews/', {target: 'http://localhost:3003'}))
// }


module.exports = {
  service1: {
    api: '/search/',
    url: 'http://localhost:3001',
    bundle: 'bundle.js',
  },
  // service2: {
  //   api: '/shoes',
  //   url: 'http://localhost:3002',
  //   bundle: 'bundle.js',
  // },
  service3: {
    api0: '/shoes',
    api1: '/reviews/',
    api2: '/reviews/recent',
    api3: '/reviews/recent10',
    api4: '/reviews/helpful10',
    api5: '/reviews/highest10',
    api6: '/reviews/user/:id',
    api7: '/reviews/lowest10',
    api8: '/reviews/:id',
    url: 'http://localhost:3003',
    bundle: 'bundle.js',
  },
  service4: {
    api: '/relatedProducts',
    url: 'http://localhost:3004',
    bundle: 'bundle.js',
  },
}