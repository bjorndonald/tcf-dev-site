$(function () {
  $(document).scroll(function () {
    var $nav = $('.navbar-fixed-top')
    //var $bgB = $(".bg-background");

    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
    //$bgB.toggleClass('bg-warm-light', $(this).scrollTop() > $nav.height());
  })
})

jQuery(document).ready(function ($) {
  console.log('ddd')
  $('.custom-select-box').each(function () {
    var $this = $(this),
      selectOptions = $(this).children('option').length

    $this.addClass('hide-select')
    $this.wrap('<div class="select"></div>')
    $this.after('<div class="custom-select-bx"></div>')
    $('div.select').append('<div class="arrow-right"></div>')
    var $customSelect = $this.next('div.custom-select-bx')
    $customSelect.text(
      $this
        .children('option')
        .eq(0)
        .text()
    )

    var $optionlist = $('<ul />', {
      class: 'select-options'
    }).insertAfter($customSelect)

    for (var i = 0; i < selectOptions; i++) {
      $('<li />', {
        text: $this
          .children('option')
          .eq(i)
          .text(),
        rel: $this
          .children('option')
          .eq(i)
          .val()
      }).appendTo($optionlist)
    }

    var $optionlistItems = $optionlist.children('li')

    $customSelect.on('click', function (e) {
      e.stopPropagation()
      console.log('vvv')
      $('div.custom-select-bx.active')
        .not(this)
        .each(function () {
          $(this)
            .removeClass('active')
            .next('ul.select-options')

            .hide()
        })
      $(this)
        .toggleClass('active')
        .next('ul.select-options')

        .show()
    })

    $optionlistItems.click(function (e) {
      e.stopPropagation()
      $(this)
        .parent()
        .find('li')
        .removeClass('active')
      $(this).addClass('active')
      $customSelect.text($(this).text()).removeClass('active')
      $this.val($(this).attr('rel'))
      $optionlist.hide()
    })

    $(document).click(function () {
      $customSelect.removeClass('active')
      $optionlist.hide()
    })
  })

  // $('.dropdown-toggle').dropdown()

  /*$(function () {
      $('[data-toggle="popover"]').popover();
    });*/

  // $('body').popover({
  //   html: true,
  //   content: function () {
  //     return $(this)
  //       .next()
  //       .html()
  //   },
  //   selector: '.has-popover',
  //   trigger: 'hover'
  // })

  $('.btnCad85').click(function () {
    $('.cadText85').show()
    $('.cadText170').hide()
    $('.cadText345').hide()
  })

  $('.btnCad170').click(function () {
    $('.cadText85').hide()
    $('.cadText170').show()
    $('.cadText345').hide()
  })

  $('.btnCad345').click(function () {
    $('.cadText85').hide()
    $('.cadText170').hide()
    $('.cadText345').show()
  })
})
