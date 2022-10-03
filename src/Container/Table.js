import React from 'react'
import {connect} from 'react-redux'
import { settablenumber } from '../Action';

const Table = ({table_number,settablenumber}) => {
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    const inActiveBtn= 'btn btn-outline-primary m-2';
    const activeBtn = 'btn btn-outline-primary m-2 active'; //additional active will make outer primary to primary which make the background blue colour
    
    //when table is selected that value will be set into number, when the number == num then that numbered button will be selected
  return (
    <div>
      <center className = "mt-2">
        <h4>Please select your table number here:</h4>
        {/*num is key and index is value */}
        {numbers.map((num, index)=>(
            <div style={{display:'inline'}}  key = {index}>
                <button className={table_number===num?activeBtn:inActiveBtn} onClick={()=>settablenumber(num)}>
                    {num}
                </button>
            </div>
        ))}
      </center>
    </div>
  )
}

const mapStateToProps = state => ({
  table_number : state.tablereducer.table_number
}) 

export default connect(mapStateToProps,{settablenumber})(Table);
