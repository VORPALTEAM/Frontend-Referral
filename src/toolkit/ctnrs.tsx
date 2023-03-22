import styled from 'styled-components'
import Flex from './Flex';

export const ModalHeader = styled.div<{ background?: string }>`
  align-items: center;
  background: ${({ background }) => background || "transparent"};
  border-bottom: 1px solid #2A2338;
  padding: 12px 24px;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
`;

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
  width: 94%;
  min-height: 36px;
  margin-top: 4px;
  margin-left: 6%;
  justify-content: center;
`;

export const ModalBody = styled(Flex)`
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`;