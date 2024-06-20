import React from "react"
class PrintButton extends React.Component {

    constructor(props) {
        super(props);

        this.print = this.print.bind(this);
    }
    print(name, age) {
        console.log(`Name ${name}  Age: ${age}`);
    }
    render() {
        return <div>
            <button onClick={() => this.print("Bob", 23)}>Print Bob</button>
            <button onClick={() => this.print("Tom", 36)}>Print Tom</button>
        </div>;
    }
}

export default PrintButton