import React, {useState} from 'react';
import Alert from './Alert';

export default function TextForm(props) {
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{
        setAlert({
            msg: message,
            type: type
        })

        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }
    
    const handleUpClick = () =>{
        console.log('upparbutton click');
        // setText("You have clicked on handle UP click");
        setText(text.toUpperCase());

        showAlert("Text is Uppercase", "success")

    }
    const handleOnChange = (event) =>{
        console.log('handleOnChange');
        setText(event.target.value);
    } 
    
    // state variable
    // text - assign value.
    // setText - update the "text variable" value.
    // Hooks
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className='container'>
            <h2>{props.Heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myTextArea" rows="3" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
        <div className='container my-3'>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((event)=>{return event.length!=0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
        </div>
        <Alert Alert={alert} />
        </>
    )
}
