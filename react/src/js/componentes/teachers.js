import React from 'react';
import Tearcher from './teacher';

class Tearchers extends React.Component {
    render(){
        return(
            <ul className="">
            { this.props.data.profes.map((profeData)=>{
               return <Tearcher {...profeData} />
            })    
            }
            </ul>
        )
    }
}

export default Tearchers;