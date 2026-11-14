// Saturday JavaScript examples for the CareerForge page.
// Open the browser console to see each result.

console.log("Example 1: Roadmap progress");

const completedMilestones = 4;
const totalMilestones = 6;
const roadmapProgress = (completedMilestones / totalMilestones) * 100;

console.log("Progress: " + roadmapProgress + "%");

console.log("Example 2: Milestone status");

let milestoneStatus;

if (roadmapProgress === 100) {
  milestoneStatus = "Ready for the next milestone";
} else if (roadmapProgress >= 50) {
  milestoneStatus = "In progress";
} else {
  milestoneStatus = "Just getting started";
}

console.log(milestoneStatus);

console.log("Example 3: Weekly study planner");

const calculateWeeklyStudyHours = (hoursPerDay, daysPerWeek) => {
  return hoursPerDay * daysPerWeek;
};

const weeklyStudyHours = calculateWeeklyStudyHours(2, 5);

console.log("Study goal: " + weeklyStudyHours + " hours per week");

console.log("Example 4: Job application summary");

const applicationCounts = {
  saved: 3,
  applied: 4,
  interviewing: 2,
  offers: 1
};

const totalApplications =
  applicationCounts.saved +
  applicationCounts.applied +
  applicationCounts.interviewing +
  applicationCounts.offers;

console.log("Applications tracked: " + totalApplications);

console.log("Example 5: Membership check");

const selectedPlan = "CareerForge Pro";
let planMessage;

if (selectedPlan === "CareerForge Pro") {
  planMessage = "AI Career Coach is included";
} else {
  planMessage = "AI Career Coach is not included";
}

console.log(planMessage);
