import styled from 'styled-components';
import Modal from 'react-modal';

import CustomButton from '../custom-button/custom-button.component';

export const AddButton = styled(CustomButton)`
  width: 30%;
  margin: 1rem auto 0.5rem auto;
`;

export const ModalContainer = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.96),
      rgba(131, 67, 115, 0.93)
    ),
    url('https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80');
  width: 70%;
  height: 90%;
  overflow: scroll;
  padding-bottom: 1rem;

  @media screen and (max-width: 600px) {
    top: 50%;
    width: 80%;
    height: 65%;
  }
`;

export const ModalCloseButton = styled.span`
  position: absolute;
  right: 15px;
  top: 7.5px;

  @media screen and (max-width: 600px) {
    top: 5px;
    right: 10px;
  }
`;

export const ImageContainer = styled.img`
  padding: 1rem 2rem;
  width: 100%;
`;

export const ItemName = styled.p`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0;
`;
