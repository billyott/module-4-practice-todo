import React from 'react'

class Task extends React.Component {


    localHandleDelete = () => {
        this.props.handleDelete(this.props.task)
    }

    render() {
        return (
            <div className="task">
                <div className="label">
                    {this.props.task.category}
                </div>
                <div className="text">
                    {this.props.task.text}
                </div>
                <button onClick={this.localHandleDelete} className="delete">X</button>
            </div>
        )
    }
}

export default Task;