const router = require('express').Router();
const userController = require('../controller/userController');


router.get('/',userController.userlist)



module.exports = router;