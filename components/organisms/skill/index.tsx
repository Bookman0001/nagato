import styled from 'styled-components'
import media from 'styled-media-query'

import Title from 'components/atoms/title'
import SquarePicture from 'components/atoms/picture'
import { COLOR } from 'theme/constants'

export default function Skill() {
  return (
    <Section>
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
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 150px;
  ${media.lessThan('medium')`
  margin-bottom: 100px;
  `}
`

const SkillContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 150px;
  ${media.lessThan('medium')`
  margin-bottom: 100px;
  `}
`

const IconWrapper = styled.div`
  background: ${COLOR.WHITE};
  width: 100px;
  height: 100px;
  margin: 15px;
  background-color: ${COLOR.BLACK};
  align-items: center;
  img {
    background-color: ${COLOR.WHITE};
  }
`
