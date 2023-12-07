import React from "react";
import ProfileImage from '../images/image-jeremy.png';

const Profile = (prop) => {
    return (<>
        <main className="profile">
            <article className="user-profile">
                <section className="profile-info">
                    <picture className="profile-image">
                        <img src={ProfileImage} alt="profile"/>
                    </picture>
                    <div className="profile-name"><p>Report for<br/><span>Jeremy Robson</span></p></div>
                </section>
                <ul className="time-span">
                    <li onClick={prop.getday} style={prop.active==='daily' ? {color: 'rgba(255, 255, 255, 0.889)'} : {color: 'hsl(235, 45%, 61%)'}}>Daily</li>
                    <li onClick={prop.getweek} style={prop.active==='weekly' ? {color: 'rgba(255, 255, 255, 0.889)'} : {color: 'hsl(235, 45%, 61%)'}}>Weekly</li>
                    <li onClick={prop.getmonth} style={prop.active==='monthly' ? {color: 'rgba(255, 255, 255, 0.889)'} : {color: 'hsl(235, 45%, 61%)'}}>Monthly</li>
                </ul>
            </article>
        </main>
    </>)
}

export default Profile;