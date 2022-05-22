import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../pages/CartContext'

export const Navigation = () => {

    const cartStyle={
        background:"orange",
        display:"flex",
        padding:"6px 12px",
        borderRadius:"20px"
    }
    
    const myStyle={
        color:"black",
        position:"relative",
        
        fontFamily: "Lobster",
        left:"20px",
        fontSize:"45px"
      }
    const {cart} =useContext(CartContext);


    return (
        <>  
          <div className="bg-light dark:bg-slate-900 w-screen text-sky-400 shadow-xl ">

            <nav className="container mx-auto flex items-center justify-between py-4">
                
                <Link to="/"> 
                       <h1 style={myStyle}>Ambroisal </h1>
                </Link>
                   
                <ul className="flex items-center">
                    <li ><Link to="/">Home</Link></li>
                    <li className="ml-6"><Link to="/products">Products</Link></li>
                    
                    <li className="ml-6">
                        
                        <Link to="/cart">
                            <div style={cartStyle}>
                                {/* <span className="text-white">{cart.totalItems ? cart.totalItems: 0}</span> */}
                                <img className="ml-2" style={{height:35}} src="/images/Cart-Transparent-PNG.png" alt="" />
                            </div>
                        </Link>
                    </li>


                </ul>

                
            
            </nav>
          </div>
        </>
    )
}
