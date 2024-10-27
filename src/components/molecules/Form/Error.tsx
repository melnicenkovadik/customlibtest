import { ComponentType } from 'react';
import { ErrorMessage } from '@hookform/error-message';

const ErrorMSG = <TProps extends object>(Component: ComponentType<TProps>) => {
  return (props: TProps) => {
    return (
      <Component
        {...props}
        style={{ bottom: '-22px' }}
        className="text-error absolute text-nowrap text-sm text-destructive"
      />
    );
  };
};

export const Error = ErrorMSG(ErrorMessage);
