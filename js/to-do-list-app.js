const app = document.getElementById("app")
class Field extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		};
	};
	eachTask = (item, i) => {
        return (<Task key={i} index={i} update={this.updateTask} deleteBlock={this.deleteTask}>{item}</Task>);
    }
    deleteTask = (i) => {
        let arr = this.state.tasks
        arr.splice(i, 1)
        this.setState({tasks: arr})
    }
    updateTask = (text, i) => {
        let arr = this.state.tasks
        arr[i] = text
        this.setState({tasks: arr})
    }
    addTask = (text) => {
    let arr = this.state.tasks
    arr.push(text)
    this.setState({tasks: arr})
    }
	render() {
		return (
			<div className="field">
                <button onClick={this.addTask.bind(null, "Простое задание")} className="btn new">Создать новое задание</button>
				{this.state.tasks.map(this.eachTask)}
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
        this.props.deleteBlock(this.props.index)
    }
    save = () => {
        this.props.update (this.refs.newTxt.value, this.props.index)        
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