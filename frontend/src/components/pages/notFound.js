import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center w-full min-h-[400px]">
            <div className="grid w-full gap-4 p-4 text-center md:gap-10">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="inline-flex items-center rounded-full bg-gray-100 p-3 shadow-lg dark:bg-gray-800">
                        <img
                            alt="Robot plugging in"
                            height="100"
                            // src="https://example.com/connecting-electricity.gif"
                            style={{
                                aspectRatio: "100/100",
                                objectFit: "cover",
                            }}
                            width="100"
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">404 - Page Not Found</h1>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link
                        className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-black text-white px-8 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                        to="/"
                    >
                        Go back to Homepage
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;