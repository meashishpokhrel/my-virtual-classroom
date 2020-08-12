const express = require ("express")
const path = require("path")
const hbs = require ("hbs")
require("./db/mongoose")
const app = express()

const jwt = require("jsonwebtoken")
const userRouter = require("./routers/tasks")
const taskRouter = require ("./routers/users")
// const adminRouter = require ("./routers/admin")

const port = process.env.port || 3000
app.use (express.json())
app.use(userRouter)
app.use(taskRouter)

// app.use(adminRouter)


//Define Paths for Express COnfig
const PublicDirecPath = path.join(__dirname, "../public")
const viewPath = path.join (__dirname, "../templates/views")
const partialsPath = path.join (__dirname, "../templates/partials")

//Setup handlebars engine and views location 
app.set('view engine', 'hbs')
app.set("views", viewPath)
hbs.registerPartials(partialsPath);


//Setup static directory to serve
app.use(express.static(PublicDirecPath))

app.get("/",(req,res) => {
    res.render("index-3")
})
app.get("/about",(req,res) => {
    res.render("about")
})
app.get("/courses",(req,res) => {
    res.render("courses")
})

app.get("/events",(req,res) => {
    res.render("events")
})

app.get("/teachers",(req,res) => {
    res.render("teachers")
})

app.get("/contact",(req,res) => {
    res.render("contact")
})

app.listen(port,  () => {
    console.log("Server Started on " + port)
    
})




//Nodemon code for Token Bearer automation
// if (pm.response.code === 201){
//     pm.environment.set("authoToken", pm.response.json().token)
// }