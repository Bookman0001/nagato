import styled from 'styled-components'
import media from 'styled-media-query'

import Title from 'src/components/atoms/title'
import SquarePicture from 'src/components/atoms/picture'
import { COLOR } from 'src/theme/constants'

export default function Skill() {
  return (
    <Section>
      <Title>
        <span>S</span>kill
      </Title>
      <Container>
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
            <SquarePicture src="/assets/next.png" alt="next" />
          </IconWrapper>
          <IconWrapper>
            <SquarePicture src="/assets/vue.png" alt="vue" />
          </IconWrapper>
          <IconWrapper>
            <SquarePicture src="/assets/webpack.png" alt="webpack" />
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
      </Container>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 50px;
  ${media.lessThan('small')`
    margin-bottom: 30px;
  `}
`

const Container = styled.div`
  overflow-x: scroll;
`

const SkillContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 50px;
`

const IconWrapper = styled.div`
  background: ${COLOR.WHITE};
  width: 100px;
  height: 100px;
  background-color: ${COLOR.BLACK};
  margin-right: 20px;
  align-items: center;
  img {
    background-color: ${COLOR.WHITE};
  }
`
