const Course =require('../models/Course');
const Duy = require('../models/Duy');
const Student = require('../models/Student');

class SiteController{
    // get news
    index(req,res,next){
        // console.log("Bạn đang Search :"+req.body)
    //     res.render('home.ejs', {
    //       title: 'My Site',
    //   nav: ['Home','About','Contact'] 
    // });
    // Course
    //  res.json({name:'test'});

    Course.find({},function (err,courses) {
      if(!err){
        // res.json(courses)
        res.render('home1',{courses:courses});
      }else{
        next(err);
        // res.status(400).json({error:'message'});
      }
    });
    
    
    }
    // [GET] news/slug
    search(req, res,next){
      Student.find({},function (err,students) {
        if(!err){
          console.log(students+"wellcome table Students")
          res.json(students)
          // res.render('search.ejs');
        }else{
          next(err);
          // res.status(400).json({error:'message'});
        }
      });
      

    }
}
module.exports = new SiteController;

