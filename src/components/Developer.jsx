import uuid from "react-uuid";
export const ACTIONS_TYPE = {
  ADD_DEVELOPER: "add-developer",
  REMOVE_DEVELOPER: "remove-developer",
};
export const DeveloperReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case ACTIONS_TYPE.ADD_DEVELOPER:
      return [
        ...state,
        {
          name: action.payload.name,
          progLan: action.payload.progLan,
          framework: action.payload.framework,
          favF: action.payload.favF,
          favD: action.payload.favD,
          id: uuid(),
        },
      ];
    case ACTIONS_TYPE.REMOVE_DEVELOPER:
      return state.filter((developer) => developer.id !== action.id);
    default:
      return state;
  }
};
