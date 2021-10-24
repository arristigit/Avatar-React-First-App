import React, { Component } from 'react';
import './Avatar.css'
import 'tachyons'
import Avatarlist from './Avatarlist';

class Avatar extends Component{
    constructor(){
        super();
        this.state = {
            name: "Welcome to Avatar World"
        }
    }
    namechange(){
        this.setState({
            name: "Subscribe to Thapatechnical Channel"
        })
    }

    render() {    
        const avatarlistarray = [
            {
                id: 0,
                name: "Vinod",
                work: "BC Developer"
            },
            {
                id: 1,
                name: "Shashi",
                work: "App Developer"
            },
            {
                id: 2,
                name: "Shivam Kumar",
                work: "Java Developer"
            },
            {
                id: 3,
                name: "Ravina",
                work: "AI Developer"
            }
        ]
    
        const arrayavatarcard = avatarlistarray.map((avatarcard, i) => {
            return <Avatarlist key={i} id={avatarlistarray[i].id}
                name={avatarlistarray[i].name}
                work={avatarlistarray[i].work} />
        })
        return (
            <div className="mainpage">
                <h1>{this.state.name}</h1>
                {arrayavatarcard}               
                <button onClick= { () => this.namechange()}>Subscribe</button>
            </div>)
    }
}

// ========== Blow is same 'Avatar' component but it is funtional component ==========
// const Avatar = (props) => {

//     const avatarlistarray = [
//         {
//             id: 0,
//             name: "Vinod",
//             work: "BC Developer"
//         },
//         {
//             id: 1,
//             name: "Shashi",
//             work: "App Developer"
//         },
//         {
//             id: 2,
//             name: "Shivam Kumar",
//             work: "Java Developer"
//         },
//         {
//             id: 3,
//             name: "Ravina",
//             work: "AI Developer"
//         }
//     ]

//     const arrayavatarcard = avatarlistarray.map((avatarcard, i) => {
//         return <Avatarlist key={i} id={avatarlistarray[i].id}
//             name={avatarlistarray[i].name}
//             work={avatarlistarray[i].work} />
//     })
//     return (
//         <div className="mainpage">
//             <h1>Welcome to Avatar World</h1>
//             {arrayavatarcard}
            {/* <Avatarlist id={avatarlistarray[0].id} name={avatarlistarray[0].name} work={avatarlistarray[0].work} />
            <Avatarlist id={avatarlistarray[1].id} name={avatarlistarray[1].name} work={avatarlistarray[1].work} />
            <Avatarlist id={avatarlistarray[2].id} name={avatarlistarray[2].name} work={avatarlistarray[2].work} />
            <Avatarlist id={avatarlistarray[3].id} name={avatarlistarray[3].name} work={avatarlistarray[3].work} /> */}

            {/* <div className="avatar_style ma4 bg-light-purple dib pa4">
                dib - Display In-line Block
                <img src="https://joeschmoe.io/api/v1/male" alt="avtar img1" />
                <h1>{props.name}</h1>
                <p>{props.work}</p>
            </div> */}
//             <button>Subscribe</button>
//         </div>)

// }

export default Avatar;