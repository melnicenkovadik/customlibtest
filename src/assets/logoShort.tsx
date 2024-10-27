import { cn } from '@/utils';

type LogoMainProps = React.HTMLAttributes<HTMLElement>;

export const LogoShort = ({ className }: LogoMainProps) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M5 5 Q5 35 20 35 Q35 35 35 5"
          stroke="rgb(var(--ui-accent-500))"
          stroke-linecap="round"
          fill="none"
          stroke-width="3"
        />
        <path
          d="M25 15 L25 35"
          stroke="var(--secondary-logo)"
          stroke-linecap="round"
          fill="none"
          stroke-width="3"
        />
        <circle cx="25" cy="8" r="3" fill="var(--secondary-logo)" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};
