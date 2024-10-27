import { Accept } from 'react-dropzone';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ActionMeta } from 'react-select';
import { ButtonHTMLAttributes } from 'react';
import { ChangeEvent } from 'react';
import { ClassProp } from 'class-variance-authority/types';
import { ClearIndicatorProps } from 'react-select';
import { ComponentProps } from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { ComponentType } from 'react';
import { Content } from '@radix-ui/react-popover';
import { Content as Content_2 } from '@radix-ui/react-dialog';
import { ControllerProps } from 'react-hook-form';
import { ControlProps } from 'react-select';
import { default as default_2 } from 'react';
import { default as default_3 } from 'embla-carousel-react';
import { Description } from '@radix-ui/react-dialog';
import { DetailedHTMLProps } from 'react';
import { DialogCloseProps } from '@radix-ui/react-dialog';
import { DialogContentProps } from '@radix-ui/react-dialog';
import { DialogDescriptionProps } from '@radix-ui/react-dialog';
import { DialogOverlayProps } from '@radix-ui/react-dialog';
import { DialogPortalProps } from '@radix-ui/react-dialog';
import { DialogProps } from '@radix-ui/react-dialog';
import { DialogTitleProps } from '@radix-ui/react-dialog';
import { DialogTriggerProps } from '@radix-ui/react-dialog';
import { Drawer as Drawer_2 } from 'vaul';
import { DropdownIndicatorProps } from 'react-select';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuGroupProps } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuLabelProps } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuPortalProps } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuRadioGroupProps } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuRadioItemProps } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuSeparatorProps } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuSubContentProps } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuSubProps } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuSubTriggerProps } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuTriggerProps } from '@radix-ui/react-dropdown-menu';
import { FC } from 'react';
import { FieldError } from 'react-hook-form';
import { FieldPath } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { FormProviderProps } from 'react-hook-form';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { InputHTMLAttributes } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { LabelProps } from '@radix-ui/react-label';
import { LiHTMLAttributes } from 'react';
import { MouseEventHandler } from 'react';
import { OptionProps } from 'react-select';
import { OTPInput } from 'input-otp';
import { Overlay } from '@radix-ui/react-dialog';
import { PopoverAnchorProps } from '@radix-ui/react-popover';
import { PopoverCloseProps } from '@radix-ui/react-popover';
import { PopoverProps } from '@radix-ui/react-popover';
import { PopoverTriggerProps } from '@radix-ui/react-popover';
import { Props } from 'react-select';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { Root } from '@radix-ui/react-checkbox';
import { Root as Root_2 } from '@radix-ui/react-progress';
import { Root as Root_3 } from '@radix-ui/react-switch';
import { SeparatorProps } from '@radix-ui/react-separator';
import { SlotProps } from '@radix-ui/react-slot';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { Title } from '@radix-ui/react-dialog';
import { TooltipContentProps } from '@radix-ui/react-tooltip';
import { TooltipPortalProps } from '@radix-ui/react-tooltip';
import { TooltipProps } from '@radix-ui/react-tooltip';
import { TooltipTriggerProps } from '@radix-ui/react-tooltip';
import { UseEmblaCarouselType } from 'embla-carousel-react';
import { VariantProps } from 'class-variance-authority';

export declare type Accents = {
    color: string;
    displayValue: string;
    code: string;
};

export declare const Accordion: default_2.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & default_2.RefAttributes<HTMLDivElement>>;

export declare const AccordionContent: default_2.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & default_2.RefAttributes<HTMLDivElement>, "ref"> & {
    className?: string;
} & default_2.RefAttributes<HTMLDivElement>>;

export declare const AccordionItem: default_2.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & default_2.RefAttributes<HTMLDivElement>, "ref"> & default_2.RefAttributes<HTMLDivElement>>;

export declare type AccordionItemTypes = {
    id: number;
    name: string;
    description: string;
    value: string;
    content: ReactNode;
};

export declare const AccordionTrigger: default_2.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & default_2.RefAttributes<HTMLButtonElement>, "ref"> & {
    className?: string;
} & default_2.RefAttributes<HTMLButtonElement>>;

export declare const Avatar: ({ src, avatarFallback, className, variant, avatarComponent, status, size, alt, ...props }: AvatarProps) => JSX_2.Element;

