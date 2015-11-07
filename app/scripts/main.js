// jshint devel:true
(function () {

  var carousel = new ch.Carousel(ch('.carousel')[0]),
    layer = new ch.Layer(ch('#submit-btn')[0], {
      content: 'Not implemented.',
      shownby: 'pointertap'
    });

  $('.widget-mercado .carousel').click(function (evt) {
    if (evt.target.src) {
      $('#main-img')[0].src = evt.target.src;
    }
  });

  tiny.on('#submit-btn', 'click', function(e) {
    e.preventDefault();
  });

})();
