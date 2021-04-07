import React from 'react'
import getNewCategoryName from '../utils/getNewCategoryName'
import Answer from './Answer'

class Game extends React.Component {
  renderedAnswers = this.props.questionAndAnswer.incorrect_answers.map(
    (incorrect_answer) => {
      return <Answer answer={incorrect_answer} />
    }
  )
  render() {
    return (
      <div>
        <h1>
          {getNewCategoryName(
            this.props.questionAndAnswer.category,
            'Entertainment: ',
            'Science: '
          )}
        </h1>
        <h2 className="header">{this.props.questionAndAnswer.question}</h2>

        <div className="ui cards">
          {this.renderedAnswers}
          <Answer answer={this.props.questionAndAnswer.correct_answer} />
        </div>
      </div>
    )
  }
}
export default Game
