import React, { useState } from 'react'
import "./Card.css"

const Card = () => {

    const [turn,setTurn] = useState("X")
    const [cell,setCell] = useState(Array(9).fill(""))

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
        setCell(square);
    }

    const Fill = ({num})=>{
        return <td onClick={() => handleClikc(num)}>{cell[num]}</td>;
    }
  return (
      <div className="container">
        <table>
          Turn of : {turn}
          <tbody>
            <tr>
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
      </div>
  );
}

export default Card