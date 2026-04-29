const { captureRejectionSymbol } = require("events");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");
const { v4 : uuidv4 } = require("uuid");
const methodOverride = require('method-override')

app.use(methodOverride('_method'))

uuidv4();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts =[
  {
    id: uuidv4(),
    username:"priyanshu",
    content:"I got my first job"
  },
  {
    id : uuidv4(),
    username:"priya",
    content:"I got my first intership"
  },
  {
    id:uuidv4(),
    username:"priyansh",
    content:"I love codeing"
  }
]

app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.get("/posts", (req, res) => {
  res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res) => {
  res.render("form.ejs");
})

app.post("/posts",(req,res) => {
  let {username,content}=req.body;
  let id = uuidv4();
  posts.push({id,username,content});
  res.redirect("/posts");
  //console.log(req.body);
})

app.get("/posts/:id",(req,res) => {
  let {id} =req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", {post});
})

app.patch("/posts/:id" ,(req,res) => {
  let { id } = req.params;
  let newcontent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content=newcontent;
  // res.send("patch req is working");
  // console.log(post);
  res.redirect("/posts");
})

app.get("/posts/:id/edit" , (req,res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs",{ post });
})

app.delete("/posts/:id" , (req,res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
})

// 404 handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).send("Internal Server Error");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
