import React from 'react'
import Api from './api'
import { Link } from 'react-router-dom'

export class Avatar extends React.Component {
    state = {avatar : []}

    componentDidMount = () => {
        this.setState({avatar: this.props.details})
    }

    deleteAvatar = async () => {
        await Api.delete(`/${this.state.avatar.id}`);
        this.props.updateAvatarsFunc();
    }

    render() {

        const newTo = {
            pathname: "update",
            avatar: this.state.avatar
        }
        return <>
            <div className="avatar-card">
                {/* <img src={this.state.avatar.avatar} alt="avatar img"/> */}
                <h4>id : {this.state.avatar.id}</h4>
                <h4>name : {this.state.avatar.name}</h4>
                <button><Link to={newTo}>Update</Link></button>
                <input type="button" value="Delete" onClick={this.deleteAvatar}/>
            </div>
        </>

    }
}

export default Avatar;