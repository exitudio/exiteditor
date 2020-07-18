import { CHANGE_MOBILE_HEAD_COLOR } from "../actionTypes";
import initialState from "../initialState";

const applicationReducer = (state = initialState.application, action) => {
  switch (action.type) {
    case CHANGE_MOBILE_HEAD_COLOR: {
      return {
        ...state,
        mobileHeadColor: action.payload.color,
        isWhiteTextHeader: action.payload.isWhiteTextHeader,
      };
    }

    default:
      return state;
  }
};

export default applicationReducer;
