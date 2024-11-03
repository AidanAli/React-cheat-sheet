function Button(){

    let count = 0;

    const handleClick = () => console.log("hello you clicked me ")
    const handleClickCount = (name) => {
        if(count < 3){
            count++;
        console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me`)
        }
            
    }


    return(<button onClick={() => handleClickCount("Bro")}>Click Me : 🟢</button>)
}
export default Button