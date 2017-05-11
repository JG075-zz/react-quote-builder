function items(state = [], action) {
  switch (action.type) {
    case 'CANCEL_QUOTE':
      // return an empty array
      return [];
    default:
      return state;
  }
}

export default items;
