const initialState = {
  courses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COURSES":
      state.courses = action.payload;
      return {...state}
    default:
      return state;
  }
};

export default reducer;
