//создание класса = компонента
class Block extends React.Component {
    render() {
        const age = 23;
        return (//рендерить можно только один родительский компонент
            <div>
            <h1>Forest Brotherhood</h1>
            <p>This is a game description</p>
            <p>My age is {age}</p>
            </div>
        )
    }
}
let example =  document.getElementById("example2")
ReactDOM.render (
    //тоже может быть только один родительский элемент + так добавляется компонент в блок
    <div>
        <Block />
        <Block />
        <Block />
    </div>,
   example
)