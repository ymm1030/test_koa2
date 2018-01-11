var fn_index = async(ctx, next) => {
    ctx.render('signin.html', {});
};

var fn_signin = async(ctx, next) => {
    var name = ctx.request.body.name || '';
    var password = ctx.request.body.password || '';
    console.log(`sign in with name:${name}, password:${password}`);
    if (name === 'koa' && password === '111111') {
        ctx.render('signin_ok.html', {
            title:'Sign In OK!',
            name:'Mr Node'
        });
    } else {
        ctx.render('signin_fail.html', {
            title:'Sign In Failed!'
        });
    }
};

module.exports = {
    'GET /':fn_index,
    'POST /signin':fn_signin,
};