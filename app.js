const koa = require('koa');
const koa_router = require('koa-router');
const body_parser = require('koa-bodyparser');
const controller = require('./controller');
const nunjucks = require('nunjucks');
const static_files = require('./static_files');
const templating = require('./templating');

const app = new koa();
const router = koa_router();

app.use(static_files('/static/', __dirname + '/static/'));

app.use(body_parser());

const isProduction = process.env.NODE_ENV === 'production';
app.use(templating('templates', {
    noCache:!isProduction,
    watch:!isProduction
}));

app.use(controller());

app.listen(9000);
console.log('app started at port 9000...');