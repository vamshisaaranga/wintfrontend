import {Component} from "react"
import {Link} from "react-router-dom"
import { MdClose } from "react-icons/md";
import Popup from 'reactjs-popup'
import Header from "../Header"
import "../home/index.css"
import "./index.css"


class AddPage extends Component {
    render(){
        return(
            <>
            <Header/>
            <div className="homeContainer">
            <h1 className="homeHeading">Edit Load Template</h1>
            <p className="homepara">Home {">"} Maintan Load Request Template {">"} Edit Load Template</p>
            <div className="addPage-input-container">
                <div className="addPage-input">
                <h1 className="addPage-name">Template Name</h1>
                <input type="text" placeholder="Enter Name" className="addPage-input-element"/>
                </div>
                <div>
                <h1 className="addPage-name" >Description</h1>
                <textarea placeholder="Enter Template Description" className="addPage-textarea-input"/>
                </div>
            </div>
            <h1 className="addpage-heading">Model Quantity for Load Template Items</h1>
            
            <input type="search" placeholder="Search by SKU Code/Name" className="addpage-sku-input-element"/>

            <Popup
             modal
             trigger={<button type="button" className="home-search-button">Add product</button>}
            >
                {
                    close => (
                        <div className="popup-container">
                        <div className="popup-close-alignment">
                        <h1 className="popup-heading">Add Products</h1>
                        <MdClose className="popup-close-button" onClick={() => close()}/>
                        </div>
                        <hr/>
                        <div>
                            <input type="search" className="popup-input"/>
                            <button type="button" className="popup-search-button">Search</button>
                        </div>
                    </div>
                    )
                }
                
            </Popup>
            
            <div className="addPage-details-container">
                <div className="addpage-details-alignment">
                <input type = "checkbox" className="selectall-checkbox"/>
                <p className="week">SKU Code</p>
                <p className="week">SKU Name</p>
                <p className="week">UOM</p>
                </div>
                <div className="addpage-load-details-container">
                    <p className="addpage-load">Load</p>
                    <div className="addpage-weekdays-container">
                        <p className="week">MON(Qty)</p>
                        <p className="week">Tue(Qty)</p>
                        <p className="week">Wed(Qty)</p>
                        <p className="week">Thu(Qty)</p>
                        <p className="week">Fri(Qty)</p>
                        <p className="week">Sat(Qty)</p>
                        <p className="week">Sun(Qty)</p>
                    </div>
                </div>
            </div>
            <div className="addpage-buttons-container">
                <Link to="/">
                <button className="back-button">Back</button>
                </Link>
                
                <button className="back-button">Delete Selected From List</button>
                <button className="save-button">Save</button>
            </div>
            </div>  
            </>
        )
    }
}

export default AddPage