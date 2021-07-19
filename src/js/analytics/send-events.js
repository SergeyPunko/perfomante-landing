export const sendYMGoal = (goal, trackerId = 54065377) => {
  if (ym) {
    ym(trackerId, 'reachGoal', goal);
  } else {
    console.error('Yandex metrica not found');
  }
};

export const sendGTMGoal = (goal) => {
  if (gtag) {
    gtag('event', goal);
  } else {
    console.error('Google metrica not found');
  }};

export const sendGoalToAllTrackers = (goal) => {
  sendYMGoal(goal);
  sendGTMGoal(goal);
};
