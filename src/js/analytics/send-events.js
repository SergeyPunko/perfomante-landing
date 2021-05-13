export const sendYMGoal = (goal, trackerId = 54065377) => {
  // if (ym) {
  //   ym(trackerId, 'reachGoal', goal);
  //   console.log(goal)
  // } else {
  //   console.error('Yandex metrica not found');
  // }
};

// export const sendGTMGoal = (goal) => {
//   if (!window.dataLayer) window.dataLayer = [];
//   dataLayer.push({
//     event: goal,
//     details: {
//       formID: goal,
//       contact: 'test gtm lol',
//     },
//   });
//   dataLayer.push({
//     event: goal,
//     eventCategory: goal,
//     eventAction: goal,
//     eventLabel: goal,
//     eventNonInteraction: goal,
//   });
// };

export const sendGoalToAllTrackers = (goal) => {
  sendYMGoal(goal);
  // sendGTMGoal(goal);
};
