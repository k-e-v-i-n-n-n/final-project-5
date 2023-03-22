function TextBoxes() {


  return (

    <>
      <div className="text-box-container">
        <textarea className="text-box" placeholder="Enter a word or phrase in English..."/>
          <button className="text-box-center">⮂</button>
        <textarea className="text-box"/>
      </div>

      <div className="translate-button-container">
        <button className="text-box-buttons">translate</button>
        <button className="text-box-buttons">save</button>
        <button className="text-box-buttons">clear</button>
      </div>
  </>

  );
}

export default TextBoxes;
