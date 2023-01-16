import React from "react";

function card(props){
    return (
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.Title}</span>
          </dt>
          <dd>
            {props.Description}
          </dd>
        </div>
    );
};

export default card