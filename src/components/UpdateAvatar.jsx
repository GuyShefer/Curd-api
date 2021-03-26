import React from 'react'
import Api from './api'

export class UpdateAvatar extends React.Component {
    state = {avatar : this.props.location.avatar}

    handleName = (e) => {
        const avatar = this.state.avatar;
        avatar.name = e.target.value
        this.setState({avatar})
    }

    handleUrl = (e) => {
        const avatar = this.state.avatar;
        avatar.avatar = e.target.value;
        this.setState({avatar})
    }

    updateAvatar = async (e) => {
        e.preventDefault();
        await Api.put(`/${this.state.avatar.id}`, this.state.avatar);
        this.props.history.push('/')
    }


    render() {
        console.log(this.state.avatar.name);
        console.log(this.state.avatar.avatar);
        return <>

            <form onSubmit={this.updateAvatar}>
                <label htmlFor="name">
                    Avatar Name :
                    <input type="text" id="name" value={this.state.avatar.name} onChange={this.handleName} />
                </label>
                <br></br>
                <label htmlFor="url">
                    Image Url :
                    <input type="text" id="url" value={this.state.avatar.avatar} onChange={this.handleUrl} />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </>
    }
}