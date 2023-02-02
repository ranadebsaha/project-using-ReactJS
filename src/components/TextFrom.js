import React, {useState} from 'react'

export default function TextFrom(props) {
  const handleUpClick=()=>{
    console.log("Upper case was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className='container'>  
      <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to upperCase</button>
    </div>
    <div className="container">
      <h1>Text Summary</h1>
      <p>{text.split(' ').length} words and {text.length} characters</p>
      <p>{0.008*text.split(' ').length} Minutes to Read this Paragraph</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