export declare type AvatarProps = {
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

declare interface AxisConfig<T> {
    /** Flag for enabling showing measurements */
    showMeasurement?: boolean;
    /** Custom rendering for the legend */
    legendRenderer?: (value: T) => string;
}

export declare const Badge: ({ className, variant, ...props }: BadgeProps) => JSX_2.Element;

export declare interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}

export declare const badgeVariants: (props?: ({
    variant?: "number" | "default" | "primary" | "secondary" | "tertiary" | "destructive" | "outline" | null | undefined;
} & ClassProp) | undefined) => string;

export declare interface BaseToastProps {
    id: string;
    className?: string;
}

export declare const Breadcrumb: ({ ...props }: default_2.ComponentPropsWithoutRef<"nav"> & {
    separator?: ReactNode;
}) => JSX_2.Element;

export declare const BreadcrumbEllipsis: ({ className, ...props }: default_2.ComponentProps<"span">) => JSX_2.Element;

export declare const BreadcrumbItem: ({ className, ...props }: default_2.ComponentPropsWithoutRef<"li">) => JSX_2.Element;

export declare const BreadcrumbLink: ({ asChild, className, ...props }: default_2.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
}) => JSX_2.Element;

export declare const BreadcrumbList: ({ className, ...props }: default_2.ComponentPropsWithoutRef<"ol">) => JSX_2.Element;

export declare const BreadcrumbPage: ({ className, ...props }: default_2.ComponentPropsWithoutRef<"span">) => JSX_2.Element;

export declare const BreadcrumbSeparator: ({ children, className, ...props }: default_2.ComponentProps<"li">) => JSX_2.Element;

export declare const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
}

export declare type ButtonType = {
    id: string | number;
    icon: ReactNode;
    text?: string;
    onClick: () => void;
    disabled?: boolean;
};

export declare const buttonVariants: (props?: ({
    variant?: "link" | "primary" | "secondary" | "tertiary" | "destructive" | "outline" | "ghost" | "outline-primary" | null | undefined;
    size?: "default" | "lg" | "dynamic" | "sm" | "clear" | "icon-xxs" | "icon-xs" | "icon-s" | "icon-m" | "icon-lg" | null | undefined;
} & ClassProp) | undefined) => string;

/**
 * @deprecated use CardContent from Card (card from atoms will be removed soon)
 */
export declare const CardContent: ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

/**
 * @deprecated use CardFooter from Card (card from atoms will be removed soon)
 */
export declare const CardFooter: ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

/**
 * @deprecated use CardHeader from Card (card from atoms will be removed soon)
 */
export declare const CardHeader: ForwardRefExoticComponent<CardHeaderProps & RefAttributes<HTMLDivElement>>;

export declare interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    isCol?: boolean;
}

/**
 * @deprecated use just Card (card from atoms will be removed soon)
 */
export declare const CardInner: ForwardRefExoticComponent<CardProps & RefAttributes<HTMLDivElement>>;

export declare interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    isBackground?: boolean;
}

