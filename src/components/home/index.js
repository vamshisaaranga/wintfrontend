import {Component} from "react"
import {Link} from "react-router-dom"
import Header from "../Header"
import "./index.css"

class Home extends Component {
    render(){
    return(
            <>
                <Header/>
                <div className="homeContainer">
                <div>
                <h1 className="homeHeading">Maintain Load Request Template</h1>
                <p className="homepara">Home {">"} Maintan Load Request Template</p>
                <hr/>
                </div>
                <div className="home-input-container">
                    <h1 className="home-name">Name</h1>
                    <div className="home-inputs-alignment">
                    <input type="search" placeholder="Enter Name" className="home-input"/>
                    <button type="button" className="home-search-button"> Search</button>
                    <button type="button" className="home-reset-button">Reset</button>
                    </div>
                </div>
                <Link to="/addpage">
                <button type="button" className="home-search-button"> AddNew</button>
                </Link>
                <div className="home-details-container">
                    <p className="home-product-details"> SN No</p>
                    <p className="home-product-details">Template Name</p>
                    <p className="home-product-details">Template Description</p>
                    <p className="home-product-details">No of Items</p>
                    <p className="home-product-details">Action</p>
                </div>
                </div>
            </>
        )
    }
}

export default Home