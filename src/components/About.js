import React, { useState } from 'react';
import TextForm from './TextForm';
import StaticDialog from '../dialog/StaticDialog';
import { Link } from "react-router-dom";
import DataForms from './DataForms';

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const [textFormFlag, setTextFormFlag] = useState(false);

    const [tt, setTt] = useState('');
    // const [staticDialog, setStaticDialog] = useState('');

    // const enableDialog = () => {
    //     // setStaticDialog(<StaticDialog DialogId="staticBackdrop"></StaticDialog>);
    // }
    const enableDarkMode = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'red',
                backgroundColor: 'black'
            })
            setBtnText("Enable Lignt Mode");
            setTextFormFlag(true);
            setTt(<TextForm></TextForm>);
        } else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode");
            setTextFormFlag(false);
            setTt('');
        }
    }


    return (
        <div className='container'>
            <DataForms></DataForms>
            {/* component load using condition */}
            {tt}
            {/* {textFormFlag ? <TextForm></TextForm> : ''}             */}

            <Link className="nav-link active" aria-current="page" to="/">Home</Link>

            <div className="accordion p-5" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button type="button" className="btn btn-primary my-3" onClick={enableDarkMode}>{btnText}</button> */}
            <div className="form-check form-switch my-3">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={enableDarkMode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btnText}</label>
            </div>

            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                Launch static backdrop modal
            </button>
            <StaticDialog DialogId="staticBackdrop"></StaticDialog>

            {/* <!-- Modal --> */}
            {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">I will not close if you click outside of me. Don't even try to press escape key. </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
