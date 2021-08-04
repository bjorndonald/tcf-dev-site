$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      //var $bgB = $(".bg-background");
     
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      //$bgB.toggleClass('bg-warm-light', $(this).scrollTop() > $nav.height());
    });
  });

  jQuery(document).ready(function($) {

    $('.dropdown-toggle').dropdown();
    
    /*$(function () {
      $('[data-toggle="popover"]').popover();
    });*/
    
    $('body').popover({
        html: true,
        content: function () {
            return $(this).next().html();
        },
        selector: '.has-popover',
        trigger: 'hover'
    });
    
    $( ".btnCad85" ).click(function() {
      $('.cadText85').show();
      $('.cadText170').hide();
      $('.cadText345').hide();
      
    });
    
    $( ".btnCad170" ).click(function() {
      $('.cadText85').hide();
      $('.cadText170').show();
      $('.cadText345').hide();
      
    });
    
     $( ".btnCad345" ).click(function() {
      $('.cadText85').hide();
      $('.cadText170').hide();
      $('.cadText345').show();
      
    });
    
    
});

  