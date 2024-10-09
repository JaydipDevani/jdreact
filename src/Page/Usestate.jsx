import React, { useState } from 'react'
// import { Usestate } from "react";

const Usestate = () => {
    // let [txt,settxt] = useState(0);
    // function Zero(){
    //     settxt(0);
    // }
    // function Incre(){
    //     settxt(++txt);
    // }
    // function Decre(){
    //     if (txt>0) {

    //         settxt(--txt);
    //     }
    // }
    // function Multi(){
    //     settxt(5*txt);
    // }
    // function Devide(){
    //     settxt(txt/5);
    // }

    let [text, setText] = useState("")
    let [data, setData] = useState([])
    let [eid, setid] = useState(-1)
    let dataSubmit = () => {
        let dataCopy = [...data]

        if (text.trim()) {
            if (eid >= 0) {
                dataCopy.splice(eid, 1, text)
                setid(-1)
            } else {
                dataCopy.push(text)
            }
            setData(dataCopy);
            setText('')
        }
    }

    function UpdateData(index) {
        let dataCopy = [...data]
        setText(dataCopy[index])
        setid(index)
    }
    function DeleteData(index) {
        let dataCopy = [...data]
        dataCopy.splice(index, 1)
        setData(dataCopy)
    }

    // -=-=-=-===========================

    let Btndata = [
        {
            name: 'Ball',
            Category: 'cricket',
        },
        {
            name: 'Bat',
            Category: 'cricket',
        },
        {
            name: 'T-shirt',
            Category: 'cloth',
        },
        {
            name: 'TV',
            Category: 'electronic',
        },
        {
            name: 'Scorpio',
            Category: 'car',
        },
        {
            name: 'Dog',
            Category: 'animal',
        },
        {
            name: 'Cat',
            Category: 'animal',
        },
    ];

    function all() {
        document.getElementById("categroy").innerHTML = "";
        for (let i = 0; i < Btndata.length; i++) {

            document.getElementById("categroy").innerHTML += <h4> ${Btndata[i].name} ,</h4>;
            document.getElementById("btn0").style.backgroundColor = "#73EC8B";
            document.getElementById("btn1").style.backgroundColor = "";
            document.getElementById("btn2").style.backgroundColor = "";
            document.getElementById("btn3").style.backgroundColor = "";
            document.getElementById("btn4").style.backgroundColor = "";
            document.getElementById("btn5").style.backgroundColor = "";
        }
    }

    function sort(CategoryCopy) {
        document.getElementById("categroy").innerHTML = "";

        for (let i = 0; i < Btndata.length; i++) {
            if (Btndata[i].Category == CategoryCopy) {
                document.getElementById("categroy").innerHTML += <h4> ${Btndata[i].name}</h4>;
                if (CategoryCopy == "cricket") {
                    document.getElementById("btn0").style.backgroundColor = "";
                    document.getElementById("btn1").style.backgroundColor = "#73EC8B";
                    document.getElementById("btn2").style.backgroundColor = "";
                    document.getElementById("btn3").style.backgroundColor = "";
                    document.getElementById("btn4").style.backgroundColor = "";
                    document.getElementById("btn5").style.backgroundColor = "";

                }
                if (CategoryCopy == "cloth") {
                    document.getElementById("btn0").style.backgroundColor = "";
                    document.getElementById("btn1").style.backgroundColor = "";
                    document.getElementById("btn2").style.backgroundColor = "#73EC8B";
                    document.getElementById("btn3").style.backgroundColor = "";
                    document.getElementById("btn4").style.backgroundColor = "";
                    document.getElementById("btn5").style.backgroundColor = "";

                }
                if (CategoryCopy == "electronic") {
                    document.getElementById("btn0").style.backgroundColor = "";
                    document.getElementById("btn1").style.backgroundColor = "";
                    document.getElementById("btn2").style.backgroundColor = "";
                    document.getElementById("btn3").style.backgroundColor = "#73EC8B";
                    document.getElementById("btn4").style.backgroundColor = "";
                    document.getElementById("btn5").style.backgroundColor = "";

                }
                if (CategoryCopy == "car") {
                    document.getElementById("btn0").style.backgroundColor = "";
                    document.getElementById("btn1").style.backgroundColor = "";
                    document.getElementById("btn2").style.backgroundColor = "";
                    document.getElementById("btn3").style.backgroundColor = "";
                    document.getElementById("btn4").style.backgroundColor = "#73EC8B";
                    document.getElementById("btn5").style.backgroundColor = "";
                }
                if (CategoryCopy == "animal") {
                    document.getElementById("btn0").style.backgroundColor = "";
                    document.getElementById("btn1").style.backgroundColor = "";
                    document.getElementById("btn2").style.backgroundColor = "";
                    document.getElementById("btn3").style.backgroundColor = "";
                    document.getElementById("btn4").style.backgroundColor = "";
                    document.getElementById("btn5").style.backgroundColor = "#73EC8B";
                }
            }

        }
    }

        return (
            // <div>
            //     <h1 className='d-flex justify-content-center'>{txt}</h1>
            //     <div className='d-flex justify-content-center p-2'>
            //         <button onClick={Zero} className='p-2 me-2'>0</button> 
            //         <button onClick={Incre} className='p-2 me-2'>Increment</button>
            //         <button onClick={Decre} className='p-2 me-2'>Decrement</button>
            //         <button onClick={Multi} className='p-2 me-2'>Multi Into 5</button>
            //         <button onClick={Devide} className='p-2'>Devide</button>
            //     </div>
            // </div>

            // <div>
            //     <input type="text" placeholder='Enter a Text' value={text} onChange={(e) => setText(e.target.value)} />
            //     <button onClick={dataSubmit}>{eid >= 0 ? "Update" : "Submit"}</button>
            //     {
            //         data.map((el,i) => {
            //             return <h1 key={i}>{el} <button onClick={() => DeleteData(i)}>Delete</button><button onClick={() => UpdateData(i)}>Update</button></h1>
            //         })
            //     }

            // </div>

            <div className='d-flex  flex-column align-items-center justify-content-center mt-5'>
                <div className='d-flex gap-3 ' id='btndata'>

                    <button className='px-5 py-1 rounded ' id='btn0' onClick={() => all()}>All</button>
                    <button className='px-5 py-1 rounded ' id='btn1' onClick={() => sort("cricket")}>Cricket</button>
                    <button className='px-5 py-1 rounded ' id='btn2' onClick={() => sort("cloth")}>Cloth</button>
                    <button className='px-5 py-1 rounded ' id='btn3' onClick={() => sort("electronic")}>Electronic</button>
                    <button className='px-5 py-1 rounded ' id='btn4' onClick={() => sort("car")}>Car</button>
                    <button className='px-5 py-1 rounded ' id='btn5' onClick={() => sort("animal")}>Animal</button>
                </div>
                <div id='categroy' className='mt-4 d-flex gap-1'>

                </div>
            </div>


        )
    }

    export default Usestate;