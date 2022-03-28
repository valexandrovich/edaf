module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4a69cbc874b03f2dfd7ce93bdbb63bc3'),
  },
});
