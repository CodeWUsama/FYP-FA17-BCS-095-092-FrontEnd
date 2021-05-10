import axios from 'axios';
import React, { useEffect, useState } from 'react';
import classes from "./users.module.css";
import Footer from "./../../Footer/Footer"

const Users = () => {

    const [usersData, setusersData] = useState();

    useEffect(() => {
        async function fetchData() {
            await fetch("http://localhost:8080/admin/users", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
            })
                .then(result => {
                    return result.json();
                }).then(resultData => {
                    setusersData(resultData.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }

        fetchData();

    }, []);

    let handleUserDisable = (username) => {
        axios.post("http://localhost:8080/admin/disableUser", {
            username: username
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

    let handleUserEnable = (username) => {
        axios.post("http://localhost:8080/admin/enableUser", {
            username: username
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

    if (usersData) {
        renderData = usersData.map(data => {
            console.log(data);
            return (
                <tr key={data._id}>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.contact}</td>
                    <td>
                        {data.package.level}
                    </td>
                    <td>
                        <div className={classes.actionsCont}>
                            {data.status ?
                                <button onClick={() => handleUserDisable(data.username)} style={{ marginBottom: 10 }} type="button" className="btn btn-success">Disable</button>
                                :
                                <button onClick={() => handleUserEnable(data.username)} style={{ marginBottom: 10 }} type="button" className="btn btn-primary">Enable</button>
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
                    <h2>Active Users</h2>
                    <p>In this table, active users are being displayed:</p>
                    <table className="table" style={{ tableLayout: 'auto', marginTop: 30, overflowX: "scroll" }}>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Package</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersData ? renderData : null}
                        </tbody>
                    </table>
                </div>


            </div>
            <Footer />
        </>
    );
}

export default Users;