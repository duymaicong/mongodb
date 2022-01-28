
class NewsController{
    // get news
    index(req,res){
        // console.log("Bạn đang Search :"+req.body)
        res.render('news.ejs',{search:req.query.search,ab:req.query.ab})
        console.log(req.query.search)
    }
    // [GET] news/slug
    show(req, res){
      res.send('news detail!!!');

    }
}
module.exports = new NewsController;

