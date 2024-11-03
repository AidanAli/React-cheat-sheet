import { useState } from "react"

function MyComponent(){

    const [name, setName] = useState("Null");
    const[quantity, setQuantity] = useState("5")
    const[comment, setComment] = useState("")
    const[payment,setPayment] = useState("")
    const[shipping, setShipping] = useState("Delivery")

    function handleshippingChange(event){
        setShipping(event.target.value)
    }

    function handlepaymentChange(event){
        setPayment(event.target.value)
    }

    function handleSetComment(event){
        setComment(event.target.value)
    }

    const updateName = () => {
        setName("Aidan")
    }
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantity(event){
        setQuantity(event.target.value)
    }
 
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
            <input value={quantity} onChange={handleQuantity} type='number'/>
            <p>Quantity: {quantity}</p>
            <textarea value={comment} onChange={handleSetComment}placeholder="additional instruction"/>
            <br/>
            <select value={payment} onChange={handlepaymentChange}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment:{payment}</p>
            <label>
                <input type="radio" value="Pick Up" checked={shipping ==='Pick Up'} onChange={handleshippingChange}/>
               Pick Up 
            </label>
        <br />
            <label>
                <input type="radio" value="Delivery" checked={shipping ==='Delivery'} onChange={handleshippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
            
        </div>
    )
}
export default MyComponent