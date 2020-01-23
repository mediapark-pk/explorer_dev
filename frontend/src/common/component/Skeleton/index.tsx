import React from 'react';
import { useStyles } from 'src/common/component/Skeleton/style';
import clsx from 'clsx';

interface ISkeletonProps {
    width?: number | string;
    height?: number | string;
    className?: string;
    inline?: boolean;
    top?: number;
    left?: number;
}

const Skeleton: React.FC<ISkeletonProps> = ({ className, ...props }) => {
    const classes = useStyles(props);

    return (
        <div className={clsx(className, classes.root)} >
        </div>
    );
};

export default Skeleton;
