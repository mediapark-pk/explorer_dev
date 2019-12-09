import React from 'react';
import { useStyles } from 'src/pages/statistics/component/StatisticBlock5/style';
import Typography from '@material-ui/core/Typography';

interface IStatisticBlock5Props {
}

const StatisticBlock5: React.FC<IStatisticBlock5Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                    Average TPS
                </Typography>
                <Typography className={classes.typography1} >
                    45 000 000 DDK
                </Typography>
            </div>
            <div className={classes.div1} >
                <div className={classes.custom2515911} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMzI3IiBoZWlnaHQ9IjE4NSIgdmlld0JveD0iMCAwIDMyNyAxODUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNC4yOTg4IDE4NEgxOC43MDlWMTgzLjIyMUwyMS42NjIxIDE3OS45MzlDMjIuMDk5NiAxNzkuNDQzIDIyLjQwMDQgMTc5LjA0MSAyMi41NjQ1IDE3OC43MzJDMjIuNzMyNCAxNzguNDIgMjIuODE2NCAxNzguMDk4IDIyLjgxNjQgMTc3Ljc2NkMyMi44MTY0IDE3Ny4zMiAyMi42ODE2IDE3Ni45NTUgMjIuNDEyMSAxNzYuNjdDMjIuMTQyNiAxNzYuMzg1IDIxLjc4MzIgMTc2LjI0MiAyMS4zMzQgMTc2LjI0MkMyMC43OTQ5IDE3Ni4yNDIgMjAuMzc1IDE3Ni4zOTYgMjAuMDc0MiAxNzYuNzA1QzE5Ljc3NzMgMTc3LjAxIDE5LjYyODkgMTc3LjQzNiAxOS42Mjg5IDE3Ny45ODJIMTguNTQ0OUMxOC41NDQ5IDE3Ny4xOTcgMTguNzk2OSAxNzYuNTYyIDE5LjMwMDggMTc2LjA3OEMxOS44MDg2IDE3NS41OTQgMjAuNDg2MyAxNzUuMzUyIDIxLjMzNCAxNzUuMzUyQzIyLjEyNyAxNzUuMzUyIDIyLjc1MzkgMTc1LjU2MSAyMy4yMTQ4IDE3NS45NzlDMjMuNjc1OCAxNzYuMzkzIDIzLjkwNjIgMTc2Ljk0NSAyMy45MDYyIDE3Ny42MzdDMjMuOTA2MiAxNzguNDc3IDIzLjM3MTEgMTc5LjQ3NyAyMi4zMDA4IDE4MC42MzdMMjAuMDE1NiAxODMuMTE1SDI0LjI5ODhWMTg0Wk0zMC40MjM0IDE4MS4xMzVIMzEuNjA3VjE4Mi4wMkgzMC40MjM0VjE4NEgyOS4zMzM2VjE4Mi4wMkgyNS40NDg4VjE4MS4zODFMMjkuMjY5MSAxNzUuNDY5SDMwLjQyMzRWMTgxLjEzNVpNMjYuNjc5MyAxODEuMTM1SDI5LjMzMzZWMTc2Ljk1MUwyOS4yMDQ3IDE3Ny4xODZMMjYuNjc5MyAxODEuMTM1Wk0zMy4wNjE3IDE4My40MzJDMzMuMDYxNyAxODMuMjQ0IDMzLjExNjQgMTgzLjA4OCAzMy4yMjU4IDE4Mi45NjNDMzMuMzM5MSAxODIuODM4IDMzLjUwNyAxODIuNzc1IDMzLjcyOTcgMTgyLjc3NUMzMy45NTIzIDE4Mi43NzUgMzQuMTIwMyAxODIuODM4IDM0LjIzMzYgMTgyLjk2M0MzNC4zNTA4IDE4My4wODggMzQuNDA5NCAxODMuMjQ0IDM0LjQwOTQgMTgzLjQzMkMzNC40MDk0IDE4My42MTEgMzQuMzUwOCAxODMuNzYyIDM0LjIzMzYgMTgzLjg4M0MzNC4xMjAzIDE4NC4wMDQgMzMuOTUyMyAxODQuMDY0IDMzLjcyOTcgMTg0LjA2NEMzMy41MDcgMTg0LjA2NCAzMy4zMzkxIDE4NC4wMDQgMzMuMjI1OCAxODMuODgzQzMzLjExNjQgMTgzLjc2MiAzMy4wNjE3IDE4My42MTEgMzMuMDYxNyAxODMuNDMyWk0zMy4wNjc2IDE3OC4yNThDMzMuMDY3NiAxNzguMDcgMzMuMTIyMyAxNzcuOTE0IDMzLjIzMTYgMTc3Ljc4OUMzMy4zNDQ5IDE3Ny42NjQgMzMuNTEyOSAxNzcuNjAyIDMzLjczNTUgMTc3LjYwMkMzMy45NTgyIDE3Ny42MDIgMzQuMTI2MiAxNzcuNjY0IDM0LjIzOTUgMTc3Ljc4OUMzNC4zNTY2IDE3Ny45MTQgMzQuNDE1MiAxNzguMDcgMzQuNDE1MiAxNzguMjU4QzM0LjQxNTIgMTc4LjQzOCAzNC4zNTY2IDE3OC41ODggMzQuMjM5NSAxNzguNzA5QzM0LjEyNjIgMTc4LjgzIDMzLjk1ODIgMTc4Ljg5MSAzMy43MzU1IDE3OC44OTFDMzMuNTEyOSAxNzguODkxIDMzLjM0NDkgMTc4LjgzIDMzLjIzMTYgMTc4LjcwOUMzMy4xMjIzIDE3OC41ODggMzMuMDY3NiAxNzguNDM4IDMzLjA2NzYgMTc4LjI1OFpNNDEuNjQxNCAxODAuMzYxQzQxLjY0MTQgMTgxLjYzMSA0MS40MjQ2IDE4Mi41NzQgNDAuOTkxIDE4My4xOTFDNDAuNTU3NCAxODMuODA5IDM5Ljg3OTcgMTg0LjExNyAzOC45NTc4IDE4NC4xMTdDMzguMDQ3NyAxODQuMTE3IDM3LjM3MzggMTgzLjgxNiAzNi45MzYzIDE4My4yMTVDMzYuNDk4OCAxODIuNjA5IDM2LjI3MjMgMTgxLjcwNyAzNi4yNTY2IDE4MC41MDhWMTc5LjA2MUMzNi4yNTY2IDE3Ny44MDcgMzYuNDczNCAxNzYuODc1IDM2LjkwNyAxNzYuMjY2QzM3LjM0MDYgMTc1LjY1NiAzOC4wMjAzIDE3NS4zNTIgMzguOTQ2MSAxNzUuMzUyQzM5Ljg2NDEgMTc1LjM1MiA0MC41Mzk4IDE3NS42NDYgNDAuOTczNCAxNzYuMjM2QzQxLjQwNyAxNzYuODIyIDQxLjYyOTcgMTc3LjcyOSA0MS42NDE0IDE3OC45NTVWMTgwLjM2MVpNNDAuNTU3NCAxNzguODc5QzQwLjU1NzQgMTc3Ljk2MSA0MC40Mjg1IDE3Ny4yOTMgNDAuMTcwNyAxNzYuODc1QzM5LjkxMjkgMTc2LjQ1MyAzOS41MDQ3IDE3Ni4yNDIgMzguOTQ2MSAxNzYuMjQyQzM4LjM5MTQgMTc2LjI0MiAzNy45ODcxIDE3Ni40NTEgMzcuNzMzMiAxNzYuODY5QzM3LjQ3OTMgMTc3LjI4NyAzNy4zNDg0IDE3Ny45MyAzNy4zNDA2IDE3OC43OTdWMTgwLjUzMUMzNy4zNDA2IDE4MS40NTMgMzcuNDczNCAxODIuMTM1IDM3LjczOTEgMTgyLjU3NkMzOC4wMDg2IDE4My4wMTQgMzguNDE0OCAxODMuMjMyIDM4Ljk1NzggMTgzLjIzMkMzOS40OTMgMTgzLjIzMiAzOS44ODk1IDE4My4wMjUgNDAuMTQ3MyAxODIuNjExQzQwLjQwOSAxODIuMTk3IDQwLjU0NTcgMTgxLjU0NSA0MC41NTc0IDE4MC42NTRWMTc4Ljg3OVpNNDguNzc5NyAxODAuMzYxQzQ4Ljc3OTcgMTgxLjYzMSA0OC41NjI5IDE4Mi41NzQgNDguMTI5MyAxODMuMTkxQzQ3LjY5NTcgMTgzLjgwOSA0Ny4wMTggMTg0LjExNyA0Ni4wOTYxIDE4NC4xMTdDNDUuMTg1OSAxODQuMTE3IDQ0LjUxMjEgMTgzLjgxNiA0NC4wNzQ2IDE4My4yMTVDNDMuNjM3MSAxODIuNjA5IDQzLjQxMDUgMTgxLjcwNyA0My4zOTQ5IDE4MC41MDhWMTc5LjA2MUM0My4zOTQ5IDE3Ny44MDcgNDMuNjExNyAxNzYuODc1IDQ0LjA0NTMgMTc2LjI2NkM0NC40Nzg5IDE3NS42NTYgNDUuMTU4NiAxNzUuMzUyIDQ2LjA4NDQgMTc1LjM1MkM0Ny4wMDIzIDE3NS4zNTIgNDcuNjc4MSAxNzUuNjQ2IDQ4LjExMTcgMTc2LjIzNkM0OC41NDUzIDE3Ni44MjIgNDguNzY4IDE3Ny43MjkgNDguNzc5NyAxNzguOTU1VjE4MC4zNjFaTTQ3LjY5NTcgMTc4Ljg3OUM0Ny42OTU3IDE3Ny45NjEgNDcuNTY2OCAxNzcuMjkzIDQ3LjMwOSAxNzYuODc1QzQ3LjA1MTIgMTc2LjQ1MyA0Ni42NDMgMTc2LjI0MiA0Ni4wODQ0IDE3Ni4yNDJDNDUuNTI5NyAxNzYuMjQyIDQ1LjEyNTQgMTc2LjQ1MSA0NC44NzE1IDE3Ni44NjlDNDQuNjE3NiAxNzcuMjg3IDQ0LjQ4NjcgMTc3LjkzIDQ0LjQ3ODkgMTc4Ljc5N1YxODAuNTMxQzQ0LjQ3ODkgMTgxLjQ1MyA0NC42MTE3IDE4Mi4xMzUgNDQuODc3MyAxODIuNTc2QzQ1LjE0NjkgMTgzLjAxNCA0NS41NTMxIDE4My4yMzIgNDYuMDk2MSAxODMuMjMyQzQ2LjYzMTMgMTgzLjIzMiA0Ny4wMjc3IDE4My4wMjUgNDcuMjg1NSAxODIuNjExQzQ3LjU0NzMgMTgyLjE5NyA0Ny42ODQgMTgxLjU0NSA0Ny42OTU3IDE4MC42NTRWMTc4Ljg3OVoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNTQiLz4KPHBhdGggZD0iTTE2MS4yNzEgMTg0SDE2MC4xODJWMTc2Ljc3NUwxNTcuOTk2IDE3Ny41NzhWMTc2LjU5NEwxNjEuMTAyIDE3NS40MjhIMTYxLjI3MVYxODRaTTE3MC40MzcgMTg0SDE2NC44NDdWMTgzLjIyMUwxNjcuOCAxNzkuOTM5QzE2OC4yMzggMTc5LjQ0MyAxNjguNTM5IDE3OS4wNDEgMTY4LjcwMyAxNzguNzMyQzE2OC44NzEgMTc4LjQyIDE2OC45NTUgMTc4LjA5OCAxNjguOTU1IDE3Ny43NjZDMTY4Ljk1NSAxNzcuMzIgMTY4LjgyIDE3Ni45NTUgMTY4LjU1IDE3Ni42N0MxNjguMjgxIDE3Ni4zODUgMTY3LjkyMSAxNzYuMjQyIDE2Ny40NzIgMTc2LjI0MkMxNjYuOTMzIDE3Ni4yNDIgMTY2LjUxMyAxNzYuMzk2IDE2Ni4yMTMgMTc2LjcwNUMxNjUuOTE2IDE3Ny4wMSAxNjUuNzY3IDE3Ny40MzYgMTY1Ljc2NyAxNzcuOTgySDE2NC42ODNDMTY0LjY4MyAxNzcuMTk3IDE2NC45MzUgMTc2LjU2MiAxNjUuNDM5IDE3Ni4wNzhDMTY1Ljk0NyAxNzUuNTk0IDE2Ni42MjUgMTc1LjM1MiAxNjcuNDcyIDE3NS4zNTJDMTY4LjI2NSAxNzUuMzUyIDE2OC44OTIgMTc1LjU2MSAxNjkuMzUzIDE3NS45NzlDMTY5LjgxNCAxNzYuMzkzIDE3MC4wNDUgMTc2Ljk0NSAxNzAuMDQ1IDE3Ny42MzdDMTcwLjA0NSAxNzguNDc3IDE2OS41MDkgMTc5LjQ3NyAxNjguNDM5IDE4MC42MzdMMTY2LjE1NCAxODMuMTE1SDE3MC40MzdWMTg0Wk0xNzIuMDYyIDE4My40MzJDMTcyLjA2MiAxODMuMjQ0IDE3Mi4xMTYgMTgzLjA4OCAxNzIuMjI2IDE4Mi45NjNDMTcyLjMzOSAxODIuODM4IDE3Mi41MDcgMTgyLjc3NSAxNzIuNzMgMTgyLjc3NUMxNzIuOTUyIDE4Mi43NzUgMTczLjEyIDE4Mi44MzggMTczLjIzNCAxODIuOTYzQzE3My4zNTEgMTgzLjA4OCAxNzMuNDA5IDE4My4yNDQgMTczLjQwOSAxODMuNDMyQzE3My40MDkgMTgzLjYxMSAxNzMuMzUxIDE4My43NjIgMTczLjIzNCAxODMuODgzQzE3My4xMiAxODQuMDA0IDE3Mi45NTIgMTg0LjA2NCAxNzIuNzMgMTg0LjA2NEMxNzIuNTA3IDE4NC4wNjQgMTcyLjMzOSAxODQuMDA0IDE3Mi4yMjYgMTgzLjg4M0MxNzIuMTE2IDE4My43NjIgMTcyLjA2MiAxODMuNjExIDE3Mi4wNjIgMTgzLjQzMlpNMTcyLjA2OCAxNzguMjU4QzE3Mi4wNjggMTc4LjA3IDE3Mi4xMjIgMTc3LjkxNCAxNzIuMjMyIDE3Ny43ODlDMTcyLjM0NSAxNzcuNjY0IDE3Mi41MTMgMTc3LjYwMiAxNzIuNzM2IDE3Ny42MDJDMTcyLjk1OCAxNzcuNjAyIDE3My4xMjYgMTc3LjY2NCAxNzMuMjM5IDE3Ny43ODlDMTczLjM1NyAxNzcuOTE0IDE3My40MTUgMTc4LjA3IDE3My40MTUgMTc4LjI1OEMxNzMuNDE1IDE3OC40MzggMTczLjM1NyAxNzguNTg4IDE3My4yMzkgMTc4LjcwOUMxNzMuMTI2IDE3OC44MyAxNzIuOTU4IDE3OC44OTEgMTcyLjczNiAxNzguODkxQzE3Mi41MTMgMTc4Ljg5MSAxNzIuMzQ1IDE3OC44MyAxNzIuMjMyIDE3OC43MDlDMTcyLjEyMiAxNzguNTg4IDE3Mi4wNjggMTc4LjQzOCAxNzIuMDY4IDE3OC4yNThaTTE4MC42NDEgMTgwLjM2MUMxODAuNjQxIDE4MS42MzEgMTgwLjQyNSAxODIuNTc0IDE3OS45OTEgMTgzLjE5MUMxNzkuNTU3IDE4My44MDkgMTc4Ljg4IDE4NC4xMTcgMTc3Ljk1OCAxODQuMTE3QzE3Ny4wNDggMTg0LjExNyAxNzYuMzc0IDE4My44MTYgMTc1LjkzNiAxODMuMjE1QzE3NS40OTkgMTgyLjYwOSAxNzUuMjcyIDE4MS43MDcgMTc1LjI1NyAxODAuNTA4VjE3OS4wNjFDMTc1LjI1NyAxNzcuODA3IDE3NS40NzMgMTc2Ljg3NSAxNzUuOTA3IDE3Ni4yNjZDMTc2LjM0MSAxNzUuNjU2IDE3Ny4wMiAxNzUuMzUyIDE3Ny45NDYgMTc1LjM1MkMxNzguODY0IDE3NS4zNTIgMTc5LjU0IDE3NS42NDYgMTc5Ljk3MyAxNzYuMjM2QzE4MC40MDcgMTc2LjgyMiAxODAuNjMgMTc3LjcyOSAxODAuNjQxIDE3OC45NTVWMTgwLjM2MVpNMTc5LjU1NyAxNzguODc5QzE3OS41NTcgMTc3Ljk2MSAxNzkuNDI5IDE3Ny4yOTMgMTc5LjE3MSAxNzYuODc1QzE3OC45MTMgMTc2LjQ1MyAxNzguNTA1IDE3Ni4yNDIgMTc3Ljk0NiAxNzYuMjQyQzE3Ny4zOTEgMTc2LjI0MiAxNzYuOTg3IDE3Ni40NTEgMTc2LjczMyAxNzYuODY5QzE3Ni40NzkgMTc3LjI4NyAxNzYuMzQ4IDE3Ny45MyAxNzYuMzQxIDE3OC43OTdWMTgwLjUzMUMxNzYuMzQxIDE4MS40NTMgMTc2LjQ3MyAxODIuMTM1IDE3Ni43MzkgMTgyLjU3NkMxNzcuMDA5IDE4My4wMTQgMTc3LjQxNSAxODMuMjMyIDE3Ny45NTggMTgzLjIzMkMxNzguNDkzIDE4My4yMzIgMTc4Ljg4OSAxODMuMDI1IDE3OS4xNDcgMTgyLjYxMUMxNzkuNDA5IDE4Mi4xOTcgMTc5LjU0NiAxODEuNTQ1IDE3OS41NTcgMTgwLjY1NFYxNzguODc5Wk0xODcuNzggMTgwLjM2MUMxODcuNzggMTgxLjYzMSAxODcuNTYzIDE4Mi41NzQgMTg3LjEyOSAxODMuMTkxQzE4Ni42OTYgMTgzLjgwOSAxODYuMDE4IDE4NC4xMTcgMTg1LjA5NiAxODQuMTE3QzE4NC4xODYgMTg0LjExNyAxODMuNTEyIDE4My44MTYgMTgzLjA3NSAxODMuMjE1QzE4Mi42MzcgMTgyLjYwOSAxODIuNDExIDE4MS43MDcgMTgyLjM5NSAxODAuNTA4VjE3OS4wNjFDMTgyLjM5NSAxNzcuODA3IDE4Mi42MTIgMTc2Ljg3NSAxODMuMDQ1IDE3Ni4yNjZDMTgzLjQ3OSAxNzUuNjU2IDE4NC4xNTkgMTc1LjM1MiAxODUuMDg0IDE3NS4zNTJDMTg2LjAwMiAxNzUuMzUyIDE4Ni42NzggMTc1LjY0NiAxODcuMTEyIDE3Ni4yMzZDMTg3LjU0NSAxNzYuODIyIDE4Ny43NjggMTc3LjcyOSAxODcuNzggMTc4Ljk1NVYxODAuMzYxWk0xODYuNjk2IDE3OC44NzlDMTg2LjY5NiAxNzcuOTYxIDE4Ni41NjcgMTc3LjI5MyAxODYuMzA5IDE3Ni44NzVDMTg2LjA1MSAxNzYuNDUzIDE4NS42NDMgMTc2LjI0MiAxODUuMDg0IDE3Ni4yNDJDMTg0LjUzIDE3Ni4yNDIgMTg0LjEyNSAxNzYuNDUxIDE4My44NzEgMTc2Ljg2OUMxODMuNjE4IDE3Ny4yODcgMTgzLjQ4NyAxNzcuOTMgMTgzLjQ3OSAxNzguNzk3VjE4MC41MzFDMTgzLjQ3OSAxODEuNDUzIDE4My42MTIgMTgyLjEzNSAxODMuODc3IDE4Mi41NzZDMTg0LjE0NyAxODMuMDE0IDE4NC41NTMgMTgzLjIzMiAxODUuMDk2IDE4My4yMzJDMTg1LjYzMSAxODMuMjMyIDE4Ni4wMjggMTgzLjAyNSAxODYuMjg2IDE4Mi42MTFDMTg2LjU0NyAxODIuMTk3IDE4Ni42ODQgMTgxLjU0NSAxODYuNjk2IDE4MC42NTRWMTc4Ljg3OVoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNTQiLz4KPHBhdGggZD0iTTMwMi4yOTkgMTg0SDI5Ni43MDlWMTgzLjIyMUwyOTkuNjYyIDE3OS45MzlDMzAwLjEgMTc5LjQ0MyAzMDAuNCAxNzkuMDQxIDMwMC41NjQgMTc4LjczMkMzMDAuNzMyIDE3OC40MiAzMDAuODE2IDE3OC4wOTggMzAwLjgxNiAxNzcuNzY2QzMwMC44MTYgMTc3LjMyIDMwMC42ODIgMTc2Ljk1NSAzMDAuNDEyIDE3Ni42N0MzMDAuMTQzIDE3Ni4zODUgMjk5Ljc4MyAxNzYuMjQyIDI5OS4zMzQgMTc2LjI0MkMyOTguNzk1IDE3Ni4yNDIgMjk4LjM3NSAxNzYuMzk2IDI5OC4wNzQgMTc2LjcwNUMyOTcuNzc3IDE3Ny4wMSAyOTcuNjI5IDE3Ny40MzYgMjk3LjYyOSAxNzcuOTgySDI5Ni41NDVDMjk2LjU0NSAxNzcuMTk3IDI5Ni43OTcgMTc2LjU2MiAyOTcuMzAxIDE3Ni4wNzhDMjk3LjgwOSAxNzUuNTk0IDI5OC40ODYgMTc1LjM1MiAyOTkuMzM0IDE3NS4zNTJDMzAwLjEyNyAxNzUuMzUyIDMwMC43NTQgMTc1LjU2MSAzMDEuMjE1IDE3NS45NzlDMzAxLjY3NiAxNzYuMzkzIDMwMS45MDYgMTc2Ljk0NSAzMDEuOTA2IDE3Ny42MzdDMzAxLjkwNiAxNzguNDc3IDMwMS4zNzEgMTc5LjQ3NyAzMDAuMzAxIDE4MC42MzdMMjk4LjAxNiAxODMuMTE1SDMwMi4yOTlWMTg0Wk0zMDguNDIzIDE4MS4xMzVIMzA5LjYwN1YxODIuMDJIMzA4LjQyM1YxODRIMzA3LjMzNFYxODIuMDJIMzAzLjQ0OVYxODEuMzgxTDMwNy4yNjkgMTc1LjQ2OUgzMDguNDIzVjE4MS4xMzVaTTMwNC42NzkgMTgxLjEzNUgzMDcuMzM0VjE3Ni45NTFMMzA3LjIwNSAxNzcuMTg2TDMwNC42NzkgMTgxLjEzNVpNMzExLjA2MiAxODMuNDMyQzMxMS4wNjIgMTgzLjI0NCAzMTEuMTE2IDE4My4wODggMzExLjIyNiAxODIuOTYzQzMxMS4zMzkgMTgyLjgzOCAzMTEuNTA3IDE4Mi43NzUgMzExLjczIDE4Mi43NzVDMzExLjk1MiAxODIuNzc1IDMxMi4xMiAxODIuODM4IDMxMi4yMzQgMTgyLjk2M0MzMTIuMzUxIDE4My4wODggMzEyLjQwOSAxODMuMjQ0IDMxMi40MDkgMTgzLjQzMkMzMTIuNDA5IDE4My42MTEgMzEyLjM1MSAxODMuNzYyIDMxMi4yMzQgMTgzLjg4M0MzMTIuMTIgMTg0LjAwNCAzMTEuOTUyIDE4NC4wNjQgMzExLjczIDE4NC4wNjRDMzExLjUwNyAxODQuMDY0IDMxMS4zMzkgMTg0LjAwNCAzMTEuMjI2IDE4My44ODNDMzExLjExNiAxODMuNzYyIDMxMS4wNjIgMTgzLjYxMSAzMTEuMDYyIDE4My40MzJaTTMxMS4wNjggMTc4LjI1OEMzMTEuMDY4IDE3OC4wNyAzMTEuMTIyIDE3Ny45MTQgMzExLjIzMiAxNzcuNzg5QzMxMS4zNDUgMTc3LjY2NCAzMTEuNTEzIDE3Ny42MDIgMzExLjczNiAxNzcuNjAyQzMxMS45NTggMTc3LjYwMiAzMTIuMTI2IDE3Ny42NjQgMzEyLjIzOSAxNzcuNzg5QzMxMi4zNTcgMTc3LjkxNCAzMTIuNDE1IDE3OC4wNyAzMTIuNDE1IDE3OC4yNThDMzEyLjQxNSAxNzguNDM4IDMxMi4zNTcgMTc4LjU4OCAzMTIuMjM5IDE3OC43MDlDMzEyLjEyNiAxNzguODMgMzExLjk1OCAxNzguODkxIDMxMS43MzYgMTc4Ljg5MUMzMTEuNTEzIDE3OC44OTEgMzExLjM0NSAxNzguODMgMzExLjIzMiAxNzguNzA5QzMxMS4xMjIgMTc4LjU4OCAzMTEuMDY4IDE3OC40MzggMzExLjA2OCAxNzguMjU4Wk0zMTkuNjQxIDE4MC4zNjFDMzE5LjY0MSAxODEuNjMxIDMxOS40MjUgMTgyLjU3NCAzMTguOTkxIDE4My4xOTFDMzE4LjU1NyAxODMuODA5IDMxNy44OCAxODQuMTE3IDMxNi45NTggMTg0LjExN0MzMTYuMDQ4IDE4NC4xMTcgMzE1LjM3NCAxODMuODE2IDMxNC45MzYgMTgzLjIxNUMzMTQuNDk5IDE4Mi42MDkgMzE0LjI3MiAxODEuNzA3IDMxNC4yNTcgMTgwLjUwOFYxNzkuMDYxQzMxNC4yNTcgMTc3LjgwNyAzMTQuNDczIDE3Ni44NzUgMzE0LjkwNyAxNzYuMjY2QzMxNS4zNDEgMTc1LjY1NiAzMTYuMDIgMTc1LjM1MiAzMTYuOTQ2IDE3NS4zNTJDMzE3Ljg2NCAxNzUuMzUyIDMxOC41NCAxNzUuNjQ2IDMxOC45NzMgMTc2LjIzNkMzMTkuNDA3IDE3Ni44MjIgMzE5LjYzIDE3Ny43MjkgMzE5LjY0MSAxNzguOTU1VjE4MC4zNjFaTTMxOC41NTcgMTc4Ljg3OUMzMTguNTU3IDE3Ny45NjEgMzE4LjQyOSAxNzcuMjkzIDMxOC4xNzEgMTc2Ljg3NUMzMTcuOTEzIDE3Ni40NTMgMzE3LjUwNSAxNzYuMjQyIDMxNi45NDYgMTc2LjI0MkMzMTYuMzkxIDE3Ni4yNDIgMzE1Ljk4NyAxNzYuNDUxIDMxNS43MzMgMTc2Ljg2OUMzMTUuNDc5IDE3Ny4yODcgMzE1LjM0OCAxNzcuOTMgMzE1LjM0MSAxNzguNzk3VjE4MC41MzFDMzE1LjM0MSAxODEuNDUzIDMxNS40NzMgMTgyLjEzNSAzMTUuNzM5IDE4Mi41NzZDMzE2LjAwOSAxODMuMDE0IDMxNi40MTUgMTgzLjIzMiAzMTYuOTU4IDE4My4yMzJDMzE3LjQ5MyAxODMuMjMyIDMxNy44ODkgMTgzLjAyNSAzMTguMTQ3IDE4Mi42MTFDMzE4LjQwOSAxODIuMTk3IDMxOC41NDYgMTgxLjU0NSAzMTguNTU3IDE4MC42NTRWMTc4Ljg3OVpNMzI2Ljc4IDE4MC4zNjFDMzI2Ljc4IDE4MS42MzEgMzI2LjU2MyAxODIuNTc0IDMyNi4xMjkgMTgzLjE5MUMzMjUuNjk2IDE4My44MDkgMzI1LjAxOCAxODQuMTE3IDMyNC4wOTYgMTg0LjExN0MzMjMuMTg2IDE4NC4xMTcgMzIyLjUxMiAxODMuODE2IDMyMi4wNzUgMTgzLjIxNUMzMjEuNjM3IDE4Mi42MDkgMzIxLjQxMSAxODEuNzA3IDMyMS4zOTUgMTgwLjUwOFYxNzkuMDYxQzMyMS4zOTUgMTc3LjgwNyAzMjEuNjEyIDE3Ni44NzUgMzIyLjA0NSAxNzYuMjY2QzMyMi40NzkgMTc1LjY1NiAzMjMuMTU5IDE3NS4zNTIgMzI0LjA4NCAxNzUuMzUyQzMyNS4wMDIgMTc1LjM1MiAzMjUuNjc4IDE3NS42NDYgMzI2LjExMiAxNzYuMjM2QzMyNi41NDUgMTc2LjgyMiAzMjYuNzY4IDE3Ny43MjkgMzI2Ljc4IDE3OC45NTVWMTgwLjM2MVpNMzI1LjY5NiAxNzguODc5QzMyNS42OTYgMTc3Ljk2MSAzMjUuNTY3IDE3Ny4yOTMgMzI1LjMwOSAxNzYuODc1QzMyNS4wNTEgMTc2LjQ1MyAzMjQuNjQzIDE3Ni4yNDIgMzI0LjA4NCAxNzYuMjQyQzMyMy41MyAxNzYuMjQyIDMyMy4xMjUgMTc2LjQ1MSAzMjIuODcxIDE3Ni44NjlDMzIyLjYxOCAxNzcuMjg3IDMyMi40ODcgMTc3LjkzIDMyMi40NzkgMTc4Ljc5N1YxODAuNTMxQzMyMi40NzkgMTgxLjQ1MyAzMjIuNjEyIDE4Mi4xMzUgMzIyLjg3NyAxODIuNTc2QzMyMy4xNDcgMTgzLjAxNCAzMjMuNTUzIDE4My4yMzIgMzI0LjA5NiAxODMuMjMyQzMyNC42MzEgMTgzLjIzMiAzMjUuMDI4IDE4My4wMjUgMzI1LjI4NiAxODIuNjExQzMyNS41NDcgMTgyLjE5NyAzMjUuNjg0IDE4MS41NDUgMzI1LjY5NiAxODAuNjU0VjE3OC44NzlaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjU0Ii8+CjxsaW5lIHgxPSI3LjQ1Njg1ZS0wOCIgeTE9IjY4LjQyMzEiIHgyPSIzMjciIHkyPSI2OC40MjMxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNiIvPgo8cGF0aCBkPSJNNi4yOTg4MyA2MUgwLjcwODk4NFY2MC4yMjA3TDMuNjYyMTEgNTYuOTM5NUM0LjA5OTYxIDU2LjQ0MzQgNC40MDAzOSA1Ni4wNDEgNC41NjQ0NSA1NS43MzI0QzQuNzMyNDIgNTUuNDE5OSA0LjgxNjQxIDU1LjA5NzcgNC44MTY0MSA1NC43NjU2QzQuODE2NDEgNTQuMzIwMyA0LjY4MTY0IDUzLjk1NTEgNC40MTIxMSA1My42Njk5QzQuMTQyNTggNTMuMzg0OCAzLjc4MzIgNTMuMjQyMiAzLjMzMzk4IDUzLjI0MjJDMi43OTQ5MiA1My4yNDIyIDIuMzc1IDUzLjM5NjUgMi4wNzQyMiA1My43MDUxQzEuNzc3MzQgNTQuMDA5OCAxLjYyODkxIDU0LjQzNTUgMS42Mjg5MSA1NC45ODI0SDAuNTQ0OTIyQzAuNTQ0OTIyIDU0LjE5NzMgMC43OTY4NzUgNTMuNTYyNSAxLjMwMDc4IDUzLjA3ODFDMS44MDg1OSA1Mi41OTM4IDIuNDg2MzMgNTIuMzUxNiAzLjMzMzk4IDUyLjM1MTZDNC4xMjY5NSA1Mi4zNTE2IDQuNzUzOTEgNTIuNTYwNSA1LjIxNDg0IDUyLjk3ODVDNS42NzU3OCA1My4zOTI2IDUuOTA2MjUgNTMuOTQ1MyA1LjkwNjI1IDU0LjYzNjdDNS45MDYyNSA1NS40NzY2IDUuMzcxMDkgNTYuNDc2NiA0LjMwMDc4IDU3LjYzNjdMMi4wMTU2MiA2MC4xMTUySDYuMjk4ODNWNjFaTTEzLjE5NjkgNTcuMzYxM0MxMy4xOTY5IDU4LjYzMDkgMTIuOTgwMSA1OS41NzQyIDEyLjU0NjUgNjAuMTkxNEMxMi4xMTI5IDYwLjgwODYgMTEuNDM1MiA2MS4xMTcyIDEwLjUxMzMgNjEuMTE3MkM5LjYwMzEzIDYxLjExNzIgOC45MjkzIDYwLjgxNjQgOC40OTE4IDYwLjIxNDhDOC4wNTQzIDU5LjYwOTQgNy44Mjc3MyA1OC43MDcgNy44MTIxMSA1Ny41MDc4VjU2LjA2MDVDNy44MTIxMSA1NC44MDY2IDguMDI4OTEgNTMuODc1IDguNDYyNSA1My4yNjU2QzguODk2MDkgNTIuNjU2MiA5LjU3NTc4IDUyLjM1MTYgMTAuNTAxNiA1Mi4zNTE2QzExLjQxOTUgNTIuMzUxNiAxMi4wOTUzIDUyLjY0NjUgMTIuNTI4OSA1My4yMzYzQzEyLjk2MjUgNTMuODIyMyAxMy4xODUyIDU0LjcyODUgMTMuMTk2OSA1NS45NTUxVjU3LjM2MTNaTTEyLjExMjkgNTUuODc4OUMxMi4xMTI5IDU0Ljk2MDkgMTEuOTg0IDU0LjI5MyAxMS43MjYyIDUzLjg3NUMxMS40Njg0IDUzLjQ1MzEgMTEuMDYwMiA1My4yNDIyIDEwLjUwMTYgNTMuMjQyMkM5Ljk0Njg4IDUzLjI0MjIgOS41NDI1OCA1My40NTEyIDkuMjg4NjcgNTMuODY5MUM5LjAzNDc3IDU0LjI4NzEgOC45MDM5MSA1NC45Mjk3IDguODk2MDkgNTUuNzk2OVY1Ny41MzEyQzguODk2MDkgNTguNDUzMSA5LjAyODkxIDU5LjEzNDggOS4yOTQ1MyA1OS41NzYyQzkuNTY0MDYgNjAuMDEzNyA5Ljk3MDMxIDYwLjIzMjQgMTAuNTEzMyA2MC4yMzI0QzExLjA0ODQgNjAuMjMyNCAxMS40NDQ5IDYwLjAyNTQgMTEuNzAyNyA1OS42MTEzQzExLjk2NDUgNTkuMTk3MyAxMi4xMDEyIDU4LjU0NDkgMTIuMTEyOSA1Ny42NTQzVjU1Ljg3ODlaTTE2LjcxOTkgNTIuNDY4OEwxOS41MDkgNTkuNDI5N0wyMi4yOTggNTIuNDY4OEgyMy43NTdWNjFIMjIuNjMyVjU3LjY3NzdMMjIuNzM3NSA1NC4wOTE4TDE5LjkzNjcgNjFIMTkuMDc1NEwxNi4yODA1IDU0LjEwOTRMMTYuMzkxOCA1Ny42Nzc3VjYxSDE1LjI2NjhWNTIuNDY4OEgxNi43MTk5WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41NCIvPgo8bGluZSB4MT0iMS40MTAyN2UtMDciIHkxPSIxNjYuNSIgeDI9IjMyNyIgeTI9IjE2Ni41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNiIvPgo8cGF0aCBkPSJNMS4yMDcwMyAxNTUuNzIzTDEuNjQwNjIgMTUxLjQ2OUg2LjAxMTcyVjE1Mi40NzFIMi41NjA1NUwyLjMwMjczIDE1NC43OTdDMi43MjA3IDE1NC41NTEgMy4xOTUzMSAxNTQuNDI4IDMuNzI2NTYgMTU0LjQyOEM0LjUwMzkxIDE1NC40MjggNS4xMjEwOSAxNTQuNjg2IDUuNTc4MTIgMTU1LjIwMUM2LjAzNTE2IDE1NS43MTMgNi4yNjM2NyAxNTYuNDA2IDYuMjYzNjcgMTU3LjI4MUM2LjI2MzY3IDE1OC4xNiA2LjAyNTM5IDE1OC44NTQgNS41NDg4MyAxNTkuMzYxQzUuMDc2MTcgMTU5Ljg2NSA0LjQxNDA2IDE2MC4xMTcgMy41NjI1IDE2MC4xMTdDMi44MDg1OSAxNjAuMTE3IDIuMTkzMzYgMTU5LjkwOCAxLjcxNjggMTU5LjQ5QzEuMjQwMjMgMTU5LjA3MiAwLjk2ODc1IDE1OC40OTQgMC45MDIzNDQgMTU3Ljc1NkgxLjkyNzczQzEuOTk0MTQgMTU4LjI0NCAyLjE2Nzk3IDE1OC42MTMgMi40NDkyMiAxNTguODYzQzIuNzMwNDcgMTU5LjEwOSAzLjEwMTU2IDE1OS4yMzIgMy41NjI1IDE1OS4yMzJDNC4wNjY0MSAxNTkuMjMyIDQuNDYwOTQgMTU5LjA2MSA0Ljc0NjA5IDE1OC43MTdDNS4wMzUxNiAxNTguMzczIDUuMTc5NjkgMTU3Ljg5OCA1LjE3OTY5IDE1Ny4yOTNDNS4xNzk2OSAxNTYuNzIzIDUuMDIzNDQgMTU2LjI2NiA0LjcxMDk0IDE1NS45MjJDNC40MDIzNCAxNTUuNTc0IDMuOTkwMjMgMTU1LjQgMy40NzQ2MSAxNTUuNEMzLjAwMTk1IDE1NS40IDIuNjMwODYgMTU1LjUwNCAyLjM2MTMzIDE1NS43MTFMMi4wNzQyMiAxNTUuOTQ1TDEuMjA3MDMgMTU1LjcyM1pNOS41ODE2NCAxNTEuNDY5TDEyLjM3MDcgMTU4LjQzTDE1LjE1OTggMTUxLjQ2OUgxNi42MTg4VjE2MEgxNS40OTM4VjE1Ni42NzhMMTUuNTk5MiAxNTMuMDkyTDEyLjc5ODQgMTYwSDExLjkzNzFMOS4xNDIxOSAxNTMuMTA5TDkuMjUzNTIgMTU2LjY3OFYxNjBIOC4xMjg1MlYxNTEuNDY5SDkuNTgxNjRaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjU0Ii8+CjxsaW5lIHgxPSIxLjQxMDI3ZS0wNyIgeTE9IjExNy42NTQiIHgyPSIzMjciIHkyPSIxMTcuNjU0IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNiIvPgo8cGF0aCBkPSJNNC4yNzE0OCAxMTBIMy4xODE2NFYxMDIuNzc1TDAuOTk2MDk0IDEwMy41NzhWMTAyLjU5NEw0LjEwMTU2IDEwMS40MjhINC4yNzE0OFYxMTBaTTEzLjE5NjkgMTA2LjM2MUMxMy4xOTY5IDEwNy42MzEgMTIuOTgwMSAxMDguNTc0IDEyLjU0NjUgMTA5LjE5MUMxMi4xMTI5IDEwOS44MDkgMTEuNDM1MiAxMTAuMTE3IDEwLjUxMzMgMTEwLjExN0M5LjYwMzEzIDExMC4xMTcgOC45MjkzIDEwOS44MTYgOC40OTE4IDEwOS4yMTVDOC4wNTQzIDEwOC42MDkgNy44Mjc3MyAxMDcuNzA3IDcuODEyMTEgMTA2LjUwOFYxMDUuMDYxQzcuODEyMTEgMTAzLjgwNyA4LjAyODkxIDEwMi44NzUgOC40NjI1IDEwMi4yNjZDOC44OTYwOSAxMDEuNjU2IDkuNTc1NzggMTAxLjM1MiAxMC41MDE2IDEwMS4zNTJDMTEuNDE5NSAxMDEuMzUyIDEyLjA5NTMgMTAxLjY0NiAxMi41Mjg5IDEwMi4yMzZDMTIuOTYyNSAxMDIuODIyIDEzLjE4NTIgMTAzLjcyOSAxMy4xOTY5IDEwNC45NTVWMTA2LjM2MVpNMTIuMTEyOSAxMDQuODc5QzEyLjExMjkgMTAzLjk2MSAxMS45ODQgMTAzLjI5MyAxMS43MjYyIDEwMi44NzVDMTEuNDY4NCAxMDIuNDUzIDExLjA2MDIgMTAyLjI0MiAxMC41MDE2IDEwMi4yNDJDOS45NDY4OCAxMDIuMjQyIDkuNTQyNTggMTAyLjQ1MSA5LjI4ODY3IDEwMi44NjlDOS4wMzQ3NyAxMDMuMjg3IDguOTAzOTEgMTAzLjkzIDguODk2MDkgMTA0Ljc5N1YxMDYuNTMxQzguODk2MDkgMTA3LjQ1MyA5LjAyODkxIDEwOC4xMzUgOS4yOTQ1MyAxMDguNTc2QzkuNTY0MDYgMTA5LjAxNCA5Ljk3MDMxIDEwOS4yMzIgMTAuNTEzMyAxMDkuMjMyQzExLjA0ODQgMTA5LjIzMiAxMS40NDQ5IDEwOS4wMjUgMTEuNzAyNyAxMDguNjExQzExLjk2NDUgMTA4LjE5NyAxMi4xMDEyIDEwNy41NDUgMTIuMTEyOSAxMDYuNjU0VjEwNC44NzlaTTE2LjcxOTkgMTAxLjQ2OUwxOS41MDkgMTA4LjQzTDIyLjI5OCAxMDEuNDY5SDIzLjc1N1YxMTBIMjIuNjMyVjEwNi42NzhMMjIuNzM3NSAxMDMuMDkyTDE5LjkzNjcgMTEwSDE5LjA3NTRMMTYuMjgwNSAxMDMuMTA5TDE2LjM5MTggMTA2LjY3OFYxMTBIMTUuMjY2OFYxMDEuNDY5SDE2LjcxOTlaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjU0Ii8+CjxsaW5lIHgxPSIxLjQxMDI3ZS0wNyIgeTE9IjE5LjE5MjMiIHgyPSIzMjciIHkyPSIxOS4xOTIzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNiIvPgo8cGF0aCBkPSJNMi4yODUxNiA3LjIwNzAzSDMuMDk5NjFDMy42MTEzMyA3LjE5OTIyIDQuMDEzNjcgNy4wNjQ0NSA0LjMwNjY0IDYuODAyNzNDNC41OTk2MSA2LjU0MTAyIDQuNzQ2MDkgNi4xODc1IDQuNzQ2MDkgNS43NDIxOUM0Ljc0NjA5IDQuNzQyMTkgNC4yNDgwNSA0LjI0MjE5IDMuMjUxOTUgNC4yNDIxOUMyLjc4MzIgNC4yNDIxOSAyLjQwODIgNC4zNzY5NSAyLjEyNjk1IDQuNjQ2NDhDMS44NDk2MSA0LjkxMjExIDEuNzEwOTQgNS4yNjU2MiAxLjcxMDk0IDUuNzA3MDNIMC42MjY5NTNDMC42MjY5NTMgNS4wMzEyNSAwLjg3MzA0NyA0LjQ3MDcgMS4zNjUyMyA0LjAyNTM5QzEuODYxMzMgMy41NzYxNyAyLjQ5MDIzIDMuMzUxNTYgMy4yNTE5NSAzLjM1MTU2QzQuMDU2NjQgMy4zNTE1NiA0LjY4NzUgMy41NjQ0NSA1LjE0NDUzIDMuOTkwMjNDNS42MDE1NiA0LjQxNjAyIDUuODMwMDggNS4wMDc4MSA1LjgzMDA4IDUuNzY1NjJDNS44MzAwOCA2LjEzNjcyIDUuNzA4OTggNi40OTYwOSA1LjQ2NjggNi44NDM3NUM1LjIyODUyIDcuMTkxNDEgNC45MDIzNCA3LjQ1MTE3IDQuNDg4MjggNy42MjMwNUM0Ljk1NzAzIDcuNzcxNDggNS4zMTgzNiA4LjAxNzU4IDUuNTcyMjcgOC4zNjEzM0M1LjgzMDA4IDguNzA1MDggNS45NTg5OCA5LjEyNSA1Ljk1ODk4IDkuNjIxMDlDNS45NTg5OCAxMC4zODY3IDUuNzA4OTggMTAuOTk0MSA1LjIwODk4IDExLjQ0MzRDNC43MDg5OCAxMS44OTI2IDQuMDU4NTkgMTIuMTE3MiAzLjI1NzgxIDEyLjExNzJDMi40NTcwMyAxMi4xMTcyIDEuODA0NjkgMTEuOTAwNCAxLjMwMDc4IDExLjQ2NjhDMC44MDA3ODEgMTEuMDMzMiAwLjU1MDc4MSAxMC40NjA5IDAuNTUwNzgxIDkuNzVIMS42NDA2MkMxLjY0MDYyIDEwLjE5OTIgMS43ODcxMSAxMC41NTg2IDIuMDgwMDggMTAuODI4MUMyLjM3MzA1IDExLjA5NzcgMi43NjU2MiAxMS4yMzI0IDMuMjU3ODEgMTEuMjMyNEMzLjc4MTI1IDExLjIzMjQgNC4xODE2NCAxMS4wOTU3IDQuNDU4OTggMTAuODIyM0M0LjczNjMzIDEwLjU0ODggNC44NzUgMTAuMTU2MiA0Ljg3NSA5LjY0NDUzQzQuODc1IDkuMTQ4NDQgNC43MjI2NiA4Ljc2NzU4IDQuNDE3OTcgOC41MDE5NUM0LjExMzI4IDguMjM2MzMgMy42NzM4MyA4LjA5OTYxIDMuMDk5NjEgOC4wOTE4SDIuMjg1MTZWNy4yMDcwM1pNMTMuMTk2OSA4LjM2MTMzQzEzLjE5NjkgOS42MzA4NiAxMi45ODAxIDEwLjU3NDIgMTIuNTQ2NSAxMS4xOTE0QzEyLjExMjkgMTEuODA4NiAxMS40MzUyIDEyLjExNzIgMTAuNTEzMyAxMi4xMTcyQzkuNjAzMTMgMTIuMTE3MiA4LjkyOTMgMTEuODE2NCA4LjQ5MTggMTEuMjE0OEM4LjA1NDMgMTAuNjA5NCA3LjgyNzczIDkuNzA3MDMgNy44MTIxMSA4LjUwNzgxVjcuMDYwNTVDNy44MTIxMSA1LjgwNjY0IDguMDI4OTEgNC44NzUgOC40NjI1IDQuMjY1NjJDOC44OTYwOSAzLjY1NjI1IDkuNTc1NzggMy4zNTE1NiAxMC41MDE2IDMuMzUxNTZDMTEuNDE5NSAzLjM1MTU2IDEyLjA5NTMgMy42NDY0OCAxMi41Mjg5IDQuMjM2MzNDMTIuOTYyNSA0LjgyMjI3IDEzLjE4NTIgNS43Mjg1MiAxMy4xOTY5IDYuOTU1MDhWOC4zNjEzM1pNMTIuMTEyOSA2Ljg3ODkxQzEyLjExMjkgNS45NjA5NCAxMS45ODQgNS4yOTI5NyAxMS43MjYyIDQuODc1QzExLjQ2ODQgNC40NTMxMiAxMS4wNjAyIDQuMjQyMTkgMTAuNTAxNiA0LjI0MjE5QzkuOTQ2ODggNC4yNDIxOSA5LjU0MjU4IDQuNDUxMTcgOS4yODg2NyA0Ljg2OTE0QzkuMDM0NzcgNS4yODcxMSA4LjkwMzkxIDUuOTI5NjkgOC44OTYwOSA2Ljc5Njg4VjguNTMxMjVDOC44OTYwOSA5LjQ1MzEyIDkuMDI4OTEgMTAuMTM0OCA5LjI5NDUzIDEwLjU3NjJDOS41NjQwNiAxMS4wMTM3IDkuOTcwMzEgMTEuMjMyNCAxMC41MTMzIDExLjIzMjRDMTEuMDQ4NCAxMS4yMzI0IDExLjQ0NDkgMTEuMDI1NCAxMS43MDI3IDEwLjYxMTNDMTEuOTY0NSAxMC4xOTczIDEyLjEwMTIgOS41NDQ5MiAxMi4xMTI5IDguNjU0M1Y2Ljg3ODkxWk0xNi43MTk5IDMuNDY4NzVMMTkuNTA5IDEwLjQyOTdMMjIuMjk4IDMuNDY4NzVIMjMuNzU3VjEySDIyLjYzMlY4LjY3NzczTDIyLjczNzUgNS4wOTE4TDE5LjkzNjcgMTJIMTkuMDc1NEwxNi4yODA1IDUuMTA5MzhMMTYuMzkxOCA4LjY3NzczVjEySDE1LjI2NjhWMy40Njg3NUgxNi43MTk5WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41NCIvPgo8cGF0aCBkPSJNMjYgODYuNzUxMUwzMS4wMzM0IDc1LjkwNUwzOSA5MC41TDQ2LjUgODYuNzUxMUw1NS41IDkwLjVMNzAuNSA0OS41TDg4LjQxNDcgNjUuNjk2OEw5Ny41IDQ5LjVMMTA4LjUgODYuNzUxMUwxMjMuNSAxMjUuNUwxMzcuNzQyIDExMi4yNzFMMTU0Ljg1NiA3NS45MDVMMTY3LjQ0IDM4LjI2MjRMMTg5LjA4NCA3TDIxMC4yMjQgNTIuMjk4NkwyMjMuMzExIDg2Ljc1MTFMMjM3LjkwOCAxMzMuMzI2TDI0OS45ODggMTQ4TDI2NyAxMDhMMjgxIDg2Ljc1MTFIMzAwLjVMMzExLjM5NiA2NS42OTY4TDMyNC41IDUyLjI5ODYiIHN0cm9rZT0iIzNEOTBFMyIvPgo8L3N2Zz4K'/>
                </div>
            </div>
        </div>
    );
};

export default StatisticBlock5;



