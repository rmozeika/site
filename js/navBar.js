jQuery(document).ready(function($) {

  var $web_window = $(window);
  var window_height = $web_window.height();
  var $document = $(document);
  var $nav = $('nav');
  var $navLi = $('nav li');
  var $scrollBlock = $('#scrollBlock');
  var $section = $('.navSection');
  var $li = $('li');
  var $section2 = $('.navSection:nth-of-type(2)');
  var $section1 = $('.navSection:nth-of-type(1)');


  var navHeight = $nav.height()

  //finds what width in percentage the li's and scrollblock will be set to
  var liLength = $('nav li').length;
  var liWidth = 100 / liLength
  var liWidthPercent = liWidth.toString().concat('%');
  $navLi.width(liWidthPercent);
  $scrollBlock.width(liWidthPercent);

  var sectLength = $section.length;

  //Function sets left position for scrollblock based on how far page is scrolled
  function scrollNav(){

     var window_top_position = $web_window.scrollTop();
     var window_bottom_position = (window_top_position + window_height);
     var $s1Offset = $section1.offset().top - navHeight;
     var $s2Offset = $section1.offset().top - navHeight;





     // If the window top position is above the second section, scrollblock will be pushed left the percent scrolled between top of page and top of 2nd section * the width of the li
    if ($section2.offset().top - navHeight > window_top_position){
      $nav.removeClass('navOpaque');
      $nav.addClass('navTranslucent')
      var firstSectOffset = $section2.offset().top - navHeight

      var wtfoRatio = (window_top_position - $s1Offset) / (firstSectOffset- $s1Offset)

      var scrollBlockPush = (wtfoRatio * liWidth).toString().concat('%');



      $scrollBlock.css('left', scrollBlockPush);
    }

    //Calculates same as above, but if the top position is below the 2nd section
    else {
      $nav.removeClass('navTranslucent')
      $nav.addClass('navOpaque')
      for (var i = 3; i <= (sectLength + 1); i++){
        //If we reached the last section, automatically just put the scrollblock all the way to the right
        if (i == (sectLength + 1)){
          $scrollBlock.css('left', '75%');

        }
        else if ($('.navSection:nth-of-type(' + i + ')').offset().top - navHeight > window_top_position){
          var firstSectOffset = $('.navSection:nth-of-type(' + (i - 1) + ')').offset().top - navHeight
          var secSectOffset = $('.navSection:nth-of-type(' + i  + ')').offset().top - navHeight

          var wtfoRatio = (window_top_position - firstSectOffset) / (secSectOffset - firstSectOffset)
          var scrollBlockPush = ((wtfoRatio * liWidth) + (25 * (i - 2))).toString().concat('%');

          $scrollBlock.css('left', scrollBlockPush);
          break
        }
      }
    }

    if ( 150 > window_top_position){
      // $scrollBlock.css('left', '0%');
      $nav.removeClass('navOpaque');
      $nav.removeClass('navTranslucent');


    }

   }



//Executs when page loads
  scrollNav();
  $web_window.on('resize', scrollNav)
  $document.on('scroll', scrollNav);

//Function for clicking links to smooth scroll to that section
  $li.on('click', function(){
    var index = $(this).index()
    var scrollTo = $('.navSection:nth-of-type(' + (index + 1) + ')').offset().top - navHeight
    $('html, body').animate({
          scrollTop: scrollTo
        }, 1000);
  })


});
