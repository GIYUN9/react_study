import React from 'react';
import Food from './Food';

function Menu(props){
    return(
        <div id="menu">
            <Food name="짜장면" price={7000} />
            <Food name="짬뽕" price={7500} />
            <Food name="탕수육" price={15000} />
        </div>
    )
}

export default Menu;