export const addItem = (newItem, existingItems) =>{
    const exists = existingItems.find(item =>{
        return item.id === newItem.id
    })

    if(exists){
        return existingItems.map(item =>
            item.id===newItem.id ?
            {...item, quantity: item.quantity+1}
            :
            item
        )
    }
    return [...existingItems, {...newItem, quantity:1}]
}
export const decreaseItemQuantity = (newItem, existingItems) =>{
    if(newItem.quantity > 1)
    { return existingItems.map(item =>
            item.id === newItem.id?
                {...item, quantity: item.quantity-1}
            :
            item
        )
    }
    
        else{
            return existingItems.filter(item =>
              item.id !== newItem.id
        )
    }

    }
   

export const removeItem = (currentItem, existingItems) => {
    return existingItems.filter(item =>{
        return item.id !== currentItem.id
    })
    
    
}