const {Router} = require('express');

const router = Router();
const { getAll,post,update,delet, getById} = require('../controllers/inventary.controllers');

router.get('/getAll', getAll)
.get('/getById/:id', getById)
.post('/post', post)
.put('/put/:id', update)
.delete('/delete/:id', delet);

module.exports = router;