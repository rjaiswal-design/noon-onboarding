import * as react_jsx_runtime from 'react/jsx-runtime';
import { CSSProperties } from 'react';

interface SkeletonProps {
    width?: number | string;
    height?: number | string;
    radius?: number | string;
    style?: CSSProperties;
}
declare function Skeleton({ width, height, radius, style }: SkeletonProps): react_jsx_runtime.JSX.Element;

export { Skeleton, type SkeletonProps };
