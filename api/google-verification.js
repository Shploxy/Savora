module.exports = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send("google-site-verification: googlea08d1d1c3a611b12.html");
};
