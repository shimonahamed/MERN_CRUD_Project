import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreatePage = () => {
    let navigate=useNavigate()
    const Createdata=async (event)=>{
        event.preventDefault()
        let formdata=new FormData(event.target);
        let title=formdata.get("title")
        let price=formdata.get("price")
        let discount=formdata.get("discount")
        let discount_price=formdata.get("discount_price")

        await axios.post("/api/create",{
            title:title,
            price:parseFloat(price),
            discount:discount,
            discount_price:parseFloat(discount_price)
        })
        navigate("/")
    }

    return (
        <div className="container mt-5">
            <form onSubmit={Createdata}>
                <div className="row">
                    <div className="col-md-3">
                        <label>Title</label>
                        <input className="form-control form-control-sm" name="title" placeholder="Type Your title"/>
                    </div>
                    <div className="col-md-3">
                        <label>Price</label>
                        <input className="form-control form-control-sm" name="price" placeholder="Type Your price"/>
                    </div>
                    <div className="col-md-3">
                        <label>Discount</label>
                        <select className="form-select form-select-sm" name="discount">
                            <option value="">Select Option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>

                        </select>
                    </div>
                    <div className="col-md-3">
                        <label>Discount Price</label>
                        <input className="form-control form-control-sm" name="discount_price" placeholder="Type Your discount price"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-sm btn-success mt-2 ">Submit</button>
            </form>
        </div>
    );
};

export default CreatePage;