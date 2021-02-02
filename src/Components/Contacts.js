import React from 'react';
import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from '../firebase';

const Contacts = () => {

    var [ContObj,setContObj] = useState({});
    var [currId,setCurrId] = useState('');

    useEffect(()=>{
        firebaseDb.child('Contacts').on('value',snapshot=>{
            if(snapshot.val()!=null){
                setContObj({
                    ...snapshot.val()
                })
            }
            else
            setContObj({});
        })
    },[])

    const addorEdit = (obj) => {
        firebaseDb.child('Contacts').push(
            obj,err => {
                if (err){
                    console.log(err)
            }}
        )
    }
const onDelete = key=>{
    if(window.confirm('Are you sure to delete this record???')){
        firebaseDb.child(`Contacts/${key}`).remove(
            err => {
                if(err){
                    console.log(err)

                }
                else
                setCurrId('');
            }
        )
    }
}

    return (
        <>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 text-center">Contact Register</h1>
            </div>
        </div>
        <div className="row">
            <div className='col-md-5'>
                <ContactForm {...({addorEdit,currId,ContObj})}/>
            </div>
            <div className='col-md-7'>
                <table className='table table-borderless table-stripped'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Full Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(ContObj).map(id=>{
                                return <tr>
                                    <td>{ContObj[id].fullName}</td>
                                    <td>{ContObj[id].mobile}</td>
                                    <td>{ContObj[id].email}</td>
                                    <td>
                                        
                                        <a className='btn btn-danger' onClick={() => {onDelete(id)} }>
                                            <i className='fas fa-trash-alt'>Delete</i>
                                        </a>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
      </div>
      </>
    );
}

export default Contacts;