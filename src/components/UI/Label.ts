import { styled } from '@styles/stitches.config'
import * as LabelPrimitive from '@radix-ui/react-label'

const StyledLabel = styled(LabelPrimitive.Root, {
  fontSize: '$3',
  fontWeight: 500,
  color: '$gray12',
  userSelect: 'none'
})

export default StyledLabel