export declare const cardVariants: (props?: ({
    size?: "default" | "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

/**
 * @deprecated use just Card (card from atoms will be removed soon)
 */
export declare const CardWrapper: ForwardRefExoticComponent<CardWrapperProps & RefAttributes<HTMLDivElement>>;

export declare interface CardWrapperProps extends HTMLAttributes<HTMLDivElement> {
    isHovered?: boolean;
}

export declare const Carousel: default_2.ForwardRefExoticComponent<default_2.HTMLAttributes<HTMLDivElement> & CarouselProps & default_2.RefAttributes<HTMLDivElement>>;

export declare type CarouselApi = UseEmblaCarouselType[1];

export declare const CarouselContent: default_2.ForwardRefExoticComponent<default_2.HTMLAttributes<HTMLDivElement> & default_2.RefAttributes<HTMLDivElement>>;

export declare interface CarouselContextProps extends CarouselProps {
    carouselRef: ReturnType<typeof default_3>[0];
    api: ReturnType<typeof default_3>[1];
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
}

export declare const CarouselDots: default_2.ForwardRefExoticComponent<default_2.HTMLAttributes<HTMLDivElement> & default_2.RefAttributes<HTMLDivElement>>;

export declare const CarouselItem: default_2.ForwardRefExoticComponent<default_2.HTMLAttributes<HTMLDivElement> & default_2.RefAttributes<HTMLDivElement>>;

export declare const CarouselNext: default_2.ForwardRefExoticComponent<Omit<CarouselNextProps, "ref"> & default_2.RefAttributes<HTMLButtonElement>>;

declare interface CarouselNextProps extends default_2.ComponentProps<typeof Button> {
    nextSlideText?: string;
}

export declare type CarouselOptions = UseCarouselParameters[0];

export declare type CarouselPlugin = UseCarouselParameters[1];

export declare const CarouselPrevious: default_2.ForwardRefExoticComponent<Omit<CarouselPrevProps, "ref"> & default_2.RefAttributes<HTMLButtonElement>>;

declare interface CarouselPrevProps extends default_2.ComponentProps<typeof Button> {
    prevSlideText?: string;
}

export declare interface CarouselProps {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: 'horizontal' | 'vertical';
    setApi?: (api: CarouselApi) => void;
}

export declare const Chart: ({ className, type, data, showGradient, pointRadius, tension, xAxis, yAxis, chartColor, }: IChartProps) => JSX_2.Element;

declare interface ChartRecord {
    /** Value of the X axis */
    xAxis: object | string;
    /** Value of the Y axis */
    yAxis: number;
}

export declare const Checkbox: default_2.ForwardRefExoticComponent<CheckboxProps & default_2.RefAttributes<HTMLButtonElement>>;

export declare interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof Root> {
    label: string;
    details?: string;
    inputClassName?: string;
    labelClassName?: string;
}

export declare const ClearIndicator: FC<ClearIndicatorProps>;

export declare const Control: ({ children, ...props }: ControlProps) => JSX_2.Element;

export declare const CopyButton: ({ value, iconClassName, text, className, ...rest }: CopyButtonProps) => JSX_2.Element;

export declare interface CopyButtonProps extends HTMLAttributes<HTMLButtonElement> {
    value: string;
    iconClassName?: string;
    text?: string;
}

export declare interface CustomControllerProps {
    /** onClick handler */
    onClick?: () => void;
    /** Flag if button closes dialog */
    isDialogClose?: boolean;
    /** id */
    id?: string | number;
    /** Icon */
    icon: ReactNode;
    /** Text */
    text?: string;
    /** Disabled flag */
    disabled?: boolean;
}

export declare type CustomControlType = ControlProps & {
    children: ReactNode;
};

export declare const CustomOptionComponent: (props: CustomOptionType) => JSX_2.Element;

export declare type CustomOptionType = OptionProps & {
    data: OptionType;
    children: ReactNode;
};

export declare type CustomTriggerProps = {
    onClick: () => void;
    isCollapsed: boolean;
};

export declare const Dialog: FC<DialogProps>;

export declare const DialogClose: ForwardRefExoticComponent<DialogCloseProps & RefAttributes<HTMLButtonElement>>;

export declare const DialogContent: ForwardRefExoticComponent<Omit<DialogContentProps & RefAttributes<HTMLDivElement>, "ref"> & {
    container?: HTMLElement | null;
} & RefAttributes<HTMLDivElement>>;

export declare const DialogDescription: ForwardRefExoticComponent<Omit<DialogDescriptionProps & RefAttributes<HTMLParagraphElement>, "ref"> & RefAttributes<HTMLParagraphElement>>;

export declare const DialogFooter: ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => JSX_2.Element;

export declare const DialogHeader: ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => JSX_2.Element;

export declare const DialogOverlay: ForwardRefExoticComponent<Omit<DialogOverlayProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const DialogPortal: FC<DialogPortalProps>;

export declare const DialogTitle: ForwardRefExoticComponent<TypographyProps & RefAttributes<never>>;

export declare const DialogTrigger: ForwardRefExoticComponent<DialogTriggerProps & RefAttributes<HTMLButtonElement>>;

export declare const Drawer: ({ shouldScaleBackground, direction: drawerDirection, ...props }: React.ComponentProps<typeof Drawer_2.Root> & {
    direction?: "left" | "right" | "top" | "bottom";
    handleOnly?: boolean;
}) => JSX_2.Element;

export declare const DrawerClose: ForwardRefExoticComponent<Omit<DialogCloseProps & RefAttributes<HTMLButtonElement>, "ref"> & RefAttributes<HTMLButtonElement>>;

export declare const DrawerContent: ForwardRefExoticComponent<Omit<Omit<DialogContentProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>, "ref"> & {
    container?: HTMLElement | null;
    asChild?: boolean;
} & RefAttributes<HTMLDivElement>>;

export declare const DrawerDescription: ForwardRefExoticComponent<Omit<DialogDescriptionProps & RefAttributes<HTMLParagraphElement>, "ref"> & RefAttributes<HTMLParagraphElement>>;

export declare const DrawerFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): JSX_2.Element;
    displayName: string;
};

export declare const DrawerHeader: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => JSX_2.Element;

export declare const DrawerOverlay: ForwardRefExoticComponent<Omit<Omit<DialogOverlayProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const DrawerPortal: React.FC<DialogPortalProps>;

export declare const DrawerTitle: ForwardRefExoticComponent<Omit<DialogTitleProps & RefAttributes<HTMLHeadingElement>, "ref"> & RefAttributes<HTMLHeadingElement>>;

export declare const DrawerTrigger: ForwardRefExoticComponent<DialogTriggerProps & RefAttributes<HTMLButtonElement>>;

export declare const DropdownIndicator: FC<DropdownIndicatorProps>;

export declare const DropdownMenu: FC<DropdownMenuProps>;

export declare const DropdownMenuCheckboxItem: ForwardRefExoticComponent<Omit<DropdownMenuCheckboxItemProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuContent: ForwardRefExoticComponent<Omit<DropdownMenuContentProps & RefAttributes<HTMLDivElement>, "ref"> & {
    isInsideParent?: boolean;
    contentClassName?: string;
} & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuGroup: ForwardRefExoticComponent<DropdownMenuGroupProps & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuItem: ForwardRefExoticComponent<Omit<DropdownMenuItemProps & RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuLabel: ForwardRefExoticComponent<Omit<DropdownMenuLabelProps & RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuPortal: FC<DropdownMenuPortalProps>;

export declare const DropdownMenuRadioGroup: ForwardRefExoticComponent<DropdownMenuRadioGroupProps & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuRadioItem: ForwardRefExoticComponent<Omit<DropdownMenuRadioItemProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuSeparator: ForwardRefExoticComponent<Omit<DropdownMenuSeparatorProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuShortcut: ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => JSX_2.Element;

export declare const DropdownMenuSub: FC<DropdownMenuSubProps>;

export declare const DropdownMenuSubContent: ForwardRefExoticComponent<Omit<DropdownMenuSubContentProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuSubTrigger: ForwardRefExoticComponent<Omit<DropdownMenuSubTriggerProps & RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuTrigger: ForwardRefExoticComponent<Omit<DropdownMenuTriggerProps & RefAttributes<HTMLButtonElement>, "ref"> & RefAttributes<HTMLButtonElement>>;

export declare const ExpandableImage: ({ src, alt, onErrorLoading, content, className, }: ExpandableImageProps) => JSX_2.Element;

export declare interface ExpandableImageProps {
    src: string;
    content: ReactNode;
    /** Image alt */
    alt?: string;
    /** List of classes */
    className?: string;
    /** On error loading handler */
    onErrorLoading?: (err: unknown) => void;
}

export declare const ExpandedImage: ({ src, className, imgClassName, name, description, customControllers, }: ExpandedImageProps) => JSX_2.Element;

export declare interface ExpandedImageProps {
    /** Src */
    src: string;
    /** List of classes */
    className?: string;
    /** Name */
    name: string;
    /** Description */
    description: string;
    /** Image classes */
    imgClassName?: string;
    /** Custom buttons-controllers */
    customControllers?: CustomControllerProps[];
}

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues extends FieldValues | undefined = undefined>(props: FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React.JSX.Element;

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export declare const FormControl: ForwardRefExoticComponent<Omit<SlotProps & RefAttributes<HTMLElement>, "ref"> & RefAttributes<HTMLElement>>;

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export declare const FormDescription: ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & RefAttributes<HTMLParagraphElement>>;

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => JSX_2.Element;

export declare interface FormFieldContextValue<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
    name: TName;
}

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export declare const FormItem: ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export declare interface FormItemContextValue {
    id: string;
}

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export declare const FormLabel: ForwardRefExoticComponent<Omit<Omit<LabelProps & RefAttributes<HTMLLabelElement>, "ref"> & RefAttributes<HTMLLabelElement>, "ref"> & RefAttributes<HTMLLabelElement>>;

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export declare const FormMessage: ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & RefAttributes<HTMLParagraphElement>>;

declare interface IChartProps {
    /** Classes of the root component. */
    className?: string;
    /** Type of the chart view
     * Default: 'line' */
    type?: 'line' | 'bar';
    /** Flag for enabling showing gradient.
     * Default: false */
    showGradient: boolean;
    /** Point radius of the X and Y values crossing.
     * Default: 0 */
    pointRadius: number;
    /** Rounding of the chart line.
     * Default: 0 */
    tension: number;
    /** Data of the chart.
     * Default: [] */
    data: ChartRecord[];
    /** Config for X axis */
    xAxis?: AxisConfig<any>;
    /** Config for Y axis */
    yAxis?: AxisConfig<number>;
    /** Color for chart and it's accent based on this color.
     * Default: cssVariable('--ui-accent-500')
     * Required in hex */
    chartColor?: string;
}

export declare const IconButton: ForwardRefExoticComponent<IconButtonProps & RefAttributes<HTMLButtonElement>>;

export declare interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonVariants> {
    version?: 'outlined' | 'ghost';
    icon?: React.ReactNode;
    disabled?: boolean;
    text?: string;
    /**
     * @deprecated
     * Use combination of color and style instead.
     */
    variant?: 'default' | 'outline-primary' | 'ghost-neutral' | 'outline' | 'tertiary' | 'ghost-brand' | 'inherit';
}

export declare const IconButtonsGroup: ({ buttons, className, variant, size, paint, shape, version, iconClassName, }: IconButtonsGroupProps) => JSX_2.Element;

export declare interface IconButtonsGroupProps extends IconButtonProps {
    buttons: {
        id: string | number;
        icon: ReactNode;
        text?: string;
        onClick: () => void;
        disabled?: boolean;
    }[];
    className?: string;
    iconClassName?: string;
}

export declare const iconButtonVariants: (props?: ({
    variant?: "default" | "inherit" | "tertiary" | "outline" | "outline-primary" | "ghost-neutral" | "ghost-brand" | null | undefined;
    paint?: "neutral" | "brand" | "brand-filled" | "neutral-filled" | null | undefined;
    size?: "md" | "lg" | "sm" | "x-sm" | null | undefined;
    shape?: "circle" | "square" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const indicatorVariants: (props?: ({
    variant?: "default" | "trending" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Input: ForwardRefExoticComponent<(InputProps | InputSearchProps | InputUploadedPictureProps) & RefAttributes<HTMLInputElement>>;

export declare type InputArgs = {
    disabled: boolean;
    maxSize: number;
    maxNumberImg: number;
};

export declare const InputOTP: ForwardRefExoticComponent<ComponentPropsWithoutRef<InputOTP_2> & RefAttributes<HTMLInputElement>>;

declare type InputOTP_2 = typeof OTPInput & {
    children: ReactNode;
};

export declare const InputOTPGroup: ForwardRefExoticComponent<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const InputOTPSeparator: ForwardRefExoticComponent<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const InputOTPSlot: ForwardRefExoticComponent<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    index: number;
} & RefAttributes<HTMLDivElement>>;

export declare interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    start?: ReactNode;
    end?: ReactNode;
    label?: ReactNode | string;
    placeholder?: string;
    isErrors?: boolean;
    helperText?: string;
    type?: string;
    value?: string | number;
    className?: string;
    inputClassName?: string;
    inputWrapperClassName?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

export declare interface InputSearchProps extends InputProps {
    onClear: MouseEventHandler<HTMLButtonElement>;
}

export declare interface InputUploadedPictureProps extends InputProps {
    fileName?: string;
    acceptFile?: Accept;
    maxSize?: number;
    maxNumberImg?: number;
}

export declare const Label: default_2.ForwardRefExoticComponent<Omit<LabelProps & default_2.RefAttributes<HTMLLabelElement>, "ref"> & default_2.RefAttributes<HTMLLabelElement>>;

export declare function Logo({ variant, className }: LogoProps): JSX_2.Element;

export declare interface LogoProps extends React.HTMLAttributes<HTMLElement> {
    variant: 'default' | 'short';
}

export declare const MenuItem: ({ disabled, className, ...props }: MenuItemProps) => JSX_2.Element;

export declare interface MenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
    disabled?: boolean;
}

export declare type ModeCodeType = 'dark' | 'light' | 'auto';

export declare type Modes = {
    icon: JSX.Element;
    displayValue: string;
    code: ModeCodeType;
};

export declare const Notifications: ({ maxVisible }: {
    maxVisible?: number;
}) => JSX_2.Element;

declare interface OptionType {
    id?: string | number;
    value: string;
    label: string;
    type?: string;
}

export declare const Pagination: ({ className, total, handleMin, handleMax, handleNext, handlePrev, handleInputChange, setCurrentPage, currentPage, }: PaginationProps) => JSX_2.Element;

export declare const PaginationContent: ForwardRefExoticComponent<Omit<DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & RefAttributes<HTMLUListElement>>;

export declare const PaginationEllipsis: ({ className, ...props }: ComponentProps<"span">) => JSX_2.Element;

export declare const PaginationItem: ForwardRefExoticComponent<Omit<DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & RefAttributes<HTMLLIElement>>;

export declare const PaginationLink: ({ className, isActive, size, ...props }: PaginationLinkProps) => JSX_2.Element;

declare type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, 'size'> & ComponentProps<'a'>;

export declare const PaginationNext: ({ className, ...props }: ComponentProps<typeof PaginationLink>) => JSX_2.Element;

export declare const PaginationPrevious: ({ className, ...props }: ComponentProps<typeof PaginationLink>) => JSX_2.Element;

export declare interface PaginationProps extends ComponentProps<'nav'> {
    total: number;
    className?: string;
    pageParamName?: string;
    handleMin: () => void;
    handleMax: () => void;
    handlePrev: () => void;
    handleNext: () => void;
    handleInputChange?: (value: number) => void;
    setCurrentPage: (value: number) => void;
    currentPage: number;
}

export declare const PaginationWrapper: ({ className, ...props }: ComponentProps<"nav">) => JSX_2.Element;

export declare const Popover: FC<PopoverProps>;

export declare const PopoverAnchor: ForwardRefExoticComponent<PopoverAnchorProps & RefAttributes<HTMLDivElement>>;

export declare const PopoverClose: ForwardRefExoticComponent<PopoverCloseProps & RefAttributes<HTMLButtonElement>>;

export declare const PopoverContent: ForwardRefExoticComponent<PopoverContentProps & {
    container?: HTMLElement | null;
} & RefAttributes<HTMLDivElement>>;

export declare interface PopoverContentProps extends ComponentPropsWithoutRef<typeof Content> {
}

export declare const PopoverTrigger: ForwardRefExoticComponent<PopoverTriggerProps & RefAttributes<HTMLButtonElement>>;

export declare const Progress: default_2.ForwardRefExoticComponent<ProgressProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface ProgressProps extends React.ComponentPropsWithoutRef<typeof Root_2> {
    variant?: 'default' | 'trending';
    indicatorClassName?: string;
}

export declare const progressVariants: (props?: ({
    variant?: "default" | "trending" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Rating: ({ className, score, state, onChange, size, }: RatingComponentProps) => JSX_2.Element;

export declare interface RatingComponentProps {
    onClick?: () => void;
    className?: string;
    score: number;
    state: StateUnion;
    onChange?: (value: number) => void;
    size?: number;
}

export declare const ratingVariants: (props?: ({
    state?: "disabled" | "controlled" | "read-only" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Select: ({ className, wrapperClassName, setSelectedOption, selectedOption, options, placeholder, CustomOption, CustomControl, variant, menuPosition, defaultMenuIsOpen, id, label, isErrors, isCreatable, handleCreate, isLoading, ...props }: SelectProps & {
    isCreatable?: boolean;
    handleCreate?: (newValue: string) => void;
    isLoading?: boolean;
}) => JSX_2.Element;

export declare interface SelectProps extends Props {
    isErrors?: boolean;
    setSelectedOption?: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void;
    id?: string;
    selectedOption?: ReactNode | string;
    variant?: 'default' | 'small';
    label?: ReactNode | string;
    CustomOption?: ComponentType<OptionProps<unknown, boolean>>;
    CustomControl?: ComponentType<ControlProps>;
    placeholder?: string;
    wrapperClassName?: string;
}

export declare const Separator: default_2.ForwardRefExoticComponent<Omit<SeparatorProps & default_2.RefAttributes<HTMLDivElement>, "ref"> & default_2.RefAttributes<HTMLDivElement>>;

export declare type Shape = 'circle' | 'square';

export declare const Sheet: FC<DialogProps>;

export declare const SheetClose: ForwardRefExoticComponent<DialogCloseProps & RefAttributes<HTMLButtonElement>>;

export declare const SheetContent: ({ side, className, overlayClassName, children, closeLabel, withCloseButton, ...props }: SheetContentProps) => JSX_2.Element;

declare interface SheetContentProps extends ComponentPropsWithoutRef<typeof Content_2>, VariantProps<typeof sheetVariants> {
    overlayClassName?: string;
    closeLabel?: string;
    withCloseButton?: boolean;
}

export declare const SheetDescription: ({ className, ...props }: ComponentPropsWithoutRef<typeof Description>) => JSX_2.Element;

export declare const SheetFooter: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => JSX_2.Element;

export declare const SheetHeader: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => JSX_2.Element;

export declare const SheetOverlay: ({ className, ...props }: ComponentPropsWithoutRef<typeof Overlay>) => JSX_2.Element;

export declare const SheetPortal: FC<DialogPortalProps>;

export declare const SheetTitle: ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Title>) => JSX_2.Element;

export declare const SheetTrigger: ForwardRefExoticComponent<DialogTriggerProps & RefAttributes<HTMLButtonElement>>;

declare const sheetVariants: (props?: ({
    side?: "top" | "right" | "bottom" | "left" | null | undefined;
} & ClassProp) | undefined) => string;

export declare type SibedarProps = {
    contentOpen: React.ReactNode;
    contentCollapsed: React.ReactNode;
    className?: string;
    isCollapsed: boolean;
    toggleSidebar: () => void;
    trigger: ReactElement;
};

export declare const Sidebar: ({ isCollapsed, toggleSidebar, contentOpen, contentCollapsed, className, trigger, ...props }: SibedarProps & {
    trigger: ReactElement<CustomTriggerProps>;
}) => JSX_2.Element;

export declare const SidebarContent: ({ isCollapsed, contentOpen, contentCollapsed, }: SidebarContentProps) => JSX_2.Element;

export declare type SidebarContentProps = {
    isCollapsed: boolean;
    contentOpen: React.ReactNode;
    contentCollapsed: React.ReactNode;
    contentClassName?: string;
};

export declare type Size = 'x-sm' | 'sm' | 'md' | 'lg';

export declare const Skeleton: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => JSX_2.Element;

export declare type StateUnion = 'controlled' | 'read-only' | 'disabled';

export declare const Switch: default_2.ForwardRefExoticComponent<SwitchProps & default_2.RefAttributes<HTMLButtonElement>>;

export declare interface SwitchProps extends React.ComponentPropsWithoutRef<typeof Root_3>, VariantProps<typeof switchVariants> {
    size?: 'sm' | 'md';
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    classNameThumb?: string;
}

export declare const switchThumbVariant: (props?: ({
    size?: "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const switchVariants: (props?: ({
    size?: "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Tabs: ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLDivElement>>;

export declare const TabsContent: ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const TabsList: ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

declare interface TabsProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
    variant?: Variant_2;
}

export declare const TabsTrigger: ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & RefAttributes<HTMLButtonElement>, "ref"> & {
    details?: string;
} & RefAttributes<HTMLButtonElement>>;

export declare function Tagline({ className, size, text, icon, button, ...props }: TaglineProps): JSX_2.Element;

export declare interface TaglineProps extends VariantProps<typeof taglineVariants> {
    text: string | ReactNode;
    icon?: React.ReactNode;
    button?: React.ReactNode;
    className?: string;
}

export declare const taglineVariants: (props?: ({
    size?: "default" | "full" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Textarea: ForwardRefExoticComponent<TextareaProps & RefAttributes<HTMLTextAreaElement>>;

export declare interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textAreaVariants> {
    label?: string;
    icon?: React.ReactNode;
    /**
     * @deprecated
     * Use 'error' props only
     */
    isErrors?: boolean;
    error?: string;
}

export declare const textAreaVariants: (props?: ({
    variant?: "default" | "resizable" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const TextWithActions: ({ className, textClasses, text, title, actions, startTruncate, variant, isTruncate, ...props }: TextWithActionsProps) => JSX_2.Element;

export declare interface TextWithActionsProps extends HTMLAttributes<HTMLDivElement> {
    text?: string;
    textClasses?: string;
    title?: string;
    variant?: TypographyVariantType;
    actions: ReactNode[];
    isTruncate?: boolean;
    startTruncate?: number;
}

export declare const ThemeSelector: ForwardRefExoticComponent<ThemeSelectorProps & RefAttributes<HTMLDivElement>>;

export declare type ThemeSelectorProps = {
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

export declare const titleVariants: (props?: ({
    size?: "heading1" | "heading2" | "heading3" | "heading4" | "heading5" | "body1" | "body2" | "body3" | "body4" | null | undefined;
    color?: "default" | "secondary" | "tertiary" | "invert" | "gradient" | "accent" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Toast: ({ id, className, header, headerClassName, description, descriptionClassName, avatarSrc, suffix, onClose, }: ToastProps) => JSX_2.Element;

export declare interface ToastProps extends BaseToastProps {
    header: string;
    headerClassName?: string;
    description?: string;
    descriptionClassName?: string;
    avatarSrc?: string;
    suffix?: React.ReactElement;
    onClose?: () => void;
}

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export declare const TogglePanelItem: ({ className, item, truncateStart, }: {
    className?: string;
    item: TogglePanelItemProps;
    truncateStart?: number;
}) => JSX_2.Element;

export declare type TogglePanelItemProps = {
    id: number;
    icon?: ReactNode;
    type: string;
    message: string;
};

export declare const Tooltip: FC<TooltipProps>;

export declare const TooltipContent: ForwardRefExoticComponent<Omit<TooltipContentProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const TooltipPortal: FC<TooltipPortalProps>;

export declare const TooltipProvider: React.FC<TooltipProviderProps>;

export declare interface TooltipProviderProps {
    children: React.ReactNode;
    /**
     * The duration from when the pointer enters the trigger until the tooltip gets opened.
     * @defaultValue 700
     */
    delayDuration?: number;
    /**
     * How much time a user has to enter another trigger without incurring a delay again.
     * @defaultValue 300
     */
    skipDelayDuration?: number;
    /**
     * When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
     * @defaultValue false
     */
    disableHoverableContent?: boolean;
}

export declare const TooltipTrigger: ForwardRefExoticComponent<TooltipTriggerProps & RefAttributes<HTMLButtonElement>>;

export declare const TruncateText: ({ className, variant, size, text, start, end, dots, isTruncate, ...props }: TruncateTextProps) => JSX_2.Element;

export declare interface TruncateTextProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof truncateVariants> {
    text: string;
    start?: number;
    end?: number;
    dots?: number;
    isTruncate?: boolean;
}

export declare const truncateVariants: (props?: ({
    variant?: "default" | "full" | "no-truncate" | null | undefined;
    size?: "default" | "md" | "xs" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const TwoRowCell: ({ className, beforeText, afterText, primaryText, secondaryText, primaryTextClassName, secondaryTextClassName, ...rest }: TwoRowCellProps) => JSX_2.Element;

export declare interface TwoRowCellProps extends default_2.HTMLAttributes<HTMLDivElement> {
    beforeText?: default_2.ReactNode;
    afterText?: default_2.ReactNode;
    primaryText?: string;
    primaryTextClassName?: string;
    secondaryText?: string;
    secondaryTextClassName?: string;
}

export declare function Typography({ size, variant, color, tag, component, disableHashtagsHighlighting, className, children, ...rest }: TypographyProps): JSX_2.Element;

export declare type TypographyColorsType = 'default' | 'secondary' | 'tertiary' | 'gradient' | 'invert' | 'accent';

export declare type TypographyComponentType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'legend';

export declare interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
    /**
     * @deprecated
     */
    variant?: TypographyVariantType;
    /**
     * @deprecated
     */
    component?: TypographyComponentType;
    size?: TypographyVariantType;
    color?: TypographyColorsType;
    tag?: TypographyComponentType;
    disableHashtagsHighlighting?: boolean;
}

export declare type TypographyVariantType = 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'body1' | 'body2' | 'body3' | 'body4';

export declare type UseCarouselParameters = Parameters<typeof default_3>;

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: FieldError;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};

export declare type Variant = 'default' | 'outline' | 'outline-primary' | 'ghost-neutral' | 'ghost-brand' | 'tertiary' | 'ghost-neutral' | 'inherit';

declare type Variant_2 = 'default' | 'secondary' | 'underline' | 'vertical' | 'navLabel';

export { }
