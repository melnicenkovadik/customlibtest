import { ReactNode } from 'react';

export type AvatarProps = {
  src?: string;
  alt?: string;
  avatarFallback?: string;
  className?: string;
  onClick?: () => void;
  size?: 'default';
  variant?: 'default' | 'dark';
  avatarComponent?: ReactNode;
  status?: 'online' | 'offline';
};
