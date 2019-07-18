const Router = require('koa-router');
const { getUsers, getUser } = require('../controller');

const router = new Router();

router.get('/', (ctx) => ctx.body = '안녕하세요, 김수현입니다.');
router.get('/deploy', (ctx) => ctx.body = '무중단배포 성공');
router.get('/ha', (ctx) => ctx.body = '소스 코드 변경!');

router.get('/users', getUsers);
router.get('/users/:id', getUser);

module.exports = router;
