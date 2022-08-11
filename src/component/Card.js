import React, { useState } from 'react'
import "./Card.css"

const Card = () => {

    const [turn,setTurn] = useState("X")
    const [cell,setCell] = useState(Array(9).fill(""))
    const [winner,setWinner] = useState()

    const checkWinner = (square)=>{
        const combos = {
            across :[
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            down : [
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            diagonal : [
                [0,4,8],
                [2,4,6],
            ]}
            for (let i in combos){
                combos[i].forEach(element => {
                    if(square[element[0]]===""|| square[element[1]]===""|| square[element[2]]===""){
                        //do nothing 
                    }else if (square[element[0]]=== square[element[1]] && square[element[1]]=== square[element[2]]){
                        setWinner(square[element[0]]);
                    }
                });
            }
        }



    const handleClikc = (num)=>{
        if(cell[num] !== ""){
            alert("Already Clicked !")
            return
        }
        let square = [...cell]
        if(turn === "X"){
            square[num] = "X"
            setTurn("O")
        }else{
            square[num] = "O"
            setTurn("X")
        }
        checkWinner(square)
        setCell(square);
    }

    const handleReset = ()=>{
        setWinner(null)
        setCell(Array(9).fill(""))
    }

    const Fill = ({num})=>{
        return <td className='btn td' onClick={() => handleClikc(num)}>{cell[num]}</td>;
    }
  return (
    <div className="container">
      <table>
        {<h4>Turn : {turn}</h4>}
        <tbody>
          <tr >
            <Fill num={0} />
            <Fill num={1} />
            <Fill num={2} />
          </tr>
          <tr>
            <Fill num={3} />
            <Fill num={4} />
            <Fill num={5} />
          </tr>
          <tr>
            <Fill num={6} />
            <Fill num={7} />
            <Fill num={8} />
          </tr>
        </tbody>
      </table>
      {winner && <h2 className='winner'>Winner is : {winner}</h2>}
      <button className='btn btn-danger' onClick={() => handleReset()}>Play again</button>
    </div>
  );
}

export default Card