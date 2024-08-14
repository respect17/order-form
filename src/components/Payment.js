import { useNavigate } from 'react-router-dom';

function Payment() {
    const navigate = useNavigate();

    const handlePay = () => {
        navigate('/confirmation');
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Payment Details</h2>
            <form>
                <div className="mb-6">
                    <label className="block text-sm font-bold mb-2 text-gray-800">Card Number</label>
                    <input
                        type="text"
                        className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-bold mb-2 text-gray-800">Expiry Date</label>
                    <input
                        type="text"
                        className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-bold mb-2 text-gray-800">CVC</label>
                    <input
                        type="text"
                        className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100"
                    />
                </div>
                <button
                    type="button"
                    onClick={handlePay}
                    className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300 border-2 border-red-700"
                >
                    Pay Now
                </button>
            </form>
        </div>
    );
}

export default Payment;
