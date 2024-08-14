import { useNavigate } from 'react-router-dom';

function PlanSelection() {
    const navigate = useNavigate();

    const handleSelect = () => {
        navigate('/payment');
    };

    const plans = [
        { name: 'Basic', speed: '10Mbps', price: 'R199', router: 'Basic Router' },
        { name: 'Pro', speed: '50Mbps', price: 'R499', router: 'Advanced Router' },
        { name: 'Elite', speed: '100Mbps', price: 'R799', router: 'Premium Router' },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Select a Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {plans.map((plan, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">{plan.name}</h3>
                        <p>{plan.speed}</p>
                        <p>{plan.price}</p>
                        <p>Router: {plan.router}</p>
                        <button
                            onClick={handleSelect}
                            className="mt-4 w-full bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300 border-2 border-orange-700"
                        >
                            Select
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlanSelection;
