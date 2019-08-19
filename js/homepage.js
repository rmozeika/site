jQuery(document).ready(function($) {

$('.portBox').hover(function(){
  $(this).find('.portSlider').css('top', '0px');
  $(this).find('.portGitLink').css('top', '245px');
}, function(){
  $(this).find('.portSlider').css('top', '285px');
  $(this).find('.portGitLink').css('top', '285px')
})





/*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/


  //window and animation items
  var animation_elements = $.find('.animation-element');
  var web_window = $(window);
  var _document = $(document);



  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    if ($(window).width() < 600) {
      $.each(animation_elements, function() {
        $(this).addClass('in-view');
      });
    }

    else {
      //get current window information
      var window_height = web_window.height();
      var window_top_position = web_window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      //iterate through elements to see if its in view
      $.each(animation_elements, function() {

        //get the element sinformation
        var element = $(this);
        var element_height = $(element).outerHeight();
        var element_top_position = $(element).offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
          element.addClass('in-view');
        } else {
          element.removeClass('in-view');
        }
      });
    }
  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');




  $(document).on('scroll', function() {
    var window_height = web_window.height();
    var doc_height = _document.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

//Calculates viewport to document total ratio in percentage
  var winDocDec = (window_height / doc_height) * 100;
  var windDocStr = winDocDec.toString();
  var winDocRatio = windDocStr.concat('%')

  //Makes scroll block width percentage equal to percentage in view
  $('#littletest').css('width', winDocRatio);


  //Calculates distance scrolled from top to document total ratio in percentage
  var scrollTopDec = (window_top_position / doc_height) * 100;
  var scrollTopStr = scrollTopDec.toString();
  var scrollTopRatio = scrollTopStr.concat('%');

  //makes scrollblock distance from left equal to percentage of scrolled from top
  $('#littletest').css('left', scrollTopRatio);
  })










});
