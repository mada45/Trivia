import React from 'react'
import CategoryList from './CategoryList'
import trivia from '../api/trivia'

class App extends React.Component {
  state = { categoryList: [], questions: [] }

  getCategories = async () => {
    const response = await trivia.get('/api_category.php')
    this.setState({ categoryList: response.data.trivia_categories })
    console.log(response)
  }

  onSelectedCategory = async (id) => {
    const response = await trivia.get('/api.php', {
      params: {
        amount: 5,
        category: id,
      },
    })
    this.setState({ questions: response.data.results })
    console.log(response)
  }

  componentDidMount() {
    this.getCategories()
  }

  render() {
    return (
      <div className="ui container">
        <h1>Trivia</h1>
        <div className="ui segment">
          <CategoryList
            onSelectedCategory={this.onSelectedCategory}
            categoryList={this.state.categoryList}
          />
        </div>
      </div>
    )
  }
}

export default App
