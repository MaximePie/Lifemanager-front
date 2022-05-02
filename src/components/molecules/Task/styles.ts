import styled from 'styled-components';
import { colors } from '../../../styles/StyledComponents/_variables';
import { StyledTaskProps } from './types';

function addOkState(props: StyledTaskProps): string {
  if (props.isOK) {
    return `
      font-weight: bold;
      background-color: ${colors.success}
    `;
  }
  return '';
}

const StyledTask = styled.div<StyledTaskProps>`
  border-top: 1px solid #61dafb;
  padding: 0.25em;

  display: grid;
  grid-template-columns: 40px 1fr 40px;
  grid-column-gap: 1em;

  align-items: center;
  
  ${addOkState}
`;

export default StyledTask;
