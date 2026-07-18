const http = require("http");
const fs = require('fs');
const server = http.createServer((req, res) => {
  console.log("URL:", req.url);
  console.log("Method:", req.method);

  //   res.setHeader("Content-Type", "text/html");

  //   res.write("<html>");
  //   res.write("<head><title>Saber er Server</title></head>");
  //   res.write("<body><h1>Saber er Server response!</h1></body>");
  //   res.write("</html>");

  if (req.url === "/dashboard") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.end(`
    <html>
      <head>
        <title>Dashboard</title>
      </head>
      <body>
        <h1>Dashboard! ${PORT}</h1>
      </body>
    </html>
  `);
  } else if (req.url.toLowerCase() === "/about" && req.method === "POST") {
    // res.writeHead(302, {
    //   "Content-Type": "text/html",
    // });

    //   res.end(`
    //   <html>
    //     <head>
    //       <title>about page</title>
    //     </head>
    //     <body>
    //       <h1>About!</h1>
    //     </body>
    //   </html>
    // `);

    fs.writeFileSync("UserActivation.txt", 'Saber Data Pathaise ');
    res.end()

  } else {
    res.writeHead(300, {
      "Content-Type": "text/html",
    });

    res.end(`
    <html>
      <head>
        <title>Saber er Server</title>
      </head>
      <body>
        <h1>Onno jaygayi ghuiro na!</h1>
        <form action="/about" method="POST">
          <label for="userName">Name</label>
          <input type="text" name= "userName" placeholder = "Enter your name"/><br>
          <label for="male">male</label>
          <input type="radio" name= "gender" value="male"><br>
          <label for="female">female</label>
          <input type="radio" name= "gender" value="female"><br>
          <input type  = "submit" value= "Submit"/>
        </form >
      </body>
    </html>
  `);
  }
});

const PORT = 3003;
server.listen(PORT, () => {
  console.log(`Server Is running`);
});
