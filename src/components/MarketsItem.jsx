import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Hoover = styled.div`
  background-color: #ffffff;

  &:hover {
    background-color: #03c181;
    p {
      color: white;
      font-weight: bold;
    }
  }
`;
const Color = styled.p`
  font-size: 16px;

  &:hover {
    color: white;
    font-weight: bold;
  }
`;

export default function MarketsItem({ markets }) {

  return (
    <Hoover className="col-md-3 shadow rounded p-3 m-3">
      <Link
        className="btn  btn-block"
        to={`/markets/${markets}`}>
        <Color>{markets}</Color>
      </Link>
    </Hoover>
  )
}
