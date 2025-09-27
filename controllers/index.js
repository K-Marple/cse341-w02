const home = (req, res) => {
  res.send("Home. Try '/professional'");
};

const professional = (req, res) => {
  res.json({
    professionalName: "Test Professional",
    base64Image:
      "data:image/png;base64,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",
    nameLink: {
      firstName: "Test",
      url: "",
    },
    primaryDescription: "Primary description",
    workDescription1: "Work description 1",
    workDescription2: "Work description 2",
    linkTitleText: "Link title text",
    linkedInLink: {
      text: "linkedIn text",
      link: "",
    },
    gitHubLink: {
      text: "GitHub link",
      link: "",
    },
  });
};

module.exports = { home, professional };
