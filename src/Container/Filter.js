import React from 'react';
import {connect} from 'react-redux';
import { setfilter, resetfilter} from '../Action';

const Filter = ({filter_name,setfilter, resetfilter}) => {
    //4 kind of products storing into prod
    const prod = ["All Items", "Rice Items", "Cold Drinks", "Hot Drinks", "Pizza"];
    const [filter, setFilter] = React.useState("All Items");



  return (
    <div>
        {/* mt - margin top*/}
      <center className = "mt-3">
        <span className='h4 m-2'>Filter :</span>
        {/* input statement select*/}
        {/* reset(by setFilter) the actual filter value with the filter variable*/}
        {/* styling with padding of one p-1*/}
        <select name = "filter" className='p-1' onChange={(e)=> setfilter(e.target.value)}>
            {prod.map((item, index)=>(
                <option value = {item} key = {index}>{item}</option>
            ))}
        </select>
        
      </center>
    </div>
  )
}

const mapStateToProps = state =>({
  filter_name : state.filterreducer.filter_name
})
export default connect(mapStateToProps, {setfilter, resetfilter})(Filter)
