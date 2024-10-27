import { forwardRef, useCallback, useId, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Typography } from '@/components';
import { IconButton } from '@/components/atoms/IconButton';
import { Label } from '@/components/atoms/Label';
import { cn, truncateText } from '@/utils';
import {
  Eye,
  EyeOff,
  Image,
  Search,
  Trash,
  TriangleAlert,
  X,
} from 'lucide-react';

import {
  InputProps,
  InputSearchProps,
  InputUploadedPictureProps,
} from './types';

const InputField = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      start,
      end,
      label,
      className,
      inputWrapperClassName,
      inputClassName,
      isErrors,
      error,
      helperText,
      id,
      type = 'text',
      ...props
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);
    const generatedId = useId();
    const inputId = id || generatedId;
    return (
      <div className={cn('relative', className)}>
        {label && (
          <Label
            htmlFor={inputId}
            className="mb-1 block truncate"
          >
            {label}
          </Label>
        )}
        <div
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            'relative flex h-10 w-full items-center rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-text disabled:opacity-50',
            focused && 'text-secondary-text outline outline-2 outline-offset-1',
            isErrors || error
              ? 'text-destructive outline outline-2 outline-offset-1'
              : '',
            inputWrapperClassName,
          )}
        >
          {start}
          <input
            ref={ref}
            className={cn(
              'w-full !bg-transparent text-foreground focus:outline-none focus-visible:outline-none active:bg-transparent disabled:cursor-not-allowed',
              inputClassName,
            )}
            type={type}
            id={inputId}
            {...props}
          />
          {end}
          {isErrors && <TriangleAlert />}
        </div>
        <div className="mt-1 text-sm">
          <span className={error ? 'text-destructive' : 'text-secondary-text'}>
            {error ? error : helperText}
          </span>
        </div>
      </div>
    );
  },
);

const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  ({ value, onClear, ...props }, ref) => {
    return (
      <InputField
        value={value}
        start={
          <IconButton
            paint="neutral"
            version="ghost"
            icon={<Search />}
            className="mr-2 h-[18px] w-[18px]"
          />
        }
        end={
          value ? (
            <IconButton
              paint="neutral"
              version="ghost"
              icon={<X />}
              className="ml-2 h-[18px] w-[18px]"
              onClick={onClear}
            />
          ) : null
        }
        ref={ref}
        {...props}
      />
    );
  },
);

const InputPassword = forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputClassName, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div className={cn('relative', className)}>
        <InputField
          type={showPassword ? 'text' : type}
          inputClassName={cn('hide-password-toggle pr-5', inputClassName)}
          end={
            <IconButton
              paint="neutral"
              size="sm"
              version="ghost"
              className="absolute right-0 top-0 h-full text-secondary-text hover:bg-transparent"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword((prev) => !prev);
              }}
              icon={
                showPassword ? (
                  <Eye
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                ) : (
                  <EyeOff
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                )
              }
            >
              <span className="sr-only">
                {showPassword ? 'Hide password' : 'Show password'}
              </span>
            </IconButton>
          }
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

const InputUploadedPicture = forwardRef<
  HTMLInputElement,
  InputUploadedPictureProps
>(
  (
    { label, className, fileName, acceptFile, maxSize, maxNumberImg, ...props },
    ref,
  ) => {
    const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const isValidFile = (file: File): boolean => {
      if (maxSize && file.size > maxSize) {
        setErrorMessage(
          `File exceeds the size limit of ${maxSize / 1024 / 1024} MB.`,
        );
        return false;
      }

      setErrorMessage(null);
      return true;
    };

    const onDrop = useCallback(
      (newFiles: File[]) => {
        const totalFiles = acceptedFiles.length + newFiles.length;

        if (maxNumberImg && totalFiles > maxNumberImg) {
          setErrorMessage(`You can only upload up to ${maxNumberImg} files.`);
          return;
        }

        const validFiles = newFiles.filter((file) => isValidFile(file));

        setAcceptedFiles((prevFiles) => [...prevFiles, ...validFiles]);
      },
      // eslint-disable-next-line
      [acceptedFiles, acceptFile, maxSize, maxNumberImg],
    );

    const removeImage = (fileToRemove: File) => {
      setAcceptedFiles((prevFiles) =>
        prevFiles.filter((file) => file !== fileToRemove),
      );
    };
    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: acceptFile,
    });
    return (
      <div>
        <div
          {...getRootProps()}
          className={cn('relative', className)}
        >
          <InputField
            type="file"
            id="file-upload"
            inputClassName={cn('opacity-0 absolute z-10 cursor-pointer')}
            inputWrapperClassName="[&>svg]:absolute [&>svg]:right-3"
            ref={ref}
            label={label}
            isErrors={!!errorMessage}
            {...getInputProps()}
            {...props}
          />
          <div className="absolute left-3 top-1/2 z-0 flex cursor-pointer gap-2 text-sm text-foreground">
            <Typography size="body2">{fileName || 'Upload File'}</Typography>
            <Typography
              size="body2"
              className="text-secondary-text"
            >
              {acceptedFiles.length === 0 && 'No file chosen'}
            </Typography>
          </div>
        </div>

        {acceptedFiles.map((file) => {
          const objectURL = URL.createObjectURL(file);
          const isPdf = file.type === 'application/pdf';
          const fileSize = (file.size / 1024 / 1024).toFixed(2);

          return (
            <div
              key={file.name}
              className="relative mb-2 flex max-w-full cursor-pointer gap-3 rounded-lg border border-border p-2 hover:bg-muted"
            >
              {isPdf ? (
                <div className="flex h-12 w-12 items-center justify-center rounded bg-secondary-text text-background">
                  <Image className="text- h-6 w-6" />
                </div>
              ) : (
                <img
                  src={objectURL}
                  alt={file.name}
                  className="h-12 w-12 rounded object-cover"
                />
              )}
              <div className="flex flex-col justify-between">
                <Typography
                  size="body2"
                  className="text-foreground"
                >
                  {truncateText(file.name, 20)}
                </Typography>
                <Typography
                  size="body2"
                  className="text-foreground"
                >
                  {fileSize} MB
                </Typography>
              </div>
              <Trash
                onClick={() => removeImage(file)}
                className="absolute right-2 top-2 h-4 w-4 rounded-full text-muted-text"
              />
            </div>
          );
        })}

        <div>
          {errorMessage ? (
            <Typography
              size="body2"
              className="mt-2 text-red-500"
            >
              {errorMessage}
            </Typography>
          ) : (
            acceptedFiles.length === 0 && (
              <Typography
                size="body2"
                className="text-secondary-text"
              >
                Upload a file
              </Typography>
            )
          )}
        </div>
      </div>
    );
  },
);

export const Input = forwardRef<
  HTMLInputElement,
  InputProps | InputSearchProps | InputUploadedPictureProps
>(({ ...props }, ref) => {
  switch (props.type) {
    case 'search':
      return (
        <InputSearch
          {...(props as InputSearchProps)}
          ref={ref}
        />
      );
    case 'password':
      return (
        <InputPassword
          {...props}
          ref={ref}
        />
      );
    case 'upload-file':
      return (
        <InputUploadedPicture
          {...props}
          ref={ref}
        />
      );
    default:
      return (
        <InputField
          {...props}
          ref={ref}
        />
      );
  }
});

InputField.displayName = 'InputField';
InputSearch.displayName = 'InputSearch';
InputPassword.displayName = 'InputPassword';
InputUploadedPicture.displayName = 'InputUploadedPicture';
Input.displayName = 'Input';
