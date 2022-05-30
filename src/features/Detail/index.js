import React from "react";

const Detail = ({name, username, email}) => {
    
    return (
        <div>
            <h2>{name}</h2>
            <div>username: {username}</div>
            <div>email: {email}</div>
        </div>
    );
}

export default Detail
