import styled from 'styled-components'

import Title from '../atoms/Title'
import SquarePicture from '../atoms/Picture'

export default function Skill() {
  return (
    <Container>
      <Title>
        <span>S</span>kill
      </Title>
      <SkillContent>
        <IconWrapper>
          <SquarePicture src="/assets/typescript.png" alt="typescript" />
        </IconWrapper>
        <IconWrapper>
          <SquarePicture src="/assets/javascript.png" alt="javascript" />
        </IconWrapper>
        <IconWrapper>
          <SquarePicture src="/assets/react.png" alt="react" />
        </IconWrapper>
        <IconWrapper>
          <SquarePicture src="/assets/redux.png" alt="redux" />
        </IconWrapper>
        <IconWrapper>
          <SquarePicture src="/assets/node.png" alt="node" />
        </IconWrapper>
        <IconWrapper>
          <SquarePicture src="/assets/html5.png" alt="html5" />
        </IconWrapper>
        <IconWrapper>
          <SquarePicture src="/assets/css3.png" alt="css3" />
        </IconWrapper>
        <IconWrapper>
          <SquarePicture src="/assets/sass.png" alt="sass" />
        </IconWrapper>
        <IconWrapper>
          <SquarePicture src="/assets/webpack.png" alt="webpack" />
        </IconWrapper>
        <IconWrapper>
          <SquarePicture src="assets/ruby.png" alt="ruby" />
        </IconWrapper>
        <IconWrapper>
          <SquarePicture src="/assets/perl.png" alt="perl" />
        </IconWrapper>
        <IconWrapper>
          <SquarePicture src="/assets/mysql.png" alt="mysql" />
        </IconWrapper>
        <IconWrapper>
          <SquarePicture src="/assets/sql-server.png" alt="sql-server" />
        </IconWrapper>
        <IconWrapper>
          <SquarePicture src="/assets/aws.png" alt="aws" />
        </IconWrapper>
        <IconWrapper>
          <SquarePicture src="/assets/firebase.png" alt="firebase" />
        </IconWrapper>
      </SkillContent>
      <Title>
        <span>P</span>rivate
      </Title>
      <SkillContent>
        <IconWrapper>
          <SquarePicture src="/assets/next.png" alt="next" />
        </IconWrapper>
        <IconWrapper>
          <SquarePicture src="/assets/vue.png" alt="vue" />
        </IconWrapper>
        <IconWrapper>
          <SquarePicture src="/assets/csharp.png" alt="csharp" />
        </IconWrapper>
      </SkillContent>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 50px;
`

const SkillContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
`

const IconWrapper = styled.div`
  background: #ffffff;
  width: 100px;
  height: 100px;
  margin: 20px;
  background-color: #303030;
  align-items: center;
  img {
    background-color: #ffffff;
  }
`
