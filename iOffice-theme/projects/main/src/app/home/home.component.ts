import { Component, OnInit,Injectable } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
@Injectable()
export class HomeComponent implements OnInit{
  
  radioChangeTheme="ioffice";
  theme=localStorage.getItem("theme");
  ngOnInit(): void {
    
    this.radioChangeTheme=localStorage.getItem("theme");
  }
  changeThem(){
    console.log(this.radioChangeTheme);
    localStorage.setItem("theme",this.radioChangeTheme);
    window.location.reload();
  }
}
