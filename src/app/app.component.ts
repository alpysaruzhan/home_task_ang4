import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang7';
  public d = false;
  public f = false;
  public a = false;
  public g = false;
  public t = false;

  fir(){
    setTimeout(() => {
      this.d = true
    }, 50)
  }
  fir1(){
    setTimeout(() => {
      this.f = true
    }, 50)
  }
  fir2(){
    setTimeout(() => {
      this.a = true
    }, 50)
  }
  fir3(){
    setTimeout(() => {
      this.g = true
    }, 50)
  }
  firs(){
    setTimeout(() => {
      this.t = true
    }, 50)
  }
}
