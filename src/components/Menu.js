import React from 'react'
import recipes from '../recipes'
import Swal from 'sweetalert2'
export default function Menu() {

    const handleOrder = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Place an order',
            text: "Would you like to proceed with the order?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Success!',
                'Your order has been received.',
                'success'
              )
            }
          })
    }
  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h2>This week's specials</h2>
        <button>Order Menu</button>
      </div>
      <div className='cards'>
        {
            recipes.map(recipe=> <div key={recipe.id} className='menu-items'>
                <img src={recipe.image} alt=""/>
                <div className='menu-content'>
                    <div className='heading'>
                        <h5>{recipe.title}</h5>
                        <p>{recipe.price}</p>
                    </div>
                    <p>{recipe.description}</p>
                    <button onClick={()=>handleOrder(recipe.id)} className='orderBtn'>Order Now</button>
                </div>
            </div>)
        }
      </div>
    </div>
  )
}
