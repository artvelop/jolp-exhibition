import React, { useMemo } from 'react';
import styled from '@emotion/styled';

type TyphoGraphyProps = {
  type?:
    | 'Title'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body1'
    | 'body2'
    | 'sm1'
    | 'sm2';
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: string;
  fontHeight?: string;
};

type StyledTyphoGraphyProps = {
  type: '96' | '32' | '22' | '20' | '18' | '14' | '12' | '10' | '8';
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: string;
  fontHeight?: string;
};

export const TyphoGraphy: React.FC<TyphoGraphyProps> = ({
  children,
  type,
  color,
  textAlign,
  fontWeight,
  fontHeight,
}) => {
  const changeTypeFontSize = useMemo(() => {
    switch (type) {
      case 'Title':
        return '96';
      case 'h1':
        return '32';
      case 'h2':
        return '22';
      case 'h3':
        return '20';
      case 'h4':
        return '18';
      case 'body1':
        return '14';
      case 'body2':
        return '12';
      case 'sm1':
        return '10';
      case 'sm2':
        return '8';
      default:
        return '14';
    }
  }, [type]);

  return (
    <TyphoGraphyText
      type={changeTypeFontSize}
      color={color || '#fff'}
      textAlign={textAlign || 'left'}
      fontWeight={fontWeight || 'normal'}
      fontHeight={fontHeight || 'normal'}>
      {children}
    </TyphoGraphyText>
  );
};

const TyphoGraphyText = styled.div<StyledTyphoGraphyProps>`
  font-family: 'RIDI-BATANG';
  font-size: ${(props) => props.type}px;
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.fontWeight};
  ${(props) =>
    props.fontHeight === 'normal' ? '' : `line-height: ${props.fontHeight};`}

  @media (min-width: 1200px) and (max-width: 1400px) {
    font-size: ${(props) =>
      props.type > '32' ? `calc(${props.type}px - 36px)` : `${props.type}px`};
  }
`;
