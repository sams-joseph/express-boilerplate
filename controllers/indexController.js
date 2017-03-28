const indexController = {};


indexController.get = function (req, res) {
  res.render('index', { title: 'Express Boilerplate' })
}

export default indexController;
