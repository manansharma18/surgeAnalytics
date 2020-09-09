import React ,{Component} from 'react';
import classes from './AddOrder.module.css';
class AddOrder extends Component{

    state ={
        orders:[],
        price:0,
        quantity:0,
        name:'',
        totalPrice:0,
        creditLimit:0

    }
    inputChangeHandler=(event)=>{
        
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state.price)
        console.log(this.state.quantity)
        console.log(this.state.name)
        const order = {
            price:this.state.price,
            quantity:this.state.quantity,
            name:this.state.name,
            creditLimit:this.state.creditLimit
        }
        const existingOrders = {
            ...this.state.orders
        }
        const totalPrice = this.state.totalPrice + (
            this.state.price * this.state.quantity);
        this.setState({orders:order,
            totalPrice:totalPrice})
            console.log(this.state.orders)
    }

    checkLimitHandler=()=>{

    }
    render(){
        
        let totalPrice = null
        if(this.state.totalPrice!==null){
        totalPrice = ( <p>Total Price is <strong>{this.state.order}
{this.state.totalPrice}</strong></p>
        )}



        return(<div className={classes.AddOrder}>

            <form onSubmit={this.submitHandler}
            >
            <input type="text"
            name="price"
            placeholder="price"
            value = {this.state.price}
            onChange={(event)=>this.inputChangeHandler(event)}/>
            
            <input type="text"
            name="quantity"
            placeholder="quantity"
            value = {this.state.quantity}
            onChange={(event)=>this.inputChangeHandler(event)}/>
            
            <input type="text"
            name="name"
            placeholder="name"
            value = {this.state.name}
            onChange={(event)=>this.inputChangeHandler(event)}/>

            <button>Submit Order</button>

            </form>
            
            <input type="text"
            name="creditLimit"
            placeholder="creditLimit"
            value = {this.state.creditLimit}
            onChange={(event)=>this.inputChangeHandler(event)}/>

            {totalPrice}
    
            {this.state.totalPrice>this.state.creditLimit?<p><strong>
                Credit 
                Limit Reached
                </strong></p>:null}            

        </div>)



    }

}



export default AddOrder;