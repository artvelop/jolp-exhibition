import React from "react";
import styled from "@emotion/styled";
import Modal from "react-modal";
import { TypoGraphy } from "./TypoGraphy";

type ModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  text: string;
  linkToDetail: () => void;
};

const customStyles: any = {
  content: {
    top: "30%",
    left: "50%",
    width: "800px",
    height: "180px",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const SanghunModal: React.FC<ModalProps> = ({
  modalIsOpen,
  closeModal,
  text,
  linkToDetail,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Box>
        <TypoGraphy type="h1" color="green" fontWeight="bold">
          랜덤으로 나오는 독서 관련 명언
        </TypoGraphy>
        <TypoGraphy type="h2" color="black" fontWeight="bold">
          {text}
        </TypoGraphy>
      </Box>
      <Button onClick={linkToDetail}>
        <TypoGraphy type="h2" color="black" fontWeight="bold">
          이동하기
        </TypoGraphy>
      </Button>
      <Button onClick={closeModal}>
        <TypoGraphy
          type="h2"
          color="black"
          fontWeight="bold"
          textAlign="center"
        >
          취소
        </TypoGraphy>
      </Button>
    </Modal>
  );
};
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const Button = styled.button`
  font-size: 32px;
  width: 100px;
  height: 48px;
  display: block;
  float: right;
  margin-top: 26px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 6px;
  &:hover {
    border: 2px solid black;
    background-color: green;
  }
`;
