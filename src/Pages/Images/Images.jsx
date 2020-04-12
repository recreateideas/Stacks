import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions, selectors, useSelector } from '../../redux';

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
        <div> Images {JSON.stringify(images)}</div>
    );
};

export default Images;
