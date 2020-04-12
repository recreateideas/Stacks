import React from 'react';
import propTypes from './propTypes';
import { Container, IconWrap, LabelWrap } from './styles';

const Item = (props) => {
    const { item, isActive } = props;
    const { icon: Icon, label } = item;
    return (
        <Container className="item-inner">
            {Icon && (
                <IconWrap isActive={isActive}>
                    <Icon />
                </IconWrap>
            )}
            <LabelWrap isActive={isActive}>
                {label}
            </LabelWrap>
        </Container>
    );
};

Item.propTypes = propTypes;

export default Item;
