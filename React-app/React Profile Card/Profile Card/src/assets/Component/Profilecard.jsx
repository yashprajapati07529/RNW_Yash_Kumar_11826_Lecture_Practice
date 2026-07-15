import React from "react";

const Profile = ({name, education, skills, contact , Image}) => {


    return (

        <>
            <div>
                <h1>Profile Card  Information</h1>

                <div className="card" style={{ width: "38rem", textAlign:"start", margin:"50px", border:"1px solid white", padding:"50px" }}>
                    <img src={Image} className="card-img-top" alt="profile" style={ {width:"550px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">Name : {name}</h5>
                        <h5 className="card-title">Education  : {education}</h5>
                        <h5 className="card-title">Skills : {skills}</h5>
                        <h5 className="card-title">Contact Information : {contact} </h5>
                        
                        <a href="https://www.linkedin.com" className="card-link">
                           LinkdIn
                        </a> <br />
                        <a href="https://www.instagram.com" className="card-link">
                            Instagram
                        </a>
                    </div>
                </div>

            </div>
        </>
    )

}


export default Profile