import ArrowLeftIcon from "../Icons/leftArrow";
import CartItems from "./cartItems";

const Cart = (props) => {
    return (
        <div className="px-4 py-6 mx-auto max-w-6xl">
            <div className="flex justify-between items-center mb-6 ">
                <a className="flex items-center gap-2 text-sm font-medium underline ml-auto" href="#">
                    <ArrowLeftIcon className="w-4 h-4 rotate-180 mr-1.5" />
                    Continue shopping
                </a>
            </div>
            <div className="grid gap-6">
                <div className="overflow-auto w-full border rounded-lg border-gray-200">
                    <CartItems />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    <form className="grid gap-2">
                        <div className="flex items-center gap-2 text-sm">
                            <input id="coupon" placeholder="Enter coupon code" className="py-2 border-gray-300 w-full" />
                            <button type="submit" className="px-4 py-2 rounded-lg bg-blue-500 text-white">Apply</button>
                        </div>
                    </form>
                    <div className="grid gap-2 text-sm">
                        <div className="flex justify-between items-center">
                            <span>Subtotal</span>
                            <span>$397.00</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Shipping</span>
                            <span>Calculated at next step</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Coupon code</span>
                            <span className="underline cursor-pointer">Enter code</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row text-base">
                    <a className="flex-1" href="#">
                        <button className="w-full px-4 py-3 rounded-lg bg-blue-500 text-white" size="lg" >
                            Proceed to checkout
                        </button>
                    </a>
                    <a className="flex-1" href="#">
                        <button className="w-full px-4 py-3 rounded-lg  text-black border-gray-300 whitespace-nowrap" size="lg" variant="outline">
                            Continue shopping
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Cart;
