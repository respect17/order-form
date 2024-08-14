import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function CoverageMap() {
    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Coverage Map</h2>
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                className="h-96 w-full rounded-lg overflow-hidden shadow-md"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        Coverage available here.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default CoverageMap;
