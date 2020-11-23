import React from 'react'
import Category from '../Components/Category'

class CategoriesContainer extends React.Component {

    renderCategories() {
        return this.props.categories.map(category => <Category key={category} category={category} handleSelectCategory={this.props.handleSelectCategory} selected={this.props.filter === category ? true : false}/>)
    }

    render() {
        return (
            <div className="categories">
                <h5>Category filters</h5>
                {this.renderCategories()}
            </div>
        )
    }
}

export default CategoriesContainer