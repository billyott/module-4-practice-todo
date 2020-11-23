import React from 'react'

class Category extends React.Component {


    localHandleSelectCategory = () => {
        this.props.handleSelectCategory(this.props.category)
    }

    render() {
        return (
            <button onClick={this.localHandleSelectCategory} className={this.props.selected ? "selected": null}>
                {this.props.category}
            </button>
        )
    }
}

export default Category;