function Lists(){
    const fruits = ['Banana', 'Apple', 'Mango', 'Passion']
    return(
        <>
        <ul>
            {fruits.map((fruit)=><li>{fruit}</li>)}
        </ul>
        </>
    )
}
export default Lists;