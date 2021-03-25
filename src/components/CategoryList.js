import React from 'react'
import Category from './Category'

const CategoryList = ({ categoryList, onSelectedCategory }) => {
  const getNewNames = (categoryName, stringOne, stringTwo) => {
    if (categoryName.includes(stringOne)) {
      return categoryName.replace(stringOne, '')
    } else if (categoryName.includes(stringTwo)) {
      return categoryName.replace(stringTwo, '')
    }
    return categoryName
  }
  const renderedList = categoryList.map((category) => {
    return (
      <Category
        onSelectedCategory={onSelectedCategory}
        key={category.id}
        name={getNewNames(category.name, 'Entertainment: ', 'Science: ')}
        id={category.id}
      />
    )
  })
  return <div className="ui relaxed divided list">{renderedList}</div>
}

export default CategoryList
