

function hideLoader(){
  $('.page-loader').fadeOut('slow');
}
 
const navList = document.querySelector('.navList')
const navBtn = document.querySelector('.navBtn')
const navLinks = document.querySelectorAll('.navLi')
const navbar = document.getElementById('navbar')


navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('navBtnToggle')
  navList.classList.toggle('navActive')
  navLinks.forEach((item, index) => {
    const delay = index / 10 + 0.05
    if (item.style.animation)
      item.style.animation = ''
    else
      item.style.animation = `SlideIn 0.5s forwards ${delay}s`
  })
})


// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 
  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    // navbar.style.background = "red";
    navbar.classList.add('navbarclass');
  }
  else {
    // navbar.style.background = "transparent";
    navbar.classList.remove('navbarclass');
  }
}


   $(document).ready(function(){
      $("a[data-scroll]").click(function (e) {
        e.preventDefault();
        $("a[data-scroll]").removeClass('active');
        var offset = 50;
        var target = "#" + $(this).data("scroll");
        var $target = $(target);
        $(this).addClass('active');
        //Animate the scroll to, include easing lib if you want more fancypants easings
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $target.offset().top - offset
            },
            800,
            "swing"
          );
      });
});




var typing=new Typed(".text", {
  strings: ["", "UI/UX Designer. ", "Freelancer. ", "Graphics Designer. ", "Web Designer. ", "Web Developer. ","Product Designer"],
  // strings: ["Graphics Designer."],
  typeSpeed: 0,
  backSpeed: 0,
  loop: true,
  backDelay:2000,
});


$( function() {$( "#tabs" ).tabs();} );


