import React from 'react'

class Form extends React.Component {

    state = {
        category: '',
        text: ''
    }

    localHandleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.category) {
            window.alert("YOU FOOL. SELECT A CATEGORY")
        } else {
            this.props.handleSubmit(this.state) 
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.localHandleSubmit} className="new-task-form">
                <input placeholder="New task details" type="text" name="text" value={this.state.text} onChange={this.handleChange} />
                <select defaultValue={'DEFAULT'} name="category" onChange={this.handleChange}>
                    <option value="DEFAULT" disabled>--select--</option>
                    <option value="Code">Code</option>
                    <option value="Food">Food</option>
                    <option value="Money">Money</option>
                    <option value="Misc">Misc</option>
                </select>
                <input type="submit" value="Add task"/>
            </form>
        )
    }
}

export default Form;