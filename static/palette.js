
/* Setting up the click function:
  "If you click on a color in the palette, then
  click on the shape, as a result,
  the shape will have the color of the palette color
  you clicked on." */

function makeColorRed() {
  $(".redCircle").on("click", function () {
    // this sets a variable as the css background attribute
    var color = $(this).css("background");
    $(".practiceRectangle").on("click", function () {
      // this changes the new background to the previously
      // set variable called color
      $(this).css("background", color)
    });
  })
}

// the pattern is repeated for all palette colors

function makeColorOrange() {
  $(".orangeCircle").on("click", function () {
    var color = $(this).css("background");
    $(".practiceRectangle").on("click", function () {
      $(this).css("background", color)
    });
  })
}

function makeColorYellow() {
  $(".yellowCircle").on("click", function () {
    var color = $(this).css("background");
    $(".practiceRectangle").on("click", function () {
      $(this).css("background", color)
    });
  })
}

function makeColorGreen() {
  $(".greenCircle").on("click", function () {
    var color = $(this).css("background");
    $(".practiceRectangle").on("click", function () {
      $(this).css("background", color)
    });
  })
}

function makeColorBlue() {
  $(".blueCircle").on("click", function () {
    var color = $(this).css("background");
    $(".practiceRectangle").on("click", function () {
      $(this).css("background", color)
    });
  })
}

function makeColorPurple() {
  $(".purpleCircle").on("click", function () {
    var color = $(this).css("background");
    $(".practiceRectangle").on("click", function () {
      $(this).css("background", color)
    });
  })
}

function makeColorBlack() {
  $(".blackCircle").on("click", function () {
    var color = $(this).css("background");
    $(".practiceRectangle").on("click", function () {
      $(this).css("background", color)
    });
  })
}

function makeColorWhite() {
  $(".whiteCircle").on("click", function () {
    var color = $(this).css("background");
    $(".practiceRectangle").on("click", function () {
      $(this).css("background", color)
    });
  })
}

/* This function will call all other functions */
function main() {
  makeColorRed();
  makeColorOrange();
  makeColorYellow();
  makeColorGreen();
  makeColorBlue();
  makeColorPurple();
  makeColorBlack();
  makeColorWhite();
}

$(document).ready(main);
