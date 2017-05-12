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
        <span className="item-name" style={{float: "left"}}>{item.name}</span>
        <span style={{float: "right"}}>
          <span className="item-price" >
            {item.currency}
            {item.amount}
          </span>
          {editMode &&  !item.toggleEdit ? <a className="edit-item" href="#" onClick={toggleEdit.bind(null, i)}>edit</a> : null}
        </span>
      </li>
    );
  },

  toggledElements() {
    const {i, item, items, toggleEdit, editMode, deleteItem, saveItem} = this.props;

    return (
      <li className="item">
        <form ref="itemForm" className="item-form" onSubmit={this.handleSubmit}>
          <div style={{float: "left"}}>
            <input type="text" key={items[i].name} defaultValue={items[i].name} ref="name" className="item-name"/>
          </div>
          <div style={{float: "right"}}>
            <input type="text" key={items[i].amount} defaultValue={items[i].amount} ref="amount" className="item-price"/>
            <input type="submit" className="save-item" value="save" />
            <button type="button" className="delete-item" href="#" onClick={deleteItem.bind(null, i)}>&times;</button>
          </div>
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
