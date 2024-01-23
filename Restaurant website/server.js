// if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config()
// }



// //import libraries

// const express = require("express");
// const bodyParser = require('body-parser');
// const passport = require('passport');
// const initializePassport = require("./passport-config");
// const flash = require("express-flash");
// const session = require("express-session");
// const bcrypt = require("bcrypt");
// const methodOverride = require("method-override");

// // initializePassport(
// //     passport,
// //     email => users.find(user => user.email === email),
// //     id => users.find(user => user.id === id)
// // );


// // const users = [];


// const users = [
//     // Your user data here
// ];

// const getUserByEmail = (email) => {
//     return users.find(user => user.email === email);
// };

// const getUserById = (id) => {
//     return users.find(user => user.id === id);
// };
// const app = express();

// initializePassport(
//     passport,
//     getUserByEmail,
//     getUserById
// );

// //const LocalStrategy = require('passport-local').Strategy;

// //const bcrypt = require("bcrypt")//important bcrypt package

// app.use(express.static('Frontend'));
// app.use(express.urlencoded({ extended: false}));
// app.use(flash())
// app.use(session({
//     secret:process.env.SESSION_SECRET,
//     resave: false,//we wont receive the session variable if nothing is changed
//     saveUninitialized: false

// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(methodOverride("_method"))
// app.use(bodyParser.json());

// app.set('view engine', 'ejs');

// //configuring the signup post functionality
// app.post("/login",checkNotAuthenticated, passport.authenticate("local", {
//     successRedirect: "/index",
//     failureRedirect: "/login",
//     failureFlash: true
// }));


// //configuring the signup post functionality
// app.post("/signup",checkNotAuthenticated,async (req,res)=>{
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password,10)
//         users.push({
//             id: Date.now().toString(),
//             name:req.body.name,
//             email:req.body.email,
//             password:hashedPassword,
//         })
//         console.log(users);//display newly registered users  in the console
//         res.redirect("/login");
//     } catch(e) {
//         console.log(e);
//         res.redirect("/signup");
//     }
// });



// app.get('/login',checkAuthenticated,(req,res)=>{
//     res.sendFile(__dirname+'/Frontend/login.html')
// })

// app.get('/signup',checkAuthenticated,(req,res)=>{
//     res.sendFile(__dirname+'/Frontend/signup.html')
// })

// app.get('/index',checkAuthenticated,(req,res)=>{
//     res.sendFile(__dirname+'/Frontend/index.html')
// })

// app.get('/reserve',checkAuthenticated,(req,res)=>{
//     res.sendFile(__dirname+'/Frontend/reserve.html')
// })


// // app.use((req, res, next) => {
// //     res.setHeader('Access-Control-Allow-Origin', '*');
// //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
// //     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
// //     next();
// // });

// //ROUTES
// app.get('/login',(req,res) => {
//     res.render("login.html",{
//     })
// })
// app.get('/signup',(req,res) => {
//     res.render("signup.html")
// })
// app.get('/index',(req,res) => {
//      res.render("index.html")
// })

// app.get('/register',(req,res) => {
//      res.render("register.html")
//  })
// //End ROUTES

// // function checkAuthenticated(req, res, next){
// //     if(req.isAuthenticated()){
// //         return next()
// //     }
// //     res.redirect("/reserve.html")
// // }

// // function checkNotAuthenticated(req, res, next){
// //     if(req.isAuthenticated()){
// //         return res.redirect("/reserve.html")

// //     }
// //     next()
// // }


// function isAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next()
//     }
//     res.redirect("/login");
// }

// // app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
// //     successRedirect: "/index",
// //     failureRedirect: "/login",
// //     failureFlash: true
// // }));

// app.get('/index', isAuthenticated, (req, res) => {
//     res.sendFile(__dirname + '/Frontend/index.html');
// });

// app.get('/reserve', isAuthenticated, (req, res) => {
//     res.sendFile(__dirname + '/Frontend/reserve.html');
// });

// function checkAuthenticated(req, res, next){
//     if(req.isAuthenticated()){
//         return next();
//     }
//     res.redirect("/reserve.html");
// }

// function checkNotAuthenticated(req, res, next){
//     if(req.isAuthenticated()){
//         return res.redirect("/login.html");
//     }
//      next()
// }






