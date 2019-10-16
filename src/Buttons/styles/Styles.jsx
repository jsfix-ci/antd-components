import React from 'react';
import styled from "styled-components";
import Button from "antd/lib/button/button";

export const GreenButton = styled(Button)`
    background-color: #28a745;
    color: #fff;
    &:hover {
      color: #fff;
      background-color: #237535;
      border: 1px solid #237535;
    }   
    &:focus {
      color: #fff;
      background-color: #237535;
      border: 1px solid #237535;
    }   
    margin: 3px;
`;

export const RedButton = styled(Button)`
    background-color: #dc3545;
    color: #fff;
    &:hover {
      color: #fff;
      background-color: #af333e;
      border: 1px solid #af333e;
    }  
    &:focus {
      color: #fff;
      background-color: #af333e;
      border: 1px solid #af333e;
    }       
   margin: 3px;
`;

export const BlueButton = styled(Button)`
    background-color: #1669c1;
    color: #fff;
    &:hover {
      color: #fff;
      background-color: #1a599c;
      border: 1px solid #1a599c;
    }  
    &:focus {
      color: #fff;
      background-color: #1a599c;
      border: 1px solid #1a599c;
    }    
    margin: 3px;
`;

export const PurpleButton = styled(Button)`
    background-color: #ae1af7;
    color: #fff;
    &:hover {
      color: #fff;
      background-color: #c145ff;
      border: 1px solid #c145ff;
    }   
    &:focus {
      color: #fff;
      background-color: #c145ff;
      border: 1px solid #c145ff;
    }    
    margin: 3px;
`;
