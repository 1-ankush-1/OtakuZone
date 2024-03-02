import React from 'react';

const CartItem = (props) => {
    const totalPrice = Number(props.item.price).toFixed(2) * Number(props.item.quantity);

    const handleChangeQunatity = (e) => {
        props.onQuantityChange({ ...props.item, "quantity": e.target.value })
    }

    return (
        <div className="sm:flex justify-between p-4 gap-4 block">
            <div className="flex flex-col items-center gap-2">
                <img
                    alt={props.item.title}
                    className="aspect-square object-contain overflow-hidden rounded-lg border border-gray-200 h-48 w-full w-max-64"
                    src={props.item.imageUrl}
                />
                <div className="flex  justify-center items-center gap-2 text-base">
                    <button className="px-4 py-2 rounded-lg border border-gray-300" size="sm" variant="outline" onClick={() => props.onDelete(props.item.id)}>
                        Remove
                    </button>
                    <button className="px-4 py-2 rounded-lg border border-gray-300 whitespace-nowrap" size="sm" variant="outline">Save for later</button>
                </div>
            </div>

            <div className="sm:flex-col h-full w-full flex-row block">
                <div className="sm:flex flex-col h-full w-full block gap-2 sm:text-left text-center">
                    <h3 className="font-semibold leading-snug sm:leading-tight">{props.item.title}</h3>
                    <span className="text-sm font-semibold">{`Price : ₹${props.item.price}`}</span>
                </div>
                <div className="flex flex-col justify-center sm:items-start items-center gap-2">
                    <label className="m-1 text-lg" htmlFor="quantity-1">
                        Quantity
                    </label>
                    <div className="flex items-ceter gap-2">
                        <button onClick={() => props.onRemove(props.item.id)} className='btn bg-black text-white px-1'>-</button>
                        <input id="quantity-1" onChange={handleChangeQunatity} name='quantity' value={props.item.quantity} className='sm:w-10 w-32 input border border-gray-300 px-2' />
                        <button onClick={() => props.onAdd(props.item)} className='btn bg-black text-white px-1'>+</button>
                    </div>
                </div>

            </div>
            <div className="text-lg font-semibold whitespace-nowrap text-center">{`Price : ₹${totalPrice}`}</div>
        </div>
    );
}

export default CartItem;