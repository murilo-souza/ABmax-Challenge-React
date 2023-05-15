import styled from 'styled-components'

export const Container = styled.div`
  width: 30rem;
  height: 15rem;

  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 10px;

  padding: 2rem;
`
export const CardTitle = styled.h2`
  color: ${(props) => props.theme.gray100};

  font-weight: 400;
  font-size: 2.5rem;

  margin-bottom: 2rem;
`

export const InfoTitle = styled.span`
  color: ${(props) => props.theme.gray100};

  font-size: 1rem;
`

export const InfoTextValue = styled.p`
  color: ${(props) => props.theme.gray100};
  font-weight: 400;
`
export const InfoUniqueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`
export const InfoGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1rem;
`
