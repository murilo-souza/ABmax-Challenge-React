import styled from 'styled-components'

export const Container = styled.main`
  margin-top: 2rem;
  width: 100%;
  border-radius: 10px;
  background: ${(props) => props.theme.zinc700};
`

export const BannerArea = styled.div`
  height: 235px;
  overflow: hidden;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export const UserArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.5rem 2.25rem;

  @media (max-width: 768px) {
    display: block;
  }
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Avatar = styled.div`
  margin-top: -12.5rem;
  width: 16rem;
  height: 16rem;
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;

  img {
    width: 16rem;
    height: 16rem;
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`

export const AboutMe = styled.div`
  margin-top: 1rem;

  h2 {
    font-size: 2rem;

    span {
      color: ${(props) => props.theme.primary};
    }
  }

  p {
    margin-top: 0.5rem;
    width: 26rem;
    text-align: justify;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const DevInfo = styled.div`
  margin-top: -12.5rem;
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`

export const PersonalInfo = styled.div`
  margin-top: 11.5rem;

  display: flex;
  flex-direction: column;

  h5 {
    margin-top: 1rem;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`
