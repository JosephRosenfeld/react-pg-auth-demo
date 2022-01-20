import express from "express";
import dotenv from "dotenv";
import session from "express-session";
dotenv.config();

const app = express();
app.use(
  session({
    secret: "key that will sign the cookie, could be any random string",
    resave: false /*stops the session from being saved back to the store when no changes were made during the request*/,
    saveUninitialized: true /*doesn't save a cookie if we don't set anything on session*/,
  })
);

app.get("/", (req, res) => {
  console.log(req.session);
  res.send("hello world");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
