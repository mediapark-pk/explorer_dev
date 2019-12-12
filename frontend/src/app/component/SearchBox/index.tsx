import React from 'react';
import { useStyles } from 'src/app/component/SearchBox/style';
import { InputBase, ButtonBase, Button } from '@material-ui/core';
import HeaderModel from 'src/app/component/Header/model';
import { useDI } from 'src/core/di';

interface ISearchBoxProps {
}

const SearchBox: React.FC<ISearchBoxProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(HeaderModel);

    return (
        <form className={classes.root} onSubmit={(e) => model.onFormSubmit(e)} >
            <img className={classes.searchBoxIcon} src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC44Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS41MDIgMTRIMTQuNzA4TDE0LjQzMiAxMy43MjZDMTUuNDA3IDEyLjU4OSAxNiAxMS4xMTUgMTYgOS40OTk5N0MxNiA1LjkwOTk3IDEzLjA5IDIuOTk5OTcgOS41IDIuOTk5OTdDNS45MSAyLjk5OTk3IDMgNS45MDk5NyAzIDkuNDk5OTdDMyAxMy4wOSA1LjkxIDE2IDkuNSAxNkMxMS4xMTUgMTYgMTIuNTg4IDE1LjQwOCAxMy43MjUgMTQuNDM0TDE0LjAwMSAxNC43MDhWMTUuNUwxOC45OTkgMjAuNDkxTDIwLjQ5IDE5TDE1LjUwMiAxNFpNOS41IDE0QzcuMDE0IDE0IDUgMTEuOTg2IDUgOS40OTk5N0M1IDcuMDE0OTcgNy4wMTQgNC45OTk5NyA5LjUgNC45OTk5N0MxMS45ODUgNC45OTk5NyAxNCA3LjAxNDk3IDE0IDkuNDk5OTdDMTQgMTEuOTg2IDExLjk4NSAxNCA5LjUgMTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+Cjwvc3ZnPgo='/>
            <InputBase className={classes.searchInput} autoFocus />
            <Button color="primary" className={classes.goSearchButton} onClick={(e) => model.onFormSubmit(e)}>
                Search
            </Button>
            <ButtonBase onClick={() => model.onSearchToggle()}>
                <svg className={classes.searchBoxClose} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14 1.4L12.6 0L7 5.6L1.4 0L0 1.4L5.6 7L0 12.6L1.4 14L7 8.4L12.6 14L14 12.6L8.4 7L14 1.4Z" fill="white"/>
                </svg>
            </ButtonBase>
        </form>
    );
};

export default SearchBox;



