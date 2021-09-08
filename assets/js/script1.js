(function () {

  $('#quiz-results-section').hide();

    var carouselTransition, carouselContent, carouselIndex, carouselLength, firstClone, firstItem, isAnimating, itemWidth, lastClone, lastItem;
    carouselTransition = 400;
    carouselContent = $('.carousel__content');
    carouselIndex = 0;
    carouselMax = 0;
    carouselLength = carouselContent.children().length;
    isAnimating = false;
    itemWidth = 100 / carouselLength;
    firstItem = $(carouselContent.children()[0]);
    lastItem = $(carouselContent.children()[carouselLength - 1]);
    firstClone = null;
    lastClone = null;
    carouselContent.css('width', carouselLength * 100 + '%');
    carouselContent.transition({ x: carouselIndex * -itemWidth + '%' }, 0);
    $.each(carouselContent.children(), function () {
        return $(this).css('width', itemWidth + '%');
    });
    $('.nav--buttons--left').on('click', function (event) {
        event.preventDefault();
        if (isAnimating || carouselIndex === 0) {
            return;
        }
        isAnimating = true;
        carouselIndex--;
        update_progress_bar(carouselIndex);
        return carouselContent.transition({ x: carouselIndex * -itemWidth + '%' }, carouselTransition, 'ease', function () {
            return isAnimating = false;
        });
    });
    $('.nav--buttons--right').on('click', function (event) {
        event.preventDefault();
        if (isAnimating || carouselIndex === carouselLength - 1) {
            return;
        }
        isAnimating = true;
        carouselIndex++;
        update_progress_bar(carouselIndex);
        if ( carouselIndex > carouselMax ) {
          carouselMax = carouselIndex;
        }
        return carouselContent.transition({ x: carouselIndex * -itemWidth + '%' }, carouselTransition, 'ease', function () {
            return isAnimating = false;
        });
    });
}.call(this));

function calc_results() {
  var count;
  $(".questions").each(function(){
    if(this.is(":checked")) {
      count++;
    }
  });
}

var results = [
  [1,2,3,4],
  [1,2,3,4],
  [1,2,3,4],
  [1,2,3,4],
  [1,2,3,4],
  [1,2,3,4],
  [1,2,3,4],
  [1,2,3,4],
  [1,2,3,4],
  [1,2,3,4]
]

function calc_results(button_elem) {
  var count = 0;
  var checked = 0;
  var size = $("input[name=size]:checked").val();
  $(":checked").each(function() {
    checked++;
  });
  if ( checked != 10) {
    alert("Please check all of the questions.");
    return;
  }

  var radios = jQuery("input[type='radio']");
  radios = radios.filter(":checked");

  var array = [];
  for(var i=0; i<radios.length; i++) {
    array.push(radios[i].getAttribute("id"));
  }

  console.log(array);

  var score = 0;
  for(var i=0; i<array.length; i++) {
    var temp = array[i].substring(1);
    console.log(temp);
    if(temp.length == 3) {
      score += results[9][parseInt(temp[2])-1];
    } else {
      score += results[parseInt(temp[0])-1][parseInt(temp[1])-1];
    }
    console.log(score);
  }

  var message = "";

  if(score >= 30) {
    message = "Great Job!";
  } else if(score >= 20) {
    message = "You did alright!";
  } else if(score >= 10) {
    message = "Better luck next time";
  } else {
    message = "Maybe you should try a little harder";
  }

  $('#quiz-results-message-section').text(message);
  $('#quiz-results-section').slideDown();
  $('#quiz-results-message-section').slideDown();
  $('#close-button').slideDown();
}

$('#quiz-close-button').click(function() {
  $('#quiz-results-section').slideUp();
  $('#quiz-results-message-section').slideUp();
  $('#close-button').slideUp();
});

function update_progress_bar(index) {
  var checked = index;
  if ( checked === 0 ) {
    $(".progress-bar-insider").css("width", "4%");
  }
  else {
    checked = checked - 1;
    $(".progress-bar-insider").css("width", ((checked/10)*100 + 4) + "%");
  }
  if (checked < 16) {
    $(".progress-bar-insider").attr("data-progress", (checked + 1) + "/11");
  }
  else {
    $(".progress-bar-insider").attr("data-progress", "");
  }
}

$(".carousel--item input[type=radio]").click(function(){
  $("#auto-con-calc").slideUp();
  $('.nav--buttons--right').trigger('click');
});
