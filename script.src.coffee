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

App.Models.User = Backbone.Model.extend
  defaults:
    score: 0
    name: 'Bob'
    status: 'ready'


App.Models.Question = Backbone.Firebase.Model.extend
  firebase: new Backbone.Firebase("https://gregbenner2.firebaseio.com")
  defaults:
    answer: ''
    question: ''


App.Collections.Questions = Backbone.Firebase.Collection.extend
  model: App.Models.Question
  firebase: new Backbone.Firebase("https://gregbenner2.firebaseio.com")

