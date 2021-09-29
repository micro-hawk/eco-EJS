const mainController = {}
const dataJson = require('../data.json')
mainController.homePage = (req, res) => {
    res.render('home', {
        data: dataJson
    })
}

mainController.homePost = (req, res) => {
    let searchItem = req.body.navSearch
    const matches = dataJson.filter(s => s.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()))
    res.render('home', {
        data : matches
    })
}


module.exports = mainController
