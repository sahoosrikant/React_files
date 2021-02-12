import React, {Component} from 'react';

class Office extends Component {
    render() {
        const src = "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        const element = "Office Space";
        const photo = <img src={src} width="25%" height="25%" alt="Office Space"/>
        const itemName = {Name: "DBS", Rent: 50000, Address: "Chennai"};

        let colors = [];

        if(itemName.Rent <= 60000){
            colors.push("red");
        }
        else{
            colors.push("green");
        }

        return (
            <div style={{margin:'auto'}}>
                <h1>{element}, at Affordable Range</h1>
                {photo}
                <h1>Name: {itemName.Name}</h1>
                <h3 style={{color: colors}}>Rent: Rs. {itemName.Rent}</h3>
                <h3>Address: {itemName.Address}</h3>
            </div>
        );
    }
}

export default Office;