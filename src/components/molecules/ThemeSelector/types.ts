export type Modes = {
  icon: JSX.Element;
  displayValue: string;
  code: ModeCodeType;
};

export type Accents = {
  color: string;
  displayValue: string;
  code: string;
};

export type ThemeSelectorProps = {
  onModeChanged: (modeCode: ModeCodeType) => void;
  onAccentChanged: (accentCode: string) => void;
  accents: Accents[];
  modes: Modes[];
  title: string;
  text: string;
  iconClose?: JSX.Element;
  selectedMode?: string;
  selectedAccent?: string;
};

export type ModeCodeType = 'dark' | 'light' | 'auto';
