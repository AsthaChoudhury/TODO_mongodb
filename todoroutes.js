const {Router} = require("express");
const { savetodo, getodo, updatetodo, deletetodo } = require("../controllers/todocontroller");

const router = Router()

router.get('/',getodo)
router.post('/save',savetodo)
router.post('/update',updatetodo)
router.post('/delete',deletetodo)

module.exports=router;