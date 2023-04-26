const router = require('express').Router();
const todoController = require('./_controller/todoController');

router.post("/", async (req, res) => {
    const result = await todoController.create(req);
    res.json(result);
}); // 테이블에 내용을 입력해 넣는다!


router.get('/', async (req,res)=>{
    const result = await todoController.list(req);
    res.json(result);
}) // List에서 조건에 걸린 내용을 가져온다!


router.put('/:id', async (req,res)=>{
    const result = await todoController.update(req);
    res.json(result);
}) // 내용을 수정한다!

router.delete('/:id', async (req,res)=>{
    const result = await todoController.delete(req);
    res.json(result);
}) // 내용을 삭제한다!

router.post('/reset', async (req,res)=>{
    const result = await todoController.reset(req);
    res.json(result);
}) // 테이블을 삭제하고 대신 dummy 파일을 넣는다!

module.exports = router;