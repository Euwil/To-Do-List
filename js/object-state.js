const app = document.getElementById("app")
class Field extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				'Необходимо купить молоко!',
				'Надо почистить зубы',
				'Просто отдохнуть'
			]
		};
	};
	
	render() {
		return (
			<div className="field">
				{
					this.state.tasks.map (function (item, i) {
						return (<Task key={i}>{item}</Task>);
					})
				}
			</div>
		);
	}
}
class Task extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			edit: false,
		};
	};
    edit = () => {
        this.setState({edit: true})
    }
    remove = () => {
        alert("Нажата кнопка удалить")
    }
    save = () => {
        let value = this.refs.newTxt.value
        alert(value)
        this.setState({edit: false})
    }
    stateEdit = () => {
        return(
            <div className="box">
                               <textarea className="form" ref="newTxt" defaultValue={this.props.children}></textarea>
                <button onClick={this.save} className="btn success">Сохранить</button>
            </div>
        )
    }
    stateNormal = () => {
        return(
            <div className="box">
                <div className="text">{this.props.children}</div>
                <button onClick={this.edit} className="btn light">Редактировать</button>
                <button onClick={this.remove} className="btn red">Удалить</button>
            </div>
        )
    }
    render() {
     if (this.state.edit) {
         return this.stateEdit()
     } else {
        return this.stateNormal()
     }
    }
}
ReactDOM.render (
    
    <Field />,
    app
)