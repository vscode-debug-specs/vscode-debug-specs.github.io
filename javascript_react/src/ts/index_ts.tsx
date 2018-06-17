import { sort_ts } from './bubble_sort_ts';
import * as React from "react";
import * as ReactDOM from "react-dom";

class AnswerNumberTS extends React.Component<{ item: number }> {
	render() {
		return <span>{this.props.item} </span>;
	}
}

class AnswerTS extends React.Component<{ items: number[] }> {
	render() {
		return <div>
			Answer:
			{this.props.items.map((item, index) => <AnswerNumberTS key={index} item={item} />)}
		</div>;
	}
}

class InputTS extends React.Component<{ value: string, onChange: (Event: React.ChangeEvent<HTMLInputElement>) => void }, { value: string }>{
	constructor(props: { value: string, onChange: (Event: React.ChangeEvent<HTMLInputElement>) => void }) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			value: this.props.value
		};
	}
	handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState({
			value: (e.target as any).value,
		})
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}

	render() {
		return <div>Input: <input type="text" value={this.props.value} onChange={this.handleChange} /></div>;
	}
}

class SortFunctionTS extends React.Component<any, { input: string, answer: number[] }> {

	constructor(props: any) {
		super(props);
		this.changeInput = this.changeInput.bind(this);
		this.state = {
			input: "4 3 2 1",
			answer: [],
		};
	}

	changeInput(e: React.ChangeEvent<HTMLInputElement>) {
		const inputStr: string = (e.target as any).value;
		const list = inputStr.split(" ").map(n => parseInt(n, 10));

		sort_ts(list);

		this.setState({
			input: inputStr,
			answer: list,
		});
	}

	render() {
		return <div>
			<InputTS onChange={this.changeInput} value={this.state.input} />
			<AnswerTS items={this.state.answer} />
		</div>;
	}
}

let data = [4, 3, 2, 1];
ReactDOM.render(
	<SortFunctionTS />,
	document.getElementById('container_ts')
);