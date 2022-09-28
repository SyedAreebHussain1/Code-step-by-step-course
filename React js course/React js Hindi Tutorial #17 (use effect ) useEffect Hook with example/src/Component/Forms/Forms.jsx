import React, { useEffect , useState} from "react";

const Forms = () => {
    const [count,setCount] = useState(1);
    
    useEffect(()=>{
        // componentDidUpdate ki tarha work kary ga.. ap dekh sakty ha har click k upr update kary ga 
        // console.log('componentDidUpdate=>',count)
    })

    useEffect(()=>{
        // componentDidMount ki tarha work kary ga.. 
                console.log('componentDidMount=>',count)
                
                //agr ap chaty ho k first time pe he call ho tou ap ,[]) blank chor dou 
    },[count == 5]) //<= [count == 5] is liye kiya ha count 5 k barabar hoajye tou update kardyna 5 k bad console may value bary gee

    return (
    <div>
      <h1>Use Effect Hooks iin React js</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Update state</button>
    </div>
  );
};

export default Forms;