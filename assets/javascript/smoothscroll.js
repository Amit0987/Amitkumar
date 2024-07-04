
$(document).ready(function() {
  
    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
    
    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
      
      scrollLink.each(function() {
        
        var sectionOffset = $(this.hash).offset().top;
      })
      
    })
    
  })
  
  
        let mybutton = document.getElementById("myBtn");
          
          // When the user scrolls down 20px from the top of the document, show the button
          window.onscroll = function() {scrollFunction()};
          
          function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              mybutton.style.display = "block";
            } else {
              mybutton.style.display = "none";
            }
          }
  
          // When the user clicks on the button, scroll to the top of the document
          function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }
  
  