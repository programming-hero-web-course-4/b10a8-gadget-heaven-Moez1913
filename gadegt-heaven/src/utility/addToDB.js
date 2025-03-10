const getStoredCart=()=>{
   const cart=localStorage.getItem('cart');
   if(cart){
       return JSON.parse(cart);
   }
   else{
    return []
   }
}

const addTostoredCart=(id)=>{
    const cartList=getStoredCart();
    if(cartList.includes(id)){
        alert(id,'already exists');
        return;
    } 
    else{
        cartList.push(id);
        const cart=JSON.stringify(cartList);
        localStorage.setItem('cart',cart);
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
 
 const addTostoredList=(id)=>{
        const whisList=getStoredWhisList();
        if(whisList.includes(id)){
            alert(id,'already exists');
            return;
        } 
        else{
            whisList.push(id);
            const whis=JSON.stringify(whisList);
            localStorage.setItem('whisList',whis);
     
 }

}

 export {addTostoredList,addTostoredCart,getStoredCart, getStoredWhisList}

