function Hello(props) {
    return (
        <div>
            <h1>Hello World!</h1>
            <p>
                {props.a} plus {props.b} is {props.a + props.b}
            </p>
        </div>
    )
}

export default Hello;