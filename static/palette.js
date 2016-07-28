
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
        $(this).css("background", color);
        var lastClick = $(this);
      // This clears the undo button
        $("#Undo").off("click");
      // Allowing it to only undo the most recent addition when clicking undo
        $("#Undo").on("click", function () {
            lastClick.css("background", "#d9d9d9");
            lastClick.css("border", "solid black");
          });
        // This will redo that most recent undo only
        $("#Redo").on("click", function () {
            lastClick.css("background", "red");
            lastClick.css("border", "solid black");
          });
      });
      // This applies to the snowman nose
      $(".clickableNose").on("click", function () {
        $(this).css("border-bottom", "100px solid red");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "100px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "100px solid red");
          });
      });
      // This applies to the house roof
      $(".clickableRoof").on("click", function () {
        $(this).css("border-bottom", "250px solid red");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "250px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "250px solid red");
          });
      });
      // This applies to the house tree
      $(".clickableTree").on("click", function () {
        $(this).css("border-bottom", "150px solid red");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "150px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "150px solid red");
          });
      });
      //This applies to the house chimney
      $(".clickableChimney").on("click", function () {
        $(this).css("border-bottom", "60px solid red");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "60px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "60px solid red");
          });
      });
    });
  }



  // the pattern is repeated for all palette colors

  function makeColorOrange() {
    $("#orangeCircle").on("click", function () {
      var color = $(this).css("background");
      $(".clickable").on("click", function () {
        $(this).css("background", color);
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("background", "#d9d9d9");
            lastClick.css("border", "solid black");
          });
        $("#Redo").on("click", function () {
            lastClick.css("background", "orange");
            lastClick.css("border", "solid black");
          });
      });
      $(".clickableNose").on("click", function () {
        $(this).css("border-bottom", "100px solid orange");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "100px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "100px solid orange");
          });
      });
      $(".clickableRoof").on("click", function () {
        $(this).css("border-bottom", "250px solid orange");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "250px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "250px solid orange");
          });
      });
      $(".clickableTree").on("click", function () {
        $(this).css("border-bottom", "150px solid orange");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "150px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "150px solid orange");
          });
      });
      $(".clickableChimney").on("click", function () {
        $(this).css("border-bottom", "60px solid orange");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "60px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "60px solid orange");
          });
      });
    });
  }



  function makeColorYellow() {
    $("#yellowCircle").on("click", function () {
      var color = $(this).css("background");
      $(".clickable").on("click", function () {
        $(this).css("background", color);
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("background", "#d9d9d9");
            lastClick.css("border", "solid black");
          });
        $("#Redo").on("click", function () {
            lastClick.css("background", "yellow");
            lastClick.css("border", "solid black");
          });
      });
      $(".clickableNose").on("click", function () {
        $(this).css("border-bottom", "100px solid yellow");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "100px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "100px solid yellow");
          });
      });
      $(".clickableRoof").on("click", function () {
        $(this).css("border-bottom", "250px solid yellow");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "250px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "250px solid yellow");
          });
      });
      $(".clickableTree").on("click", function () {
        $(this).css("border-bottom", "150px solid yellow");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "150px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "150px solid yellow");
          });
      });
      $(".clickableChimney").on("click", function () {
        $(this).css("border-bottom", "60px solid yellow");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "60px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "60px solid yellow");
          });
      });
    });
  }



  function makeColorGreen() {
    $("#greenCircle").on("click", function () {
      var color = $(this).css("background");
      $(".clickable").on("click", function () {
        $(this).css("background", color);
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("background", "#d9d9d9");
            lastClick.css("border", "solid black");
          });
        $("#Redo").on("click", function () {
            lastClick.css("background", "green");
            lastClick.css("border", "solid black");
          });
      });
      $(".clickableNose").on("click", function () {
        $(this).css("border-bottom", "100px solid green");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "100px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "100px solid green");
          });
      });
      $(".clickableRoof").on("click", function () {
        $(this).css("border-bottom", "250px solid green");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "250px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "250px solid green");
          });
      });
      $(".clickableTree").on("click", function () {
        $(this).css("border-bottom", "150px solid green");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "150px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "150px solid green");
          });
      });
      $(".clickableChimney").on("click", function () {
        $(this).css("border-bottom", "60px solid green");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "60px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "60px solid green");
          });
      });
    });
  }



  function makeColorBlue() {
    $("#blueCircle").on("click", function () {
      var color = $(this).css("background");
      $(".clickable").on("click", function () {
        $(this).css("background", color);
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("background", "#d9d9d9");
            lastClick.css("border", "solid black");
          });
        $("#Redo").on("click", function () {
            lastClick.css("background", "blue");
            lastClick.css("border", "solid black");
          });
      });
      $(".clickableNose").on("click", function () {
        $(this).css("border-bottom", "100px solid blue");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "100px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "100px solid blue");
          });
      });
      $(".clickableRoof").on("click", function () {
        $(this).css("border-bottom", "250px solid blue");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "250px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "250px solid blue");
          });
      });
      $(".clickableTree").on("click", function () {
        $(this).css("border-bottom", "150px solid blue");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "150px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "150px solid blue");
          });
      });
      $(".clickableChimney").on("click", function () {
        $(this).css("border-bottom", "60px solid blue");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "60px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "60px solid blue");
          });
      });
    });
  }



  function makeColorPurple() {
    $("#purpleCircle").on("click", function () {
      var color = $(this).css("background");
      $(".clickable").on("click", function () {
        $(this).css("background", color);
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("background", "#d9d9d9");
            lastClick.css("border", "solid black");
          });
        $("#Redo").on("click", function () {
            lastClick.css("background", "purple");
            lastClick.css("border", "solid black");
          });
      });
      $(".clickableNose").on("click", function () {
        $(this).css("border-bottom", "100px solid purple");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "100px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "100px solid purple");
          });
      });
      $(".clickableRoof").on("click", function () {
        $(this).css("border-bottom", "250px solid purple");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "250px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "250px solid purple");
          });
      });
      $(".clickableTree").on("click", function () {
        $(this).css("border-bottom", "150px solid purple");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "150px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "150px solid purple");
          });
      });
      $(".clickableChimney").on("click", function () {
        $(this).css("border-bottom", "60px solid purple");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "60px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "60px solid purple");
          });
      });
    });
  }



  function makeColorBlack() {
    $("#blackCircle").on("click", function () {
      var color = $(this).css("background");
      $(".clickable").on("click", function () {
        $(this).css("background", color);
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("background", "#d9d9d9");
            lastClick.css("border", "solid black");
          });
        $("#Redo").on("click", function () {
            lastClick.css("background", "black");
            lastClick.css("border", "solid black");
          });
      });
      $(".clickableNose").on("click", function () {
        $(this).css("border-bottom", "100px solid black");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "100px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "100px solid black");
          });
      });
      $(".clickableRoof").on("click", function () {
        $(this).css("border-bottom", "250px solid black");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "250px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "250px solid black");
          });
      });
      $(".clickableTree").on("click", function () {
        $(this).css("border-bottom", "150px solid black");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "150px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "150px solid black");
          });
      });
      $(".clickableChimney").on("click", function () {
        $(this).css("border-bottom", "60px solid black");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "60px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "60px solid black");
          });
      });
    });
  }



  function makeColorWhite() {
    $("#whiteCircle").on("click", function () {
      var color = $(this).css("background");
      $(".clickable").on("click", function () {
        $(this).css("background", color);
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("background", "#d9d9d9");
            lastClick.css("border", "solid black");
          });
        $("#Redo").on("click", function () {
            lastClick.css("background", "white");
            lastClick.css("border", "solid black");
          });
      });
      $(".clickableNose").on("click", function () {
        $(this).css("border-bottom", "100px solid white");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "100px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "100px solid white");
          });
      });
      $(".clickableRoof").on("click", function () {
        $(this).css("border-bottom", "250px solid white");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "250px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "250px solid white");
          });
      });
      $(".clickableTree").on("click", function () {
        $(this).css("border-bottom", "150px solid white");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "150px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "150px solid white");
          });
      });
      $(".clickableChimney").on("click", function () {
        $(this).css("border-bottom", "60px solid white");
        var lastClick = $(this);
        $("#Undo").off("click");
        $("#Undo").on("click", function () {
            lastClick.css("border-bottom", "60px solid #d9d9d9");
          });
        $("#Redo").on("click", function () {
            lastClick.css("border-bottom", "60px solid white");
          });
      });
    });
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
