import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { ProductsServiceService } from '../products/products-service.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
    public barChartOptions: ChartOptions = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
        }
      }
    };
    public barChartLabels: Label[]
    // public barChartData: ChartDataSets[]
    constructor(private _productDatausingDI: ProductsServiceService) {
       
      this.GetAllProductNames()
     this.GetAllViewCounts()
     }
  
    Allproducts: any[]
    public ViewCounts:any[]
    //public barChartLabels: Label[] = ['iphone 1', 'iphone 2', 'iphone 3', 'iphone 4', 'iphone 5', 'iphone 6', 'iphone 7'];

    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [];
  
    // public barChartData: ChartDataSets[] = [
    //   { data: [65, 59, 80, 81, 56, 55, 40,65], label: 'Viewed' },
    //   // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    // ];
  public barChartData: ChartDataSets[] = [
      { data: [65, 59, 80, 81, 56, 55, 40,65], label: 'Viewed' },
      // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];

    public barChartDatafromDatabase: ChartDataSets[]
    // public barChartDatafromDatabase: ChartDataSets[] = [
    //   { data: this.ViewCounts , label: 'Viewed' },
    //   // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    // ];
  
   
    ngOnInit() {
     // this.barChartLabels =  this.GetAllProductNames()
      console.log("data is :"+this.barChartLabels)
    }
  
    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public randomize(): void {
      // Only Change 3 values
      const data = [
        Math.round(Math.random() * 100),
        59,
        80,
        (Math.random() * 100),
        56,
        (Math.random() * 100),
        40];
      this.barChartData[0].data = data;
    }

    
    GetAllProductNames():any
    {

      return this._productDatausingDI.getDatafromJsonServer().subscribe(
        (x:any[])=>
        { (this.Allproducts= (x.filter(x => x.productName).map(x=>x.productName)))
          this.barChartLabels=this.Allproducts
          console.log('produt data is ', (x.filter(x => x.productName).map(x=>x.productName)));
          console.log('this product data is ', this.Allproducts);
        },
        (err => console.log(err))
      )
      }

      GetAllViewCounts():any
    {

      return this._productDatausingDI.getDatafromJsonServer().subscribe(
        (x:any[])=>
        { (this.ViewCounts= (x.filter(x => x.ViewCount).map(x=>x.ViewCount)));
         // this.barChartData=this.ViewCounts
         this.barChartData= [
          { data: this.ViewCounts , label: 'View counts' },
          // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
          console.log('viewCount data is ', (x.filter(x => x.ViewCount).map(x=>x.ViewCount)));
          
        },
        (err => console.log(err))
      )
      }

      // Allproducts.forEach(function (value) {
      //   console.log(value);
      // }); 

      // ViewProducts()
      // {

      //   array.forEach(element => {
          
      //   });
      // }
  }

  // (this.Allproducts= (x.find(x => x.productName).productName))