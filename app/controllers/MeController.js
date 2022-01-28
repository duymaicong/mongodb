const { render } = require('express/lib/response');
const Course =require('../models/Course');
const Duy = require('../models/Duy');
const Student = require('../models/Student');

class MeController{
    /// [GET] course/:slug
  

    storeCourse(req,res,next){
        Course.find({}).then(courses=> 
            // res.render('./me/stored-courses',{courses:courses})

            res.json(courses)
        
        
        )
       .catch(next)

    }
    storeCourse1(req,res,next){
        Course.find({}).then(courses=> 
            // res.render('./me/stored-courses',{courses:courses})
            // res.body=courses

            res.json(courses)
        
        
        )
       .catch(next)

    }

       
        
        }
module.exports = new MeController;