
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var currentAudio;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("nice");
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");

  playSound(userChosenColour);
  animatePress(userChosenColour);

  if (userChosenColour === "blue") {
    showTextAndImage(); // Display text and image
  }

  checkAnswer(userClickedPattern.length-1);
});






function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
    // Stop any currently playing audio
    if (currentAudio) {
      currentAudio.pause(); // Stop the current audio
      currentAudio.currentTime = 0; // Reset playback position
    }
  
    // Play the new sound
    currentAudio = new Audio(name + ".mp3"); // Create new audio object
    currentAudio.play(); // Play the new sound
  }

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

  
  function showTextAndImage() {
    $("body").append('<p id="blue-text">Till next time...</p>');
  
    $("#blue-text").css({
      "font-size": "24px",
      "font-family": "'Press Start 2P', cursive",
      "color": "blue",
      "text-align": "center",
      "margin-top": "20px"
    });
  
    $("body").append('<div id="image-container"></div>');
  
    $("#image-container").css({
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      "margin-top": "20px"
    });
  
    var imageUrls = [
        "andrew.jpg",
        "otb.jpeg",
        "via.jpeg",
        "sixflags.jpeg",
        "chicken.jpeg"
    ];
  
    imageUrls.forEach((url, index) => {
      $("#image-container").append(`<img id="blue-image-${index}" src="${url}" alt="Image ${index + 1}">`);
      $(`#blue-image-${index}`).css({
        "margin": "0 30px", 
        "width": "200px"   
      });
    });
  }
  