export const questionSet = [
    {
        question: 'Does your group include kids?', 
        choices: ['yes', 'no'],
        activities: [],
        answerType: 'default'
    }, 
    {
        question: 'Which activities excite you right now?',
        choices: ['movies', 'board games', 'music', 'card games', 'podcasts'],
        activities: [],
        answerType: 'default'
    },
    {
      question: 'How old is too old?',
      choices: ['2010\'s', '2000\'s','1990\'s', '1980\'s'],
      activities: ['music'],
      answerType: 'musicAnswers'
    },
    {
      question: 'How old is too old?',
      choices: [ '2010\'s', '2000\'s', '1990\'s', '1980\'s', "No such thing as too old"],
      activities: ['movies'],
      answerType: 'moviesAnswers'
    },
    {
      question: 'What year?',
      choices: [2020, 2019],
      activities: ['podcast'],
      answerType: 'podcastsAnswers'
    },
    {
      question: 'Which music genre(s)?',
      choices: ['Pop', 'Rock', 'Country', 'Hard Core', 'Dance', 'Alternative', 'Hip-Hop', 'R&B/Soul', 'Rap'],
      activities:['music'],
      answerType: 'musicAnswers'
    },
    {
      question: 'Which podcast genre(s)?',
      choices: ['Comedy', 'Daily News', 'History', 'Documentary', 'Technology', 'True Crime', 'Education', 'Sports', 'Relationships', 'Design', 'Music', 'Science'],
      activities:['podcasts'],
      answerType: 'podcastsAnswers'
    },
    {
      question: 'Which movie genre(s)?',
      choices: ['Adventure', 'Animation', 'Documentary', 'Comedy', 'Family', 'Fantasy', 'Horror', 'Mystery', 'Sci-Fi'],
      activities:['movies'],
      answerType: 'moviesAnswers'
    },
    {
      question: 'Would you like your movie to be shorter than 2 hours?', 
      choices: ['yes', 'no'], 
      activities: ['movies'],
      answerType: 'moviesAnswers'
    },
    {
      question: 'How many people are playing?',
      choices: ['1', '2', '3', '4', '5', 'more than 5'],
      activities: ['card games'],
      answerType: 'cardGamesAnswers'
     },
    {
      question: 'How many people are playing?',
      choices: ['1', '2', '3', '4', '5', 'more than 5'],
      activities: ['board games'],
      answerType: 'boardGamesAnswers'
     }
  ]