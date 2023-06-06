import React, {useState} from 'react'


export default function Textfrom(props) {

	const HandleUpClick = ()=>{

		// console.log("upper case was clicked");
		let newText = text.toUpperCase();
		setText(newText);
	}


	const handleToCopy = ()=>{
		console.log("I Am Copy");
		var text = document.getElementById("myBox");
		text.select();
		document.execCommand("copy");
		setText(text.value);
		alert("Text Copied");
}


const RemoveExtraSpace = ()=>{
	let newText = text.split(/[ ]+/);
	setText(newText.join(" "));
}

const capitalFirstLetter = ()=>{

	let newText =  text.charAt(0).toUpperCase()
  + text.slice(1);
	setText(newText);
}

	const HandleToSmall = ()=>{
		let newText = text.toLowerCase();
		setText(newText);
	}

	const HandleToClear = ()=>{
		setText("");
	}
	const handleOnChange = (event)=>{

		// console.log("handleOnChange");
		setText(event.target.value);
	}
	const [text, setText] = useState('');
	// setText("new text");// correct wat to change text in a useState

	return(
		<>
		<div className="container">
		    <h1>{props.heading}</h1>
            <div className="mb-3">

             <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={HandleUpClick}>Convert To UpperCase</button>
		<button className="btn btn-primary mx-1" onClick={HandleToSmall}>Convert To SmallCase</button>



		<button className="btn btn-primary mx-1" onClick={HandleToClear}>Clear All</button>



		<button className="btn btn-primary mx-1" onClick={handleToCopy}>handleToCopy</button>



		<button className="btn btn-primary mx-1" onClick={RemoveExtraSpace}>RemoveExtraSpace</button>



		<button className="btn btn-primary mx-1" onClick={capitalFirstLetter}>capitalFirstLetter</button>

		</div>
		
		<div className="container my-2">
		<h2>Your Text Summary</h2>
		<p>{text.split(" ").length} words , {text.length} characters</p>
		<p>{0.008 * text.split(" ").length} Minutes To Read </p>
		<h2>Preview</h2>
		<p>{text}</p>
		</div>
</>
		)
} 
