const router = require('express').Router();
const item = require('./controller');

router.post('/items', item.create);
router.get('/items', item.getAll);
// router.get('/', item.getByName);
router.patch('/item', item.update);
router.delete('/item/:id', item.delete);


module.exports = router;
