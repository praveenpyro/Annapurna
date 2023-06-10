import React, { useEffect , useState , useRef, useLayoutEffect} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
const Barchart = ({barchartid}) => {

  const chart = useRef(null);
  useEffect(() => {
    const monthsArray = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    // Initialize chart
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create('barchart1', am4charts.XYChart);

    // Set data
    chart.data = [
      {
        month: 'Jan',
        disbursed: 40,
        rejected: 30,
      },
      {
        month: 'Feb',
        disbursed: 10,
        rejected: 50,
      },
      {
        month: 'Mar',
        disbursed: 5,
        rejected: 10,
      },{
        month: 'Apr',
        disbursed: 100,
        rejected: 10,
      },{
        month: 'May',
        disbursed: 25,
        rejected: 25,
      },{
        month: 'Jun',
        disbursed: 10,
        rejected: 40,
      },{
        month: 'Jul',
        disbursed: 40,
        rejected: 30,
      },{
        month: 'Aug',
        disbursed: 40,
        rejected: 30,
      },{
        month: 'Sep',
        disbursed: 40,
        rejected: 30,
      }
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'month';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.cellStartLocation = 0.2; // Adjust the start location of each category
    categoryAxis.renderer.cellEndLocation = 0.8;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.labels.template.adapter.add('dy', (dy, target) => {
      if (chart.innerWidth < 768) {
        return dy + 15;
      }
      return dy;
    });
    categoryAxis.events.on('sizechanged', (ev) => {
      categoryAxis.zoomToCategories(0, 3);
    });
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.dataFields.valueY = 'disbursed';
    series1.dataFields.categoryX = 'month';
    series1.name = 'Disbursed Applicants';
    series1.fill = am4core.color('#51b716');

    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = 'rejected';
    series2.dataFields.categoryX = 'month';
    series2.name = 'Rejected Applicants';
    series2.fill = am4core.color('#e97319');
    // let series3 = chart.series.push(new am4charts.ColumnSeries());
    // series3.dataFields.valueY = 'value3';
    // series3.dataFields.categoryX = 'category';
    // series3.name = 'Series 3';

    // Add legend
    chart.legend = new am4charts.Legend();

    // Clean up on component unmount
    return () => {
      chart.dispose();
    };
  }, []);
  return (
    <div id={barchartid} style={{ width: "100%", height: "300px" }}></div>
  )
}

export default Barchart