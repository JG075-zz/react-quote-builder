export function switchEditMode(status) {
  return {
    type: 'SWITCH_EDIT_MODE',
    status
  };
}

export function cancelQuote() {
  return {
    type: 'CANCEL_QUOTE',
  };
}

export function toggleEdit(i) {
  return {
    type: 'TOGGLE_EDIT_ITEM',
    i
  };
}

export function deleteItem(i) {
  return {
    type: 'DELETE_ITEM',
    i
  };
}

export function saveItem(i, name, amount) {
  return function(dispatch) {
    dispatch({
      type: 'SAVE_ITEM',
      i,
      name,
      amount
    });
    dispatch({
      type: 'TOGGLE_EDIT_ITEM',
      i
    });
  };
}

export function addItem() {
  return {
    type: 'ADD_ITEM'
  };
}
