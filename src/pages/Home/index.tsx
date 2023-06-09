import {
  AboutMe,
  Avatar,
  BannerArea,
  Container,
  DevInfo,
  LeftContent,
  MobileEmployeeName,
  PersonalInfo,
  RightContent,
  UserArea,
} from './styles'

import Banner from '../../assets/banner.jpg'
import { useUser } from '../../hooks/user'
import { Loading } from '../../components/Loading'

export function Home() {
  const { user } = useUser()

  return (
    <Container>
      {!user ? (
        <Loading />
      ) : (
        user.map((uniqueUser) => (
          <>
            <BannerArea>
              <img src={Banner} alt="" />
            </BannerArea>
            <UserArea>
              <LeftContent>
                <Avatar>
                  <img src={uniqueUser.picture.large} alt="" />
                </Avatar>

                <MobileEmployeeName>
                  <h1>
                    {uniqueUser.name.title}. {uniqueUser.name.first}{' '}
                    {uniqueUser.name.last}
                  </h1>
                  <h3>ABMAX Employee</h3>
                </MobileEmployeeName>

                <AboutMe>
                  <h2>
                    About the <span>employee</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam minima beatae corporis quasi numquam optio delectus
                    similique? Officiis dignissimos quasi deleniti architecto
                    eum ipsam magni hic. Vel earum quos iure.
                  </p>
                </AboutMe>
              </LeftContent>

              <RightContent>
                <DevInfo>
                  <h1>
                    {uniqueUser.name.title}. {uniqueUser.name.first}{' '}
                    {uniqueUser.name.last}
                  </h1>
                  <h3>ABMAX Employeee</h3>
                </DevInfo>

                <PersonalInfo>
                  <h5>
                    Gender: <span>{uniqueUser.gender}</span>
                  </h5>
                  <h5>
                    Age: <span>{uniqueUser.dob.age} years old</span>
                  </h5>
                  <h5>
                    E-mail: <span>{uniqueUser.email}</span>
                  </h5>
                  <h5>
                    Phone: <span>{uniqueUser.cell}</span>
                  </h5>
                </PersonalInfo>
              </RightContent>
            </UserArea>
          </>
        ))
      )}
    </Container>
  )
}
