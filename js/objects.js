class Game extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.age}</h2>
            </div>
        )
    }
}
let gameList = document.getElementById("example3")
ReactDOM.render (
    <div>
        <Game name="Sims3" age="13+" />
        <Game name="Dragon Age" age="16+" />
        <Game name="GTA 5" age="18+" />
        <Game name="Horse Isle 3" age="8+" />

    </div>,
    gameList
)