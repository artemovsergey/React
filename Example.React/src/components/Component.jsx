import React from 'react'
class Component extends React.Component {
    render() {
        return <h1>Privet, {this.props.name} </h1>;
    }
}

export default Component
Component.defaultProps = { name: "Tom", age: 25}