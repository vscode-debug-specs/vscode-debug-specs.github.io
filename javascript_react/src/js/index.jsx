import { sort } from './bubble_sort.js'

class AnswerNumber extends React.Component {
	render() {
		return <span>{this.props.item} </span>;
	}
}

class Answer extends React.Component {
	render() {
		return <div>
			Answer:
			{this.props.items.map((item, index) => <AnswerNumber key={index} item={item} />)}
		</div>;
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
	handleChange(e) {
		this.setState({
			value: e.target.value,
		})
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}

	render() {
		return <div>Input: <input type="text" value={this.props.value} onChange={this.handleChange} /></div>;
	}
}

class SortFunction extends React.Component {
	constructor(props) {
		super(props);
		this.answer = [];
		this.changeInput = this.changeInput.bind(this);
		this.state = {
			input: "4 3 2 1",
			answer: [],
		};
	}

	changeInput(e) {
		const inputStr = e.target.value;
		const list = inputStr.split(" ").map(n => parseInt(n, 10));

		sort(list);

		this.setState({
			input: e.target.value,
			answer: list,
		});
	}

	render() {
		return <div>
			<Input onChange={this.changeInput} value={this.state.input}/>
			<Answer items={this.state.answer} />
		</div>;
	}
}

let data = [4, 3, 2, 1];
ReactDOM.render(
	<SortFunction />,
	document.getElementById('container')
);