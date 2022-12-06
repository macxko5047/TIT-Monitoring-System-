import * as React from 'react';
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useRef, useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import {Chart, ChartItem} from 'chart.js/auto';
/*import {Chart, ArcElement, ChartItem} from 'chart.js'*/
//Chart.register(ArcElement);


import supabase from './compunentConfig/supabase'
function createData(
  workorder: string,
  item: string,
  order: number,
  goods: number,
  manpower: number,
) {
  return { workorder, item, order, goods, manpower };
}

const rows = [
  createData('22000001', '20-21-aa-cc', 100, 24, 4),
  createData('22000002', '20-23-1a-cc', 80, 37, 3),
  createData('22000003', '20-20-a3-cc', 150, 24, 3),
  createData('22000004', '20-19-bc-cc', 200, 67, 2),
  createData('22000005', '20-21-77-cc', 90, 49, 3),
];

const data = {
    labels: [
      'FG',
      'NG'
  ],
  datasets: [{  
    data: [300, 50],
    backgroundColor: [
    '#4ec66e',
    '#FF6384'
    ],
    hoverBackgroundColor: [
    '#4ec66e',
    '#FF6384'
    ]
  }],
};

const dataOA = {
  labels: [
    'Plan',
    'Actual'
],
datasets: [{  
  data: [12000, 18000],
  backgroundColor: [
  '#DDDDDD',
  '#00E0FF'
  ],
  hoverBackgroundColor: [
  '#DDDDDD',
  '#00E0FF'
  ]
}],
};

const dataDT = {
  labels: [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U'
],
datasets: [{  
  label: 'Down time',
  data: [30, 50, 20, 5, 18, 10, 12, 8, 17, 25, 35, 9, 22, 30, 25, 21, 10, 5, 8, 14, 30],
  backgroundColor: [
  '#78acf0',
  '#78acf0'
  ],
  hoverBackgroundColor: [
  '#78acf0',
  '#78acf0'
  ]
}],
};

const dataNG = {
  labels: [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'
],
datasets: [{
  label: 'NG Product',
  data: [30, 50, 20, 5, 18, 10, 12, 8, 17, 25, 35, 9, 22, 30, 25, 21, 10, 5, 8, 14, 30,2],
  backgroundColor: [
  '#ec364c',
  '#ec364c'
  ],
  hoverBackgroundColor: [
  '#ec364c',
  '#ec364c'
  ]
}],
};

