// import './App.css';
// import Student from './Component/Student';


// function App() {
//     let studentdata = [
//         {
//             rollno : 1,
//             name : "jaydip",
//             c : 64,
//             cpp : 69,
//             js : 58,
//             css : 80,
//             // total : 64 + 69 + 58 + 80,
//             // result :  271 / 4,
//             total : +c + +cpp + +js + +css,
//             result : total / 4,
//         },
//         {
//             rollno : 2,
//             name : "dhruvik",
//             c : 40,
//             cpp : 49,
//             js : 55,
//             css : 70,
//         },
//         {
//             rollno : 2,
//             name : "meet",
//             c : 40,
//             cpp : 38,
//             js : 35,
//             css : 33,
//         },
//         {
//             rollno : 2,
//             name : "krish",
//             c : 60,
//             cpp : 50,
//             js : 54,
//             css : 53,
//         },
//         ]
//   return (
//     <>
//       <table border={1} width={"70%"}>
//       <thead>
//           <tr>
//             <th>rollno</th>
//             <th>name</th>
//             <th>c</th>
//             <th>cpp</th>
//             <th>js</th>
//             <th>css</th>
//             <th>total</th>
//             <th>per</th>
//             <th>result</th>
//           </tr>
//       </thead>
//       <tbody>
//           <Student rollno="1" name="jaydip" c="64" cpp="69" js="58" css="80"></Student>
//       </tbody>
//       </table>
//     </>
//   );
// }

// export default App;


import './App.css';
import Student from './Component/Student';

function App() {
    const studentdata = [
        {
            rollno: 1,
            name: "jaydip",
            c: 64,
            cpp: 69,
            js: 58,
            css: 80
        },
        {
            rollno: 2,
            name: "dhruvik",
            c: 40,
            cpp: 49,
            js: 55,
            css: 70
        },
        {
            rollno: 3,
            name: "meet",
            c: 40,
            cpp: 38,
            js: 35,
            css: 33
        },
        {
            rollno: 4,
            name: "krish",
            c: 60,
            cpp: 50,
            js: 54,
            css: 53
        }
    ];

    return (
        <>
            <table border={1} width={"70%"} cellPadding={"0"} cellSpacing={"0"}>
                <thead>
                    <tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>C</th>
                        <th>CPP</th>
                        <th>JS</th>
                        <th>CSS</th>
                        <th>Total</th>
                        <th>Percentage</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {studentdata.map((student) => (
                        <Student student={student} />
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default App;
