const Course =require('../models/Course');
const Duy = require('../models/Duy');
const Student = require('../models/Student');

class CourseController{
    /// [GET] course/:slug
    show(req,res,next){
        // res.send('courses detail!!!'+req.params.slug);
        Course.findOne({slug: req.params.slug})
        .then((course)=>{
            // res.json(course);
            res.render('course/show',{course:course});

        })
        .catch(next);
         }
    creat(req,res,next ){
        
        res.render('course/create');

    } 
    //:id/edit
    edit(req,res,next ){
        var check= req.params.id;
        Course.findOne({id:check})
        .then((course)=>{
            // res.json(course);
            res.render('course/edit',{course,course});
            

        })
        .catch(next);
         
        

    } 
    // [PUT]// courses/:id
    update(req,res,next ){
        // var check= req.params.id;
        // Course.findOne({id:check})
        // .then((course)=>{
        //     // res.json(course);
        //     res.render('course/edit',{course,course});
            

        // })
        // .catch(next);
         Course.updateOne({id:req.params.id},req.body)
         .then(()=>res.redirect('/me/stored/courses'))
         .catch(next);
        

    } 

    //[delete ]/ course:id
    deleteCourese(req,res,next){
        
        console.log(req.params.id)
      
        Course.findOneAndDelete({_id:req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next);

    }

    //[POST] /coure/store
    store(req,res,next ){
        const formData= req.body;
        // res.json(req.body)
        // res.render('course/store');
        formData.image=`https://i.ytimg.com/vi/${req.body.videoid}/hqdefault.jpg?`;
        const course = new Course(formData);
        // res.json(course)
        // res.send('coure saved!!');
        course.save()
        .then(() => res.redirect('/'))
        .catch(next);
        // res.send('coure saved!!');
        // Course.create({ formData }, function (err, small) {
        //     if (err) return handleError(err);
        //     // saved!
        //   });
       


    }     
        
        }
module.exports = new CourseController;