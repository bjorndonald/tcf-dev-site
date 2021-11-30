$(function () {
  $('.search-box').keypress(function () {
    console.log(this)
    if (!$(this).val().length) {
      $('countries-search-list').css('display', 'flex')
    }
  })
})

jQuery(document).ready(function ($) {})
