import React from 'react'
import CategoryList from './CategoryList'
import Game from './Game'
import trivia from '../api/trivia'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.categoryListRef = React.createRef()
  }
  state = { categoryList: [], questionAndAnswer: [] }

  getCategories = async () => {
    const response = await trivia.get('/api_category.php')
    this.setState({ categoryList: response.data.trivia_categories })
  }

  onSelectedCategory = async (id) => {
    const response = await trivia.get('/api.php', {
      params: {
        amount: 5,
        category: id,
      },
    })
    this.setState({ questionAndAnswer: response.data.results[0] })
    console.log(response.data.results)
    console.log(this.categoryListRef)
  }

  renderIndex = ({ questionAndAnswer, categoryList }) => {
    if (questionAndAnswer.length !== 0) {
      return <Game questionAndAnswer={questionAndAnswer} />
    }
    return (
      <CategoryList
        onSelectedCategory={this.onSelectedCategory}
        categoryList={categoryList}
      />
    )
  }

  componentDidMount() {
    this.getCategories()
  }

  render() {
    return (
      <div className="ui container">
        <div ref={this.categoryListRef}>{this.renderIndex(this.state)}</div>
      </div>
    )
  }
}

export default App
