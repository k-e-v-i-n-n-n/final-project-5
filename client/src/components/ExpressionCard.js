function ExpressionCard({expression}) {

console.log("expression", expression.french)
  return (
    <div className="target-expression-container" >
        <p className="target-expression-text">
          {expression.french}
        </p>
        <p className="source-expression-text">
          {expression.english}
        </p>
    </div>
  )
}

export default ExpressionCard
