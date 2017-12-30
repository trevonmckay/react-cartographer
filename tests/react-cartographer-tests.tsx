import * as React from "react";
import Map from "../src/components/Map";

class Test extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Bing Map Example</h2>
                    <Map
                        providerKey="AkcOTa579AYlvB3OsS4N5OpCPsxG2rUiVQibQEwneylAPIuyhAim3paIGLZp7ukc"
                        provider='bing'
                        mapId='map'
                        addressLine1='One Microsoft Way'
                        city='Redmond'
                        state='WA'
                        country='United States'
                        zoom={15}
                        height={270}
                        width={580}
                        useBackgroundImageStyle={true}
                    />
                </div>
                <div>
                    <h2>Google Map Example</h2>
                    <Map
                        mapId='googleLocation'
                        addressLine1='1600 Amphitheatre Parkway'
                        city='Mountain View'
                        state='CA'
                        country='United States'
                        zoom={15}
                        height={270}
                        width={580}
                        useBackgroundImageStyle={true}
                    />
                </div>
                <div>
                    <h2>Yahoo Map Example</h2>
                    <Map
                        provider='yahoo'
                        mapId='yahooLocation'
                        addressLine1='701 First Avenue'
                        city='Sunnyvale'
                        state='CA'
                        country='United States'
                        zoom={15}
                        height={270}
                        width={580}
                        useBackgroundImageStyle={true}
                    />
                </div>
            
            </div>
        );
    }
}