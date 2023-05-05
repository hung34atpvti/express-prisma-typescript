import app from "./app";
import * as database from "./database/database";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const startServer = async () => {
  await database.connect();
  app.listen(PORT || 3000, () => {
    console.log(`Api listening on port ${PORT}`);
  });
};

startServer().then(() => {
  console.log(`Server started`);
});
