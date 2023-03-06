const app = require("./src/app");

( async () => {
  try {
    app.listen(3001, () => { console.log("Server listening at port", 3001) });
  } catch (error) {
    console.log("Error:", error);
  }
})()