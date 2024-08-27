const Course = require('../models/course'); // Điều chỉnh đường dẫn theo yêu cầu
const { mutipleMongooseToObject} = require('../../util/mongoose')
class SiteController {
    //[GET] /news
    async index(req, res, next) {
        Course.find({})
        .then(courses => {
            
            res.render('home', {
                
                courses:mutipleMongooseToObject( courses)
            });
        })
        .catch(next);
    }
    search(req, res) {
        res.render("search"); // Hiển thị trang tìm kiếm
    }
}

module.exports = new SiteController();
