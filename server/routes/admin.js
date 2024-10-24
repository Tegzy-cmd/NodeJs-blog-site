 const express = require('express')
 const router = express.Router();
 const Post = require('../../models/Post');
 const User = require('../../models/User')

const adminLayout  = '../views/layouts/admin'

/**
 * GET /
 * Admin Login Page
 */

router.get('/admin',async(req,res)=>{
    const locals = {
        title: 'Admin',
        description: 'Simple Blog created with NodeJs, Express & MongoDb'
    }
    try {
        res.render('admin/index',{locals,layout:adminLayout},);
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error');
    }
})


/**
 * POST /
 * Admin - Check Login
 */

router.post('/admin',async(req,res)=>{
   
  
    try {
        const {username,password} = req.body;
        console.log(req.body);
        res.redirect('/admin')
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error');
    }
})




module.exports = router;