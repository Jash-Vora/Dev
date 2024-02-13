import React,{useState} from "react";

function MyComponent(){

    const [name,setName] = useState("");
    const [quantity,setQuantity] = useState(0);
    const [comment,setComment] = useState("");
    const [payment,setPayment]  = useState("");
    const [shipping,setShipping] = useState("Delivery");

    function handleName(event){
        setName(event.target.value);
    }

    function handleQuantity(event){
        setQuantity(event.target.value);
    }

    function handleComment(event){
        setComment(event.target.value);
    }

    function handlePayment(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name}  onChange={handleName}/>
            <p>Name : {name}</p>

            <input value={quantity}  onChange={handleQuantity} type="number"/>
            <p>Quantity : {quantity}</p>

            <textarea value={comment} onChange={handleComment} placeholder="Enter instructions here"></textarea>
            <p>Comment : {comment}</p>

            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">Master Card</option>
                <option value="GiftCard">Gift Card</option>
            </select>
            <p>Payment : {payment}</p>
            <label>
                <input type="radio" value="Pick up" 
                    checked={shipping === "Pick up"}
                    onChange={handleShippingChange} />
                Pick up
            </label><br />
            <label>
                <input type="radio" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping : {shipping}</p>
        </div>
    );
}

export default MyComponent;