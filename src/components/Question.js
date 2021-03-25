const categories = [
  { name: 'Entertainment: lol', id: 1 },
  { name: 'asd', id: 2 },
  { name: 'Entertainment: lel', id: 3 },
  { name: 'asdasd', id: 3 },
  { name: 'Science: lel', id: 3 },
]

const strings = ['Entertainment: ', 'Science: ']

categories.forEach((category) => {
  strings.forEach((string) => {
    if (category.name.includes(string)) {
      category.name.replace(string, '')
    }
    console.log(category)
  })
})
