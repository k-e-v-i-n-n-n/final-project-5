const WordCard = ({word}) => {


    return (
      <div className="target-expression-container" >
          <p className="target-expression-text">
            {word.french}
          </p>
          <p className="source-expression-text">
           {word.english}
          </p>
      </div>
    )
  }
  
  export default WordCard