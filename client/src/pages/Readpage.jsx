import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loader from "../loader/Loader.jsx";
import {Link} from "react-router-dom";



const Readpage = () => {
    let [data,setdata]=useState([])

    useEffect(() => {
        (async ()=>{
          await ReadData()
        })()
    }, []);
    const ReadData=async ()=>{
        let res=await axios.get("/api/read")
        setdata(res.data['row'])
    }

    let DeleteData= async (id)=>{
        await axios.post(`/api/delete/${id}`)
        await ReadData()
    }

    return (
        <div className="container mt-5">
            <Link className="btn btn-sm btn-success" to="/create">Create</Link>
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive">

                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <td>Title</td>
                                <td>Price</td>
                                <td>Discount</td>
                                <td>Discount_Price</td>
                                <td>Action</td>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                data.length===0 ? (<Loader/>):(
                                    data.map((item,i)=>{
                                        return (
                                            <tr key={i}>
                                                <td>{item['title']}</td>
                                                <td>{item['price']}</td>
                                                <td>{item['discount']}</td>
                                                <td>{item['discount_price']}</td>
                                                <td>
                                                    <button onClick={()=>DeleteData(item['_id'])} className="btn btn-danger btn-sm">Delete</button>
                                                    <Link className="btn btn-info btn-sm " to={`/update/${item['_id']}`}>Eidt</Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                )

                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Readpage;