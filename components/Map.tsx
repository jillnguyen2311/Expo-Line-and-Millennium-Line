import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import linesData from '../data/linesData.json';

const expoIcon = L.icon({ iconUrl: "/images/expo-icon.png", iconSize: [30, 30] });
const millenniumIcon = L.icon({ iconUrl: "/images/millennium-icon.png", iconSize: [30, 30] });
const bothIcon = L.icon({ iconUrl: "/images/both-icon.png", iconSize: [30, 60] });

const expoStations = linesData.expo;
const millenniumStations = linesData.millennium;

const expo1Lines = expoStations.expo1Line;
const expo2aLines = expoStations.expo2aLine;
const expo2bLines = expoStations.expo2bLine;

const millenniumLines = millenniumStations;

const blueLine = { color: 'blue', weight: 18 };
const yellowLine = { color: 'yellow', weight: 12 };
const redCircle = { color: 'red', weight: 5 };

const center: [number, number] = [49.2513, -123.0035];

const Map = () => {
    const sharedStations = ["Commercial-Broadway", "Lougheed Town Centre", "Production Way-University"];

    return (
        <MapContainer
            style={{ height: "100vh" }}
            center={[49.2513, -123.0035]} zoom={14} scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/jillnguyen2311/Expo-Line-and-Millennium-Line.git">By Jill Nguyen</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {[
                ...expo1Lines,
                ...expo2aLines,
                ...expo2bLines,
            ].map(station => (
                <Marker
                    key={station.name}
                    position={[station.coordinates[0], station.coordinates[1]]}
                    icon={sharedStations.includes(station.name) ? bothIcon : expoIcon} >
                    <Popup>{station.name}</Popup>
                </Marker>
            ))}

            {millenniumLines.map(station => (
                <Marker
                    key={station.name}
                    position={[station.coordinates[0], station.coordinates[1]]}
                    icon={sharedStations.includes(station.name) ? bothIcon : millenniumIcon} >
                    <Popup>{station.name}</Popup>
                </Marker>
            ))}

            <Polyline pathOptions={blueLine} positions={expo1Lines.map(station => station.coordinates)} />
            <Polyline pathOptions={blueLine} positions={expo2aLines.map(station => station.coordinates)} />
            <Polyline pathOptions={blueLine} positions={expo2bLines.map(station => station.coordinates)} />
            <Polyline pathOptions={yellowLine} positions={millenniumLines.map(station => station.coordinates)} />

            <CircleMarker center={center} pathOptions={redCircle} radius={20}>
                <Popup>You are here at BCIT</Popup>
            </CircleMarker>
        </MapContainer>
    );
};

export default Map;
