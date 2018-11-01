import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() name: String;
  filterDictrict = 'Da_Nang';
  select_dictrict = 'Da_Nang';
  arrInfo = [
    {}
  ];
  arrDaNang = [
    {dictrict : 'Liên Chiểu'},
    {dictrict : 'Thanh Khê'},
    {dictrict : 'Sơn Trà'}
  ];
  arrHaNoi = [
    {dictrict : 'Ba Đình'},
    {dictrict : 'Hoàn Kiếm'},
    {dictrict : 'Thanh Xuân'}
  ];
  arrHoChiMinh = [
    {dictrict : 'Bình Tân'},
    {dictrict : 'Tân Bình'},
    {dictrict : 'Gò Vấp'}
  ];

  constructor() { }

  ngOnInit() {
  }
  check_City() {
    // if ( this.filterDictrict = 'Da_Nang') {
    //   this.select_dictrict = 'arrDaNang';
    // }
    // if ( this.filterDictrict = 'Ha_Noi') {
    //   this.select_dictrict = 'arrHaNoi';
    // }
    // if ( this.filterDictrict = 'Ho_Chi_Minh') {
    //   this.select_dictrict = 'arrHoChiMinh';
    // }
    console.log(this.filterDictrict);
  }
}
