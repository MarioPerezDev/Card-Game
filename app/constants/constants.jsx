export const INITIAL_STATE = {
  tracking:{
    progress_measure:0,
    score:null,
    objectives:{},
    started:false,
  },
  game:{
    money:0,
    finished:false,
    health:100,
    points:0,
    currentRound:0,
    achievements:{
      "first":false,
      "second":false,
      "third":false,
    },
    powerUp: "none"
  },  
  scorm:null,
  user_profile:{
    id:undefined,
    name:"Unknown",
    learner_preference:{},
  },
  wait_for_user_profile:false,
};