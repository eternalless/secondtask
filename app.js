const Koa = require('koa');
const app = new Koa();
const router = require('koa-simple-router')
const serve = require('koa-static');
const path = require('path')
const co = require('co');
const render = require('koa-swig');
const initRouter = require('./routes/initCon');

app.use(serve(path.join(__dirname,'./public')));

app.context.render = co.wrap(render({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    writeBody: false
}));

initRouter.init(app,router);


app.listen(3000, () => {
    console.log('success')
});
module.exports=app;