import React, { usestate } from 'react'


export default class myproduct extends Component {
    const [count ,setCount] = useState(0)
    const handleclick
    state = {
        totalNumber:0,
    };
    render() {
        const increament =()=>{
            console.log('click')
        }
        return (
           
            <div>
                <p>{this.state.totalNumber}</p>
                <button onClick ={increament}>click</button>
            </div>
        )
    };
}
