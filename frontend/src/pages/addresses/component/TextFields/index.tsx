import React from 'react';
import { useStyles } from 'src/pages/addresses/component/TextFields/style';
import TextFieldOutlinedActive6 from 'src/pages/addresses/component/TextFieldOutlinedActive6';
import TextFieldOutlinedActive7 from 'src/pages/addresses/component/TextFieldOutlinedActive7';
import TextFieldOutlinedActive8 from 'src/pages/addresses/component/TextFieldOutlinedActive8';
import TextFieldOutlinedActive9 from 'src/pages/addresses/component/TextFieldOutlinedActive9';

interface ITextFieldsProps {
}

const TextFields: React.FC<ITextFieldsProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <TextFieldOutlinedActive6 />
            <TextFieldOutlinedActive7 />
            <TextFieldOutlinedActive8 />
            <TextFieldOutlinedActive9 />
            <div className={classes.buttonH56px} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMjU2IDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxyZWN0IHg9IjgiIHk9IjEyIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjU2IiByeD0iNCIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8L2c+CjxwYXRoIGQ9Ik03OS4wNDQ5IDQyLjQzNjVDNzkuMDQ0OSA0MS45OTkgNzguODkgNDEuNjYxOCA3OC41ODAxIDQxLjQyNDhDNzguMjc0NyA0MS4xODc4IDc3LjcyMSA0MC45NDg2IDc2LjkxODkgNDAuNzA3Qzc2LjExNjkgNDAuNDY1NSA3NS40Nzg4IDQwLjE5NjYgNzUuMDA0OSAzOS45MDA0Qzc0LjA5OCAzOS4zMzA3IDczLjY0NDUgMzguNTg3OSA3My42NDQ1IDM3LjY3MTlDNzMuNjQ0NSAzNi44Njk4IDczLjk3MDQgMzYuMjA5IDc0LjYyMjEgMzUuNjg5NUM3NS4yNzgzIDM1LjE2OTkgNzYuMTI4MyAzNC45MTAyIDc3LjE3MTkgMzQuOTEwMkM3Ny44NjQ2IDM0LjkxMDIgNzguNDgyMSAzNS4wMzc4IDc5LjAyNDQgMzUuMjkzQzc5LjU2NjcgMzUuNTQ4MiA3OS45OTI4IDM1LjkxMjggODAuMzAyNyAzNi4zODY3QzgwLjYxMjYgMzYuODU2MSA4MC43Njc2IDM3LjM3NzkgODAuNzY3NiAzNy45NTIxSDc5LjA0NDlDNzkuMDQ0OSAzNy40MzI2IDc4Ljg4MDkgMzcuMDI3IDc4LjU1MjcgMzYuNzM1NEM3OC4yMjkyIDM2LjQzOTEgNzcuNzY0MyAzNi4yOTEgNzcuMTU4MiAzNi4yOTFDNzYuNTkzMSAzNi4yOTEgNzYuMTUzMyAzNi40MTE4IDc1LjgzODkgMzYuNjUzM0M3NS41MjkgMzYuODk0OSA3NS4zNzQgMzcuMjMyMSA3NS4zNzQgMzcuNjY1Qzc1LjM3NCAzOC4wMjk2IDc1LjU0MjYgMzguMzM1IDc1Ljg3OTkgMzguNTgxMUM3Ni4yMTcxIDM4LjgyMjYgNzYuNzczMSAzOS4wNTk2IDc3LjU0NzkgMzkuMjkyQzc4LjMyMjYgMzkuNTE5OSA3OC45NDQ3IDM5Ljc4MTkgNzkuNDE0MSA0MC4wNzgxQzc5Ljg4MzUgNDAuMzY5OCA4MC4yMjc1IDQwLjcwNyA4MC40NDYzIDQxLjA4OThDODAuNjY1IDQxLjQ2ODEgODAuNzc0NCA0MS45MTI0IDgwLjc3NDQgNDIuNDIyOUM4MC43NzQ0IDQzLjI1MjMgODAuNDU1NCA0My45MTMxIDc5LjgxNzQgNDQuNDA1M0M3OS4xODM5IDQ0Ljg5MjkgNzguMzIyNiA0NS4xMzY3IDc3LjIzMzQgNDUuMTM2N0M3Ni41MTMzIDQ1LjEzNjcgNzUuODUwMyA0NS4wMDQ2IDc1LjI0NDEgNDQuNzQwMkM3NC42NDI2IDQ0LjQ3MTQgNzQuMTczMiA0NC4xMDIyIDczLjgzNTkgNDMuNjMyOEM3My41MDMzIDQzLjE2MzQgNzMuMzM2OSA0Mi42MTY1IDczLjMzNjkgNDEuOTkyMkg3NS4wNjY0Qzc1LjA2NjQgNDIuNTU3MyA3NS4yNTMzIDQyLjk5NDggNzUuNjI3IDQzLjMwNDdDNzYuMDAwNyA0My42MTQ2IDc2LjUzNjEgNDMuNzY5NSA3Ny4yMzM0IDQzLjc2OTVDNzcuODM1IDQzLjc2OTUgNzguMjg2MSA0My42NDg4IDc4LjU4NjkgNDMuNDA3MkM3OC44OTIzIDQzLjE2MTEgNzkuMDQ0OSA0Mi44Mzc2IDc5LjA0NDkgNDIuNDM2NVpNODguNjEzMyA0Mi42ODI2SDg0Ljc1NzhMODMuOTUxMiA0NUg4Mi4xNTMzTDg1LjkxMzEgMzUuMDQ2OUg4Ny40NjQ4TDkxLjIzMTQgNDVIODkuNDI2OEw4OC42MTMzIDQyLjY4MjZaTTg1LjI0MzIgNDEuMjg4MUg4OC4xMjc5TDg2LjY4NTUgMzcuMTU5Mkw4NS4yNDMyIDQxLjI4ODFaTTk2LjA4OTggNDIuODMzTDk4LjYxOTEgMzUuMDQ2OUgxMDAuNTJMOTYuOTM3NSA0NUg5NS4yNjI3TDkxLjY5NDMgMzUuMDQ2OUg5My41ODc5TDk2LjA4OTggNDIuODMzWk0xMDguMjE1IDQwLjU1NjZIMTA0LjEyN1Y0My42MTkxSDEwOC45MDVWNDVIMTAyLjM5N1YzNS4wNDY5SDEwOC44NTdWMzYuNDQxNEgxMDQuMTI3VjM5LjE4OTVIMTA4LjIxNVY0MC41NTY2Wk0xMjIuODk1IDQxLjc1OThDMTIyLjc5NCA0Mi44MjE2IDEyMi40MDIgNDMuNjUxIDEyMS43MTkgNDQuMjQ4QzEyMS4wMzUgNDQuODQwNSAxMjAuMTI2IDQ1LjEzNjcgMTE4Ljk5MSA0NS4xMzY3QzExOC4xOTggNDUuMTM2NyAxMTcuNDk5IDQ0Ljk0OTkgMTE2Ljg5MyA0NC41NzYyQzExNi4yOTEgNDQuMTk3OSAxMTUuODI2IDQzLjY2MjQgMTE1LjQ5OCA0Mi45Njk3QzExNS4xNyA0Mi4yNzcgMTE0Ljk5OSA0MS40NzI3IDExNC45ODUgNDAuNTU2NlYzOS42MjdDMTE0Ljk4NSAzOC42ODgyIDExNS4xNTIgMzcuODYxIDExNS40ODQgMzcuMTQ1NUMxMTUuODE3IDM2LjQzIDExNi4yOTMgMzUuODc4NiAxMTYuOTEzIDM1LjQ5MTJDMTE3LjUzNyAzNS4xMDM4IDExOC4yNTcgMzQuOTEwMiAxMTkuMDczIDM0LjkxMDJDMTIwLjE3MiAzNC45MTAyIDEyMS4wNTYgMzUuMjA4NyAxMjEuNzI2IDM1LjgwNTdDMTIyLjM5NiAzNi40MDI3IDEyMi43ODUgMzcuMjQ1OCAxMjIuODk1IDM4LjMzNUgxMjEuMTcyQzEyMS4wOSAzNy42MTk1IDEyMC44OCAzNy4xMDQ1IDEyMC41NDMgMzYuNzlDMTIwLjIxIDM2LjQ3MSAxMTkuNzIgMzYuMzExNSAxMTkuMDczIDM2LjMxMTVDMTE4LjMyMSAzNi4zMTE1IDExNy43NDMgMzYuNTg3MiAxMTcuMzM3IDM3LjEzODdDMTE2LjkzNiAzNy42ODU1IDExNi43MzEgMzguNDg5OSAxMTYuNzIyIDM5LjU1MThWNDAuNDMzNkMxMTYuNzIyIDQxLjUwOTEgMTE2LjkxMyA0Mi4zMjk0IDExNy4yOTYgNDIuODk0NUMxMTcuNjgzIDQzLjQ1OTYgMTE4LjI0OCA0My43NDIyIDExOC45OTEgNDMuNzQyMkMxMTkuNjcgNDMuNzQyMiAxMjAuMTgxIDQzLjU4OTUgMTIwLjUyMiA0My4yODQyQzEyMC44NjQgNDIuOTc4OCAxMjEuMDgxIDQyLjQ3MDcgMTIxLjE3MiA0MS43NTk4SDEyMi44OTVaTTEzMy4wOTkgNDVIMTMxLjM3NlY0MC41NzcxSDEyNi45MjZWNDVIMTI1LjE5NlYzNS4wNDY5SDEyNi45MjZWMzkuMTg5NUgxMzEuMzc2VjM1LjA0NjlIMTMzLjA5OVY0NVpNMTQxLjU5NCA0Mi42ODI2SDEzNy43MzhMMTM2LjkzMiA0NUgxMzUuMTM0TDEzOC44OTQgMzUuMDQ2OUgxNDAuNDQ1TDE0NC4yMTIgNDVIMTQyLjQwN0wxNDEuNTk0IDQyLjY4MjZaTTEzOC4yMjQgNDEuMjg4MUgxNDEuMTA4TDEzOS42NjYgMzcuMTU5MkwxMzguMjI0IDQxLjI4ODFaTTE1My45OTIgNDVIMTUyLjI2M0wxNDcuODI2IDM3LjkzODVWNDVIMTQ2LjA5N1YzNS4wNDY5SDE0Ny44MjZMMTUyLjI3NiA0Mi4xMzU3VjM1LjA0NjlIMTUzLjk5MlY0NVpNMTY0LjQxNSA0My43MDhDMTY0LjA1NSA0NC4xNzc0IDE2My41NTYgNDQuNTMyOSAxNjIuOTE4IDQ0Ljc3NDRDMTYyLjI4IDQ1LjAxNiAxNjEuNTU1IDQ1LjEzNjcgMTYwLjc0NCA0NS4xMzY3QzE1OS45MSA0NS4xMzY3IDE1OS4xNzIgNDQuOTQ3NiAxNTguNTI5IDQ0LjU2OTNDMTU3Ljg4NyA0NC4xOTExIDE1Ny4zOSA0My42NTEgMTU3LjAzOSA0Mi45NDkyQzE1Ni42OTMgNDIuMjQyOCAxNTYuNTEzIDQxLjQyMDIgMTU2LjQ5OSA0MC40ODE0VjM5LjcwMjFDMTU2LjQ5OSAzOC4xOTgyIDE1Ni44NTkgMzcuMDI0NyAxNTcuNTc5IDM2LjE4MTZDMTU4LjI5OSAzNS4zMzQgMTU5LjMwNCAzNC45MTAyIDE2MC41OTQgMzQuOTEwMkMxNjEuNzAxIDM0LjkxMDIgMTYyLjU4MSAzNS4xODM2IDE2My4yMzIgMzUuNzMwNUMxNjMuODg0IDM2LjI3NzMgMTY0LjI3NiAzNy4wNjU4IDE2NC40MDggMzguMDk1N0gxNjIuNzEzQzE2Mi41MjEgMzYuODk3MSAxNjEuODI2IDM2LjI5NzkgMTYwLjYyOCAzNi4yOTc5QzE1OS44NTMgMzYuMjk3OSAxNTkuMjYzIDM2LjU3ODEgMTU4Ljg1NyAzNy4xMzg3QzE1OC40NTYgMzcuNjk0NyAxNTguMjQ5IDM4LjUxMjcgMTU4LjIzNSAzOS41OTI4VjQwLjM1ODRDMTU4LjIzNSA0MS40MzM5IDE1OC40NjEgNDIuMjcwMiAxNTguOTEyIDQyLjg2NzJDMTU5LjM2OCA0My40NTk2IDE1OS45OTkgNDMuNzU1OSAxNjAuODA2IDQzLjc1NTlDMTYxLjY5IDQzLjc1NTkgMTYyLjMxOSA0My41NTUzIDE2Mi42OTIgNDMuMTU0M1Y0MS4yMDYxSDE2MC42NDJWMzkuODkzNkgxNjQuNDE1VjQzLjcwOFpNMTcyLjg4MyA0MC41NTY2SDE2OC43OTVWNDMuNjE5MUgxNzMuNTczVjQ1SDE2Ny4wNjVWMzUuMDQ2OUgxNzMuNTI1VjM2LjQ0MTRIMTY4Ljc5NVYzOS4xODk1SDE3Mi44ODNWNDAuNTU2NlpNMTgwLjkzNCA0Mi40MzY1QzE4MC45MzQgNDEuOTk5IDE4MC43NzkgNDEuNjYxOCAxODAuNDY5IDQxLjQyNDhDMTgwLjE2MyA0MS4xODc4IDE3OS42MSA0MC45NDg2IDE3OC44MDggNDAuNzA3QzE3OC4wMDYgNDAuNDY1NSAxNzcuMzY4IDQwLjE5NjYgMTc2Ljg5NCAzOS45MDA0QzE3NS45ODcgMzkuMzMwNyAxNzUuNTMzIDM4LjU4NzkgMTc1LjUzMyAzNy42NzE5QzE3NS41MzMgMzYuODY5OCAxNzUuODU5IDM2LjIwOSAxNzYuNTExIDM1LjY4OTVDMTc3LjE2NyAzNS4xNjk5IDE3OC4wMTcgMzQuOTEwMiAxNzkuMDYxIDM0LjkxMDJDMTc5Ljc1MyAzNC45MTAyIDE4MC4zNzEgMzUuMDM3OCAxODAuOTEzIDM1LjI5M0MxODEuNDU1IDM1LjU0ODIgMTgxLjg4MiAzNS45MTI4IDE4Mi4xOTEgMzYuMzg2N0MxODIuNTAxIDM2Ljg1NjEgMTgyLjY1NiAzNy4zNzc5IDE4Mi42NTYgMzcuOTUyMUgxODAuOTM0QzE4MC45MzQgMzcuNDMyNiAxODAuNzcgMzcuMDI3IDE4MC40NDEgMzYuNzM1NEMxODAuMTE4IDM2LjQzOTEgMTc5LjY1MyAzNi4yOTEgMTc5LjA0NyAzNi4yOTFDMTc4LjQ4MiAzNi4yOTEgMTc4LjA0MiAzNi40MTE4IDE3Ny43MjggMzYuNjUzM0MxNzcuNDE4IDM2Ljg5NDkgMTc3LjI2MyAzNy4yMzIxIDE3Ny4yNjMgMzcuNjY1QzE3Ny4yNjMgMzguMDI5NiAxNzcuNDMxIDM4LjMzNSAxNzcuNzY5IDM4LjU4MTFDMTc4LjEwNiAzOC44MjI2IDE3OC42NjIgMzkuMDU5NiAxNzkuNDM3IDM5LjI5MkMxODAuMjExIDM5LjUxOTkgMTgwLjgzMyAzOS43ODE5IDE4MS4zMDMgNDAuMDc4MUMxODEuNzcyIDQwLjM2OTggMTgyLjExNiA0MC43MDcgMTgyLjMzNSA0MS4wODk4QzE4Mi41NTQgNDEuNDY4MSAxODIuNjYzIDQxLjkxMjQgMTgyLjY2MyA0Mi40MjI5QzE4Mi42NjMgNDMuMjUyMyAxODIuMzQ0IDQzLjkxMzEgMTgxLjcwNiA0NC40MDUzQzE4MS4wNzMgNDQuODkyOSAxODAuMjExIDQ1LjEzNjcgMTc5LjEyMiA0NS4xMzY3QzE3OC40MDIgNDUuMTM2NyAxNzcuNzM5IDQ1LjAwNDYgMTc3LjEzMyA0NC43NDAyQzE3Ni41MzEgNDQuNDcxNCAxNzYuMDYyIDQ0LjEwMjIgMTc1LjcyNSA0My42MzI4QzE3NS4zOTIgNDMuMTYzNCAxNzUuMjI2IDQyLjYxNjUgMTc1LjIyNiA0MS45OTIySDE3Ni45NTVDMTc2Ljk1NSA0Mi41NTczIDE3Ny4xNDIgNDIuOTk0OCAxNzcuNTE2IDQzLjMwNDdDMTc3Ljg4OSA0My42MTQ2IDE3OC40MjUgNDMuNzY5NSAxNzkuMTIyIDQzLjc2OTVDMTc5LjcyNCA0My43Njk1IDE4MC4xNzUgNDMuNjQ4OCAxODAuNDc2IDQzLjQwNzJDMTgwLjc4MSA0My4xNjExIDE4MC45MzQgNDIuODM3NiAxODAuOTM0IDQyLjQzNjVaIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjcyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iLTQiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIxNDUuMTQzIiB5MT0iNy4zMzMzMyIgeDI9IjE0NS4xNDMiIHkyPSIxMTIuOTE3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMzRDkwRTMiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K'/>
            </div>
        </div>
    );
};

export default TextFields;



