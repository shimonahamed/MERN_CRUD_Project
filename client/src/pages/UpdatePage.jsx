import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const UpdatePage = () => {
    let navigate=useNavigate()
    let {id}=useParams()
    let [Existing,setExisting]=useState(null)

    const ExistingInfo=async ()=>{
        let res=await axios.get(`/api/readbyId/${id}`)
        setExisting(res.data['row'][0])
    }

    useEffect(() => {
        (async ()=>{
            await ExistingInfo(id)
        })()
    }, []);


    const Updatedata=async (event)=>{
        event.preventDefault()
        let formdata=new FormData(event.target);
        let title=formdata.get("title")
        let price=formdata.get("price")
        let discount=formdata.get("discount")
        let discount_price=formdata.get("discount_price")

        await axios.post(`/api/update/${id}`,{
            title:title,
            price:parseFloat(price),
            discount:discount,
            discount_price:parseFloat(discount_price)
        })
        navigate("/")
    }

    return (
        <div className="container mt-5">
            <form onSubmit={Updatedata}>
                <div className="row">
                    <div className="col-md-3">
                        <label>Title</label>
                        <input defaultValue={Existing !== null?(Existing['title']):("")} className="form-control form-control-sm" name="title" placeholder="Type Your title"/>
                    </div>
                    <div className="col-md-3">
                        <label>Price</label>
                        <input defaultValue={Existing !== null?(Existing['price']):("")} className="form-control form-control-sm" name="price" placeholder="Type Your price"/>
                    </div>
                    <div className="col-md-3">
                        <label>Discount</label>
                        <select  className="form-select form-select-sm" name="discount">
                            <option value="">Select Option</option>
                            <option selected={Existing !== null && Existing['discount'] ==="Yes"} value="Yes">Yes</option>
                            <option selected={Existing !== null && Existing['discount'] ==="No"} value="No">No</option>

                        </select>
                    </div>
                    <div className="col-md-3">
                        <label>Discount Price</label>
                        <input defaultValue={Existing !== null?(Existing['discount_price']):("")} className="form-control form-control-sm" name="discount_price" placeholder="Type Your discount price"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-sm btn-success mt-2 ">Update</button>
            </form>
        </div>
    );
};

export default UpdatePage;