/* Setting up the click function:
  "If you click on a color in the palette, then
  click on the shape, as a result,
  the shape will have the color of the palette color
  you clicked on." */

function makeColorRed() {
  $("#redCircle").on("click", function () {
    // this sets a variable as the css background attribute
    var color = $(this).css("background");
    $(".clickable").on("click", function () {
      // this changes the new background to the previously
      // set variable called color
      $(this).css("background", color)
    });
    // This applies to the snowman nose
    $(".clickableNose").on("click", function () {
      $(this).css("border-bottom", "100px solid red")
    });
    // This applies to the house roof
    $(".clickableRoof").on("click", function () {
      $(this).css("border-bottom", "300px solid red")
    });
    // This applies to the house tree
    $(".clickableTree").on("click", function () {
      $(this).css("border-bottom", "150px solid red")
    });
    //This applies to the house chimney
    $(".clickableChimney").on("click", function () {
      $(this).css("border-bottom", "70px solid red")
    });
  })
}

// the pattern is repeated for all palette colors

function makeColorOrange() {
  $("#orangeCircle").on("click", function () {
    var color = $(this).css("background");
    $(".clickable").on("click", function () {
      $(this).css("background", color)
    });
    $(".clickableNose").on("click", function () {
      $(this).css("border-bottom", "100px solid orange")
    });
    $(".clickableRoof").on("click", function () {
      $(this).css("border-bottom", "300px solid orange")
    });
    // This applies to the house tree
    $(".clickableTree").on("click", function () {
      $(this).css("border-bottom", "150px solid orange")
    });
    $(".clickableChimney").on("click", function () {
      $(this).css("border-bottom", "70px solid orange")
    });
  })
}

function makeColorYellow() {
  $("#yellowCircle").on("click", function () {
    var color = $(this).css("background");
    $(".clickable").on("click", function () {
      $(this).css("background", color)
    });
    $(".clickableNose").on("click", function () {
      $(this).css("border-bottom", "100px solid yellow")
    });
    $(".clickableRoof").on("click", function () {
      $(this).css("border-bottom", "300px solid yellow")
    });
    // This applies to the house tree
    $(".clickableTree").on("click", function () {
      $(this).css("border-bottom", "150px solid yellow")
    });
    $(".clickableChimney").on("click", function () {
      $(this).css("border-bottom", "70px solid yellow")
    });
  })
}

function makeColorGreen() {
  $("#greenCircle").on("click", function () {
    var color = $(this).css("background");
    $(".clickable").on("click", function () {
      $(this).css("background", color)
    });
    $(".clickableNose").on("click", function () {
      $(this).css("border-bottom", "100px solid green")
    });
    $(".clickableRoof").on("click", function () {
      $(this).css("border-bottom", "300px solid green")
    });
    // This applies to the house tree
    $(".clickableTree").on("click", function () {
      $(this).css("border-bottom", "150px solid green")
    });
    $(".clickableChimney").on("click", function () {
      $(this).css("border-bottom", "70px solid green")
    });
  })
}

function makeColorBlue() {
  $("#blueCircle").on("click", function () {
    var color = $(this).css("background");
    $(".clickable").on("click", function () {
      $(this).css("background", color)
    });
    $(".clickableNose").on("click", function () {
      $(this).css("border-bottom", "100px solid blue")
    });
    $(".clickableRoof").on("click", function () {
      $(this).css("border-bottom", "300px solid blue")
    });
    // This applies to the house tree
    $(".clickableTree").on("click", function () {
      $(this).css("border-bottom", "150px solid blue")
    });
    $(".clickableChimney").on("click", function () {
      $(this).css("border-bottom", "70px solid blue")
    });
  })
}

function makeColorPurple() {
  $("#purpleCircle").on("click", function () {
    var color = $(this).css("background");
    $(".clickable").on("click", function () {
      $(this).css("background", color)
    });
    $(".clickableNose").on("click", function () {
      $(this).css("border-bottom", "100px solid purple")
    });
    $(".clickableRoof").on("click", function () {
      $(this).css("border-bottom", "300px solid purple")
    });
    // This applies to the house tree
    $(".clickableTree").on("click", function () {
      $(this).css("border-bottom", "150px solid purple")
    });
    $(".clickableChimney").on("click", function () {
      $(this).css("border-bottom", "70px solid purple")
    });
  })
}

function makeColorBlack() {
  $("#blackCircle").on("click", function () {
    var color = $(this).css("background");
    $(".clickable").on("click", function () {
      $(this).css("background", color)
    });
    $(".clickableNose").on("click", function () {
      $(this).css("border-bottom", "100px solid black")
    });
    $(".clickableRoof").on("click", function () {
      $(this).css("border-bottom", "300px solid black")
    });
    // This applies to the house tree
    $(".clickableTree").on("click", function () {
      $(this).css("border-bottom", "150px solid black")
    });
    $(".clickableChimney").on("click", function () {
      $(this).css("border-bottom", "70px solid black")
    });
  })
}

function makeColorWhite() {
  $("#whiteCircle").on("click", function () {
    var color = $(this).css("background");
    $(".clickable").on("click", function () {
      $(this).css("background", color)
    });
    $(".clickableNose").on("click", function () {
      $(this).css("border-bottom", "100px solid white")
    });
    $(".clickableRoof").on("click", function () {
      $(this).css("border-bottom", "300px solid white")
    });
    // This applies to the house tree
    $(".clickableTree").on("click", function () {
      $(this).css("border-bottom", "150px solid white")
    });
    $(".clickableChimney").on("click", function () {
      $(this).css("border-bottom", "70px solid white")
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
