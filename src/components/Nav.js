import React from 'react';
import Select from 'react-select';
import '../css/Nav.css'

const Nav = (props) => {
    return (
        <>
            <div className="Nav">
                <Select
                    options={props.options}
                    value={props.value}
                    onChange={props.onchange}
                />
            </div>
        </>
    );
}

export default Nav;