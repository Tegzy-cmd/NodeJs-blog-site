const express = require ('express');
const router = express.Router();

// Routes
router.get('', (req,res)=>{

    const locals = {

        title:"Node Js Blog",
        description: "Simple Blog created with NodeJs, Express & MongoDb"

    }


    res.render('index',{locals});
});



module.exports = router;