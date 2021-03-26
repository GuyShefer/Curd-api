import React from 'react'
import Api from './api'

export class CreateAvatar extends React.Component {
    state = {avatarName: '', avatarUrl: ''}

    handleName = (e) => {
        this.setState({avatarName : e.target.value})
    }

    handleUrl = (e) => {
        this.setState({avatarUrl : e.target.value})
    }

    addAvatar = async (e) => {
        e.preventDefault();
        const avatar = {
            name : this.state.avatarName,
            avatar: this.state.avatarUrl
        }

        await Api.post('', avatar);
        this.props.history.push('/')
    }

    render() {
        return <>
            <form onSubmit={this.addAvatar}>
                <label htmlFor="name">
                    Avatar Name :
                    <input type="text" id="name" onChange={this.handleName} />
                </label>
                <br></br>
                <label htmlFor="url">
                    Image Url :
                    <input type="text" id="url" onChange={this.handleUrl} />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </>
    }
}