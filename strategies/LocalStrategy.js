import passport from "passport";
import Strategy from "passport-local"
import regUsers from "../constants/regUsers.js";

passport.serializeUser((user, done) => {
    console.log("Inside Serialize : ", user);
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    console.log("Inside DeSerialize");
    try {
        let user = regUsers.find((i) => i.id == id)
        if (!user) {
            throw new Error("User not Found");
        }
        done(null, user)
    } catch (err) {
        done(err, null)
    }
})

export default passport.use(
    new Strategy((username, password, done) => {

        console.log("Entered Details, username : ", username, "password :", password);

        try {

            let user = regUsers.find((i) => i.username == username)

            if (!user) {
                throw new Error("User not Found");
            }
            if (user.password != password) {
                throw new Error("Bad Credentials");
            }

            done(null, user)

        } catch (err) {
            done(err, null)
        }

    })
)

