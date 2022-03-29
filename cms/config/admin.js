module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '274b31381006c04804641a013ab81886'),
  },
});
