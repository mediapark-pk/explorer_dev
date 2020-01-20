import React from 'react';
import { useStyles } from 'src/app/component/Skeleton/style';
import { useHistory } from 'react-router';
import clsx from 'clsx';

interface ISkeletonProps {
    width?: number;
    height?: number;
    className?: string;
    inline?: boolean;
    top?: number;
    left?: number;
}

const Skeleton: React.FC<ISkeletonProps> = ({ className, ...props }) => {
    const classes = useStyles(props);

    return (
        <div className={clsx(classes.root, className)} >
        </div>
    );
};

export default Skeleton;
