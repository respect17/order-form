import { useNavigate } from 'react-router-dom';

function Confirmation() {
    const navigate = useNavigate();

    const handleConfirm = () => {
        // Add any additional logic here if needed
        navigate('/');
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Order Confirmation</h2>
            <p className="text-lg text-gray-700 mb-6">
                Thank you for your order. Here are the details:
            </p>
            <button
                onClick={handleConfirm}
                className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300 border-2 border-orange-700"
            >
                Confirm and Submit
            </button>
        </div>
    );
}

export default Confirmation;
