$(document).ready(function() {
//Hide albums until they are clicked
// $(".indivContain").hide();
//Add a click event to a button
  $('.home').removeClass('invisible')


  $('body').on('click', '#album-1-button', function(event) {
    console.log('CLICK ME!!')
    event.preventDefault();
    $('.home').remove();
    $('#mePage').removeClass('invisible');
    $('.threePage invisible').remove();
  });


  $('body').on('click', '#album-2-button', function(event) {
    console.log('Number two on you!')
    event.preventDefault();
    $('.home').remove();
    $('#gainesPage').removeClass('invisible');
    $('threePage invisible').remove();
  });

  $('body').on('click', '#album-3-button', function(event) {
    console.log('Now me!')
    event.preventDefault();
    $('.home').remove();
    $('#comedyPage').removeClass('invisible');
    $('threePage invisible').remove();

  });

  $('body').on('click', '#album-4-button', function(event) {
    console.log("It's button four!")
    event.preventDefault();
    $('.home').remove();
    $('#illusLogoPage').removeClass('invisible');
    $('threepage invisible').remove();

  });

    $('body').on('click', '#album-5-button', function(event) {
      console.log("Button five!")
      event.preventDefault();
      $('.home').remove();
      $('#midIllusPage').removeClass('invisible');
      $('threePage invisible').remove();

  });

    $('body').on('click', '#album-6-button', function(event) {
      console.log("Here's to six!!")
      event.preventDefault();
      $('.home').remove();
      $('#tinRoofPage').removeClass('invisible');
      $('threePage invisible').remove();

  });

});
// $(".album1").on('click', 'threePage', $target) {
//   event.preventDefault();
//   var clickedPage = $(this).attr.('rel');
//   console.log("clicked")
//   $(".nav").hide();
//
// };
//
// });
//
// $(".album2").click(function(event){
//     event.preventDefault();
//     $(".firstRow").hide();
//
//     $(".secondRow").hide();
//
//     $("#gainesPage").show();
//
// });
//
// //When clicked show the album clicked
// //And Hide the button album
// //Make a back to albums button appear
// //Make button hide all but current album
// });
//
// $(".buttonRow").hide();
//
//
//
// $(".albums").hide();
// //Add a click event to a button
// //When clicked show the album clicked
//And Hide the button bar
//Make a back to albums button appear
//Make button hide all but current album
