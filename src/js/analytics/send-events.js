export const sendYMGoal = (goal, trackerId = 54065377) => {
  try {
    ym(trackerId, 'reachGoal', goal);
  } catch (e) {
    console.error('Yandex metrica not found');
  }
};

export const sendGTMGoal = (goal) => {
  try {
    gtag('event', goal);
  } catch (e) {
    console.error('Google metrica not found');
  }};

export const sendGoalToAllTrackers = (goal) => {
  sendYMGoal(goal);
  sendGTMGoal(goal);
};
