import app from "./app";

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.listen(port, function () {
  console.log(`Express Server initiated listening on port ${port}`);
  console.log("Using Database URL from ", process.env.DATABASE_URL);
});


process.on("SIGTERM", function () {
  console.log(`SIGTERM signal received: closing HTTP server.`);
  process.exit();
});

process.on("SIGINT", function () {
  console.log(`SIGINT signal received: closing HTTP server.`);
  process.exit();
});
