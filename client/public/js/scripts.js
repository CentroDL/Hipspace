$(document).ready(function() {

// FORM VALIDATION STARTS HERE
   $('.ui.form').form({
    email: {
      identifier: 'email',
      rules: [
        {
          type: 'email',
          prompt: 'Please enter an email'
        }
      ]
    }
  },
  {
    inline: true,
    on: 'blur',
    transition: 'fade down',
    onSuccess: validationpassed
  });

// This function is supposed to be called if correct data added to form
  function validationpassed() {
      // Multiple instances may have been bound to the form, only submit one.
      // This is a workaround and not ideal.
      // Improvements welcomed.
      if (window.lock != "locked") {
          var myform = $('.ui.form');
          $.ajax({
              type: myform.attr('method'),
              url: myform.attr('action'),
              data: myform.serialize(),
              success: function (data) {
                  //if successful at posting the form via ajax.
                  myformposted(data);
                  window.lock = "";
              }
          });
      }
    window.lock = "locked";
  }

// This function stops the form from submitting normally
  $('.ui.form').submit(function(e){
      //e.preventDefault(); usually use this, but below works best here.
      return false;
  });

// This function posts the form data
  function myformposted(data) {
      // clear your form and do whatever you want here
      $('.ui.form').find("input[type=text], textarea").val("");
      //
      // $('.ui.submit.button').after("<div>Message sent. Thank you.</div>");
      $('.ui.submit.button').after(data);
      }

// END OF FORM VALIDATION

}); // DOCUMENT.BODY ENDS HERE

// THIS FUNCTION CONTROLS THE PARALLAX ON THE HIPMAP PAGE
// this sets the scroll on the window
  $(window).on("scroll", function(){
    var $height = $(window).height();
    var $scrolled = $(window).scrollTop();
// this sets the background scroll
    var $background = $('.bg');
    $background.css("top", ($scrolled * -1) + "px");
// this sets the logo bar scroll
    var $logoBox = $('#big-logo');
    $logoBox.css("top",  ($scrolled * .5) + "px");
// this sets the custom hipscore box + ad box scroll (these divs are slaved)
    var $currentTop = $("#main-content").css("top")
    var $content = $("#main-content");
    $content.css('top', $currentTop + (($scrolled * -1) + "px"));
  });

// THIS FUNCTION TRIGGERS THE LOGIN MODAL WHEN YOU CLICK THE BUTTON IN THE HEADER
  function loginModalHeader(){
      $('#log-in-header-button').click(function(){$('.ui.modal')
          .modal('show')
      });
  }
  loginModalHeader();

// THIS FUNCTION CONTROLS THE LOGIN MODAL AFTER YOU TAKE THE QUIZ
  function loginModalAfterQuiz(){
      $('#loginquiz').click(function(){$('.ui.modal')
          .modal('show')
      });
  }
  loginModalAfterQuiz();

// THIS FUNCTION CONTROLS THE ANCHOR LINK ON THE INDEX PAGE AND PREVENTS IT FROM CHANGING THE ADDRESS IN THE BROWSER'S NAVIGATION
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

// THIS FUNCTION CONTROLS ALL CHECKBOXES
  function checkbox(){
    $('.ui.checkbox')
    .checkbox();
  }
  checkbox();

// THIS FUNCTION CONTROLS ALL DROPDOWNS
  function dropdown(){
      $('.ui.dropdown')
    .dropdown({
      maxSelections: 1
    });
  }
  dropdown();

// THIS FUNCTION CONTROLS THE SAVE REAL ESTATE LISTINGS BUTTONS
  function saveButton(){
    $('.save').on('click', function(){
      $(this).toggleClass('purpleClick');
    })
  }
  saveButton();
