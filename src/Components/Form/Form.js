import React, { Component } from 'react';
import { questionSet } from './questions'
import './Form.scss';

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allAnswers: [],
      currentAnswers: [],
      questionsPerActivity: [],
      familyFriendly: true,
    }
  }


  updateCurrentAnswers = (event) => {
    event.preventDefault();
    if (this.state.currentAnswers.includes(event.target.textContent)){
      return 
    }
    console.log(event.target)
    this.props.updateActivityAnswers(event)
    this.setState({currentAnswers: [...this.state.currentAnswers, event.target.textContent]})
  }

  updateAllAnswers = (event) => {
    event.preventDefault();
  
    this.setState({allAnswers: [...this.state.allAnswers, this.state.currentAnswers], currentAnswers: []})
    if (this.state.allAnswers.length === 1) {
      this.props.setActivities(this.state.currentAnswers);
      let relevantQuestions = this.state.currentAnswers.reduce((relevantQuestions, activity) => {
        let filteredQuestions = questionSet.filter(question => {
          return question.activities.includes(activity); 
        })
        let questionsByActivity = {
          activity: activity,
          questions: filteredQuestions,
          answered: false
        }
        relevantQuestions.push(questionsByActivity)
        return relevantQuestions;  
      }, [])
      this.setState({questionsPerActivity: [...relevantQuestions]})
    }
 }

  determinePrompt = (index, data) => {
    console.log(data[index].answerType)
    return (
        <article className='question-with-choices'>
          <h2 className='single-question'>{data[index].question}</h2>
          <div>
            {data[index].choices.map(choice => {
              return <h2
                id={data[index].answerType}
                onClick={this.updateCurrentAnswers} 
                value={choice} 
                className='choice'>{choice}
                </h2>
            })}
          </div>
        </article>
      )
  }

  showQuestion = () => {
    if (!this.props.activities.length && !this.state.allAnswers.length) {
      return this.determinePrompt(0, questionSet);
    } 
    if (!this.props.activities.length && this.state.allAnswers.length) {
      return this.determinePrompt(1, questionSet);
    }
    if (this.state.questionsPerActivity.length) {
      let unansweredSet = this.state.questionsPerActivity.find(set => {
        return !set.answered 
      })
        return unansweredSet.questions.map((question, i) => {
          return this.determinePrompt(i, unansweredSet.questions)
        })

    }
  }

  showCurrentAnswers = () => {
    return this.state.currentAnswers.map(answer => {
      return <h3 className='current-answer'>{answer}</h3>
    })
  }

  render() {
    return (
      <form className='question-form'>
         <h2 className='question'>{this.showQuestion()}</h2>
         {this.showCurrentAnswers()}
         <button className='back-button form-button'>back</button>
         <button 
            onClick={this.updateAllAnswers} 
            className='next-button form-button'>
            next</button>
      </form>
    )
  }
}

//add prop types