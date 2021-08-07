import React from 'react'

export default function Home() {
    return (
        <div className= 'main'>
           <nav className='head'> 
                <button>HOME</button>
                <button>ABOUT</button>
                <button>CONTACT</button>
                <button>LOGIN</button>
                </nav>

                <div className= 'bdy'>
                    <h1>FRONT END
                    DEVELOPMENT</h1>
                    <button className= 'mybtn'><span>MORE</span></button>
                    <h3> THIS IS THE HOME PAGE</h3>
                </div>
        </div>
    )
}

