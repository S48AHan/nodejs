const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log("URL:", req.url);
  console.log("Method:", req.method);

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
    res.writeHead(302, {
      "Content-Type": "text/html",
    });

    res.write(
      "<html><head><title>about page</title></head><body><h1>About!</h1></body></html >",
    );

    //COntents of day 5

    // store chuncks in body
    // const body = [];
    // req.on("data", (chunk) => {
    //   console.log(chunk);
    //   body.push(chunk);
    // });
    // on end concat the stored chunks and sringify
    // req.on("end", () => {
    //   const fullBody = Buffer.concat(body).toString();//gives the buffer in a fully concating string
    //   console.log("Parsed body:", fullBody);

    //   const params = new URLSearchParams(fullBody); // decodes the fullbody as object
    //   console.log("params:", params);
    //   // const bodyObj = {};
    //   // for (const [key, val] of params.entries()) { // build the key value json form the decoded full body 
    //   //   bodyObj[key] = val;
    //   // }

    //   const bodyObj  = Object.fromEntries(params)
    //   fs.writeFileSync("UserActivation.txt", bodyObj);
    //   console.log("Body Object Req:", JSON.stringify(bodyObj));
    // });

    const body = [];
    req.on("data",(chunk)=>{
      body.push(chunk)
    })
    req.on("end",()=>{
      const fullData = Buffer.concat(body).toString();
      console.log("Full data:", fullData);
      const paramsData = new URLSearchParams(fullData);
      const dataObj = Object.fromEntries(paramsData);
      console.log("Data Obj:",dataObj);
      fs.writeFileSync("Request Data.txt",JSON.stringify(dataObj));
    })
    res.end();
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
