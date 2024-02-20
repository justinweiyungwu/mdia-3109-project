import {MapContainer, TileLayer, Popup, CircleMarker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import React from 'react'

const redOptions = { color: "red"}
const orangeOptions = { color: "orange"
}
const fillBlueOptions = { color: "blue"}

const center: [number, number] =  [49.05255, -123.04150];

export default function Map () {
    return (
        <main>
        <div>
            
        </div>

        
        <MapContainer
        data-testid="map-container"
        style={{height: "50vh", zIndex: 1}}
        center={[43.285790, -103.111954]} zoom={3} scrollWheelZoom={true}
        >
<TileLayer
attribution='&copy; <a href="https://github.com/justinweiyungwu">By Justin Wu</a> '
url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
/>


<CircleMarker center={[59.285683, -110.112335]} pathOptions={redOptions} radius={12}>
<Popup>
Canada
<ul>
    <li>
        Most Popular Genre: Rock
    </li>
    <li>
        Most Popular Artist: Drake
    </li>

</ul>
</Popup>
</CircleMarker>

<CircleMarker center={[39.285683, -100.112335]} pathOptions={redOptions} radius={12}>
<Popup>
United States of America
<ul>
    <li>
        Most Popular Genre: Rock & Indie
    </li>
    <li>
        Most Popular Artist: Taylor Swift
    </li>

</ul>
</Popup>
</CircleMarker>


<CircleMarker center={[-10.285683, -50.112335]} pathOptions={redOptions} radius={12}>
<Popup>
Brazil
<ul>
    <li>
        Most Popular Genre: Pop
    </li>
    <li>
        Most Popular Artist: Annita
    </li>

</ul>
</Popup>
</CircleMarker>


<CircleMarker center={[-37.285683, -66.112335]} pathOptions={redOptions} radius={12}>
<Popup>
Argentina
<ul>
    <li>
        Most Popular Genre: Tango
    </li>
    <li>
        Most Popular Artist: María Becerra
    </li>

</ul>
</Popup>
</CircleMarker>
        </MapContainer>
        </main>
    )
}