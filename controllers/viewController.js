const viewController = (app) => {
    
    app.get("/", (req, res) => {
        res.render("index");
    });

}

module.exports = viewController;