import React from 'react'
import Category from './Category'
import getNewCategoryName from '../utils/getNewCategoryName'

const CategoryList = ({ categoryList, onSelectedCategory }) => {
  const renderedList = categoryList.map((category) => {
    return (
      <Category
        onSelectedCategory={onSelectedCategory}
        key={category.id}
        name={getNewCategoryName(category.name, 'Entertainment: ', 'Science: ')}
        id={category.id}
      />
    )
  })

  return (
    <div>
      <h1>Categories</h1>
      <div className="ui relaxed divided list">{renderedList}</div>
    </div>
  )
}

export default CategoryList
