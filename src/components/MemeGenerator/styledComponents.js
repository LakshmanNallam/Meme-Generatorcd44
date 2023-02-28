import styled from 'styled-components'

export const Con = styled.div`
  height: ${props => props.height};
  display: flex;
  flex-direction: ${props => props.flexDirectioon};
  align-items: center;
  justify-content: center;

  width: ${props => props.width};
  color: blue;
  background-image: url(${props => props.bgImgUrl});
  background-size: cover;
  @media (max-width: 768px) {
    flex-direction: ${props => props.flexDirectioon2};
    font-size: 13px;
    width: 90%;
  }
`

export const FormCon = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 34px;
`
export const SelectTag = styled.select`
  width: 100%;
  margin-top: 8px;
`

export const ConFinal = styled(Con)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  font-size: ${props => props.fontSize}px;
  @media (max-width: 768px) {
    flex-direction: ${props => props.flexDirectioon2};
    font-size: 13px;
    height: 20vh;
    width: 90%;
  }
`
