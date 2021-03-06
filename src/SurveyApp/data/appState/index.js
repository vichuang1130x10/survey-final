import { positiveValuesData, positiveHomeValuesData } from "../../Text";

/* number: i,
  // character: c,
  // toggle: false,
  // idealValue: 50,
  // realValue: 50,
  // negativeChar
  */

const initialState = {
  ip: "",
  background: {}, // collect background data when user submit

  part2AAnswer: [0, 0, 0, 0],
  part2BAnswer: [0, 0, 0, 0],
  part3Answer: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  part4Answer: [0, 0, 0, 0, 0, 0],
  email: "", // "vic.huang11x@gmail.com"
  part1Id: 0, // 0 - 1
  part2Id: 0, // 0 -1

  part1Chars: [], // positiveValuesData or positiveHomeValueData
  part1SelectedChars: { part1A: [], part1B: [] }, // part1A:[{},{},{},{},{}],part1B:[]
  part1Index: 0, // 0 - 15
  part2Index: 0, // 0- 3
  isDataSend:false,
};

const createActionWithName = (name) => `app/tasks/${name}`;

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_PART1_CHAR:
      let chars = [];
      if (state.part1Id === 0) {
        chars = positiveValuesData;
      } else {
        chars = positiveHomeValuesData;
      }

      return { ...state, part1Chars: chars };

    case RESET_PART_1_INDEX:
      return { ...state, part1Index: 0 };

    case UPDATE_PART1_CHAR_SELECT:
      let selected = Object.assign({}, state.part1SelectedChars);
      if (state.part1Id === 0) {
        selected.part1A = action.chars;
      } else {
        selected.part1B = action.chars;
      }
      return { ...state, part1SelectedChars: selected };

    case RESET_SELECT_CHAR:
      const resetChars = { part1A: [], part1B: [] };
      return { ...state, part1SelectedChars: resetChars, part1Index: 0 };

    case NEXT_PART1_CHAR_OBJ:
      if (state.part1Index >= 4) {
        return state;
      }

      return { ...state, part1Index: state.part1Index + 1 };

    case BACK_PART1_CHAR_OBJ:
      if (state.part1Index === 0) {
        return state;
      }

      return { ...state, part1Index: state.part1Index - 1 };

    case RESET_STATE:
      return initialState;

    case UPDATE_IDEAL_VALUE:
      let key = "";
      if (state.part1Id === 0) {
        key = "part1A";
      } else {
        key = "part1B";
      }
      const obj = Object.assign({}, state.part1SelectedChars[key]);

      obj[state.part1Index].idealValue = action.value;
      let updateState = {};
      if (state.part1Id === 0) {
        updateState = {
          ...state,
          part1SelectedChars: { part1A: obj, ...state.part1SelectedChars },
        };
      } else {
        updateState = {
          ...state,
          part1SelectedChars: { part1B: obj, ...state.part1SelectedChars },
        };
      }

      //   return { ...state, part1SelectedChars:... };
      return updateState;

    case UPDATE_REAL_VALUE:
      let key2 = "";
      if (state.part1Id === 0) {
        key2 = "part1A";
      } else {
        key2 = "part1B";
      }
      const obj2 = Object.assign({}, state.part1SelectedChars[key2]);

      obj2[state.part1Index].realValue = action.value;
      let updateState2 = {};
      if (state.part1Id === 0) {
        updateState2 = {
          ...state,
          part1SelectedChars: { part1A: obj2, ...state.part1SelectedChars },
        };
      } else {
        updateState2 = {
          ...state,
          part1SelectedChars: { part1B: obj2, ...state.part1SelectedChars },
        };
      }

      //   return { ...state, part1SelectedChars:... };
      return updateState2;

    case UPDATE_PART1_ID:
      let newId;

      if (state.part1Id === 0) {
        newId = 1;
      } else {
        newId = 0;
      }
      return { ...state, part1Id: newId };

    case UPDATE_PART2_ID:
      let newId2;

      if (state.part2Id === 0) {
        newId2 = 1;
      } else {
        newId2 = 0;
      }
      return { ...state, part2Id: newId2 };

    case UPDATE_BACKGROUND:
      return { ...state, background: action.background };

    case ANSWER_QUIZ:
      if (action.part === "part3") {
        const newAns = state.part3Answer.map((x) => x);
        newAns[action.q] = action.n;
        return { ...state, part3Answer: newAns };
      } else if (action.part === "part4") {
        const newAns = state.part4Answer.map((x) => x);
        newAns[action.q] = action.n;
        return { ...state, part4Answer: newAns };
      } else if (action.part === "part2" && state.part2Id === 0) {
        const newAns = state.part2AAnswer.map((x) => x);
        newAns[action.q] = action.n;
        return { ...state, part2AAnswer: newAns };
      } else if (action.part === "part2" && state.part2Id === 1) {
        const newAns = state.part2BAnswer.map((x) => x);
        newAns[action.q] = action.n;
        return { ...state, part2BAnswer: newAns };
      }

      return state;

    case SAVE_EMAIL:
      return { ...state, email: action.text };

    case SAVE_USER_IP:
      return { ...state, ip: action.ip };

      case IS_DATA_SEND:
      return {...state, isDataSend:action.isSend}

    

    default:
      return state;
  }
}

