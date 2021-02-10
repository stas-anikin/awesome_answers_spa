import React, { Component } from 'react';
import questionsIndexData from '../questionIndexData';
import NewQuestionForm from './NewQuestionForm';

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: questionIndexData
    }
    console.log('Component initialized')
    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion(params) {
    this.setState((state) => {
      // [].concat(state.questions) <- another way to copy an array
      return {
        questions: [
          ...state.questions,
          {
            id: (Math.max(...state.questions.map(q => q.id)) + 1), // find the largest id within an array and add 1 to it.
            // title: params.title,
            // body: params.body
            ...params
          }
        ]
      }
    })
  }

  deleteQuestion(id) {
    // anytime you want to change state you must use this.setState
    this.setState((state) => { // the cb function always recieves the latest state as the argument
      // return value of this cb function is merged into the state
      return {
        questions: state.questions.filter(q => q.id !== id)
      }
    })
  }

  render() {
    console.log('Question Index Page Rendered')
    return(
      <main>
        <NewQuestionForm createQuestion={this.createQuestion}/>
        {this.state.questions.map(q => {
          return(
            <div key={q.id}>
              <h1>{q.id} - {q.title}</h1>
              <button onClick={() => this.deleteQuestion(q.id)}>Delete</button>
            </div>
          )
        })}
      </main>
    )
  }
}

export default QuestionsIndexPage