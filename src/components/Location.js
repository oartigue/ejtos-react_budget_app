import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
  return (
        <div className='alert alert-success'> Currency  {
      <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
        <option value="£">£ Pound</option>
        <option value="$">$ Dollar</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>	
      }	
    </div>
    );
};

export default Location;