let savedItems = savedItems || [];

function items(state = [], action) {
  const i = action.i;

  switch (action.type) {
    case 'SWITCH_EDIT_MODE':
      if (action.status) {
        savedItems = state;
        return state;
      }
      return savedItems;
    case 'CANCEL_QUOTE':
      return [];
    case 'SAVE_ITEM':
      return [
        ...state.slice(0,i),
        {...state[i], name: action.name, amount: action.amount},
        ...state.slice(i + 1)
      ];
    case 'TOGGLE_EDIT_ITEM':
        return [
          ...state.slice(0,i),
          {...state[i], toggleEdit: !state[i].toggleEdit},
          ...state.slice(i + 1)
        ];
    case 'DELETE_ITEM':
      return [
        ...state.slice(0,i),
        ...state.slice(i + 1)
      ];
    case 'ADD_ITEM':
      if (!state[state.length - 1].amount) return state; // if a new item hasn't been saved
      return [
        ...state,
        {
          "currency":"£",
          "toggleEdit": true
        }
      ]
    default:
      return state;
  }
}

export default items;
