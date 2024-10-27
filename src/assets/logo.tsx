import { cn } from '@/utils';

type LogoMainProps = React.HTMLAttributes<HTMLElement>;

export const LogoMain = ({ className }: LogoMainProps) => {
  return (
    <svg
      className={cn(className)}
      width="240"
      height="50"
      viewBox="0 0 240 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path d="M30 45 Q15 30 30 15 Q45 5 55 20" stroke="rgb(var(--ui-accent-500))" stroke-linecap="round" fill="none"
              stroke-width="4" />

        <path d="M50 10 Q50 40 65 40 Q80 40 80 10" stroke="rgb(var(--ui-accent-500))" stroke-linecap="round" fill="none"
              stroke-width="3" />
        <path d="M90 15 Q80 15 80 30 Q80 45 90 45 Q100 45 100 30" stroke="var(--secondary-logo)" stroke-linecap="round"
              fill="none" stroke-width="3" />
        <path d="M110 10 L130 10 M120 10 L120 45" stroke="var(--secondary-logo)" stroke-linecap="round" fill="none"
              stroke-width="3" />
        <circle cx="150" cy="27.5" r="12.5" stroke="rgb(var(--ui-accent-500))" fill="none" stroke-width="3" />
        <circle cx="150" cy="27.5" r="6" fill="rgb(var(--ui-accent-500))" />
        <path d="M170 45 L170 10 L180 30 L190 10 L190 45" stroke="var(--secondary-logo)" stroke-linecap="round"
              fill="none" stroke-width="3" />
        <path d="M200 10 Q200 40 215 40 Q230 40 230 10" stroke="rgb(var(--ui-accent-500))" stroke-linecap="round"
              fill="none" stroke-width="3" />
        <path d="M240 20 L240 45" stroke="var(--secondary-logo)" stroke-linecap="round" fill="none" stroke-width="3" />
        <circle cx="240" cy="12" r="3" fill="var(--secondary-logo)" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="250" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
