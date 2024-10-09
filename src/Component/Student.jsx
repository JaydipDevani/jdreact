// import React from 'react'


// const Student = () => {
//     return (
//     <div>
//       <tr>
//         <td>{studentdata.rollno}</td>
//         <td>{studentdata.name}</td>
//         <td>{studentdata.c}</td>
//         <td>{studentdata.cpp}</td>
//         <td>{studentdata.js}</td>
//         <td>{studentdata.css}</td>
//         <td>{studentdata.total}</td>
//         <td>{studentdata.pre}</td>
//         <td>{studentdata.result}</td>
//       </tr>
//     </div>
//   )
// }

// export default Student


import React from 'react';

const Student = ({ student }) => {
    const total = student.c + student.cpp + student.js + student.css;
    const percentage = total / 4;
    const result = percentage >= 33 ? 'Pass' : 'Fail';

    return (
        <tr>
            <td align='center'>{student.rollno}</td>
            <td align='center'>{student.name}</td>
            <td align='center'>{student.c}</td>
            <td align='center'>{student.cpp}</td>
            <td align='center'>{student.js}</td>
            <td align='center'>{student.css}</td>
            <td align='center'>{total}</td>
            <td align='center'>{percentage.toFixed(2)}%</td>
            <td align='center'>{result}</td>
        </tr>
    );
}

export default Student;
