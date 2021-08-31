const app = document.getElementById("app")
class Task extends React.Component {
    edit(){
        alert("Нажата кнопка редактировать")
    }
    remove(){
        alert("Нажата кнопка удалить")
    }
    render() {
        return(
            <div className="box">
                <div className="text">{this.props.children}</div>
                <button onClick={this.edit} className="btn light">Редактировать</button>
                <button onClick={this.remove} className="btn red">Удалить</button>
            </div>
        )
    }
}
ReactDOM.render (
    <div className="field">
    <Task>Task 1</Task>
    <Task>Task 2</Task>
    <Task>Task 3</Task>
    </div>,
    app
)