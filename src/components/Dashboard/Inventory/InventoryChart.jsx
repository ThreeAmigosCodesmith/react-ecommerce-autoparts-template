/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Bar, Line, Pie } from 'react-chartjs-2';
import './InventoryChart.css';
import PurchaseTable from '../Purchases/PurchaseTable';
// import Modal from '@material-ui/core/Modal';

function InventoryChart() {
  const [graphIdx, setGraphIdx] = useState(null);
  const supplierID = useSelector((state) => state.auth.user.id);

  const openModal = (idx) => {
    // eslint-disable-next-line no-console
    console.log('open');
  };

  return (
    <div className="main_parent">
      <div className="graphs">
        <div className="barGraph">
          <Bar
            onClick={() => openModal(0)}
            data={{
              labels: ['Toyota', 'bmw', 'mercedes', 'nissan', 'ford'],
              datasets: [
                {
                  label: 'Parts available based on Car Model',
                  data: [23, 54, 31, 10],
                  backgroundColor: [
                    'rgba(255,99,132,0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                  ],
                },
              ],
            }}
          />
        </div>

        <div className="lineGraph">
          <Line
            data={{
              labels: ['Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday'],
              datasets: [
                {
                  label: 'Inventory Days of Supply',
                  data: [23, 54, 31, 10],
                  backgroundColor: [
                    'rgba(255,99,132,0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                  ],
                },
              ],
            }}
          />
        </div>
        <div className="pieGraph">
          <Pie
            data={{
              labels: [
                'Brooklyn',
                'Queens',
                'Manhattan',
                'Bronx',
                'Staten Island',
              ],
              datasets: [
                {
                  label: 'Parts based on Borough',
                  data: [23, 54, 31, 10, 21],
                  backgroundColor: [
                    'rgba(255,99,132,0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                  ],
                },
              ],
            }}
            options={{
              title: {
                label: 'hello',
                text: 'Parts',
                fontSize: 12,
              },
              legend: {
                text: 'hei',
                display: 'hi',
                position: 'right',
              },
            }}
          />
        </div>
      </div>
      {/* <div className="purchaseTable">
        <PurchaseTable />
      </div> */}
    </div>
  );
}

export default InventoryChart;