export default function DenseTable() {
   

    const [rowsDT, setDataDT] = useState<any>([]);
    useEffect(() => {
      const fetchData = async () => {
        let { data } = await supabase.from("DownTime").select("*");
        setDataDT(data);
      };
      fetchData();
    }, []);

    const [rowsNG, setDataNG] = useState<any>([]);
    useEffect(() => {
      const fetchData = async () => {
        let { data } = await supabase.from("NGProduct").select("*");
        setDataNG(data);
      };
      fetchData();
    }, []);

    const canvasOA = useRef(
      typeof document !=="undefined" ? document.createElement("canvas") : null
  );
  useEffect(() => {
      const ctx = canvasOA.current?.getContext('2d') as ChartItem
 
      const config = {
        type: 'pie',
        data: dataOA,
        width: 1,
        height: 1,
 
        options: {
          plugins: {
              legend: {
                  position: 'right',
                  display: true,
                  labels: {
                      color: ['rgb(255, 99, 132)','rgb(255, 255, 132)']
                  }
              }
          }
      }
      }
      const myLineChart = new Chart(ctx, config as any);
      return function cleanup() {
        myLineChart.destroy();
      };
    });

    const canvasE1 = useRef(
        typeof document !=="undefined" ? document.createElement("canvas") : null
    );
    useEffect(() => {
        const ctx = canvasE1.current?.getContext('2d') as ChartItem
   
        const config = {
          type: 'pie',
          data: data,
          width: 1,
          height: 1,
   
          options: {
            plugins: {
                legend: {
                    position: 'right',
                    display: true,
                    labels: {
                        color: ['rgb(255, 99, 132)','rgb(255, 255, 132)']
                    }
                }
            }
        }
        }
        const myLineChart = new Chart(ctx, config as any);
        return function cleanup() {
          myLineChart.destroy();
        };
      });

    const canvasE2 = useRef(
        typeof document !=="undefined" ? document.createElement("canvas") : null
    );
    useEffect(() => {
        const ctx = canvasE2.current?.getContext('2d') as ChartItem
   
        const config = {
          type: 'bar',
          data: dataDT,
          width: 1,
          height: 1,
   
          options: {
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: ['rgb(0, 0, 0)']
                    }
                }
            }
        }
        }
        const myLineChart = new Chart(ctx, config as any);
        return function cleanup() {
          myLineChart.destroy();
        };
      });

      const canvasE3 = useRef(
        typeof document !=="undefined" ? document.createElement("canvas") : null
    );
    useEffect(() => {
        const ctx = canvasE3.current?.getContext('2d') as ChartItem
   
        const config = {
          type: 'bar',
          data: dataNG,
          width: 1,
          height: 1,
   
          options: {
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: ['rgb(0, 0, 0)']
                    }
                }
            }
        }
        }
        const myLineChart = new Chart(ctx, config as any);
        return function cleanup() {
          myLineChart.destroy();
        };
      });

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
    <div className="DashBoard">
    <style jsx global>{`
     body {
    }
        .DashBoard {
          margin: 10px;
        }
        .Graph {
            margin-left: auto;
            margin-right: auto;
            position: relative;
            height:20vw;
            width:40vw;
        }
        .GraphDT{
          margin-left: auto;
          margin-right: auto;
          height:20vw;
          width:40vw;
        }
        .GraphNG{
          margin-left: auto;
          margin-right: auto;
          height:20vw;
          width:40vw;
        }
      `}</style>
    <h2>Dashboard</h2>

<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={3}>
    <Item>

    <div className="Graph">
        <canvas id="Graph" ref={canvasOA}/>
    </div>

    </Item>
  </Grid>
  <Grid item xs={3}>
    <Item>

    <div className="Graph">
        <canvas id="Graph" ref={canvasE1}/>
    {/* <Pie
        data={data}
        width={400}
        height={400}
    /> */}
    </div>

    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>

    <h5>On process</h5>
    <TableContainer component={Paper}>
      <Table sx={{ height: 374, width: 1 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Work order</TableCell>
            <TableCell align="right">Item number</TableCell>
            <TableCell align="right">Order</TableCell>
            <TableCell align="right">Good Qty</TableCell>
            <TableCell align="right">Man power</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.workorder}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.workorder}</TableCell>
              <TableCell align="right">{row.item}</TableCell>
              <TableCell align="right">{row.order}</TableCell>
              <TableCell align="right">{row.goods}</TableCell>
              <TableCell align="right">{row.manpower}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>

    <div className="GraphDT">
        <canvas id="Graph" ref={canvasE2}/>
    </div>

    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>

    <div className="GraphNG">
        <canvas id="Graph" ref={canvasE3}/>
    </div>

    </Item>
  </Grid>
  
  <Grid item xs={6}>
    <Item>

    <h5>Down time</h5>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Product unit</TableCell>
            <TableCell>Item number</TableCell>
            <TableCell>Work order</TableCell>
            <TableCell align="right">Start time</TableCell>
            <TableCell align="right">End time</TableCell>
            <TableCell align="right">Times</TableCell>
            <TableCell>Down time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>  
          <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell component="th" scope="row"></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    </Item>
  </Grid>

  <Grid item xs={6}>
    <Item>

    <h5>NG Product</h5>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Product unit</TableCell>
            <TableCell>Item number</TableCell>    
            <TableCell>Work order</TableCell>
            <TableCell align="right">NG Qty</TableCell>
            <TableCell>NG</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell component="th" scope="row"></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    </Item>
  </Grid>

  <Grid item xs={6}>
    <Item>

    <h5>Priority list</h5>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Item number</TableCell>
            <TableCell align="right">Work order</TableCell>
            <TableCell align="right">Order</TableCell>
            <TableCell align="right">Due date</TableCell>
            <TableCell align="right">Need date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    </Item>
  </Grid>
</Grid>
</div>
    
  );
}