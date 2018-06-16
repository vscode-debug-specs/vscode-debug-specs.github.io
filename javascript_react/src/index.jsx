class answerNumber extends React.Component {
	render() {
		return <span>{this.props},</span>;
	}
}

class answer extends React.Component {
	render() {
		return <div>
			{props.map(item => <answerNumber item={item} />)}
		</div>;
	}
}

let data = [4, 3, 2, 1];
ReactDOM.render(
	<answer items={data} />,
	document.getElementById('container')
);