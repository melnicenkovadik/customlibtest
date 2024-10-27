import { LogoMain } from '@/assets/logo';
import { LogoShort } from '@/assets/logoShort';

import { LogoProps } from './types';

export function Logo({ variant = 'default', className }: LogoProps) {
  const logoVars = {
    default: <LogoMain className={className} />,
    short: <LogoShort className={className} />,
  };
  return <div>{logoVars[variant]}</div>;
}
