import express from "express";
import connectDB from "./config/database";
import router from "./routes/index";
import bookRouter from "./routes/bookRoute"; // Finally import the bookRouter from the routes
const app = express();
//Enable json parsing body
app.use(express.json());

//Enable URL-encoded parsing body parsing with extended mode
//`extended : true` allow rich objects and arrays vai query string library
app.use(express.urlencoded({ extended: true }));

connectDB();

// app.get("/api/v1/get-all-users", (req, res) => {
//   res.send("WMAD Class");
// }); // This is just a sample get endpoint

app.use("/api/v1", router);
app.use("/api/v1/books", bookRouter); // Finally define the endpoint route for the bookRouter

app.listen(4000, () => {
  console.log(`server run on port 4000`);
});
