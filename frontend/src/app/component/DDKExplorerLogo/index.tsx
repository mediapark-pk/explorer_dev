import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from 'src/app/component/DDKExplorerLogo/style';

interface IDDKExplorerLogoProps {
}

const DDKExplorerLogo: React.FC<IDDKExplorerLogoProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <NavLink to="/" className={classes.sign}>
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1Ljk2MzYgMzJDNy4xNjA0NiAzMiAwIDI0LjgyNTggMCAxNi4wMDU4QzAgNy4xODU4IDcuMTYwNDYgMCAxNS45NjM2IDBDMjQuNzY2NiAwIDMxLjkyNzEgNy4xNzQyMSAzMS45MjcxIDE1Ljk5NDJDMzEuOTI3MSAyNC44MTQyIDI0Ljc2NjYgMzIgMTUuOTYzNiAzMlpNMTUuOTYzNiAyLjAzOTg0QzguMjgyNTQgMi4wMzk4NCAyLjAzNTkzIDguMjk4NDQgMi4wMzU5MyAxNS45OTQyQzIuMDM1OTMgMjMuNjkgOC4yODI1NCAyOS45NDg2IDE1Ljk2MzYgMjkuOTQ4NkMyMy42NDQ2IDI5Ljk0ODYgMjkuODkxMiAyMy42OSAyOS44OTEyIDE1Ljk5NDJDMjkuODkxMiA4LjI5ODQ0IDIzLjY0NDYgMi4wMzk4NCAxNS45NjM2IDIuMDM5ODRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTguMjQzMSA1Ljc3NjEySDE0LjQwNDZIMTAuOTQ2N1Y5LjIwODIxVjE4LjQzODJIMTQuNDA0NlY5LjIwODIxSDE4LjI0MzFDMTguNzQ2NyA5LjIwODIxIDE5LjE0OTYgOS42MDgwNyAxOS4xNDk2IDEwLjEwNzlMMjIuNTUxNiAxMC4wNjM1QzIyLjU1MTYgNy42OTc2NSAyMC42MjY4IDUuNzc2MTIgMTguMjQzMSA1Ljc3NjEyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE4LjIzMTkgMjYuODI0QzIwLjYxNTYgMjYuODI0IDIyLjY3NDcgMjQuOTAyNSAyMi42NzQ3IDIyLjUzNjdWMTguNzI2OVYxNC41NzI5SDE5LjIyNzlMMTkuMjM5MSAxOC43MjY5VjIyLjU0NzhDMTkuMjM5MSAyMy4yMTQyIDE4Ljk1OTMgMjMuNTE0MSAxOC4xODcyIDIzLjUxNDFIMTQuNDA0NlYyMi45NTg3SDEwLjk0NjdWMjYuODI0SDE4LjIzMTlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOS45MjgwOCAxOC45OTM1VjE0LjAzOThIMTAuMzg2OVYxMC42MTg4SDkuOTI4MDhINi40NzAwOVYxNC4wMzk4VjE4Ljk5MzVWMjIuNDI1NkgxOC42NTdWMTguOTkzNUg5LjkyODA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIyLjk0MyAxMC42MTg4QzIwLjYwNDEgMTAuNjE4OCAxNC45NjM5IDEwLjYxODggMTQuOTYzOSAxMC42MTg4VjE0LjA1MDlDMTQuOTYzOSAxNC4wNTA5IDIxLjM2NTEgMTQuMDUwOSAyMy4zMDExIDE0LjA1MDlDMjMuODA0NyAxNC4wNTA5IDI0LjMwODMgMTQuNTg0IDI0LjMwODMgMTUuMDYxNkMyNC4zMDgzIDE1LjgzOTEgMjQuMzA4MyAxOC4xMzgzIDI0LjMwODMgMTguMTM4M0MyNC4zMDgzIDE4LjkwNDcgMjMuNzkzNSAxOS4wMzggMjMuMjg5OSAxOS4wMzhIMjMuMjMzOVYyMi40MTQ1SDIzLjQwMThDMjUuNzYzMSAyMi4zODEyIDI3Ljc2NjMgMjAuNDgxOSAyNy43NjYzIDE4LjEzODNDMjcuNzY2MyAxOC4xMzgzIDI3Ljc2NjMgMTYuMTYxMiAyNy43NjYzIDE1LjEzOTRDMjcuNzU1MSAxMi44MjkxIDI2LjIxMDcgMTAuNjE4OCAyMi45NDMgMTAuNjE4OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo='/>
            </NavLink>
            <NavLink to="/" className={classes.text}>
                <img className={classes.img} src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjMzIiBoZWlnaHQ9IjE3IiB2aWV3Qm94PSIwIDAgMjMzIDE3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMCAxNi43Mzc4VjAuMjAxNDdIMi45MDk3OVYxNi43Mzc4SDBaTTEzLjcyODggMTYuNzM3OEw0LjQwNDAxIDkuNDU2NDZDNC4xNDU2MSA5LjI1NTc1IDMuOTc3MDkgOS4wNjYxOSAzLjkwOTY4IDguODc2NjNDMy44NDIyOCA4LjY4NzA3IDMuODA4NTcgOC40NzUyMSAzLjgwODU3IDguMjUyMkMzLjgwODU3IDcuOTk1NzMgMy44NTM1MSA3Ljc2MTU3IDMuOTQzMzkgNy41NzIwMUM0LjAzMzI2IDcuMzcxMyA0LjIzNTQ5IDcuMTU5NDQgNC41Mzg4MyA2LjkzNjQzTDEzLjM1ODEgMC4yMDE0N0gxNy44Mjk1TDYuOTIwNTkgOC4yNzQ1TDE4LjE3NzggMTYuNzM3OEgxMy43Mjg4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTI1LjUzNjggMTYuNzM3MUMyNC4zNzk2IDE2LjczNzEgMjMuMzAxMSAxNi41MjUyIDIyLjMxMjUgMTYuMDkwM0MyMS4zMjM4IDE1LjY1NTUgMjAuNDcgMTUuMDY0NSAxOS43NTA5IDE0LjMxNzRDMTkuMDIwNyAxMy41NzAzIDE4LjQ1ODkgMTIuNjc4MiAxOC4wNTQ1IDExLjY0MTJDMTcuNjUgMTAuNjE1NCAxNy40NDc4IDkuNTAwMzMgMTcuNDQ3OCA4LjI5NjA2QzE3LjQ0NzggNy4wODA2NSAxNy42NSA1Ljk3Njc0IDE4LjA1NDUgNC45NzMxOUMxOC40NTg5IDMuOTY5NjMgMTkuMDIwNyAzLjEyMjE5IDE5Ljc1MDkgMi40MDg1NUMyMC40ODEyIDEuNzA2MDYgMjEuMzM1IDEuMTU5NjggMjIuMzEyNSAwLjc2OTQxM0MyMy4zMDExIDAuMzc5MTQyIDI0LjM2ODQgMC4xODk1ODIgMjUuNTM2OCAwLjE4OTU4MkgyOS41OTI1QzMwLjc5NDcgMC4xODk1ODIgMzEuOTA2OSAwLjM5MDI5MyAzMi45MDY4IDAuNzgwNTY0QzMzLjkwNjcgMS4xNzA4MyAzNC43NzE3IDEuNzI4MzYgMzUuNDkwOCAyLjQ0MkMzNi4yMDk4IDMuMTU1NjQgMzYuNzcxNSA0LjAwMzA4IDM3LjE2NDcgNC45OTU0OUMzNy41NTggNS45ODc4OSAzNy43NjAyIDcuMDgwNjUgMzcuNzYwMiA4LjI4NDkxQzM3Ljc2MDIgOS40NzgwMyAzNy41NTggMTAuNTkzMSAzNy4xNTM1IDExLjYzMDFDMzYuNzQ5MSAxMi42NTU5IDM2LjE4NzMgMTMuNTQ4IDM1LjQ1NzEgMTQuMzA2MkMzNC43MjY4IDE1LjA1MzMgMzMuODczIDE1LjY0NDMgMzIuODg0MyAxNi4wNzkyQzMxLjg5NTcgMTYuNTE0MSAzMC43OTQ3IDE2LjcyNTkgMjkuNjAzOCAxNi43MjU5SDI1LjUzNjhWMTYuNzM3MVpNMjkuNTkyNSAxMy44NDkxQzMwLjM1NjUgMTMuODQ5MSAzMS4wNjQzIDEzLjcxNTMgMzEuNzA0NyAxMy40MzY1QzMyLjM0NSAxMy4xNjg5IDMyLjg5NTUgMTIuNzg5OCAzMy4zNjc0IDEyLjMxMDNDMzMuODI4IDExLjgzMDggMzQuMTk4OCAxMS4yNjIxIDM0LjQ1NzIgMTAuNTkzMUMzNC43MTU2IDkuOTI0MDUgMzQuODUwNCA5LjIxMDQxIDM0Ljg1MDQgOC40Mjk4N0MzNC44NTA0IDcuNjQ5MzMgMzQuNzE1NiA2LjkzNTY5IDM0LjQ1NzIgNi4yNzc4MUMzNC4xOTg4IDUuNjE5OTIgMzMuODM5MyA1LjA1MTI0IDMzLjM2NzQgNC41ODI5MkMzMi44OTU1IDQuMTE0NTkgMzIuMzQ1IDMuNzQ2NjIgMzEuNzA0NyAzLjQ3OTAxQzMxLjA2NDMgMy4yMTEzOSAzMC4zNTY1IDMuMDc3NTkgMjkuNTkyNSAzLjA3NzU5SDI1LjUzNjhDMjQuNzg0MSAzLjA3NzU5IDI0LjA5ODggMy4yMTEzOSAyMy40NTg0IDMuNDc5MDFDMjIuODI5MiAzLjc0NjYyIDIyLjI3ODcgNC4xMTQ1OSAyMS44MTgxIDQuNTgyOTJDMjEuMzU3NSA1LjA1MTI0IDIwLjk5OCA1LjYwODc3IDIwLjczOTYgNi4yNjY2NkMyMC40ODEyIDYuOTEzMzkgMjAuMzQ2NCA3LjYzODE4IDIwLjM0NjQgOC40Mjk4N0MyMC4zNDY0IDkuMTk5MjYgMjAuNDgxMiA5LjkyNDA1IDIwLjczOTYgMTAuNTkzMUMyMC45OTggMTEuMjYyMSAyMS4zNTc1IDExLjgzMDggMjEuODE4MSAxMi4zMTAzQzIyLjI3ODcgMTIuNzg5OCAyMi44MTggMTMuMTY4OSAyMy40NTg0IDEzLjQzNjVDMjQuMDg3NSAxMy43MDQxIDI0Ljc4NDEgMTMuODQ5MSAyNS41MzY4IDEzLjg0OTFIMjkuNTkyNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00MC43MjU5IDE2LjczNzFWMC4yMDA3MzRINDMuNjM1NlYxNi43MzcxSDQwLjcyNTlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDkuODQ4NiA0LjYzODY1VjE2LjczN0g0Ny4wNzM2VjEuNzI4MzRDNDcuMDczNiAxLjE5MzExIDQ3LjIwODUgMC43ODA1NDEgNDcuNDc4MSAwLjQ2ODMyNUM0Ny43NDc3IDAuMTU2MTA4IDQ4LjEwNzIgMCA0OC41Njc5IDBDNDguNzgxMyAwIDQ4Ljk4MzUgMC4wNDQ2MDIgNDkuMTg1OCAwLjEzMzgwN0M0OS4zODggMC4yMjMwMTEgNDkuNTkwMiAwLjM3OTEyIDQ5LjgwMzcgMC41OTA5ODFMNjEuNTY2NSAxMi4xNjUzVjAuMDY2OTAzNEg2NC4zNDE1VjE1LjIyMDZDNjQuMzQxNSAxNS43NjY5IDY0LjIwNjYgMTYuMTkwNyA2My45MzcgMTYuNDkxN0M2My42Njc0IDE2Ljc5MjggNjMuMzE5MSAxNi45NDg5IDYyLjg5MjIgMTYuOTQ4OUM2Mi40MjAzIDE2Ljk0ODkgNjEuOTcwOSAxNi43NDgyIDYxLjU2NjUgMTYuMzM1Nkw0OS44NDg2IDQuNjM4NjVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzMuMTE5IDE2LjczOTZWMC4yMDMzMDhIODcuOTkzOFYzLjA5MTMxSDc2LjAwNjNWMTMuODUxNkg4OC4wMTYyVjE2LjczOTZINzMuMTE5Wk03OC4xNDA5IDkuNTQ3NVY3LjExNjY3SDg3LjM3NTlWOS41NDc1SDc4LjE0MDlaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjU0Ii8+CjxwYXRoIGQ9Ik0xMDcuNzIyIDE2LjczNzFMMTAwLjczNCA5Ljk3OThMOTMuODEzNCAxNi43MzcxSDkwLjAyNzNMOTguOTcwMiA4LjEzOTk1TDkwLjY3ODkgMC4yMDA3MzRIOTQuNjg5N0wxMDEuMDM3IDYuMzIyNDFMMTA3LjI5NSAwLjIwMDczNEgxMTEuMDgxTDEwMi43OSA4LjEzOTk1TDExMS44MjMgMTYuNzM3MUgxMDcuNzIyWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41NCIvPgo8cGF0aCBkPSJNMTE5LjM3MiAxMi4xNDNWOS4zNDQyMkgxMjYuMDY4QzEyNy4wOSA5LjM0NDIyIDEyNy44ODggOS4wNTQzIDEyOC40NjEgOC40NzQ0N0MxMjkuMDM0IDcuODk0NjQgMTI5LjMyNiA3LjEzNjQgMTI5LjMyNiA2LjE5OTc1QzEyOS4zMjYgNS4yNDA4IDEyOS4wMzQgNC40ODI1NiAxMjguNDYxIDMuOTI1MDNDMTI3Ljg4OCAzLjM2NzUgMTI3LjA5IDMuMDg4NzQgMTI2LjA2OCAzLjA4ODc0SDExNy4yNDlWMTYuNzM3MUgxMTQuMzYxVjAuMjAwNzM0SDEyNi4wNTdDMTI3LjAyMyAwLjIwMDczNCAxMjcuODc3IDAuMzQ1NjkyIDEyOC42NDEgMC42MjQ0NTdDMTI5LjM5MyAwLjkwMzIyMSAxMzAuMDM0IDEuMzA0NjQgMTMwLjU1IDEuODA2NDJDMTMxLjA2NyAyLjMxOTM1IDEzMS40NzIgMi45MzI2MyAxMzEuNzQxIDMuNjU3NDJDMTMyLjAxMSA0LjM4MjIxIDEzMi4xNTcgNS4yMDczNSAxMzIuMTU3IDYuMTEwNTVDMTMyLjE1NyA3LjAwMjU5IDEzMi4wMjIgNy44MTY1OSAxMzEuNzQxIDguNTUyNTNDMTMxLjQ3MiA5LjI4ODQ2IDEzMS4wNjcgOS45MjQwNSAxMzAuNTUgMTAuNDQ4MUMxMzAuMDM0IDEwLjk4MzQgMTI5LjM5MyAxMS4zOTU5IDEyOC42NDEgMTEuNjg1OEMxMjcuODg4IDExLjk4NjkgMTI3LjAyMyAxMi4xMzE5IDEyNi4wNTcgMTIuMTMxOUgxMTkuMzcyVjEyLjE0M1oiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNTQiLz4KPHBhdGggZD0iTTEzNC42NzQgMTYuNzM3MVYwLjIwMDczNEgxMzcuNTg0VjEzLjg0OTFIMTQ4Ljc5NlYxNi43MzcxSDEzNC42NzRaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjU0Ii8+CjxwYXRoIGQ9Ik0xNTguOTUyIDE2LjczNzFDMTU3Ljc5NSAxNi43MzcxIDE1Ni43MTYgMTYuNTI1MiAxNTUuNzI4IDE2LjA5MDNDMTU0LjczOSAxNS42NTU1IDE1My44ODUgMTUuMDY0NSAxNTMuMTY2IDE0LjMxNzRDMTUyLjQzNiAxMy41NzAzIDE1MS44NzQgMTIuNjc4MiAxNTEuNDcgMTEuNjQxMkMxNTEuMDY1IDEwLjYxNTQgMTUwLjg2MyA5LjUwMDMzIDE1MC44NjMgOC4yOTYwNkMxNTAuODYzIDcuMDgwNjUgMTUxLjA2NSA1Ljk3Njc0IDE1MS40NyA0Ljk3MzE5QzE1MS44NzQgMy45Njk2MyAxNTIuNDM2IDMuMTIyMTkgMTUzLjE2NiAyLjQwODU1QzE1My44OTYgMS43MDYwNiAxNTQuNzUgMS4xNTk2OCAxNTUuNzI4IDAuNzY5NDEzQzE1Ni43MTYgMC4zNzkxNDIgMTU3Ljc4NCAwLjE4OTU4MiAxNTguOTUyIDAuMTg5NTgySDE2My4wMDhDMTY0LjIxIDAuMTg5NTgyIDE2NS4zMjIgMC4zOTAyOTMgMTY2LjMyMiAwLjc4MDU2NEMxNjcuMzIyIDEuMTcwODMgMTY4LjE4NyAxLjcyODM2IDE2OC45MDYgMi40NDJDMTY5LjYyNSAzLjE1NTY0IDE3MC4xODcgNC4wMDMwOCAxNzAuNTggNC45OTU0OUMxNzAuOTczIDUuOTg3ODkgMTcxLjE3NSA3LjA4MDY1IDE3MS4xNzUgOC4yODQ5MUMxNzEuMTc1IDkuNDc4MDMgMTcwLjk3MyAxMC41OTMxIDE3MC41NjkgMTEuNjMwMUMxNzAuMTY0IDEyLjY1NTkgMTY5LjYwMyAxMy41NDggMTY4Ljg3MiAxNC4zMDYyQzE2OC4xNDIgMTUuMDUzMyAxNjcuMjg4IDE1LjY0NDMgMTY2LjMgMTYuMDc5MkMxNjUuMzExIDE2LjUxNCAxNjQuMjEgMTYuNzI1OSAxNjMuMDE5IDE2LjcyNTlIMTU4Ljk1MlYxNi43MzcxWk0xNjMuMDA4IDEzLjg0OTFDMTYzLjc3MiAxMy44NDkxIDE2NC40OCAxMy43MTUyIDE2NS4xMiAxMy40MzY1QzE2NS43NiAxMy4xNjg5IDE2Ni4zMTEgMTIuNzg5OCAxNjYuNzgzIDEyLjMxMDNDMTY3LjI0MyAxMS44MzA4IDE2Ny42MTQgMTEuMjYyMSAxNjcuODcyIDEwLjU5MzFDMTY4LjEzMSA5LjkyNDA1IDE2OC4yNjYgOS4yMTA0MSAxNjguMjY2IDguNDI5ODdDMTY4LjI2NiA3LjY0OTMzIDE2OC4xMzEgNi45MzU2OSAxNjcuODcyIDYuMjc3ODFDMTY3LjYxNCA1LjYxOTkyIDE2Ny4yNTUgNS4wNTEyNCAxNjYuNzgzIDQuNTgyOTJDMTY2LjMxMSA0LjExNDU5IDE2NS43NiAzLjc0NjYyIDE2NS4xMiAzLjQ3OTAxQzE2NC40OCAzLjIxMTM5IDE2My43NzIgMy4wNzc1OSAxNjMuMDA4IDMuMDc3NTlIMTU4Ljk1MkMxNTguMTk5IDMuMDc3NTkgMTU3LjUxNCAzLjIxMTM5IDE1Ni44NzQgMy40NzkwMUMxNTYuMjQ0IDMuNzQ2NjIgMTU1LjY5NCA0LjExNDU5IDE1NS4yMzMgNC41ODI5MkMxNTQuNzczIDUuMDUxMjQgMTU0LjQxMyA1LjYwODc3IDE1NC4xNTUgNi4yNjY2NUMxNTMuODk2IDYuOTEzMzkgMTUzLjc2MiA3LjYzODE4IDE1My43NjIgOC40Mjk4N0MxNTMuNzYyIDkuMTk5MjYgMTUzLjg5NiA5LjkyNDA1IDE1NC4xNTUgMTAuNTkzMUMxNTQuNDEzIDExLjI2MjEgMTU0Ljc3MyAxMS44MzA4IDE1NS4yMzMgMTIuMzEwM0MxNTUuNjk0IDEyLjc4OTggMTU2LjIzMyAxMy4xNjg5IDE1Ni44NzQgMTMuNDM2NUMxNTcuNTAzIDEzLjcwNDEgMTU4LjE5OSAxMy44NDkxIDE1OC45NTIgMTMuODQ5MUgxNjMuMDA4WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41NCIvPgo8cGF0aCBkPSJNMTg5LjQ1NCAxNi43MzcxTDE4NS4yNDEgMTIuMTQzSDE3OS4wMDZWOS42MDA2OEgxODUuOTQ5QzE4Ny4wMDUgOS42MDA2OCAxODcuODAzIDkuMzIxOTIgMTg4LjMzMSA4Ljc1MzI0QzE4OC44NyA4LjE4NDU2IDE4OS4xMjggNy4zNTk0MSAxODkuMTI4IDYuMjg4OTZDMTg5LjEyOCA1LjIwNzM1IDE4OC44NDggNC40MTU2NiAxODguMjk3IDMuODkxNThDMTg3LjczNSAzLjM2NzUgMTg2Ljk2IDMuMTExMDQgMTg1Ljk0OSAzLjExMTA0SDE3Ni44NzFWMTYuNzU5NEgxNzMuOTg0VjAuMjAwNzM0SDE4NS45NDlDMTg2Ljg5MyAwLjIwMDczNCAxODcuNzQ3IDAuMzQ1NjkyIDE4OC40ODggMC42MjQ0NTdDMTg5LjI0MSAwLjkwMzIyMSAxODkuODcgMS4zMDQ2NCAxOTAuMzg3IDEuODI4NzJDMTkwLjkwMyAyLjM1MjggMTkxLjMwOCAyLjk4ODM4IDE5MS41NzggMy43MjQzMkMxOTEuODQ3IDQuNDcxNDEgMTkxLjk5MyA1LjI5NjU1IDE5MS45OTMgNi4yMjIwNUMxOTEuOTkzIDcuNjA0NzMgMTkxLjY5IDguNzUzMjQgMTkxLjA4MyA5LjY4OTg5QzE5MC40NzcgMTAuNjI2NSAxODkuNjM0IDExLjI5NTYgMTg4LjU1NSAxMS43MDgxTDE5My41NzcgMTYuNzM3MUgxODkuNDU0WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41NCIvPgo8cGF0aCBkPSJNMTk1LjU1NSAxNi43MzcxVjAuMjAwNzM0SDIxMC40M1YzLjA4ODc0SDE5OC40NDJWMTMuODQ5MUgyMTAuNDUyVjE2LjczNzFIMTk1LjU1NVpNMjAwLjU2NiA5LjU0NDkzVjcuMTE0MUgyMDkuODAxVjkuNTQ0OTNIMjAwLjU2NloiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNTQiLz4KPHBhdGggZD0iTTIyOC44NzcgMTYuNzM3MUwyMjQuNjY0IDEyLjE0M0gyMTguNDI5VjkuNjAwNjhIMjI1LjM3MkMyMjYuNDI4IDkuNjAwNjggMjI3LjIyNSA5LjMyMTkyIDIyNy43NTMgOC43NTMyNEMyMjguMjkzIDguMTg0NTYgMjI4LjU1MSA3LjM1OTQxIDIyOC41NTEgNi4yODg5NkMyMjguNTUxIDUuMjA3MzUgMjI4LjI3IDQuNDE1NjYgMjI3LjcyIDMuODkxNThDMjI3LjE1OCAzLjM2NzUgMjI2LjM4MyAzLjExMTA0IDIyNS4zNzIgMy4xMTEwNEgyMTYuMjk0VjE2Ljc1OTRIMjEzLjQwN1YwLjIwMDczNEgyMjUuMzcyQzIyNi4zMTUgMC4yMDA3MzQgMjI3LjE2OSAwLjM0NTY5MiAyMjcuOTExIDAuNjI0NDU3QzIyOC42NjMgMC45MDMyMjEgMjI5LjI5MyAxLjMwNDY0IDIyOS44MDkgMS44Mjg3MkMyMzAuMzI2IDIuMzUyOCAyMzAuNzMxIDIuOTg4MzggMjMxIDMuNzI0MzJDMjMxLjI3IDQuNDcxNDEgMjMxLjQxNiA1LjI5NjU1IDIzMS40MTYgNi4yMjIwNUMyMzEuNDE2IDcuNjA0NzMgMjMxLjExMyA4Ljc1MzI0IDIzMC41MDYgOS42ODk4OUMyMjkuODk5IDEwLjYyNjUgMjI5LjA1NyAxMS4yOTU2IDIyNy45NzggMTEuNzA4MUwyMzMgMTYuNzM3MUgyMjguODc3WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41NCIvPgo8L3N2Zz4K'/>
            </NavLink>
        </div>
    );
};

export default DDKExplorerLogo;



