import React from 'react';
import { useStyles } from 'src/pages/Login/component/Data/style';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextFieldOutlinedActive from 'src/pages/Login/component/TextFieldOutlinedActive';
import TextFieldOutlinedActive1 from 'src/pages/Login/component/TextFieldOutlinedActive1';

interface IDataProps {
}

const Data: React.FC<IDataProps> = ({ }) => {
    const classes = useStyles({});
    const [value, setValue] = React.useState<number>(0);

    return (
        <div className={classes.root} >
            <Tabs
                className={classes.tabs}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
            >
                <Tab
                    className={classes.tab}
                    classes={{ root: classes.root1 }}
                    label={'Login'}
                />
                <Tab
                    className={classes.tab}
                    classes={{ root: classes.root2 }}
                    label={'Register'}
                />
                <Tab
                    className={classes.tab}
                    classes={{ root: classes.root3 }}
                    label={'Forget'}
                />
            </Tabs>
            <TextFieldOutlinedActive />
            <TextFieldOutlinedActive1 />
            <div className={classes.buttonH56px} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMzkyIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMzkyIDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxyZWN0IHg9IjgiIHk9IjEyIiB3aWR0aD0iMzc2IiBoZWlnaHQ9IjU2IiByeD0iNCIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8L2c+CjxwYXRoIGQ9Ik0xNzcuMTMgNDMuNjE5MUgxODEuNjQ4VjQ1SDE3NS40VjM1LjA0NjlIMTc3LjEzVjQzLjYxOTFaTTE5MS4yMyA0MC4yODMyQzE5MS4yMyA0MS4yNTg1IDE5MS4wNjIgNDIuMTE1MiAxOTAuNzI1IDQyLjg1MzVDMTkwLjM4NyA0My41ODcyIDE4OS45MDQgNDQuMTUyMyAxODkuMjc1IDQ0LjU0ODhDMTg4LjY1MSA0NC45NDA4IDE4Ny45MzEgNDUuMTM2NyAxODcuMTE1IDQ1LjEzNjdDMTg2LjMwOSA0NS4xMzY3IDE4NS41ODkgNDQuOTQwOCAxODQuOTU1IDQ0LjU0ODhDMTg0LjMyNiA0NC4xNTIzIDE4My44MzkgNDMuNTg5NSAxODMuNDkyIDQyLjg2MDRDMTgzLjE1IDQyLjEzMTIgMTgyLjk3NyA0MS4yOTA0IDE4Mi45NzMgNDAuMzM3OVYzOS43NzczQzE4Mi45NzMgMzguODA2NiAxODMuMTQ0IDM3Ljk0OTkgMTgzLjQ4NSAzNy4yMDdDMTgzLjgzMiAzNi40NjQyIDE4NC4zMTcgMzUuODk2OCAxODQuOTQxIDM1LjUwNDlDMTg1LjU3IDM1LjEwODQgMTg2LjI5IDM0LjkxMDIgMTg3LjEwMiAzNC45MTAyQzE4Ny45MTMgMzQuOTEwMiAxODguNjMxIDM1LjEwNjEgMTg5LjI1NSAzNS40OThDMTg5Ljg4NCAzNS44ODU0IDE5MC4zNjkgMzYuNDQ2IDE5MC43MTEgMzcuMTc5N0MxOTEuMDUzIDM3LjkwODkgMTkxLjIyNiAzOC43NTg4IDE5MS4yMyAzOS43Mjk1VjQwLjI4MzJaTTE4OS41MDEgMzkuNzYzN0MxODkuNTAxIDM4LjY2MDggMTg5LjI5MSAzNy44MTU0IDE4OC44NzIgMzcuMjI3NUMxODguNDU3IDM2LjYzOTYgMTg3Ljg2NyAzNi4zNDU3IDE4Ny4xMDIgMzYuMzQ1N0MxODYuMzU0IDM2LjM0NTcgMTg1Ljc2OSAzNi42Mzk2IDE4NS4zNDUgMzcuMjI3NUMxODQuOTI1IDM3LjgxMDkgMTg0LjcxMSAzOC42MzggMTg0LjcwMiAzOS43MDlWNDAuMjgzMkMxODQuNzAyIDQxLjM3NyAxODQuOTE0IDQyLjIyMjMgMTg1LjMzOCA0Mi44MTkzQzE4NS43NjYgNDMuNDE2MyAxODYuMzU5IDQzLjcxNDggMTg3LjExNSA0My43MTQ4QzE4Ny44ODEgNDMuNzE0OCAxODguNDY5IDQzLjQyMzIgMTg4Ljg3OSA0Mi44Mzk4QzE4OS4yOTQgNDIuMjU2NSAxODkuNTAxIDQxLjQwNDMgMTg5LjUwMSA0MC4yODMyVjM5Ljc2MzdaTTIwMS4zMzIgNDMuNzA4QzIwMC45NzIgNDQuMTc3NCAyMDAuNDczIDQ0LjUzMjkgMTk5LjgzNSA0NC43NzQ0QzE5OS4xOTcgNDUuMDE2IDE5OC40NzIgNDUuMTM2NyAxOTcuNjYxIDQ1LjEzNjdDMTk2LjgyNyA0NS4xMzY3IDE5Ni4wODkgNDQuOTQ3NiAxOTUuNDQ2IDQ0LjU2OTNDMTk0LjgwNCA0NC4xOTExIDE5NC4zMDcgNDMuNjUxIDE5My45NTYgNDIuOTQ5MkMxOTMuNjEgNDIuMjQyOCAxOTMuNDMgNDEuNDIwMiAxOTMuNDE2IDQwLjQ4MTRWMzkuNzAyMUMxOTMuNDE2IDM4LjE5ODIgMTkzLjc3NiAzNy4wMjQ3IDE5NC40OTYgMzYuMTgxNkMxOTUuMjE2IDM1LjMzNCAxOTYuMjIxIDM0LjkxMDIgMTk3LjUxMSAzNC45MTAyQzE5OC42MTggMzQuOTEwMiAxOTkuNDk4IDM1LjE4MzYgMjAwLjE0OSAzNS43MzA1QzIwMC44MDEgMzYuMjc3MyAyMDEuMTkzIDM3LjA2NTggMjAxLjMyNSAzOC4wOTU3SDE5OS42M0MxOTkuNDM4IDM2Ljg5NzEgMTk4Ljc0MyAzNi4yOTc5IDE5Ny41NDUgMzYuMjk3OUMxOTYuNzcgMzYuMjk3OSAxOTYuMTggMzYuNTc4MSAxOTUuNzc0IDM3LjEzODdDMTk1LjM3MyAzNy42OTQ3IDE5NS4xNjYgMzguNTEyNyAxOTUuMTUyIDM5LjU5MjhWNDAuMzU4NEMxOTUuMTUyIDQxLjQzMzkgMTk1LjM3OCA0Mi4yNzAyIDE5NS44MjkgNDIuODY3MkMxOTYuMjg1IDQzLjQ1OTYgMTk2LjkxNiA0My43NTU5IDE5Ny43MjMgNDMuNzU1OUMxOTguNjA3IDQzLjc1NTkgMTk5LjIzNiA0My41NTUzIDE5OS42MDkgNDMuMTU0M1Y0MS4yMDYxSDE5Ny41NTlWMzkuODkzNkgyMDEuMzMyVjQzLjcwOFpNMjA1LjgwOCA0NUgyMDQuMDg1VjM1LjA0NjlIMjA1LjgwOFY0NVpNMjE2LjU3OSA0NUgyMTQuODVMMjEwLjQxMyAzNy45Mzg1VjQ1SDIwOC42ODRWMzUuMDQ2OUgyMTAuNDEzTDIxNC44NjMgNDIuMTM1N1YzNS4wNDY5SDIxNi41NzlWNDVaIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzkyIiBoZWlnaHQ9IjcyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iLTQiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIyMjIuODU3IiB5MT0iNy4zMzMzMyIgeDI9IjIyMi44NTciIHkyPSIxMTIuOTE3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMzRDkwRTMiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K'/>
            </div>
        </div>
    );
};

export default Data;