$(function() {
  //  photoshop Start
  var progressbar = $( "#progressbar" ),
    progressLabel = $( ".progress-label" );

  progressbar.progressbar({
    value: false,
    change: function() {progressLabel.text( progressbar.progressbar( "value" ) + "%" );},
    complete: function() {progressLabel.text( "Complete!" );}
  });
  function progress() {
    var val = progressbar.progressbar( "value" ) || 0;
    progressbar.progressbar( "value", val + 2 );
    if ( val < 73 ) {setTimeout( progress, 73 );}
  }
  setTimeout( progress, 2000 );

  //  Photoshop end

    //  Figma Start

  var progressbar1 = $( "#progressbar1" ),
  progressLabel1 = $( ".progress-label1" );

  progressbar1.progressbar({
    value: false,
    change: function() {progressLabel1.text( progressbar1.progressbar( "value" ) + "%" );},
    complete: function() {progressLabel1.text( "Complete!" );}
  });
  function progress1() {
    var val1 = progressbar1.progressbar( "value" ) || 0;
    progressbar1.progressbar( "value", val1 + 2 );
    if ( val1 < 84 ) {setTimeout( progress1, 84 );}
  }
  setTimeout( progress1, 2000 );

    //  Figma end


   // Adobe XD start
  var progressbar2 = $( "#progressbar2" ),
  progressLabel2 = $( ".progress-label2" );

  progressbar2.progressbar({
    value: false,
    change: function() {progressLabel2.text( progressbar2.progressbar( "value" ) + "%" );},
    complete: function() {progressLabel2.text( "Complete!" );}
  });
  function progress2() {
    var val2 = progressbar2.progressbar( "value" ) || 0;
    progressbar2.progressbar( "value", val2 + 2 );
    if ( val2 < 88 ) {setTimeout( progress2, 88 );}
  }
  setTimeout( progress2, 2000 );

  //  Adobe XD end

  // Adobe Ellustrator start
  var progressbar3 = $( "#progressbar3" ),
  progressLabel3 = $( ".progress-label3" );

  progressbar3.progressbar({
    value: false,
    change: function() {progressLabel3.text( progressbar3.progressbar( "value" ) + "%" );},
    complete: function() {progressLabel3.text( "Complete!" );}
  });
  function progress3() {
    var val3 = progressbar3.progressbar( "value" ) || 0;
    progressbar3.progressbar( "value", val3 + 2 );
    if ( val3 < 72 ) {setTimeout( progress3, 72 );}
  }
  setTimeout( progress3, 2000 );

  //  Adobe Ellustrator end

  // Responsive design start
  var progressbar4 = $( "#progressbar4" ),
  progressLabel4 = $( ".progress-label4" );

  progressbar4.progressbar({
    value: false,
    change: function() {progressLabel4.text( progressbar4.progressbar( "value" ) + "%" );},
    complete: function() {progressLabel4.text( "Complete!" );}
  });
  function progress4() {
    var val4 = progressbar4.progressbar( "value" ) || 0;
    progressbar4.progressbar( "value", val4 + 2 );
    if ( val4 < 94 ) {setTimeout( progress4, 80 );}
  }
  setTimeout( progress4, 2000 );

  // Responsive design end

    // html start
    var progressbar0 = $( "#progressbar0" ),
    progressLabel0 = $( ".progress-label0" );
  
    progressbar0.progressbar({
      value: false,
      change: function() {progressLabel0.text( progressbar0.progressbar( "value" ) + "%" );},
      complete: function() {progressLabel0.text( "Complete!" );}
    });
    function progress0() {
      var val0 = progressbar4.progressbar( "value" ) || 0;
      progressbar0.progressbar( "value", val0 + 2 );
      if ( val0 < 88 ) {setTimeout( progress0, 88 );}
    }
    setTimeout( progress0, 2000 );
  
    // html end



        // css start
        var progressbar5 = $( "#progressbar5" ),
        progressLabel5 = $( ".progress-label5" );
      
        progressbar5.progressbar({
          value: false,
          change: function() {progressLabel5.text( progressbar5.progressbar( "value" ) + "%" );},
          complete: function() {progressLabel5.text( "Complete!" );}
        });
        function progress5() {
          var val5 = progressbar5.progressbar( "value" ) || 0;
          progressbar5.progressbar( "value", val5 + 2 );
          if ( val5 < 86 ) {setTimeout( progress5, 86 );}
        }
        setTimeout( progress5, 2000 );
      
        // css end


        // javascript start
        var progressbar6 = $( "#progressbar6" ),
        progressLabel6 = $( ".progress-label6" );
      
        progressbar6.progressbar({
          value: false,
          change: function() {progressLabel6.text( progressbar6.progressbar( "value" ) + "%" );},
          complete: function() {progressLabel6.text( "Complete!" );}
        });
        function progress6() {
          var val6 = progressbar6.progressbar( "value" ) || 0;
          progressbar6.progressbar( "value", val6 + 2 );
          if ( val6 < 82 ) {setTimeout( progress6, 82 );}
        }
        setTimeout( progress6, 2000 );
      
        // javascript end

        // Bootstrap start
        var progressbar7 = $( "#progressbar7" ),
        progressLabel7 = $( ".progress-label7" );
      
        progressbar7.progressbar({
          value: false,
          change: function() {progressLabel7.text( progressbar7.progressbar( "value" ) + "%" );},
          complete: function() {progressLabel7.text( "Complete!" );}
        });
        function progress7() {
          var val7 = progressbar7.progressbar( "value" ) || 0;
          progressbar7.progressbar( "value", val7 + 2 );
          if ( val7 < 76 ) {setTimeout( progress7, 76 );}
        }
        setTimeout( progress7, 2000 );
      
        // Bootstrap end


        // jquery start
        var progressbar8 = $( "#progressbar8" ),
        progressLabel8 = $( ".progress-label8" );

        progressbar8.progressbar({
          value: false,
          change: function() {progressLabel8.text( progressbar8.progressbar( "value" ) + "%" );},
          complete: function() {progressLabel8.text( "Complete!" );}
        });
        function progress8() {
          var val8 = progressbar8.progressbar( "value" ) || 0;
          progressbar8.progressbar( "value", val8 + 2 );
          if ( val8 < 82 ) {setTimeout( progress8, 82 );}
        }
        setTimeout( progress8, 2000 );

        // jquery end



});



// contact form design

function sendmail(){


var params={
 contactform : document.getElementById('contactfrom'),
 contactname : document.getElementById('name').value,
 contactemailId : document.getElementById('emailId').value,
 contactphonenumber : document.getElementById('phoneNumber').value,
 contactmessageinfo : document.getElementById('messageinfo').value,
}

params.contactform.addEventListener('submit', (e) =>{
  e.preventDefault();
  Validate();
})






function Validate(){

  const ServiceId= 'service_8q8h2tg'
  const templetId = 'template_nhv6ua7'


 if(!params.contactmessageinfo =="",!params.contactphonenumber=="",!params.contactemailId =="",!params.contactname==""){

    emailjs.send(ServiceId,templetId,params).then(
      res=>{
    
         document.getElementById('name').value = "",
         document.getElementById('emailId').value = "",
         document.getElementById('phoneNumber').value = "",
         document.getElementById('messageinfo').value = "",
        console.log(res)
        alert("Form Submitted successfully")
    
      }
    ).catch((err) => console.log(err))

  }else{
    alert('Please Fill all Maindatory Fields')

  }
}

}





