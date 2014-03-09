var equalize, init, minorLineheight, pageHeight, resizeFunctions, throttledResize;

$(document).foundation();

window.App = {
  Models: {},
  Collections: {},
  Views: {}
};

window.data = '';

equalize = function() {
  return $('.equalize').equalize();
};

pageHeight = function() {
  return $('aside, article').css({
    'min-height': $(window).height()
  });
};

minorLineheight = function() {
  return $('.player-name-small, .player-score-small').css({
    'line-height': $('.portrait-small').height() + 'px'
  });
};

$(document).ajaxStart(function() {
  return $("html").css("cursor", "progress");
});

$(document).ajaxStop(function() {
  return $("html").css("cursor", "default");
});

resizeFunctions = function() {
  minorLineheight();
  pageHeight();
  return equalize();
};

throttledResize = _.throttle(resizeFunctions, 100);

init = function() {
  pageHeight();
  return equalize();
};

$(window).resize(throttledResize);

$(window).load(function() {
  return minorLineheight();
});

$(document).ready(function() {
  return init();
});

//# sourceMappingURL=app.js.map
