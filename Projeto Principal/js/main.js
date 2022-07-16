$(function () {
  'use strict'

  $('[data-toggle="dropdown"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

$('.carousel').carousel({
    interval: 50
})