import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    resetColorFnHandle
} from '../../../Actions/SearchAction'

class ItemWrapper extends Component {
    constructor(props){
        super(props);
        this.resetColor = this.resetColor.bind(this);
        this.state = {
            color: ''
        }
    }

    // componentDidMount(){
    //     const { clearAll } = this.props;
    //     clearAll = this.resetColor;
    // }

    resetOther(){
        const { clearAll } = this.props;
        clearAll();
    }

    resetColor = () => {
        this.setState({ color: '' });
    }

    toggleColor = () => {
        this.setState({ color: 'blue' });
    }

    render() {
        const { handleClick, index, item } = this.props;
        return (
            <div className="box-align" style={{ backgroundColor: this.state.color }} key={index}
                onClick={(e) => {
                    handleClick(e, item.username);
                    this.resetOther()
                    this.toggleColor(item.username);
                }}>{item.username}</div>
        )
    }
}

const actions = {
    // resetColorFnHandle,
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actions)(ItemWrapper);