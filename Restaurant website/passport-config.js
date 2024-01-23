// const LocalStrategy = require("passport-local").Strategy
// const bcrypt = require("bcrypt")


// function initialize(passport, getUserByEmail, getUserById){
//     // Function to authenticate users
//     const authenticateUsers = async (email, password, done) => {
//         // Get users by email
//         const user = getUserByEmail(email)
//         if (user == null){
//             return done(null, false, {message: "No user found with that email"})
//         }
//         try {
//             if(await bcrypt.compare(password, user.password)){
//                 return done(null, user)
//             } else{
//                 return done (null, false, {message: "Password Incorrect"})
//             }
//         } catch (e) {
//             console.log(e);
//             return done(e)
//         }
//     }

//     passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUsers))
//     passport.serializeUser((user, done) => done(null, user.id))
//     passport.deserializeUser((id, done) => {
//         return done(null, getUserById(id));
//     });
// }

// module.exports = initialize








// const LocalStrategy = require("passport-local").Strategy;
// const bcrypt = require("bcrypt");

// function initialize(passport, getUserByEmail, getUserById) {
//     const authenticateUser = async (email, password, done) => {
//         const user = getUserByEmail(email);
//         if (user == null) {
//             return done(null, false, { message: "No user found with that email" });
//         }

//         try {
//             if (await bcrypt.compare(password, user.password)) {
//                 return done(null, user);
//             } else {
//                 return done(null, false, { message: "Password incorrect" });
//             }
//         } catch (e) {
//             console.log(e);
//             return done(e);
//         }
//     };

//     passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));
//     passport.serializeUser((user, done) => done(null, user.id));
//     passport.deserializeUser((id, done) => {
//         return done(null, getUserById(id));
//     });
// }

// module.exports = initialize










// const LocalStrategy = require("passport-local").Strategy;
// const bcrypt = require("bcrypt");

// function initialize(passport, getUserByEmail, getUserById) {
//     const authenticateUser = async (email, password, done) => {
//         const user = getUserByEmail(email);
//         if (!user) {
//             return done(null, false, { message: "No user found with that email" });
//         }

//         try {
//             if (await bcrypt.compare(password, user.password)) {
//                 return done(null, user);
//             } else {
//                 return done(null, false, { message: "Password incorrect" });
//             }
//         } catch (e) {
//             console.error(e);
//             return done(e);
//         }
//     };

//     passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));
//     passport.serializeUser((user, done) => done(null, user.id));
//     passport.deserializeUser((id, done) => {
//         const user = getUserById(id);
//         if (user) {
//             done(null, user);
//         } else {
//             done(new Error('User not found'));
//         }
//     });
    
    
    
// }

// module.exports = initialize;






const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")


function initialize(passport, getUserByEmail, getUserById){
    // Function to authenticate users
    const authenticateUsers = async (email, password, done) => {
        // Get users by email
        const user = getUserByEmail(email)
        if (user == null){
            return done(null, false, {message: "No user found with that email"})
        }
        try {
            if(await bcrypt.compare(password, user.password)){
                return done(null, user)
            } else{
                return done (null, false, {message: "Password Incorrect"})
            }
        } catch (e) {
            console.log(e);
            return done(e)
        }
    }

    passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUsers))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

module.exports = initialize