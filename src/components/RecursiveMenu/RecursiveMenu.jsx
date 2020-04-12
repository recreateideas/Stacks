import React from 'react';
import { MenuList } from '@material-ui/core';
import Item from './Item';
import propTypes from './propTypes';
import { Container, StyledItem } from './styles';

const RecursiveMenu = (props) => {
    const { items, onSelect, setIsActive } = props;
    return (
        <Container>
            <MenuList>
                {
                    Object
                        .keys(items)
                        .map((label, index) => {
                            const item = items[label];
                            const isActive = setIsActive(item);
                            const activeClass = isActive ? 'active' : '';
                            return (
                                <StyledItem
                                    className={`styled-item ${activeClass}`}
                                    component="div"
                                    key={index}
                                    onClick={() => onSelect(item)}
                                >
                                    <Item isActive={isActive} item={{ ...item }} />
                                </StyledItem>
                            );
                        })
                }
            </MenuList>
        </Container>
    );
};

RecursiveMenu.propTypes = propTypes;

export default RecursiveMenu;
