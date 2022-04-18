import React from 'react';

class ToDoList extends React.Component {
    constructor(){
        super();
        this.state = {
            textValue: '',
            listItem: []
        }
    }

    displayList = (event) => {
        this.setState(
            {
                textValue: event.target.value
            }
        )
    }

    addList = () => {
        let storeListItem = [...this.state.listItem, this.state.textValue];
        this.setState(
            {
                textValue:'', listItem:storeListItem
            }
        )
    }
    deleteListItem = (deleteKey) => {
        const list = [...this.state.listItem];
        console.log(list);
        // Filter values and leave value which we need to delete
        const updateList = list.filter(item => item.id !== deleteKey);
      
        // Update list in state
        this.setState({
          list:updateList,
        });
    }
    render() {
        return(
            <React.Fragment>
                <div>ToDo App</div>
                <input type="text" value={this.state.textValue} onChange={this.displayList.bind(this)}/>
                <button onClick={this.addList}>Add Item </button>
                <button onClick={this.deleteListItem}>Delete Item</button>
                {this.state.listItem && this.state.listItem.map((item) => (
                    <div>{item}</div>
                ))}
            </React.Fragment>
        )
    }
}

export default ToDoList;