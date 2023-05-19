import React, { useEffect , useState , useRef, useLayoutEffect} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
const Barchart = ({barchartid}) => {

    const chart = useRef(null);

    useLayoutEffect(() => {
        let x = am4core.create(barchartid, am4charts.XYChart);
         // Add data
         x.data = [{
            "country": "Number of Applications",
            "visits": 10
        }, {
            "country": "Number of Applications Sanction",
            "visits": 15
        }, {
            "country": "Inprogresss Client",
            "visits": 25
        }, {
            "country": "Disburced Application",
            "visits": 14
        }, {
            "country": "Total rejected Application",
            "visits": 0
        }];

        // Create axes

        let categoryAxis = x.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;
        // categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
        if (target.dataItem && target.dataItem.index & 2 == 2) {
            return dy + 25;
        }
        return dy;
        });

        let valueAxis = x.yAxes.push(new am4charts.ValueAxis());

        // Create series
        let series = x.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "visits";
        series.dataFields.categoryX = "country";
        series.name = "Visits";
        series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = .8;
        series.columns.template.width = am4core.percent(40);

        let columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;
        chart.current = x;
      return () => {
        x.dispose();
      };
    }, [])
    useEffect(() => {
    },[])
  return (
    <div id={barchartid} style={{ width: "100%", height: "300px" }}></div>
  )
}

export default Barchart