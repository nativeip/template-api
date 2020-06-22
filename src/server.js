require("dotenv/config");
import app from "./app";

app.listen(3333, () => {
  console.log(`🚀 Native Dialer is running on port 3333!`);
});
