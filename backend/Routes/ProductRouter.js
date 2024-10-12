const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();



router.post('/', ensureAuthenticated,(req,res)=>{
    console.log('---- logged in user detail ----',req.user);
    res.status(200).json([
        {
            name: "mobile",
            price:1000
        },
        {
            name: "TV",
            price:20000
        },
    ])
})

module.exports = router;