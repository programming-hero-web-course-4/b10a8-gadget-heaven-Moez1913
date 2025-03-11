import { ToastContainer, toast } from 'react-toastify';
const getStoredCart=()=>{
   const cart=localStorage.getItem('cart');
   if(cart){
       return JSON.parse(cart);
   }
   else{
    return []
   }
}

const addTostoredCart=(id,product_title)=>{
    const cartList=getStoredCart();
    if(cartList.includes(id)){
        toast.error(`${product_title} is Already Added`, {
            position: 'top-center',
          });
        return;
    } 
    else{
        cartList.push(id);
        const cart=JSON.stringify(cartList);
        localStorage.setItem('cart',cart);
        toast.success(`You Add ${product_title} to cart`, {
            position: 'top-center',});
    }  
}


const getStoredWhisList=()=>{
    const whisList=localStorage.getItem('whisList');
    if(whisList){
        return JSON.parse(whisList);
    }
    else{
     return []
    }
   
 }
 
 const addTostoredList=(id,product_title)=>{
        const whisList=getStoredWhisList();
        if(whisList.includes(id)){
            toast.error(`${product_title} is Already Added`, {
                position: 'top-center',
              });

            return;
        } 
        else{
            whisList.push(id);
            const whis=JSON.stringify(whisList);
            localStorage.setItem('whisList',whis);
            toast.success(`You Add ${product_title} to Wishlist`, {
                position: 'top-center',});
     
 }

}

 export {addTostoredList,addTostoredCart,getStoredCart, getStoredWhisList}

