import React from 'react'
import '../css/Category.css'

const Category = ({ id, name, onSelectedCategory }) => {
  return (
    <div
      onClick={() => {
        onSelectedCategory(id)
      }}
      className="ui item list-item"
    >
      <div className="content">
        <p className="header">{name}</p>
      </div>
    </div>
  )
}

export default Category
