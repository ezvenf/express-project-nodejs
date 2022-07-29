const path = require("path");

function getMessages(req, res) {
  res.sendFile(
    path.join(__dirname, "..", "public", "switzerland-facts-1920x1080.jpeg")
  );
  //   res.send("<h1>Messages</h1>");
}

function postMessage(req, res) {
  console.log("Updating messages....");
}

module.exports = {
  getMessages,
  postMessage,
};
