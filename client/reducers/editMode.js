function editMode(state = false, action) {
  switch (action.type) {
    case 'SWITCH_EDIT_MODE':
      // return the status passed in
      return action.status;
    default:
      // return state
      return state;
  }
}

export default editMode;
