


function Increment(){
    let count =-1;
    const counter= ()=>{        
        count++;
        console.log(count)

    };

    return <button onClick={counter}>Increment By 1</button>;
}

export default Increment;