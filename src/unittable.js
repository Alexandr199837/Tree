import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    position: "absolute",
    right: '.20em',
    top:'4em',
    width: '90%',
    overflowX: 'auto',
    minWidth: 650,
  },
});

function createData(name, calories) {
  return { name, calories};
}

const rows = [
  createData('Капсулы', 'мг'),
  createData('Таблетки', 'мг'),
  createData('Порошки', 'мг'),
  createData('Гранулы', 'мг'),
  createData('Сироп', 'мл'),
  createData('Микстура', 'мл'),
  createData('Экстракт', 'мл'),
  createData('Свечи', 'шт'),
  createData('Пластырь', 'мл'),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Виды препаратов</TableCell>
            <TableCell align="right">Единица измерения</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}