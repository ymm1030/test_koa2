var fn_hello = async(ctx, next) => {
    var name = ctx.params.name;
    ctx.render('hello.html', {
        name:name
    });
};

module.exports = {
    'GET /hello/:name':fn_hello
};