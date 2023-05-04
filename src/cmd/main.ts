import api from "../api/api";
import * as database from "../database/database";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const main = async () => {
  await database.connect();
  api.listen(PORT || 3000, () => {
    console.log(`Api listening on port ${PORT}`);
  });
};

main().then(() => {
  console.log(`Server started`);
});
