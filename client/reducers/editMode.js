function editMode(state = false, action) {
  switch (action.type) {
    case 'SWITCH_EDIT_MODE':
      // return the status passed in
      return action.status;
    case 'CANCEL_QUOTE':
      // turn off edit mode
      return false;
    default:
      // return state
      return state;
  }
}

export default editMode;
