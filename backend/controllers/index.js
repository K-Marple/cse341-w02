const home = (req, res) => {
  res.send("Home. Try '/professional'");
};

const professional = (req, res) => {
  res.send("Hello world");
};

module.exports = { home, professional };
