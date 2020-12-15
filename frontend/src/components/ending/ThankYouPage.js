import React, { Component } from 'react'
import { connect } from "react-redux";

class ThankYouPage extends Component {
    render() {
        return (
            <div className="main-context-div" style={{ fontSize: this.props.fontSize }}>
                <div className="section">
                    <div >
                        <h1 style={{ color: "red" }}>Thank you for your help!</h1>
                        <h1 style={{ color: "red" }}>Your thoughts and ideas will help make our test better!</h1>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        fontSize: state.fontSize,
    };
};

export default connect(mapStateToProps)(ThankYouPage);