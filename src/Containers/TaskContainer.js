import React from 'react'
import Task from '../Components/Task'

class TasksContainer extends React.Component {

 
    renderTasks = () => {
        if (this.props.filter === 'All') {
            return this.props.tasks.map(task => <Task key={task.text} task={task} handleDelete={this.props.handleDelete} />)
        } else {
            return this.props.tasks.filter(task => task.category === this.props.filter).map(task => <Task key={task.text} task={task} handleDelete={this.props.handleDelete}/>)
        }
    }

    render() {
        return (
            <div className="tasks">
                <h5>Tasks</h5>
                <div>
                    {this.renderTasks()}
                </div>
            </div>
        )
    }
}

export default TasksContainer