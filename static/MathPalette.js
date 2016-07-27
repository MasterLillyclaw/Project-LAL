
var color;

function makeColorRed() {
  $("#redCircle").on("click", function () {
    color = $(this).css("background");
    var expected = $(this).css("background");
    // It only affects the middle part of the snowman's hat
    $("#HatMiddle").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
      // These two parts change the text color
      // But not the border color
        $(this).css("color", "red");
        $(this).css("border", "solid black");
      }
    });
    $("#Roof").on("click", function () {
      if (color == expected) {
        $(this).css("border-bottom", "250px solid red");
        $(this).css("color", "red");
      }
    });
  })
}

function makeColorOrange() {
  $("#orangeCircle").on("click", function () {
    color = $(this).css("background");
    var expected = $(this).css("background");
    $("#LeftArm").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
        $(this).css("color", "orange");
        $(this).css("border", "solid black");
      }
    });
    $("#RightArm").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
        $(this).css("color", "orange");
        $(this).css("border", "solid black");
      }
    });
    $("#Nose").on("click", function () {
      if (color == expected) {
        $(this).css("border-bottom", "100px solid orange");
        $(this).css("color", "orange");
      }
    });
    $("#WindowCrossHor").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
        $(this).css("color", "orange");
        $(this).css("border", "solid black");
      }
    });
    $("#WindowCrossVer").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
        $(this).css("color", "orange");
        $(this).css("border", "solid black");
      }
    });
    $("#TreeStump").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
        $(this).css("color", "orange");
        $(this).css("border", "solid black");
      }
    });
    $("#DoorKnob").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
        $(this).css("color", "orange");
        $(this).css("border", "solid black");
      }
    });
  })
}

function makeColorYellow() {
  $("#yellowCircle").on("click", function () {
    color = $(this).css("background");
    var expected = $(this).css("background");
    $("#Foundation").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
        $(this).css("color", "yellow");
        $(this).css("border", "solid black");
      }
    });
  })
}

function makeColorGreen() {
  $("#greenCircle").on("click", function () {
    color = $(this).css("background");
    var expected = $(this).css("background");
    $("#TreeBottom").on("click", function () {
      if (color == expected) {
        $(this).css("border-bottom", "150px solid green");
        $(this).css("color", "green");
      }
    });
    $("#TreeMiddle").on("click", function () {
      if (color == expected) {
        $(this).css("border-bottom", "150px solid green");
        $(this).css("color", "green");
      }
    });
    $("#TreeTop").on("click", function () {
      if (color == expected) {
        $(this).css("border-bottom", "150px solid green");
        $(this).css("color", "green");
      }
    });
  })
}

function makeColorBlue() {
  $("#blueCircle").on("click", function () {
    color = $(this).css("background");
    var expected = $(this).css("background");
    $("#Door").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
        $(this).css("color", "blue");
        $(this).css("border", "solid black");
      }
    });
  })
}

function makeColorPurple() {
  $("#purpleCircle").on("click", function () {
    color = $(this).css("background");
    var expected = $(this).css("background");
    $("#Chimney").on("click", function () {
      if (color == expected) {
        $(this).css("border-bottom", "60px solid purple")
        $(this).css("color", "purple");
      }
    });
  })
}

function makeColorBlack() {
  $("#blackCircle").on("click", function () {
    color = $(this).css("background");
    var expected = $(this).css("background");
    $("#HatTop").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
        $(this).css("color", "black");
      }
    });
    $("#HatBottom").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
        $(this).css("color", "black");
      }
    });
    $("#ButtonTop").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
        $(this).css("color", "black");
      }
    });
    $("#ButtonMiddle").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
        $(this).css("color", "black");
      }
    });
    $("#ButtonBottom").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
        $(this).css("color", "black");
      }
    });
  })
}

function makeColorWhite() {
  $("#whiteCircle").on("click", function () {
    color = $(this).css("background");
    var expected = $(this).css("background");
    $("#circleTop").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
        $(this).css("color", "white");
        $(this).css("border", "solid black");
      }
    });
    $("#circleMiddle").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
        $(this).css("color", "white");
        $(this).css("border", "solid black");
      }
    });
    $("#circleBottom").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
        $(this).css("color", "white");
        $(this).css("border", "solid black");
      }
    });
    $("#Window").on("click", function () {
      if (color == expected) {
        $(this).css("background", color);
        $(this).css("color", "white");
        $(this).css("border", "solid black");
      }
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
