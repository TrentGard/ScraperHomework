module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/scrape", function(req, res) {
    res.render("scrape");
  });

  // If no matching route is found default to home
  app.get("/", function(req, res) {
    res.render("index");
  });
};
