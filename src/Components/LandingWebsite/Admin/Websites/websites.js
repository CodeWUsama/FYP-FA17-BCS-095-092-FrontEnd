import axios from 'axios';
import React, { useEffect, useState } from 'react';
import classes from "./websites.module.css";
import Footer from "../../Footer/Footer"

const Websites = () => {

    const [websitesData, setwebsitesData] = useState();

    useEffect(() => {
        async function fetchData() {
            await fetch("http://localhost:8080/admin/websites", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
            })
                .then(result => {
                    return result.json(); 
                }).then(resultData => {
                    setwebsitesData(resultData.websites);
                })
                .catch(err => {
                    console.log(err);
                })
        }

        fetchData();

    }, []);

    let handleWebsiteDisable = (websiteId) => {
        axios.post("http://localhost:8080/admin/disableWebsite", {
            websiteId: websiteId
        },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
            }
        ).then(result => {
            if (result.status === 200) {
                window.location.reload();
            }
        })
    }

    let handleWebsiteEnable = (websiteId) => {
        axios.post("http://localhost:8080/admin/enableWebsite", {
            websiteId: websiteId
        },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
            }
        ).then(result => {
            if (result.status === 200) {
                window.location.reload();
            }
        })
    }

    let renderData = null;

    if (websitesData) {
        renderData = websitesData.map(data => {
            console.log(data);
            return (
                <tr key={data._id}>
                    <td>{data.subdomain}.websitecreator.com</td>
                    <td>{data.category}</td>
                    <td>
                        <div className={classes.actionsCont}>
                            {data.status ?
                                <button onClick={() => handleWebsiteDisable(data._id)} style={{ marginBottom: 10 }} type="button" className="btn btn-success">Disable</button>
                                :
                                <button onClick={() => handleWebsiteEnable(data._id)} style={{ marginBottom: 10 }} type="button" className="btn btn-primary">Enable</button>
                            }
                        </div>
                    </td>
                </tr>
            )
        })

    }


    return (
        <>
            <div className={classes.rootCont}>

                {/* table */}
                <div style={{ marginTop: "100px" }} className="container">
                    <h2>Active Websites</h2>
                    <p>In this table, active websites are being displayed:</p>
                    <table className="table" style={{ tableLayout: 'auto', marginTop: 30, overflowX: "scroll" }}>
                        <thead>
                            <tr>
                                <th>URL</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {websitesData ? renderData : null}
                        </tbody>
                    </table>
                </div>


            </div>
            <Footer />
        </>
    );
}

export default Websites;