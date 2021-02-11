import React from 'react';
 const QuestionDetails = (props) => {
    const { title, body, author, view_count, created_at, updated_at } = props;
    const randomNumber = 500 + 1000
  
    const randomDiv = <div>gwegweg</div>
  console.log('question details rerendered')
    return (
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <p>By {author?author.full_name: ''}</p>
        {randomDiv}
        <p>
          <small>Seen {view_count} times</small>
          <small>Last edited {updated_at.toLocaleString()}</small>
        </p>
      </div>
    )
  }
  
  
  export default QuestionDetails