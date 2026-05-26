import * as react_jsx_runtime from 'react/jsx-runtime';

interface AvatarProps {
    initials: string;
    active?: boolean;
    size?: number;
    color?: string;
}
declare function Avatar({ initials, active, size, color }: AvatarProps): react_jsx_runtime.JSX.Element;

export { Avatar, type AvatarProps };
