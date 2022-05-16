import {MdClose} from 'react-icons/md'
import React, {useState} from 'react';
import styled from '@emotion/styled';
const Kakao=styled.div`
    width:250px;
    height:250px;
    position:fixed;
    right:1%;
    bottom:10%;
`
function KakaoQR() {
  return (
      <>
        <Kakao>
            <img src={require("../assets/kakaoqr.jpg")}  alt="Kim Min Joo kakao" style={{width:'250px'}}/>
        </Kakao>
      </>
      
  );
}

export default KakaoQR;
