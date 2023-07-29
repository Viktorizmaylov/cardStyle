import React from 'react';
import './App.css';
import styled, {css} from "styled-components";
import {Card, CardBtn, CardSubtitle, CardTitle} from "./components/styled/CardStyleComponents";

function App() {
    return (
        <Box>
            <CardOne/>
            <CardTwo/>
        </Box>
    );
}
function CardTwo(){
    return(
        <Card cardColor="black">
            <img src={imagePath}/>
            <CardTitle titleColor="#fff">Headline</CardTitle>
            <CardSubtitle subtitleColor="#fff">Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                venen.</CardSubtitle>
            <div>
                <CardBtn btnType={"Fat"}>See more</CardBtn><CardBtn btnType={"line"}>Save</CardBtn>
            </div>
        </Card>
    );
}
function CardOne(){
    return(
        <Card>
            <img src={imagePath}/>
            <CardTitle>Headline</CardTitle>
            <CardSubtitle>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                venen.</CardSubtitle>
            <div>
                <CardBtn btnType={"Fat"}>See more</CardBtn><CardBtn btnType={"line"}>Save</CardBtn>
            </div>
        </Card>
    );
}
export default App;
const imagePath = process.env.PUBLIC_URL + '/images/Rectangle 1.png';


const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;


`


type SyperBtnPropsType = {
    color?: string
    fontSize?: string
    btnType?: "outline" | "primery"
}

const SyperBtn = styled.button<SyperBtnPropsType>`
  border: none;
  padding: 15px 25px;
  font-size: ${props => props.fontSize || "20px"};
  border-radius: 8px;
  font-weight: bold;


  ${props => props.btnType === "primery" && css<SyperBtnPropsType>`
    background-color: ${props => props.color || "#eeee08"};
    color: #171515;
  `
  }

  ${props => props.btnType === "outline" && css<SyperBtnPropsType>`
    background-color: transparent;
    color: ${props => props.color || "#eeee08"};
    border: 2px solid ${props => props.color || "#eeee08"};;


  `
  }

`


const Menu = styled.nav`

  ul {
    display: flex;
  }

  li > a {
    color: gold;
  }

  li + li {
    margin-left: 20px;
  }


`