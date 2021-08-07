console.log('Hello!');

$(document).ready(() => {
  $('.reply-show').click(function(){
    $('.reply-box').show();
  });
  $('.reply-hide').click(function(){
    $('.reply-box').hide();
  });
  $('#assignment').click(function(){
    $('.menu-list a').removeClass('select');
  });
  $('#assignment').click(function(){
    $('#assignment').addClass('select');
  });
  $('#admin').click(function(){
    $('.menu-list a').removeClass('select');
  });
  $('#admin').click(function(){
    $('#admin').addClass('select');
  });
  });

  ClassicEditor
  .create( document.querySelector( '#editor' ) )
  .catch( error => {
      console.error( error );
  } );