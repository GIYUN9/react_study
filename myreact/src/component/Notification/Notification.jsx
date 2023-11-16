import React, { Component } from 'react';

const styles = {
    wrapper:{
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid gray",
        borderRadius: 14,
    },
    messageText:{
        color: "black",
        fontSize: 18,
    }
}

class Notification extends Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    // componentDidMount(){
    //     console.log("Notification => componentDidMount")
    // }

    // componentDidUpdate(){
    //     console.log("Notification => componentDidUpdate")
    // }

    // componentWillUnmount(){
    //     console.log("Notification => componentWillUnmount")
    // }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;