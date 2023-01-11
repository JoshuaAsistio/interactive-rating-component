const ratingState = document.getElementById("rating-state");
const thankYouState = document.getElementById("thank-you-state");
const ratingButtons = document.getElementsByClassName("rating-buttons");
const rating = document.getElementById("rating");
const submitButton = document.getElementById("submit");
let userRating;

//add an event listener to all the rating buttons.
// The individual rating buttons should set the userRating to whatever the text content of the button is.
for (let i = 0; i < ratingButtons.length; i++) {
  ratingButtons[i].addEventListener("click", () => {
    userRating = ratingButtons[i].textContent;
  });
}

submitButton.addEventListener("click", (e) => {
  //check if the user has set a rating.
  // If so, then set the text content of the rating element to the userRating and show the thank you state and hide the rating state.
  // If not, then show an alert telling them to set a rating.
  if (userRating) {
    rating.textContent = userRating;

    thankYouState.style.display = "flex";

    ratingState.style.display = "none";
  } else {
    alert("Please select a rating.");
  }
});
