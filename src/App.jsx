import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Input} from 'react-onsenui';
// import {notification} from 'onsenui';

import Item from './Item.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText:"",
      items: [],
      date:[]
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    var newitems = this.state.items;
    var d = new Date();
    newitems.push({ text:this.state.inputText ,date:d});
    this.setState({ inputText:"",items:newitems });
  }

  // alertPopup() {
  //   notification.alert('This is an Onsen UI alert notification test.');
  // }

  // renderToolbar() {
  //   return (
  //     <Toolbar>
  //       <div className='center'>Onsen UI</div>
  //     </Toolbar>
  //   );
  // }

  render() {
    return (
      <Page>
        <Input value = {this.state.inputText}
          onChange = {(event) => {this.setState({inputText:event.target.value, items:this.state.items})}}
          modifier="material" />
        <Button onClick={this.addItem}>追加</Button>

        {this.state.items.map(item => {
          return <Item text={item.text} date={item.date}></Item>
        })}
      </Page>
    );
  }
}