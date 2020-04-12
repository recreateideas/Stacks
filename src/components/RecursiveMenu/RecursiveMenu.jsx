import React from 'react';
import { MenuList, MenuItem } from '@material-ui/core';
import propTypes from './propTypes';
// import Item from './Item';

const RecursiveMenu = (props) => {
    const { items } = props;
    return (
        <MenuList>
            {
                Object
                    .keys(items)
                    .map((label, index) => {
                        const item = items[label];
                        const { icon } = item;
                        console.log(icon);
                        return (
                            <MenuItem
                                component="div"
                                key={index}
                                item={item}
                                index={index}
                            >{label}
                            </MenuItem>
                        );
                    })
            }
        </MenuList>
    );
};

RecursiveMenu.propTypes = propTypes;

export default RecursiveMenu;
