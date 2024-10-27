export interface OptionType {
  id?: string | number;
  value: string;
  label: string;
  type?: string;
}

export interface TokenItemType {
  avatar: string;
  label: string;
  onClick: () => void;
}
