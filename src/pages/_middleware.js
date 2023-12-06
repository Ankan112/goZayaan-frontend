// pages/_middleware.js (create this file if it doesn't exist)
// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res, next) => {
  // Set caching headers for static assets
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  next();
};
