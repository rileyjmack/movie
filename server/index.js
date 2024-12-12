import db from "./db/db";
// const PORT = process.env.PORT || 8080;
// import app from "./app";
import seed from "../script/seed";

const init = async () => {
  try {
    if (process.env.SEED === "true") {
      await seed();
    } else {
      await db.sync();
    }
    // start listening (and create a 'server' object representing our server)
    // app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
