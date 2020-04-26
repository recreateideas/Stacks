import React, { useState } from 'react';
import propTypes from './propTypes';
import { Container, Label, Input } from './styles';

const EditField = (props) => {
    const { value: valueProp = '', onChange: onChangeProp } = props;
    const [isInputMode, setIsInputMode] = useState(false);
    const [label, setLabel] = useState(valueProp);
    const inputWidth = (label.length + 1) * 10;
    const onClick = () => {
        setIsInputMode(true);
    };
    const onChange = (e) => {
        const { target: { value } } = e;
        setLabel(value);
    };
    const onBlur = () => {
        setIsInputMode(false);
        onChangeProp(label);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onBlur();
        }
    };
    return (
        <Container onClick={onClick}>
            {isInputMode
                ? (
                    <Input
                        className="edit-input"
                        type="text"
                        value={label}
                        onChange={onChange}
                        onBlur={onBlur}
                        width={inputWidth}
                        onKeyPress={handleKeyPress}
                        autoFocus
                    />
                )
                : (
                    <Label
                        className="edit-label"
                    >{label}
                    </Label>
                )
            }
        </Container>
    );
};

EditField.propTypes = propTypes;

export default EditField;
