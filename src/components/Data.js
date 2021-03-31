import React, { Component } from 'react';
import axios from 'axios';
import { FiCloud , FiSun } from "react-icons/fi";
import { BiSearchAlt} from "react-icons/bi";
import { FaTemperatureHigh } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";
import './style.css'

class Data extends Component {
    state={
        country:'',
        city:'',
        main:'',
        des:'',
        main2:'',
        des2:'',
        icon:'',
        icon2:'',
        temp:'',
        temp2:'',
        feel:'',
        feel2:'',
        hc:'',
        humidity:'',
        maxTemp:'',
        minTemp:'',
        dayOneTemp:[],
        dayOneIcon:'',
        dayOneDes:'',
        dayTwoTemp:[],
        dayTwoIcon:'',
        dayTwoDes:'',
        dayThreeTemp:[],
        dayThreeIcon:'',
        dayThreeDes:''

    }
    componentDidMount(){
        axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=tehran&cnt=4&units=metric&lang=fa&appid=8b9ab63d6c8e3b931cf24621654aa8e5')
        .then(res =>{
            console.log(res.data)
            this.setState({
                dayOneTemp:res.data.list[1].temp,
                country: res.data.city.country,
                city:res.data.city.name ,
                main:res.data.list[0].weather[0].main,
                des:res.data.list[0].weather[0].description,
                temp:res.data.list[0].temp.day,
                feel:res.data.list[0].feels_like.day,
                icon:res.data.list[0].weather[0].icon,
                humidity:res.data.list[0].humidity,
                maxTemp:res.data.list[0].temp.max,
                minTemp:res.data.list[0].temp.min,
                dayOneIcon:res.data.list[1].weather[0].icon,
                dayOneDes:res.data.list[1].weather[0].description,
                dayTwoTemp:res.data.list[2].temp,
                dayTwoIcon:res.data.list[2].weather[0].icon,
                dayTwoDes:res.data.list[2].weather[0].description,
                dayThreeTemp:res.data.list[3].temp,
                dayThreeIcon:res.data.list[3].weather[0].icon,
                dayThreeDes:res.data.list[3].weather[0].description,
            })
            if(res.data.list[0].weather[0].id === 804){
                this.setState({
                    icon:<FiCloud size="100px"/>,
                })
            }
            if (res.data.list[0].weather[0].id !== 800){
                this.setState({
                    icon2:<FiSun size="100px"/>,
                }) 
            }
        })
    }
    handelCity=(e)=>{
        this.setState({
            hc:e.target.value   
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.hc}&cnt=4&units=metric&lang=fa&appid=8b9ab63d6c8e3b931cf24621654aa8e5`)
        .then(res =>{
            console.log(res.data)
            this.setState({
                country: res.data.city.country,
                city:res.data.city.name ,
                main:res.data.list[0].weather[0].main,
                des:res.data.list[0].weather[0].description,
                temp:res.data.list[0].temp.day,
                feel:res.data.list[0].feels_like.day,
                icon:res.data.list[0].weather[0].icon,
                humidity:res.data.list[0].humidity,
                maxTemp:res.data.list[0].temp.max,
                minTemp:res.data.list[0].temp.min,
                dayOneTemp:res.data.list[1].temp,
                dayOneIcon:res.data.list[1].weather[0].icon,
                dayOneDes:res.data.list[1].weather[0].description,
                dayTwoTemp:res.data.list[2].temp,
                dayTwoIcon:res.data.list[2].weather[0].icon,
                dayTwoDes:res.data.list[2].weather[0].description,
                dayThreeTemp:res.data.list[3].temp,
                dayThreeIcon:res.data.list[3].weather[0].icon,
                dayThreeDes:res.data.list[3].weather[0].description,

            })
            if(res.data.list[0].weather[0].id === 804){
                this.setState({
                    icon:<FiCloud size="100px"/>,
                })
            }
            if (res.data.list[0].weather[0].id !== 800){
                this.setState({
                    icon2:<FiSun size="100px"/>,
                }) 
            }
        })
    }
    render() {
        return (
            <div className="row" style={{direction:"rtl"}}>
                <div className="col-12 ">
                    <form onSubmit={this.handleSubmit} className='input-group'>
                        <input type="text" placeholder="نام شهر مورد نظر خود را وارد کنید" className="form-control inputCity" onChange={this.handelCity} value={this.state.hc}/>
                        <button type="submit" className="btn btn-primary buttonCity"><BiSearchAlt/></button>
                    </form>
                </div>
                <div className="toDay">
                    <div className="reload">
                        <AiOutlineReload onClick={this.handleSubmit}/>
                    </div>
                    <div className="col-12">{this.state.country} - {this.state.city} </div>
                    <div className="toDayTemp">{this.state.temp} <FaTemperatureHigh className="toDayTempIcon"/></div>
                    <img alt="Icon" src={`http://openweathermap.org/img/w/${this.state.icon}.png`} width="60px"/>
                    <div className="toDayInfo">{this.state.des}</div>
                    <div className="row toDayDes">
                        <div className="col-6 toDayDesItems">دمای قابل حس هوا: {this.state.feel} درجه </div>
                        <div className="col-6 toDayDesItems">رطوبت هوا: {this.state.humidity}% </div>
                        <div className="col-6 toDayDesItems">بیشترین دما : {this.state.maxTemp} درجه </div>
                        <div className="col-6 toDayDesItems">کمترین دما : {this.state.minTemp} درجه </div>
                    </div>
                </div>
                <div className="days">
                    <div className="col-12">فردا</div>
                    <div className="toDayTemp">{this.state.dayOneTemp.day} <FaTemperatureHigh className="toDayTempIcon"/></div>
                    <img alt="Icon" src={`http://openweathermap.org/img/w/${this.state.dayOneIcon}.png`} width="60px"/>
                    <div className="toDayInfo">{this.state.dayOneDes}</div>
                </div>
                <div className="days">
                    <div className="col-12">پس فردا</div>
                    <div className="toDayTemp">{this.state.dayTwoTemp.day} <FaTemperatureHigh className="toDayTempIcon"/></div>
                    <img alt="Icon" src={`http://openweathermap.org/img/w/${this.state.dayTwoIcon}.png`} width="60px"/>
                    <div className="toDayInfo">{this.state.dayTwoDes}</div>
                </div>
                <div className="days">
                    <div className="col-12">پس اون فردا</div>
                    <div className="toDayTemp">{this.state.dayThreeTemp.day} <FaTemperatureHigh className="toDayTempIcon"/></div>
                    <img alt="Icon" src={`http://openweathermap.org/img/w/${this.state.dayThreeIcon}.png`} width="60px"/>
                    <div className="toDayInfo">{this.state.dayThreeDes}</div>
                </div>
            </div>
        );
    }
}

export default Data;