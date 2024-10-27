import React from 'react';

export interface TwoRowCellProps extends React.HTMLAttributes<HTMLDivElement> {
  beforeText?: React.ReactNode;
  afterText?: React.ReactNode;
  primaryText?: string;
  primaryTextClassName?: string;
  secondaryText?: string;
  secondaryTextClassName?: string;
}
