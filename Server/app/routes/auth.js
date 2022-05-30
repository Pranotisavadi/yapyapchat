const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt')

//Register
router.post("/register", async (req, res) =>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPass,
            
        })
        const user = await newUser.save();
        res.status(200).json(user);
        
    }catch(err){
        console.log("ERROR!: ", err);
        // res.status(500).json(err);
    }
})


//Login
router.post("/login", async(req, res) => {
    console.log(req.body)
    try{

        const user = await User.findOne({username: req.body.username})
       if (!user) return res.status(400).json("User Not Found")

        console.log("user is: ", user)

        const validated = await bcrypt.compare(req.body.password, user.password)
        if (!validated) return res.status(400).json("Incorrect Password")

        console.log("password is: ", user.password);

        const { password, ...others } = user._doc;
        res.status(200).json(others);
    }catch(err){
        // res.status(400).json(err);
        console.log("ERROR!: ", err);
    }
})

//HomeChat
// router.get("/homechat/:id", validated, async function (req, res) {
//     const token = req.cookies["token"];
//     const decoded = jwt.verify(token, process.env.SECRET_KEY);
//     var userTokenId = decoded.userId;
  
//     const conversations = await Conversation.find({
//       memberId: userTokenId,
//     });
  
//     function renderPage(conversations) {
//       res.render("homechat", { userConversations: conversations });
//     }
  
//     renderPage(lists);
//   });

module.exports = router;