import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { sort } from './bubble_sort.js';

class AnswerNumber extends React.Component {
  render() {
    return <Text>{this.props.item}</Text>;
  }
}

class Answer extends React.Component {
  render() {
    return <View>
      <Text style={{ width: 200 }}>Answer:</Text>
      {this.props.items.map((item, index) => <AnswerNumber key={index} item={item} />)}
    </View>;
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: this.props.value
    };
  }
  handleChange(changedText) {
    this.setState({
      value: changedText,
    })
    if (this.props.onChange) {
      this.props.onChange(changedText);
    }
  }

  render() {
    return <View>
      <Text>Input:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
        onChangeText={this.handleChange}
        value={this.state.value}
      />
    </View>;
  }
}

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.answer = [];
    this.changeInput = this.changeInput.bind(this);
    this.state = {
      input: "4 3 2 1",
      answer: ["1", "2", "3", "4"],
    };
  }

  changeInput(inputStr) {
    const list = inputStr.split(" ").map(n => parseInt(n, 10));

    sort(list);

    this.setState({
      input: inputStr,
      answer: list,
    });
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }} >
        <Input onChange={this.changeInput} value={this.state.input} />
        <Answer items={this.state.answer} />
      </View>
    );
  }
}