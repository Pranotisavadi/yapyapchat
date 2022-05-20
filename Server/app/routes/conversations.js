const router = require("express").Router();
const Conversation = require("../models/Conversation");

// New conversation
router.post("/", async (req, res) => {
    const NewCon = new Conversation({
        member: [req.body.senderId, req.body.receiverId]
    });
    // console.log(req.body);
    console.log(NewCon);
    try{
        const savedCon = await NewCon.save();
        console.log(savedCon);
        res.status(200).json(savedCon);
    } catch (err){
        res.status(500).json(err);
    }

    });



    // Get conversation of a User
    router.get("/:userId", async (req, res) => {
           try{
            const conversation = await Conversation.find({member: { $in : [req.params.userId]} 
            });
           res.status(200).json(conversation)

        }catch(err){
            res.status(500).json(err)
        }
     
    
    });

    // router.get("/:userId", async (req, res) => {
    //     const userid = req.params.userId;
    //     Conversation.find(userid)
    //       .then(data => {
    //         if (!data)
    //           res.status(404).send({ message: "Not found conversation with id " + userid });
    //         else res.send(data);
    //       })
    //       .catch(err => {
    //         res
    //           .status(500)
    //           .send({ message: "Error retrieving conversation with id=" + userid });
    //       });
    // });

    // get conv includes two userId

router.get("/find/:firstUserId/:secondUserId", async (req, res) => {
    try {
      const conversation = await Conversation.findOne({
        members: { $all: [req.params.firstUserId, req.params.secondUserId] },
      });
      res.status(200).json(conversation)
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;