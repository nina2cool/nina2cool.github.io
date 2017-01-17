$(document).ready(function() {

    // Functionality for the portfolio boxes
    $(function() {
        var selectedClass = "";
        $(".fil-cat").click(function() {
            selectedClass = $(this).attr("data-rel");
            // console.log(selectedClass);
            $("#portfolios").fadeTo(100, 0.1);
            $("#portfolios > div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
            setTimeout(function() {
                $("." + selectedClass).fadeIn().addClass('scale-anm');
                $("#portfolios").fadeTo(300, 1);
            }, 300);

        });
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


    // Old code for some resume items that I used to have

    // $('.resume-work-item div').hide();
    //
    // $('.resume-work-item').click(function() {
    //     //console.log($(this));
    //     $(this).children("div").toggle();
    //
    // });
    //
    // $('.resume-work-item').hover(function() {
    //     $(this)
    //         .addClass('resume-work-item-hover', 200);
    // }, function() {
    //     $(this).stop()
    //         .attr("style", "")
    //         .removeClass('resume-work-item-hover', 600);
    // });

    // Code to reveal phone, email, Github name, and LinkedIn profile when hovering

    $('.phone').hide();
    $('.email').hide();
    $('.linkedin').hide();
    $('.github').hide();

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

    $('#linkedin').hover(function() {
        $('.linkedin').show();
    }, function() {
        $('.linkedin').hide();
    });

    $('#github').hover(function() {
        $('.github').show();
    }, function() {
        $('.github').hide();
    });

});
