import React from 'react';
import { useStyles } from 'src/app/component/ProfileMenu/style';
import DDKBuyButton from 'src/app/component/DDKBuyButton';
import HeaderModel from 'src/app/component/Header/model';
import { useDI } from '@app/core';
import { ButtonBase } from '@material-ui/core';

interface IProfileMenuProps {
}

const ProfileMenu: React.FC<IProfileMenuProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(HeaderModel);

    return (
        <div className={classes.root} >
            <ButtonBase onClick={() => model.onSearchToggle()}>
                <div className={classes.profileButton} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC44Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS41MDIgMTRIMTQuNzA4TDE0LjQzMiAxMy43MjZDMTUuNDA3IDEyLjU4OSAxNiAxMS4xMTUgMTYgOS40OTk5N0MxNiA1LjkwOTk3IDEzLjA5IDIuOTk5OTcgOS41IDIuOTk5OTdDNS45MSAyLjk5OTk3IDMgNS45MDk5NyAzIDkuNDk5OTdDMyAxMy4wOSA1LjkxIDE2IDkuNSAxNkMxMS4xMTUgMTYgMTIuNTg4IDE1LjQwOCAxMy43MjUgMTQuNDM0TDE0LjAwMSAxNC43MDhWMTUuNUwxOC45OTkgMjAuNDkxTDIwLjQ5IDE5TDE1LjUwMiAxNFpNOS41IDE0QzcuMDE0IDE0IDUgMTEuOTg2IDUgOS40OTk5N0M1IDcuMDE0OTcgNy4wMTQgNC45OTk5NyA5LjUgNC45OTk5N0MxMS45ODUgNC45OTk5NyAxNCA3LjAxNDk3IDE0IDkuNDk5OTdDMTQgMTEuOTg2IDExLjk4NSAxNCA5LjUgMTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+Cjwvc3ZnPgo='/>
                </div>
            </ButtonBase>
            <ButtonBase>
                <div className={classes.profileButton} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC44Ij4KPHBhdGggZD0iTTEyIDNDNy4wMzIgMyAzIDcuMDMyIDMgMTJDMyAxNi45NjggNy4wMzIgMjEgMTIgMjFDMTYuOTY4IDIxIDIxIDE2Ljk2OCAyMSAxMkMyMSA3LjAzMiAxNi45NjggMyAxMiAzWk0xMiA1LjdDMTMuNDk0IDUuNyAxNC43IDYuOTA2IDE0LjcgOC40QzE0LjcgOS44OTQgMTMuNDk0IDExLjEgMTIgMTEuMUMxMC41MDYgMTEuMSA5LjMgOS44OTQgOS4zIDguNEM5LjMgNi45MDYgMTAuNTA2IDUuNyAxMiA1LjdaTTEyIDE4LjQ4QzkuNzUgMTguNDggNy43NjEgMTcuMzI4IDYuNiAxNS41ODJDNi42MjcgMTMuNzkxIDEwLjIgMTIuODEgMTIgMTIuODFDMTMuNzkxIDEyLjgxIDE3LjM3MyAxMy43OTEgMTcuNCAxNS41ODJDMTYuMjM5IDE3LjMyOCAxNC4yNSAxOC40OCAxMiAxOC40OFoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9zdmc+Cg=='/>
                </div>
            </ButtonBase>
            <DDKBuyButton />
        </div>
    );
};

export default ProfileMenu;