export const GET_PART1_CHAR = createActionWithName("GET_PART1_CHAR");
export const POST_BACKGROUND = createActionWithName("POST_BACKGROUND");
export const UPDATE_PART1_CHAR_INDEX = createActionWithName(
  "UPDATE_PART1_CHAR_INDEX"
);
export const RESET_SELECT_CHAR = createActionWithName("RESET_SELECT_CHAR");
export const UPDATE_PART1_CHAR_SELECT = createActionWithName(
  "UPDATE_PART1_CHAR_SELECT"
);

export const NEXT_PART1_CHAR_OBJ = createActionWithName("NEXT_PART1_CHAR_OBJ");

export const BACK_PART1_CHAR_OBJ = createActionWithName("BACK_PART1_CHAR_OBJ");

export const RESET_STATE = createActionWithName("RESET_STATE");

export const UPDATE_IDEAL_VALUE = createActionWithName("UPDATE_IDEAL_VALUE");
export const UPDATE_REAL_VALUE = createActionWithName("UPDATE_REAL_VALUE");
export const UPDATE_PART1_ID = createActionWithName("UPDATE_PART1_ID");
export const UPDATE_PART2_ID = createActionWithName("UPDATE_PART2_ID");
export const RESET_PART_1_INDEX = createActionWithName("RESET_PART_1_INDEX");

export const UPDATE_BACKGROUND = createActionWithName("UPDATE_BACKGROUND");
export const ANSWER_QUIZ = createActionWithName("ANSWER_QUIZ");

export const SAVE_EMAIL = createActionWithName("SAVE_EMAIL");
export const SAVE_USER_IP = createActionWithName("SAVE_USER_IP");
export const IS_DATA_SEND = createActionWithName("IS_DATA_SEND");





export const setIsDataSend = isSend =>{
  return {
    type:IS_DATA_SEND,
    isSend,
  }
}

export const saveUserIp = (ip) => {
  return {
    type: SAVE_USER_IP,
    ip,
  };
};

export const saveEmail = (text) => {
  return {
    type: SAVE_EMAIL,
    text,
  };
};

export const answerQuiz = (part, q, n) => {
  return {
    type: ANSWER_QUIZ,
    part,
    q,
    n,
  };
};

export const updateBackground = (background) => {
  return {
    type: UPDATE_BACKGROUND,
    background,
  };
};

export const resetPart1Index = () => {
  return {
    type: RESET_PART_1_INDEX,
  };
};

export const updateIdealValue = (value) => {
  return {
    type: UPDATE_IDEAL_VALUE,
    value,
  };
};

export const updateRealValue = (value) => {
  return {
    type: UPDATE_REAL_VALUE,
    value,
  };
};

export const resetState = () => {
  return {
    type: RESET_STATE,
  };
};

export const nextPart1CharObj = () => {
  return {
    type: NEXT_PART1_CHAR_OBJ,
  };
};

export const backPart1CharObj = () => {
  return {
    type: BACK_PART1_CHAR_OBJ,
  };
};

export const getPart1Chars = () => {
  return {
    type: GET_PART1_CHAR,
  };
};

export const updatePart1CharIndex = (index) => {
  return {
    type: UPDATE_PART1_CHAR_INDEX,
    index,
  };
};

export const udpatePart1CharSelect = (chars) => {
  return {
    type: UPDATE_PART1_CHAR_SELECT,
    chars,
  };
};

export const resetSelectChar = () => {
  return {
    type: RESET_SELECT_CHAR,
  };
};

export const updatePart1Id = () => {
  return {
    type: UPDATE_PART1_ID,
  };
};

export const updatePart2Id = () => {
  return {
    type: UPDATE_PART2_ID,
  };
};
