// import React, { Component } from 'react'

// export default class Random extends Component {
//     constructor() {
//         super()
//         this.state = {
//             isClicked: false
//         }
//     }
//     handler = () => {
//         console.log(`hello`);
//         this.setState ({
//             isClicked: true
//         })
//     }
//     componentDidMount () {
//         console.log(`hello i am from component did mount`);
//            this.setState({isClicked: false})
//     }
//     componentDidUpdate () {
//         console.log(`hello i am from component did update`);
     
//     }
//     render() {
//         console.log(`I am rendered`);
//         console.log(this.state.isClicked);
//         return (
//             <div>
//                 {
//                     this.state.isClicked 
//                     ?
//                     <button  onClick={(e) => this.handler(e) }>I am Clicked</button>
//                     :
//                     <button  onClick={(e) => this.handler(e) }>Click me</button>
//                 }
//             </div>
//         )
//     }
// }
import React, {useState, useEffect} from 'react'

const Random = () => {
    const [isClicked, setIsClicked] = useState(false) 
    const handler = (e) => {
        e.preventDefault()
        setIsClicked(true)
    }
    useEffect(() => {
        console.log(`hello`);
        console.log(`I am clicked`);
        setIsClicked(false)
    }, [isClicked])
    console.log({isClicked});
    return (
        <div>
            {
                <button  onClick={(e) => handler(e) }>{isClicked ? "I am clicked" : "Click me"}</button >
            }
        </div>
    )
}

export default Random

