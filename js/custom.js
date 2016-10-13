$(document).ready(function() {


  $('.portfolio-item').removeClass('portfolio-item-hover');
  $('.portfolio-item').removeClass('portfolio-item-flip');

  $('.portfolio-item').mouseover(function() {
    // console.log('hello');
    // $('.portfolio-item').removeClass('portfolio-item-hover');
    // $(this).fadeOut(600);
    // $(this).fadeIn(600);
    $(this).addClass('portfolio-item-hover');
    // $(this).addClass('portfolio-item-flip');

  });

  $('.portfolio-item').mouseleave(function() {
    // console.log('bye');
    // $('.portfolio-item').removeClass('portfolio-item-hover');
    $(this).removeClass('portfolio-item-hover');
  });

    //Date functionality for displaying the copyright date in the footer
    //Enter the starting date for the copyright
    var startDate = 2016;
    // returns the current year
    var currentYearDate = new Date().getFullYear();

    //if the current year matches the starting date, then only display the current year.
    //if the start date is prior to the current year, show both dates with a dash

    if (currentYearDate === startDate) {
        $('#currentYear').text(currentYearDate);
    } else {
        $('#currentYear').text(startDate + '-' + currentYearDate);
    }

    $('.resume-work-item div').hide();

    $('.resume-work-item').click(function() {
      //console.log($(this));
      $(this).children("div").toggle();

    });

      $('.resume-work-item').hover(function() {
          $(this)
              .addClass('resume-work-item-hover', 200);
      }, function() {
          $(this).stop()
              .attr("style", "")
              .removeClass('resume-work-item-hover', 600);
      });

      $('.phone').hide();
      $('.email').hide();

      $('#phone').hover(function() {
          $('.phone').show();
      }, function() {
          $('.phone').hide();
      });

      $('#email').hover(function() {
          $('.email').show();
      }, function() {
          $('.email').hide();
      });

});