// app.listen(8888);














// const express = require("express");
// const bodyParser = require("body-parser");
// const passport = require("passport");
// const initializePassport = require("./passport-config");
// const flash = require("express-flash");
// const session = require("express-session");
// const bcrypt = require("bcrypt");
// const methodOverride = require("method-override");

// const app = express();

// if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config();
// }

// const users = [];

// const getUserByEmail = (email) => {
//     return users.find((user) => user.email === email);
// };

// const getUserById = (id) => {
//     return users.find((user) => user.id === id);
// };

// initializePassport(passport, getUserByEmail, getUserById);

// app.use(express.static('Frontend'));
// app.use(express.urlencoded({ extended: false }));
// app.use(flash());
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(methodOverride("_method"));
// app.use(bodyParser.json());
// app.set('view engine', 'ejs');

// // Routes
// app.get('/login', checkNotAuthenticated, (req, res) => {
//     res.sendFile(__dirname + '/Frontend/login.html');
// });

// // app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
// //     successRedirect: '/reserve',
// //     failureRedirect: '/login',
// //     failureFlash: true
// // }));


// // app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
// //     successRedirect: '/reserve',
// //     failureRedirect: '/login',
// //     failureFlash: true
// // }), (req, res) => {
// //     // This function will only be called if authentication was successful.
// //     res.redirect('/reserve');
// // });


// app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
//     successRedirect: '/reserve',
//     failureRedirect: '/login',
//     failureFlash: true
// }), (req, res) => {
//     // This function will only be called if authentication was successful.
//     res.redirect('/reserve');
// });




// app.get('/signup', checkNotAuthenticated, (req, res) => {
//     res.sendFile(__dirname + '/Frontend/signup.html');
// });

// app.post('/signup', checkNotAuthenticated, async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);
//         const user = {
//             id: Date.now().toString(),
//             name: req.body.name,
//             email: req.body.email,
//             password: hashedPassword
//         };
//         users.push(user);
//         console.log(users);
//         res.redirect("/login");
//     } catch (e) {
//         console.log(e);
//         res.redirect("/signup");
//     }
// });

// app.get('/index', isAuthenticated, (req, res) => {
//     res.sendFile(__dirname + '/Frontend/index.html');
// });

// app.get('/reserve', isAuthenticated, (req, res) => {
//     res.sendFile(__dirname + '/Frontend/reserve.html');
// });

// app.get('/register', (req, res) => {
//     res.render("register.html");
// });

// function isAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect("/login");
// }

// function checkAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return res.redirect("/reserve");
//     }
//     next();
// }

// function checkNotAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return res.redirect("/");
//     }
//     next();
// }

// app.listen(8888, () => {
//     console.log('Server is running on port 8888');
// });













const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const initializePassport = require("./passport-config");
const flash = require("express-flash");
const session = require("express-session");
const bcrypt = require("bcrypt");
const methodOverride = require("method-override");

const app = express();

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const users = [];

const getUserByEmail = (email) => {
    return users.find((user) => user.email === email);
};

const getUserById = (id) => {
    return users.find((user) => user.id === id);
};

initializePassport(passport, getUserByEmail, getUserById);

app.use(express.static('Frontend'));
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Frontend/index.html');
});

app.get('/login', checkNotAuthenticated, (req, res) => {
    res.sendFile(__dirname + '/Frontend/login.html');
});

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/reserve',
    failureRedirect: '/login',
    failureFlash: true
}));

app.get('/signup', checkNotAuthenticated, (req, res) => {
    res.sendFile(__dirname + '/Frontend/signup.html');
});

app.post('/signup', checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = {
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        };
        users.push(user);
        console.log(users);
        res.redirect("/login");
    } catch (e) {
        console.log(e);
        res.redirect("/signup");
    }
});

app.get('/index', isAuthenticated, (req, res) => {
    res.sendFile(__dirname + '/Frontend/index.html');
});

app.get('/reserve', isAuthenticated, (req, res) => {
    res.sendFile(__dirname + '/Frontend/reserve.html');
});

app.get('/register', (req, res) => {
    res.render("register.html");
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/reserve");
    }
    next();
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
}

app.listen(8888, () => {
    console.log('Server is running on port 8888');
});



