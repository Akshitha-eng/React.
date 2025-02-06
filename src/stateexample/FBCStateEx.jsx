import React from 'react'

 const FBCStateEx = () => {
    const [value ,setValue] =React.userState(0);
    console.log(value);
    const changeValue=()=>{
        setValue(1000);
    }
   return (
      <div>FBCStateEx
        <h1>{value}</h1>
        <button onClick={changevalue}>changevalue</button>
      </div>
    )
  }
}
