import styled, {css} from "styled-components";

type CadPropsType = {
    cardColor ?: string
    cardBorder?: string
}

 export const Card = styled.div <CadPropsType>`
   width: 300px;
   height: 350px;
   padding: 10px 10px 22px 10px  ;
  background-color: ${props => props.cardColor || "#FFF"};
  border-radius: ${props => props.cardBorder || "15px"};
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);
  
   
   div{
     display: flex;
     column-gap: 10px;
   }
`
type CardTitlePropsType = {
    titleColor?:string
    cardFontSize?:string
}

 export const  CardTitle = styled.h3<CardTitlePropsType>`
   padding-top: 20px;
  color: ${props => props.titleColor || "#000"};
  font-size: ${props => props.cardFontSize || "16px" };
  font-weight: 700;
  
`
type CardSubtitlePropsType = {
    subtitleColor?:string
    subtitleFontSize?:string
    subtitleLineHeight?:string
}

 export const CardSubtitle = styled.p<CardSubtitlePropsType>`
   padding-top: 20px;
  color: ${props=>props.subtitleColor || "#ABB3BA"};
  font-size:${props=>props.subtitleFontSize || "12px"} ;
  font-weight: 500;
  line-height:${props=>props.subtitleLineHeight || "20px"} ; 
`
type CardBtnPropsType ={
    btnType?:"line"|"Fat"
    btnBorder?:string
    borderColor?:string
    bgcColor?:string

}

export const CardBtn = styled.button<CardBtnPropsType>`
  width: 86px;
  height: 30px;
  flex-shrink: 0;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  margin-top: 20px;
  
  ${props => props.btnType === "line" &&  css <CardBtnPropsType> `
   background: transparent;
    color:#4E71FE ;
    border-radius: ${props1 => props.btnBorder || "5px"};
    border: 2px solid${props1 => props.borderColor ||"#4E71FE"};
  ` 
}
  
  ${props => props.btnType === "Fat" &&  css <CardBtnPropsType>`
    border-radius: ${props1 => props.btnBorder || "5px"};
    background:${props =>props.bgcColor || "#4E71FE" } ;
    color:#FFF;
  `
}
  
`
