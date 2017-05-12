import React from 'react';

const Item = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    const name = this.refs.name.value;
    const amount = this.refs.amount.value;
    this.props.saveItem(this.props.i, name, amount);
    this.refs.itemForm.reset();
  },

  normalElements() {
    const {i, item, toggleEdit, editMode} = this.props;

    return (
      <li className="item">
        <span className="item-name">{item.name}</span>
        {editMode &&  !item.toggleEdit ? <a className="edit-item" href="#" onClick={toggleEdit.bind(null, i)}>edit</a> : null}
        <span className="item-price">
          {item.currency}
          {item.amount}
        </span>
      </li>
    );
  },

  toggledElements() {
    const {i, item, toggleEdit, editMode, deleteItem, saveItem} = this.props;

    return (
      <li className="item">
        <form ref="itemForm" className="item-form" onSubmit={this.handleSubmit}>
          <input defaultValue={item.name} ref="name" className="item-name"/>
          <button className="delete-item" href="#" onClick={deleteItem.bind(null, i)}>&times;</button>
          <input type="submit" className="save-item" value="save" />
          <input defaultValue={item.amount} ref="amount" className="item-price"/>
        </form>
      </li>
    );
  },

  render() {
    return (
      this.props.item.toggleEdit ? this.toggledElements() : this.normalElements()
    );
  }
});

export default Item;
