const supert = require('supertest');
// const app = require('../app.js');
function request() {
    return supert('http://localhost:3000');
}
describe('接口测试(app)', function() {
    it('点赞测试', function(done) {
        request()
            .get('/index/update')
            // .expect('Content-Type', /json/)
            // .expect('Content-Length', '15')
            .expect(200)

            .end(function (err, res) {
                console.log(res.body.data)
                if(res.body.data==135){
                    done()
                } else{
                    done("fail");
                }

            });
    })
})