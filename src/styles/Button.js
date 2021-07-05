import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const CustomButton = styled(Button)`
  background: var(--yellow500) !important;
  border: 1px solid var(--brown500) !important;
  color: var(--brown500) !important;
  opacity: 0.9 !important;

  &:hover {
    opacity: 1 !important;
    transition: 200ms ease-in-out;
  }
`;

export default CustomButton;
