import React from 'react'
import Api from './api'
import Avatar from './Avatar'
import './Home.css'
import { Link } from 'react-router-dom'

export class Home extends React.Component {
    state = { avatars: [] }

    updateAvatars = async () => {
        const avatars = await Api.get('');
        this.setState({ avatars: avatars.data })
    }

    componentDidMount = () => {
        this.updateAvatars();
    }

    render() {
        return <>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/add">Add</Link></button>
            <div className="avatars-container">
                {this.state.avatars.map(avatar => {
                    return <>
                        <Avatar key={avatar.id} details={avatar} updateAvatarsFunc={this.updateAvatars} />
                    </>
                })}
            </div>
        </>

    }
}