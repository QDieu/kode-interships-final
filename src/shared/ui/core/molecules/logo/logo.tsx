import React from 'react';
import { styled } from '@shared/ui/theme';
import { Icons } from '../../atoms/icons';
import { Typography } from '../../typography';

const Wrappper = styled.View`
  margin: auto;
  justify-content: center;
  align-items: center;
`;

type TProps = {
  bigSize?: string;
};

export const Logo = ({ bigSize }: TProps) => {
  let small = bigSize === 'small';
  let big = bigSize === 'big';
  let width = big ? '103' : small ? '90' : '54';
  let height = big ? '22' : small ? '19' : '11';
  return (
    <Wrappper>
      <Icons.LabelKode bigSize={bigSize} height={height} width={width} />
      <Typography
        variant="caption2"
        style={{
          color: '#fff',
          marginTop: big ? 9 : small ? 7.5 : 4.5,
          letterSpacing: big ? 3.2 : small ? 2.72 : 1.6,
          fontSize: big ? 11 : small ? 9.34 : 5.5,
          lineHeight: big ? 15 : small ? 12.72 : 7.49,
        }}
      >
        DIGITAL BANK
      </Typography>
    </Wrappper>
  );
};
