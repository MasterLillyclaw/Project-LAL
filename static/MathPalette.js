
/* Setting up the click function:
  "If you click on a color in the palette, then
  click on the shape, as a result,
  the shape will have the color of the palette color
  you clicked on." */


  var color;
  var collectClickInfo = [];



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
          // This removes any previous undo knowledge from the button
            $("#Undo").off("click");
          // Allowing it to only undo the most recent addition when clicking undo
            $("#Undo").on("click", function () {
              if (color == expected) {
                $("#HatMiddle").css("background", "#d9d9d9")
                $("#HatMiddle").css("color", "black");
                $("#HatMiddle").css("border", "solid black");
              }
            });
          // This will redo that most recent undo only
            $("#Redo").on("click", function () {
              if (color == expected) {
                $("#HatMiddle").css("background", "red")
                $("#HatMiddle").css("color", "red");
                $("#HatMiddle").css("border", "solid black");
              }
            });
          }
        });
      $("#Roof").on("click", function () {
        if (color == expected) {
          $(this).css("border-bottom", "250px solid red");
          $(this).css("color", "red");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#Roof").css("border-bottom", "250px solid #d9d9d9")
              $("#Roof").css("color", "black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#Roof").css("border-bottom", "250px solid red")
              $("#Roof").css("color", "red");
            }
          });
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
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#LeftArm").css("background", "#d9d9d9");
              $("#LeftArm").css("color", "black");
              $("#LeftArm").css("border", "solid black");
            }
        });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#LeftArm").css("background", "orange");
              $("#LeftArm").css("color", "orange");
              $("#LeftArm").css("border", "solid black");
            }
          });
        }
      });
      $("#RightArm").on("click", function () {
        if (color == expected) {
          $(this).css("background", color);
          $(this).css("color", "orange");
          $(this).css("border", "solid black");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#RightArm").css("background", "#d9d9d9")
              $("#RightArm").css("color", "black");
              $("#RightArm").css("border", "solid black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#RightArm").css("background", "orange")
              $("#RightArm").css("color", "orange");
              $("#RightArm").css("border", "solid black");
            }
          });
        }
      });
      $("#Nose").on("click", function () {
        if (color == expected) {
          $(this).css("border-bottom", "100px solid orange");
          $(this).css("color", "orange");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#Nose").css("border-bottom", "100px solid #d9d9d9")
              $("#Nose").css("color", "black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#Nose").css("border-bottom", "100px solid orange")
              $("#Nose").css("color", "orange");
            }
          });
        }
      });
      $("#WindowCrossHor").on("click", function () {
        if (color == expected) {
          $(this).css("background", color);
          $(this).css("color", "orange");
          $(this).css("border", "solid black");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#WindowCrossHor").css("background", "#d9d9d9")
              $("#WindowCrossHor").css("color", "black");
              $("#WindowCrossHor").css("border", "solid black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#WindowCrossHor").css("background", "orange")
              $("#WindowCrossHor").css("color", "orange");
              $("#WindowCrossHor").css("border", "solid black");
            }
          });
        }
      });
        $("#WindowCrossVer").on("click", function () {
          if (color == expected) {
            $(this).css("background", color);
            $(this).css("color", "orange");
            $(this).css("border", "solid black");
            $("#Undo").off("click");
            $("#Undo").on("click", function () {
              if (color == expected) {
                $("#WindowCrossVer").css("background", "#d9d9d9")
                $("#WindowCrossVer").css("color", "black");
                $("#WindowCrossVer").css("border", "solid black");
              }
            });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#WindowCrossVer").css("background", "orange")
              $("#WindowCrossVer").css("color", "orange");
              $("#WindowCrossVer").css("border", "solid black");
            }
          });
        }
      });
      $("#TreeStump").on("click", function () {
        if (color == expected) {
          $(this).css("background", color);
          $(this).css("color", "orange");
          $(this).css("border", "solid black");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#TreeStump").css("background", "#d9d9d9")
              $("#TreeStump").css("color", "black");
              $("#TreeStump").css("border", "solid black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#TreeStump").css("background", "orange")
              $("#TreeStump").css("color", "orange");
              $("#TreeStump").css("border", "solid black");
            }
          });
        }
      });
      $("#DoorKnob").on("click", function () {
        if (color == expected) {
          $(this).css("background", color);
          $(this).css("color", "orange");
          $(this).css("border", "solid black");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#DoorKnob").css("background", "#d9d9d9")
              $("#DoorKnob").css("color", "black");
              $("#DoorKnob").css("border", "solid black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#DoorKnob").css("background", "orange")
              $("#DoorKnob").css("color", "orange");
              $("#DoorKnob").css("border", "solid black");
            }
          });
        }
      });
    }
  )};



  function makeColorYellow() {
    $("#yellowCircle").on("click", function () {
      color = $(this).css("background");
      var expected = $(this).css("background");
      $("#Foundation").on("click", function () {
        if (color == expected) {
          $(this).css("background", color);
          $(this).css("color", "yellow");
          $(this).css("border", "solid black");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#Foundation").css("background", "#d9d9d9")
              $("#Foundation").css("color", "black");
              $("#Foundation").css("border", "solid black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#Foundation").css("background", "yellow")
              $("#Foundation").css("color", "yellow");
              $("#Foundation").css("border", "solid black");
            }
          });
        }
      });
    }
  )};



  function makeColorGreen() {
    $("#greenCircle").on("click", function () {
      color = $(this).css("background");
      var expected = $(this).css("background");
      $("#TreeBottom").on("click", function () {
        if (color == expected) {
          $(this).css("border-bottom", "150px solid green");
          $(this).css("color", "green");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#TreeBottom").css("border-bottom", "150px solid #d9d9d9")
              $("#TreeBottom").css("color", "black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#TreeBottom").css("border-bottom", "150px solid green")
              $("#TreeBottom").css("color", "green");
            }
          });
        }
      });
      $("#TreeMiddle").on("click", function () {
        if (color == expected) {
          $(this).css("border-bottom", "150px solid green");
          $(this).css("color", "green");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#TreeMiddle").css("border-bottom", "150px solid #d9d9d9")
              $("#TreeMiddle").css("color", "black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#TreeMiddle").css("border-bottom", "150px solid green")
              $("#TreeMiddle").css("color", "green");
            }
          });
        }
      });
      $("#TreeTop").on("click", function () {
        if (color == expected) {
          $(this).css("border-bottom", "150px solid green");
          $(this).css("color", "green");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#TreeTop").css("border-bottom", "150px solid #d9d9d9")
              $("#TreeTop").css("color", "black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#TreeTop").css("border-bottom", "150px solid green")
              $("#TreeTop").css("color", "green");
            }
          });
        }
      });
    }
  )};



  function makeColorBlue() {
    $("#blueCircle").on("click", function () {
      color = $(this).css("background");
      var expected = $(this).css("background");
      $("#Door").on("click", function () {
        if (color == expected) {
          $(this).css("background", color);
          $(this).css("color", "blue");
          $(this).css("border", "solid black");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#Door").css("background", "#d9d9d9")
              $("#Door").css("color", "black");
              $("#Door").css("border", "solid black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#Door").css("background", "blue")
              $("#Door").css("color", "blue");
              $("#Door").css("border", "solid black");
            }
          });
        }
      });
    }
  )};



  function makeColorPurple() {
    $("#purpleCircle").on("click", function () {
      color = $(this).css("background");
      var expected = $(this).css("background");
      $("#Chimney").on("click", function () {
        if (color == expected) {
          $(this).css("border-bottom", "60px solid purple")
          $(this).css("color", "purple");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#Chimney").css("border-bottom", "60px solid #d9d9d9")
              $("#Chimney").css("color", "black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#Chimney").css("border-bottom", "60px solid purple")
              $("#Chimney").css("color", "purple");
            }
          });
        }
      });
    }
  )};



  function makeColorBlack() {
    $("#blackCircle").on("click", function () {
      color = $(this).css("background");
      var expected = $(this).css("background");
      $("#HatTop").on("click", function () {
        if (color == expected) {
          $(this).css("background", color);
          $(this).css("color", "black");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#HatTop").css("background", "#d9d9d9")
              $("#HatTop").css("border", "solid black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#HatTop").css("background", "black")
              $("#HatTop").css("border", "solid black");
            }
          });
        }
      });
      $("#HatBottom").on("click", function () {
        if (color == expected) {
          $(this).css("background", color);
          $(this).css("color", "black");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#HatBottom").css("background", "#d9d9d9")
              $("#HatBottom").css("border", "solid black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#HatBottom").css("background", "black")
              $("#HatBottom").css("border", "solid black");
            }
          });
        }
      });
      $("#ButtonTop").on("click", function () {
        if (color == expected) {
          $(this).css("background", color);
          $(this).css("color", "black");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#ButtonTop").css("background", "#d9d9d9")
              $("#ButtonTop").css("border", "solid black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#ButtonTop").css("background", "black")
              $("#ButtonTop").css("border", "solid black");
            }
          });
        }
      });
      $("#ButtonMiddle").on("click", function () {
        if (color == expected) {
          $(this).css("background", color);
          $(this).css("color", "black");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#ButtonMiddle").css("background", "#d9d9d9")
              $("#ButtonMiddle").css("border", "solid black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#ButtonMiddle").css("background", "black")
              $("#ButtonMiddle").css("border", "solid black");
            }
          });
        }
      });
      $("#ButtonBottom").on("click", function () {
        if (color == expected) {
          $(this).css("background", color);
          $(this).css("color", "black");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#ButtonBottom").css("background", "#d9d9d9")
              $("#ButtonBottom").css("border", "solid black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#ButtonBottom").css("background", "black")
              $("#ButtonBottom").css("border", "solid black");
            }
          });
        }
      });
    }
  )};



  function makeColorWhite() {
    $("#whiteCircle").on("click", function () {
      color = $(this).css("background");
      var expected = $(this).css("background");
      $("#circleTop").on("click", function () {
        if (color == expected) {
          $(this).css("background", color);
          $(this).css("color", "white");
          $(this).css("border", "solid black");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#circleTop").css("background", "#d9d9d9")
              $("#circleTop").css("color", "black");
              $("#circleTop").css("border", "solid black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#circleTop").css("background", "white")
              $("#circleTop").css("color", "white");
              $("#circleTop").css("border", "solid black");
            }
          });
        }
      });
      $("#circleMiddle").on("click", function () {
        if (color == expected) {
          $(this).css("background", color);
          $(this).css("color", "white");
          $(this).css("border", "solid black");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#circleMiddle").css("background", "#d9d9d9")
              $("#circleMiddle").css("color", "black");
              $("#circleMiddle").css("border", "solid black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#circleMiddle").css("background", "white")
              $("#circleMiddle").css("color", "white");
              $("#circleMiddle").css("border", "solid black");
            }
          });
        }
      });
      $("#circleBottom").on("click", function () {
        if (color == expected) {
          $(this).css("background", color);
          $(this).css("color", "white");
          $(this).css("border", "solid black");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#circleBottom").css("background", "#d9d9d9")
              $("#circleBottom").css("color", "black");
              $("#circleBottom").css("border", "solid black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#circleBottom").css("background", "white")
              $("#circleBottom").css("color", "white");
              $("#circleBottom").css("border", "solid black");
            }
          });
        }
      });
      $("#Window").on("click", function () {
        if (color == expected) {
          $(this).css("background", color);
          $(this).css("color", "white");
          $(this).css("border", "solid black");
          $("#Undo").off("click");
          $("#Undo").on("click", function () {
            if (color == expected) {
              $("#Window").css("background", "#d9d9d9")
              $("#Window").css("color", "black");
              $("#Window").css("border", "solid black");
            }
          });
          $("#Redo").on("click", function () {
            if (color == expected) {
              $("#Window").css("background", "white")
              $("#Window").css("color", "white");
              $("#Window").css("border", "solid black");
            }
          });
        }
      });
    }
  )};


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
