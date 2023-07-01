import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useMap } from "react-leaflet";
import { Icon } from "leaflet";

function SetView({ coords }) {
    const map = useMap()
    map.setView(coords, map.getZoom())

    return null
}

const customIcon = new Icon({
    iconUrl: require("../icons/icon.png"),
    iconSize: [38, 38]
})

export default function MapComponent({ location }) {
    const coords = [location.latitude, location.longitude]

    return (
        <MapContainer center={coords} zoom={5}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <SetView coords={coords}></SetView>
            <Marker position={coords} icon={customIcon}></Marker>
        </MapContainer>
    );
}