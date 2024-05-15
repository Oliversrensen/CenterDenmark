import { Component, OnInit  } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Characterdata} from "../characterdata";
import {DataService} from "../data.service";
import {EChartsOption, SeriesOption} from "echarts";


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})


export class DetailPageComponent implements OnInit{
  characters$ : any = this.dataService.getAllCharacters();
  characterName : any;
  character : Characterdata = {id:undefined, data:[], name:"", image:"", description:"", subtitle:""};
  echartsInstance: any;
  options: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#ffffff',
        },
      },
    },
    legend: {
      data: ['Kill count'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Fellowship', 'Two Towers', 'Return of the King'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Kill count',
        type: 'line',
        stack: 'counts',
        areaStyle: {},
        data: this.character?.data,
      }
    ],
  };


  constructor(private route: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.characterName = params['name'];
    });

    this.characters$.subscribe((res : any) => res.forEach((char : Characterdata) => {
      if(char.name === this.characterName){
        this.character = char;
      }
    }))
  }

  shuffleData()  {
    let randData : number[] = Array.from({length: 3}, () => Math.floor(Math.random() * 100));
    this.character!.data = randData;
    (this.options.series as SeriesOption[]).forEach(option =>
      option['data'] = this.character!.data);
    this.echartsInstance.setOption(this.options);
    this.dataService.saveGraphData((this.character?.id as string), randData).subscribe()
  }

  onChartInit(ec: any) {
    this.echartsInstance = ec;
    (this.options.series as SeriesOption[]).forEach(option =>
      option['data'] = this.character?.data);
    this.echartsInstance.setOption(this.options)
  }

  saveSliders(){
    (this.options.series as SeriesOption[]).forEach(option =>
      option['data'] = this.character?.data);
    this.echartsInstance.setOption(this.options)
    this.dataService.saveGraphData((this.character?.id as string), this.character!.data).subscribe()
  }

}
