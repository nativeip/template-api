require("dotenv/config");
import app from "./app";

app.listen(process.env.DB_PORT, () => {
  process.stdout.write("\x1Bc");
  console.log(`🚀 Native Dialer is running on port ${process.env.DB_PORT}!`);
});
