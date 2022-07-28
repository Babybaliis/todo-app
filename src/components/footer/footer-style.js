import styled from 'styled-components'

export const Footers = styled.footer`
  align-items: center;
  border-top: 1px solid #e6e6e6;
  color: gray;
  display: flex;
  font-size: 15px;
  height: 20px;
  justify-content: space-between;
  padding: 10px 15px;
  text-align: center;
`

export const Span = styled.span`
  text-align: left;
`

export const Button = styled.button`
  border: 1px solid transparent;
  border-color: ${({id,mode})=> mode.id===id?'rgba(175,47,47,.2)':''};
  &:active{
    border-color: rgba(175,47,47,.2);
  }
  &:hover {
    border-color: rgba(175,47,47,.2);
  }
  &:focus {
    border-color: rgba(175,47,47,.2);
  }
  border-radius: 3px;
  color: inherit;
  display: inline-block;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
`
export const Div = styled.div`
  display: flex;
`