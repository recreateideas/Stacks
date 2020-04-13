import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions, selectors, useSelector } from '../../redux';
import { Container } from './styles';

const Images = () => {
    const dispatch = useDispatch();
    const { images: { getImages } } = actions;
    const { images: imageSelectors } = selectors;
    const images = useSelector(imageSelectors.images);
    useEffect(() => {
        dispatch(getImages());
    // eslint-disable-next-line
    }, []);
    return (
        <Container> Images {JSON.stringify(images, null, 4)}</Container>
    );
};

export default Images;
