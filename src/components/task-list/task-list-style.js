import styled from 'styled-components'


export const Li = styled.li`
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
`

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: ghostwhite;
  border: solid 0.5px ghostwhite;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: paleturquoise;
    border-radius: 10px;
  }
`
export const Section = styled.section`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
`