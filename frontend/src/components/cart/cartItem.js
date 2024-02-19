import React from 'react';

const CartItem = (props) => {
    const totalPrice = Number(props.item.price.toFixed(2)) * Number(props.item.quantity);

    const handleChangeQunatity = (e) => {
        props.onQuantityChange({ ...props.item, "quantity": e.target.value })
    }
    console.log(props.item)

    return (
        <div className="grid grid-cols-3 w-full p-4 items-center gap-4 sm:grid-cols-5 sm:p-6">
            <div className="flex items-start gap-4 sm:col-span-2">
                <img
                    alt={props.item.title}
                    className="aspect-square object-cover overflow-hidden rounded-lg border border-gray-200"
                    height={150}
                    src={props.item.imageUrl}
                    width={150}
                />
                <div className="flex flex-col gap-1.5">
                    <h2 className="font-semibold leading-snug sm:leading-tight">{props.item.title}</h2>
                    <div className="flex items-center gap-2 text-sm">
                        <button className="px-4 py-2  rounded-lg border border-gray-300 whitespace-nowrap" size="sm" variant="outline">Save for later</button>
                    </div>
                </div>
            </div>
            <div className="hidden sm:flex items-center">
                <span className="text-sm font-semibold">{`$${props.item.price}`}</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-2">
                <label className="sr-only" htmlFor="quantity-1">
                    Quantity
                </label>
                <select className="px-4 py-2  w-40 border rounded-sm" defaultValue={props.item.quantity} id="quantity-1" onChange={handleChangeQunatity} name='quantity'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="hidden sm:flex items-center">
                <span className="text-sm font-semibold">{`$${totalPrice}`}</span>
            </div>
            <div className="flex justify-end items-center gap-4 sm:gap-2 text-base">
                <button className="px-4 py-2 rounded-lg border border-gray-300" size="sm" variant="outline" onClick={() => props.onRemoveItem(props.item.id)}>
                    Remove
                </button>
            </div>
        </div>
    );
}

export default CartItem;