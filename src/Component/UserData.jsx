import React from "react";
import Icon from '../images/icon-ellipsis.svg';
import Backgrounds from "./Backgrounds";

const UserData = (prop) =>  {
    console.log(prop.time)
    return (<>
        <article className="user-data" style={{backgroundColor:Backgrounds[prop.id].bgcolor}}>
            <picture>
                <img src={Backgrounds[prop.id].Image} alt="work"/>
            </picture>
            <div className="box">
                <section className="header">
                    <div className="heading">
                        <h5>{prop.title}</h5>
                    </div>
                    <div className="menu">
                        <img className="icon" src={Icon} alt="icon"/>
                    </div>
                </section>
                <section className="data">
                    <div className="hours">
                        <p>{prop.currentdata}hrs</p>
                    </div>
                    <div className="history">
                        <p>{prop.time} - {prop.previousdata}hrs</p>
                    </div>
                </section>
            </div>
        </article>
    </>)
}

export default UserData;