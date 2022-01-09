const bcrypt = require('bcryptjs')
let user = {
    name: "SamZayd",
    email: "Sadafk2304@gmail.com",
    cc: '5465 7687 3465 7767',
    password: "idontknow"
}
let salt = bcrypt.genSaltSync(10);
let crypt_Password = bcrypt.hashSync(user.password, salt);
let crypt_cc = bcrypt.hashSync(user.cc, salt);

let User_details = { ...user, password: crypt_Password, cc: crypt_cc }
console.log(user);
console.log(User_details);

let result = bcrypt.compareSync("idontknow", User_details.password)

result? console.log("Login Success"):console.log("Login Failed")