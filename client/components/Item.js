import React from 'react';

const Item = React.createClass({

  getInput(value, className) {
    return <input defaultValue={value} ref="name" className={className}/>
  },

  render() {
    const {i, item, toggleEdit, editMode, deleteItem} = this.props;

    return (
      <li className="item">
        {item.toggleEdit ? this.getInput(item.name, "item-name") : <span className="item-name">{item.name}</span>}
        {editMode &&  !item.toggleEdit ? <a className="edit-item" href="#" onClick={toggleEdit.bind(null, i)}>edit</a> : null}
        {item.toggleEdit ? <button className="delete-item" href="#" onClick={deleteItem.bind(null, i)}>&times;</button> : null}
        {item.toggleEdit ? <a className="save-item" href="#" onClick={toggleEdit.bind(null, i)}>save</a> : null}
        {item.toggleEdit ? this.getInput(item.currency + item.amount, "item-price") : <span className="item-price">
          {item.currency}
          {item.amount}
        </span>}
      </li>
    );
  }
});

export default Item;
