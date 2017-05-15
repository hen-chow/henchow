$(document).ready(function(){

  var $canvas = $('.bubbles-canvas');
  var $secondary = $('.secondary');

  var randomNum = function(max) {
    return Math.floor(Math.random() * max);
  };

  // var putBubble = function(){
  //
  //   if (Math.random() > 0.5)
  //   return;
  //
  //   var size = parseInt(Math.random() * 10);
  //
  //   var colorRange = {
  //     green: [0, 218, 166],
  //     pink: [252, 228, 236],
  //     white: [255, 255, 255],
  //     grey: [236, 239, 241],
  //     key: function(n){
  //       return this[Object.keys(this)[n]];
  //     }
  //   };
  //   var colorPicker = parseInt(Math.random() * 4);
  //
  //   var $bubble = $('<div class="bubble">').css({
  //     left: randomNum(window.innerWidth) + 'px', // e.pageX,
  //     top: randomNum(window.innerHeight) + 'px', // e.pageY,
  //     width: size + 'em',
  //     height: size + 'em',
  //     zIndex: -1,
  //     border: '1px solid ' + 'rgb(' + colorRange.key(colorPicker)[0] + ', ' + colorRange.key(colorPicker)[1] + ', ' +
  //     colorRange.key(colorPicker)[2] + ')'
  //   });
  //
  //   $bubble.appendTo($canvas);
  //   // $bubble.appendTo($secondary);
  //
  //   var left = window.innerWidth * Math.random();
  //
  //   var speed = Math.random() * 10000;
  //
  //   $bubble.animate({top: -100, left: left}, speed, function(){
  //     $bubble.fadeOut(1000).remove();
  //   });
  //
  // };

  // var setTimer = setInterval (putBubble, 100);

  $('.bubbles-canvas').on('mousemove', function(e) {

    // clearInterval(setTimer);

    if (Math.random() > 0.5)
    return;

    var size = parseInt(Math.random() * 10);

    var colorRange = {
      green: [0, 218, 166],
      pink: [252, 228, 236],
      white: [255, 255, 255],
      grey: [236, 239, 241],
      key: function(n){
        return this[Object.keys(this)[n]];
      }
    };
    var colorPicker = parseInt(Math.random() * 4);

    var $bubble = $('<div class="bubble">').css({
      left: e.pageX,
      top:  e.pageY,
      width: size + 'em',
      height: size + 'em',
      zIndex: -1,
      border: '1px solid ' + 'rgb(' + colorRange.key(colorPicker)[0] + ', ' + colorRange.key(colorPicker)[1] + ', ' +
      colorRange.key(colorPicker)[2] + ')'
    });

    $bubble.appendTo($canvas);
    // $bubble.appendTo($secondary);

    var left = window.innerWidth * Math.random();

    var speed = Math.random() * 10000;

    $bubble.animate({top: -100, left: left}, speed, function(){
      $bubble.fadeOut(1000).remove();
    });

  });



});
