export interface BaseToastProps {
  id: string;
  className?: string;
}

export interface ToastProps extends BaseToastProps {
  header: string;
  headerClassName?: string;
  description?: string;
  descriptionClassName?: string;
  avatarSrc?: string;
  suffix?: React.ReactElement;
  onClose?: () => void;
}
