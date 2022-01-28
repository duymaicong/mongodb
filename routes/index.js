const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter=require('./courses')
const meRouter=require('./me')
function route(app) {
    // app.get('/', function(req, res){
    //     res.render('home.ejs', {
    //           title: 'My Site',
    //       nav: ['Home','About','Contact'] 
    //     });
    //   });
    app.use('/me',meRouter);
    app.use('/courses',courseRouter);
    app.use('/news',newsRouter);
    app.use('/',siteRouter);
    
    app.get('/infor', (req, res) => {
        res.render('infor.ejs')
      })
    //   app.get('/search', (req, res) => {
    //     res.render('search.ejs')
    //   })
      // form
    //   app.get('/news', (req, res) => {
    //     console.log("Bạn đang Search :"+req.query.search)
    //     res.render('news.ejs',{search:req.query.search})
       
    //   })
    //   app.post('/news', (req, res) => {
    //     console.log(req.body)
    //     res.render('news.ejs',{search:req.body.search,ab:req.body.ab})
    //   })
    
    
    
     
    //   app.get('/home', function(req, res){
    //     res.render('home.ejs', {
    //           title: 'My Site',
    //       nav: ['Home','About','Contact'] 
    //     });
    //   });
    //   app.get('/', (req, res) => {
    //     res.render('logo.png')
    //   })
}

module.exports=route;