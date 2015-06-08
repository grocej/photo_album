$(document).ready(function() {
//Hide albums until they are clicked
// $(".indivContain").hide();
//Add a click event to a button
  $('.home').removeClass('invisible')


  $('.album-1-button').on('click', function(event){
    console.log('CLICK ME!!')
    event.preventDefault();
    $('.home').addClass('invisible');

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
