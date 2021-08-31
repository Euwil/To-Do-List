const checkList = document.getElementById("check-list")
class Check extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			checked: true,
		};
	};
    handleCheck = () => {
        this.setState({checked: !this.state.checked})
    }
    render () {
        let message
        if (this.state.checked) {
            message = "выбран"
        } else {
            message = "не выбран"
        }
        return (
            <div>
                <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} />
                <p>Чекбокс {message}</p>
            </div>

        )
    }
}
ReactDOM.render (
    <Check />,
    checkList
)