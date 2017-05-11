function items(state = [], action) {
  switch (action.type) {
    case 'CANCEL_QUOTE':
      // return an empty array
      return [];
    case 'TOGGLE_EDIT_ITEM':
        // turn on toggleEdit for the item
        const i = action.i;
        return [
          ...state.slice(0,i),
          {...state[i], toggleEdit: !state[i].toggleEdit},
          ...state.slice(i + 1)
        ];
    default:
      return state;
  }
}

export default items;
