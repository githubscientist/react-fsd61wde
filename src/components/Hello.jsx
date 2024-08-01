function Hello() {
    const a = 10;
    const b = 20;

    return (
        <div>
            <h1>Hello World!</h1>
            <p>
                {a} plus {b} is {a + b}
            </p>
        </div>
    )
}

export default Hello;