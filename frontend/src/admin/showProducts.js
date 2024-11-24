import DeleteIcon from "../components/Icons/delete";
import EditIcon from "../components/Icons/edit";
import "../styles/table.css";

const ShowProducts = (props) => {
    return (
        <div className="container mx-auto overflow-auto">
            <table className="min-w-full overflow-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-3 bg-gray-200 text-left leading-4 font-medium text-gray-500 uppercase tracking-wider text-base">
                            Title
                        </th>
                        <th className="px-4 py-3 bg-gray-200 text-left leading-4 font-medium text-gray-500 uppercase tracking-wider text-base">
                            Price
                        </th>
                        <th className="px-4 py-3 bg-gray-200 text-left leading-4 font-medium text-gray-500 uppercase tracking-wider text-base">
                            Description
                        </th>
                        <th className="px-4 py-3 bg-gray-200 text-left leading-4 font-medium text-gray-500 uppercase tracking-wider text-base">
                            Category
                        </th>
                        <th className="px-4 py-3 bg-gray-200 text-left leading-4 font-medium text-gray-500 uppercase tracking-wider text-base">
                            Image
                        </th>
                        <th className="px-4 py-3 bg-gray-200 text-left leading-4 font-medium text-gray-500 uppercase tracking-wider text-base">
                            Operations
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {props.potraits.map((product) => (
                        console.log("product:", product),
                        <tr key={product.id}>
                            <td className="px-4 py-4">
                                {product.title}
                            </td>
                            <td className="px-4 py-4">
                                {product.price}
                            </td>
                            <td className="px-4 py-4">
                                {product.description}
                            </td>
                            <td className="px-4 py-4">
                                {product.category}
                            </td>
                            <td className="px-4 py-4">
                                { product.image && <div className="relative group">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="h-8 w-8 rounded-full"
                                    />
                                    <div className="absolute hidden group-hover:block -top-16 -left-8">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="h-32 w-32 rounded-full"
                                        />
                                    </div>
                                </div>
                            }   
                            </td>
                            <td className="px-4 py-4">
                                <div className="grid lg:grid-flow-col grid-flow-row">
                                    <button
                                        onClick={() => props.onUpdatePotrait(product.id)}
                                        title="Edit"
                                    >
                                    <EditIcon/>
                                    </button>
                                    <button
                                        onClick={() => props.onDeletePotrait(product.id)}
                                        title="delete"
                                    >
                                        <DeleteIcon/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowProducts;