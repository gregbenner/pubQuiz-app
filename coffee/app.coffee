$(document).foundation()

# FireUsers = new Firebase('https://gregbenner2.firebaseio.com/users');

# console.log FireUsers[0]

window.App =
    Models: {}
    Collections: {}
    Views: {}



window.data = ''

equalize = ->
  $('.equalize').equalize()

pageHeight = ->
  $('aside, article').css
    'min-height': $(window).height()

minorLineheight = ->
  $('.player-name-small, .player-score-small').css
    'line-height' : $('.portrait-small').height() + 'px'

$(document).ajaxStart () ->
  $("html").css("cursor", "progress")

$(document).ajaxStop () ->
  $("html").css("cursor", "default")

resizeFunctions = ->
  minorLineheight()
  pageHeight()
  equalize()


throttledResize = _.throttle(resizeFunctions, 100)

init = ->
  pageHeight()
  equalize()

$(window).resize(throttledResize)

$(window).load ->
  minorLineheight()

$(document).ready ->
  init()