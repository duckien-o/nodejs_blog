const Course = require('../models/course'); // Điều chỉnh đường dẫn theo yêu cầu
const { mutipleMongooseToObject} = require('../../util/mongoose')
class CourseController {
    //[GET] /
    
    
    show(req, res) {
        Course 
          
        res.send("COURSE DETAIL -" +  req.params.slug); // Hiển thị trang tìm kiếm
    }
}

module.exports = new CourseController();
