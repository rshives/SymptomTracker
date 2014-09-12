/** app/scripts/app.js */
$(function () {
  $(".container").append("<p>Test Html</p>");

  try {
    var main_page = $("#main-page").html();
    var main_template = Handlebars.compile(main_page);
    var main_html = template(main_template);
  }
  catch(err) {
    console.log(err.message);
  }
});
