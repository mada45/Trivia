const getNewCategoryName = (categoryName = '', stringOne, stringTwo) => {
  if (categoryName.includes(stringOne)) {
    return categoryName.replace(stringOne, '')
  } else if (categoryName.includes(stringTwo)) {
    return categoryName.replace(stringTwo, '')
  }
  return categoryName
}

export default getNewCategoryName
