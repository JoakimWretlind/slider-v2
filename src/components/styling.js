import styled from 'styled-components';

export const SliderSection = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: burlywood;
`;

export const SliderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

export const Wrapper = styled.div`
    height: 100vh;
    transition: .5s all linear;
    will-change: transform;
`;

export const Arrows = styled.div`
    position: absolute;
    top: 50%;
    background: none;
    height: 60px;
    border: 0;
    cursor: pointer;
    transition: ease .3s all;
    outline: none;
    &.prev {
        left: 0;  
        &:hover{
            opacity: .7;
            left: -10px;
        }
    }        
        &.next {
        right: 0;

        &:hover{
            right: -10px;
            opacity: .7;
        }
    }
`;

export const DotsContainer = styled.div`
    height: auto;
    margin: 0;
    padding: 0;
    position: absolute;
    width: auto;
    text-align: center;
    display: flex;
    left: 50%;
    bottom: 9px;
    transform: translateX(-50%);
    z-index: 10;
    list-style-type: none;
`;

export const Li = styled.li`
    display: inline - block;
    padding: 5px;

    &.active{
        button {
            color: #00D8FF;
        }
    }
`;

export const Button = styled.button`
    color: #fff;
    background-color: transparent;
    border: none;
    &:hover{
        text-decoration: none;
        opacity: .7;
        cursor: pointer;
    }
`;

export const Toggle = styled.button`
    background: transparent;
    border: none;
    height: auto;
    position: absolute;
    width: auto;
    right: 5%;
    bottom: 9px;
    color: #3d3d3d;
    z-index: 1000000;
    &:hover{
        text-decoration: none;
        opacity: .7;
        cursor: pointer;
    }
`;

export const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    float: left;
    line-height: 100vh;
    font-size: 40vh;
    text-align: center;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
`;


