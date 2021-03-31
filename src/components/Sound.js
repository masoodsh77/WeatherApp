import React, { Component } from 'react';
import axios from 'axios'

class Sound extends Component {
    state={
        data:""
    }
    componentDidMount(){
        axios.post("https://api.codebazan.ir/nod32/")
        .then(res=>{
            console.log("resSound",res.data.vr9-10-11-12-13)
            this.setState({
                data:res.data.vr9-10-11-12-13
            })
        })
    }
    render() {
        return (
            <div>   
            </div>
        );
    }
}

export default Sound;