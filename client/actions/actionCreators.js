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
