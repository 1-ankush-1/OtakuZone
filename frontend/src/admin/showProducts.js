const ShowProducts = (props) => {
    return (
        <div className="container mx-auto overflow-auto">
            <table className="min-w-full overflow-auto">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Title
                        </th>
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Price
                        </th>
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Description
                        </th>
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Category
                        </th>
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Image
                        </th>
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Operations
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {props.potraits.map((product) => (
                        <tr key={product.id}>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                {product.title}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                {product.price}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                {product.description}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                {product.category}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-8 w-8 rounded-full"
                                />
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex gap-1">
                                <button
                                    className="bg-black hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
                                // onClick={() => handleUpdate(product.id)}
                                >
                                    Update
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                    onClick={() => props.onDeletePotrait(product.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowProducts;