import * as dotenv from "dotenv";
import path from "node:path";

import { APP } from "./app";

dotenv.config({ path: path.resolve(__dirname + "./.env") });

const APP_PORT: number = parseInt(process.env.APP_PORT as string);

APP.listen(APP_PORT, () => {
  console.log("[Server] App running on port " + APP_PORT);
});
