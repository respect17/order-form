import { useNavigate } from 'react-router-dom';

function Details() {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/plan-selection');
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Details</h2>
            <form>
                <div className="mb-6">
                    <label className="block text-sm font-bold mb-2 text-yellow-200">Full Name</label>
                    <input
                        type="text"
                        className="shadow appearance-none border border-yellow-300 rounded w-full py-2 px-3 text-yellow-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-yellow-100"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-bold mb-2 text-green-200">Email Address</label>
                    <input
                        type="email"
                        className="shadow appearance-none border border-green-300 rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-100"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-bold mb-2 text-blue-200">Phone Number</label>
                    <input
                        type="tel"
                        className="shadow appearance-none border border-blue-300 rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleNext}
                    className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300 border-2 border-orange-700"
                >
                    Next
                </button>
            </form>
        </div>
    );
}

export default Details;
