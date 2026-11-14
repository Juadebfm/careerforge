function showMessage(element, message) {
  element.textContent = message;
  console.log(message);
}

const progressValue = document.querySelector("#learning-progress-value");
const progressBar = document.querySelector("#learning-progress-bar");
const completeMilestoneButton = document.querySelector("#complete-milestone");
let completedRoadmapSteps = 4;
const roadmapStepTotal = 6;

function completeMilestone() {
  if (completedRoadmapSteps < roadmapStepTotal) {
    completedRoadmapSteps = completedRoadmapSteps + 1;
    showMessage(progressValue, completedRoadmapSteps + " of " + roadmapStepTotal);
    progressBar.setAttribute("data-progress", completedRoadmapSteps);
  }
}

completeMilestoneButton.addEventListener("click", completeMilestone);

const detailsButton = document.querySelector("#toggle-roadmap-details");
const roadmapDetails = document.querySelector("#roadmap-details");

function toggleRoadmapDetails() {
  roadmapDetails.classList.toggle("is-hidden");
}

detailsButton.addEventListener("click", toggleRoadmapDetails);

const filterButtons = document.querySelectorAll(".application-filter");
const applicationRows = document.querySelectorAll(".application-list li");

function filterApplications(event) {
  const chosenFilter = event.currentTarget.getAttribute("data-filter");

  applicationRows.forEach(function (row) {
    const applicationStatus = row.getAttribute("data-status");

    if (chosenFilter === "all" || chosenFilter === applicationStatus) {
      row.classList.remove("is-hidden");
    } else {
      row.classList.add("is-hidden");
    }
  });
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", filterApplications);
});

const coachForm = document.querySelector("#coach-demo-form");
const coachQuestion = document.querySelector("#coach-question");
const coachReply = document.querySelector("#coach-demo-reply");

function answerCoach(event) {
  event.preventDefault();

  if (coachQuestion.value) {
    showMessage(coachReply, "Start with the next milestone in your learning roadmap.");
  } else {
    showMessage(coachReply, "Type a question first.");
  }

  coachReply.classList.remove("is-hidden");
}

coachForm.addEventListener("submit", answerCoach);

const featureCards = document.querySelectorAll(".feature-card");
let selectedCard = null;

function moveCard(card, moveButton) {
  if (selectedCard === null) {
    selectedCard = card;
    card.classList.add("is-selected");
    moveButton.textContent = "Selected";
    return;
  }

  const firstPosition = selectedCard.getAttribute("data-position");
  const secondPosition = card.getAttribute("data-position");

  selectedCard.setAttribute("data-position", secondPosition);
  card.setAttribute("data-position", firstPosition);
  selectedCard.querySelector(".feature-card__move").textContent = "Move";
  selectedCard.classList.remove("is-selected");
  selectedCard = null;
}

featureCards.forEach(function (card) {
  const moveButton = card.querySelector(".feature-card__move");

  moveButton.addEventListener("click", function () {
    moveCard(card, moveButton);
  });
});
