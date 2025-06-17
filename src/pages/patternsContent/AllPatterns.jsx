import React, { useContext, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './PatternsContent.css'
import  { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { UserContextAPI } from '../../context/UserContext';
import { Spinner } from 'react-bootstrap';
Spinner

const AllPatterns = () => {
    const allPatterns = [
        {
            id: 1,
            level: 'beginner',
            name: 'Right Angle Star Triangle',
            code: `
for(let i=1; i<=5; i++){
  let string = "";
  for(let j=1; j<=i; j++){
    string += "* ";
  }
  console.log(string);
}
`,
            output: `
* 
* * 
* * * 
* * * * 
* * * * * 
`,
            happens: "For each row i (from 1 to 5), inner loop adds i stars with spaces, forming a right-angle triangle."
        },
        {
            id: 2,
            level: 'beginner',
            name: 'Hollow Square',
            code: `
for(let i=1; i<=5; i++){
  let string = "";
  for(let j=1; j<=5; j++){
    if(i==1 || i==5 || j==1 || j==5){
      string += "* ";
    } else {
      string += "  ";
    }
  }
  console.log(string);
}
`,
            output: `
* * * * * 
*       * 
*       * 
*       * 
* * * * * 
`,
            happens: "Prints star at borders; inside is empty spaces creating a hollow square."
        },
        {
            id: 3,
            level: 'beginner',
            name: 'Left Padded Right Angle Triangle',
            code: `
for(let i=1; i<=4; i++){
  let string = "";
  for(let j=1; j<=4 - i; j++){
    string += " ";
  }
  for(let k=1; k<=i; k++){
    string += "* ";
  }
  console.log(string);
}
`,
            output: `
   * 
  * * 
 * * * 
* * * * 
`,
            happens: "First adds spaces to shift stars to the right, then prints stars in increasing count per row."
        },
        {
            id: 4,
            level: 'beginner',
            name: 'Solid Square',
            code: `
for(let i=1; i<=5; i++){
  let string = "";
  for(let j=1; j<=5; j++){
    string += "* ";
  }
  console.log(string);
}
`,
            output: `
* * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * * 
`,
            happens: "Each row prints 5 stars. Outer loop repeats 5 rows to form solid square."
        },
        {
            id: 5,
            level: 'intermediate',
            name: 'Number Triangle Same Number',
            code: `
for(let i=1; i<=4; i++){
  let string = "";
  for(let j=1; j<=i; j++){
    string += i + " ";
  }
  console.log(string);
}
`,
            output: `
1 
2 2 
3 3 3 
4 4 4 4 
`,
            happens: "Each row prints its row number repeatedly equal to row number count."
        },
        {
            id: 6,
            level: 'intermediate',
            name: 'Reverse Number Triangle',
            code: `
for(let i=4; i>=1; i--){
  let string = "";
  for(let j=1; j<=i; j++){
    string += j + " ";
  }
  console.log(string);
}
`,
            output: `
1 2 3 4 
1 2 3 
1 2 
1 
`,
            happens: "Starts with 1 to 4 numbers in first row, decreases one number each next row."
        },
        {
            id: 7,
            level: 'intermediate',
            name: 'Incremental Number Triangle',
            code: `
for(let i=1; i<=5; i++){
  let string = "";
  for(let j=1; j<=i; j++){
    string += j + " ";
  }
  console.log(string);
}
`,
            output: `
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
`,
            happens: "Each row prints numbers from 1 up to row number."
        },
        {
            id: 8,
            level: 'intermediate',
            name: 'Large Incremental Number Triangle',
            code: `
for(let i=1; i<=10; i++){
  let string = "";
  for(let j=1; j<=i; j++){
    string += j + " ";
  }
  console.log(string);
}
`,
            output: `
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
1 2 3 4 5 6 
1 2 3 4 5 6 7 
1 2 3 4 5 6 7 8 
1 2 3 4 5 6 7 8 9 
1 2 3 4 5 6 7 8 9 10 
`,
            happens: "Same as incremental triangle but extends to 10 rows, growing numbers in each row."
        },
        {
            id: 9,
            level: 'advanced',
            name: 'Pyramid Number Triangle',
            code: `
let num = 1;
for(let i=1; i<=5; i++){
  let string = "";
  for(let j=1; j<=i; j++){
    string += num + " ";
    num++;
  }
  console.log(string);
}
`,
            output: `
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
`,
            happens: "Prints continuous numbers across rows, increasing number with every printed number."
        },
        {
            id: 10,
            level: 'advanced',
            name: 'Row-wise Incremented Numbers',
            code: `
let num = 1;
for(let i=1; i<=3; i++){
  let string = "";
  for(let j=1; j<=num; j++){
    string += n + " ";
    n++;
  }
  num += 2;
  console.log(string);
}
`,
            output: `
1 
2 3 4 
5 6 7 8 9 
`,
            happens: "Each row prints continuous numbers; row length increases by 2 more numbers than previous."
        },
        {
            id: 11,
            level: 'advanced',
            name: 'Left Padded Star Triangle',
            code: `
for(let i=1; i<=5; i++){
  let string = "";
  for(let j=1; j<=5 - i; j++){
    string += " ";
  }
  for(let k=1; k<=i; k++){
    string += "*";
  }
  console.log(string);
}
`,
            output: `
    *
   **
  ***
 ****
*****
`,
            happens: "Adds spaces first to align stars to the right. Each row adds one more star."
        },
        {
            id: 12,
            level: 'advanced',
            name: 'Simple Star Triangle',
            code: `
for(let i=1; i<=5; i++){
  let string = "";
  for(let j=1; j<=i; j++){
    string += "*";
  }
  console.log(string);
}
`,
            output: `
*
**
***
****
*****
`,
            happens: "Each row prints stars equal to its row number."
        },
        {
            id: 13,
            level: 'advanced',
            name: 'Character A Triangle',
            code: `
for(let i=1; i<=5; i++){
  let string = "";
  for(let j=1; j<=i; j++){
    string += "A";
  }
  console.log(string);
}
`,
            output: `
A
AA
AAA
AAAA
AAAAA
`,
            happens: "Each row prints letter A repeatedly equal to row number."
        }
    ];


    const [code, setCode] = useState(allPatterns[10].code);
    const [data, setData] = useState([])

     const {boxval,setBoxVal}=useContext(UserContextAPI)





    const [currentPage, setCurrentPage] = useState(1)

    const perPage = 8
    const totalPage = Math.ceil(allPatterns.length / perPage)

    let lastIndex = currentPage * perPage
    let firstIndex = lastIndex - perPage


    const forwardClick = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1)
            setData(allPatterns)
        }
    }

    const onBackWardClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            setData(allPatterns)
        }

    }

    useEffect(() => {
        if(data)
        setData(allPatterns)
    }, [])
    let slicedArray = data?.slice(firstIndex, lastIndex)

    return (
        <div>
           
    <>
    <div className='btn-option-div'>
                <button onClick={()=>setBoxVal("questions")}>View Interview questions <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
            {slice.length > 0 ?( slicedArray.map((a) => (
                <Accordion className="custom-accordion">
                    <Accordion.Item eventKey={a.id}>
                        <Accordion.Header>{a.name} <img id='img-pattern' src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" /></Accordion.Header>
                        <Accordion.Body>
                            <Editor
                                height="200px"
                                defaultLanguage="javascript"
                                value={a.code}
                                theme="vs-dark"
                            />
                            <p className='mt-4'>{a.happens}</p>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )) ): ""}
            

            <div className='arrow-btn-div'>
                <button onClick={onBackWardClick}><i class="fa-solid fa-arrow-left"></i></button>
                <h6><span>{currentPage}</span> of <span>{totalPage}</span></h6>
                <button onClick={forwardClick}><i class="fa-solid fa-arrow-right"></i></button>

            </div></>
           
        </div>
    )
}

export default AllPatterns
