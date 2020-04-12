import styled from 'styled-components';

const Container = styled.div`
    .MuiSwitch-root {
        width: 100px;
        height: 45px;
        svg {
            font-size: 38px;
            &.checked-icon {
                transform: rotate(155deg);
            }
        }
    }
    .MuiSwitch-switchBase.Mui-checked {
        transform: translateX(37px);
    }
    .MuiSwitch-track {
        width: 59%;
        position: relative;
        left: 9px;
        top: 5px;
        border-radius: 15px;
    }
`;

export {
    // eslint-disable-next-line import/prefer-default-export
    Container,
};
