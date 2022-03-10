import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.css']
})
export class SectionTwoComponent implements OnInit {
  
  imagePath = "assets/images/1.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}
