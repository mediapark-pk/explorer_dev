import React from 'react';
import { useStyles } from 'src/pages/addresses/component/BaseSurfaceShapeSurfaceMasterShape9/style';

interface IBaseSurfaceShapeSurfaceMasterShape9Props {
}

const BaseSurfaceShapeSurfaceMasterShape9: React.FC<IBaseSurfaceShapeSurfaceMasterShape9Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.baseSurfaceShapeAtomsSquare} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMzc2IiBoZWlnaHQ9IjU2IiB2aWV3Qm94PSIwIDAgMzc2IDU2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMSAxSDk0SDE4OEgzNzVWNTVIMVYxWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo='/>
            </div>
        </div>
    );
};

export default BaseSurfaceShapeSurfaceMasterShape9;



