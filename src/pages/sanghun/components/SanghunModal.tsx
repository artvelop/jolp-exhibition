import React from "react";
import styled from "@emotion/styled";
import Modal from "react-modal";
import { TypoGraphy } from "./TypoGraphy";
import { color } from "../constants/index";
import { motion } from "framer-motion";

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
    padding: " 20px",
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
        <TypoGraphy type="h1" color={color.gold_dark} fontWeight="bold">
          랜덤으로 나오는 독서 관련 명언
        </TypoGraphy>
        <TypoGraphy type="h2" color="black" fontWeight="bold">
          {text}
        </TypoGraphy>
        <ButtonBox>
          <Button
            onClick={linkToDetail}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <TypoGraphy type="h2" color="black" fontWeight="bold">
              이동하기
            </TypoGraphy>
          </Button>
          <Button
            onClick={closeModal}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <TypoGraphy
              type="h2"
              color="black"
              fontWeight="bold"
              textAlign="center"
            >
              취소
            </TypoGraphy>
          </Button>
        </ButtonBox>
      </Box>
    </Modal>
  );
};
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  height: 100%;
`;
const ButtonBox = styled.div`
  margin-left: 550px;
  margin-top: 16px;
`;
const Button = styled(motion.button)`
  font-size: 32px;
  width: 100px;
  height: 48px;
  display: block;
  float: right;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 6px;
  &:hover {
    border: 2px solid black;
    background-color: ${color.gold_light};
  }
`;
