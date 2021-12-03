import {Component, HostListener, OnInit} from '@angular/core';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private myChart: any = null;
  private  graphChart: any = null;


  constructor() {

  }

  ngOnInit(): void {
    this.InitPipe();

  }

  ngOnChanges() {

  }
  private InitPipe(): void {
    this.myChart = echarts.init((document.getElementById('pipe')) as any);

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        //selectedMode: false,
        orient: 'vertical',
        x: 'left',
        data:['elem1','elem2','elem3','elem4','elem5']
      },
      series: [
        {
          name:'NOMBRE',
          type:'pie',
          radius: ['50%', '90%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
            {value:335, name:'elem1'},
            {value:310, name:'elem2'},
            {value:234, name:'elem3'},
            {value:135, name:'elem4'},
            {value:1548, name:'elem5'}
          ]
        }
      ]
    };

    this.myChart.setOption(option);


    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom!);


    const axisData = ['Mon', 'Tue', 'Wed', 'Very Loooong Thu', 'Fri', 'Sat', 'Sun'];
    const data = axisData.map(function (item, i) {
      return Math.round(Math.random() * 1000 * (i + 1));
    });
    const links = data.map(function (item, i) {
      return {
        source: i,
        target: i + 1
      };
    });
    links.pop();
    this.graphChart = {
      title: {
        text: 'Graph on Cartesian'
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: axisData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          type: 'graph',
          layout: 'none',
          coordinateSystem: 'cartesian2d',
          symbolSize: 40,
          label: {
            show: true
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 10],
          data: data,
          links: links,
          lineStyle: {
            color: '#2f4554'
          }
        }
      ]
    };
    this.graphChart && myChart.setOption(this.graphChart);

  }



}

