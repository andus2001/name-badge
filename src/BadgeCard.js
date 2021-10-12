import React from "react"

function BadgeCard(props) {
    return (
        <div className="card">
            <h3 className="badgeHeader">BADGE</h3>
            <div className="badgeBody">
                <ul className="gridContainer">
                    <li className="badgeName">Name: {props.firstName} {props.lastName} </li>
                    <li className="badgePhone">Phone: {props.phone}</li>
                    <li className="badgePlaceofBirth">Place of Birth: {props.placeofBirth}</li>
                    <li className="badgeFavoriteFood">Favorite Food: {props.favoriteFood}</li>
                    <li className="badgeEmail">Email: {props.email}</li><br/>
                
                </ul>
                <div className="descriptionContainer">
                <div className="badgeDescription">{props.description}</div></div>
            </div>

        </div>
    )

}

export default BadgeCard