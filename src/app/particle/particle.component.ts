import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particle',
  templateUrl: './particle.component.html',
  styleUrls: ['./particle.component.scss']
})
export class ParticleComponent implements OnInit {
  myStyle = {};
  myParams: object = {};
  width = 100;
  height = 100;
  constructor() { }

  ngOnInit() {
    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      'background-color': '#ccc'
    };

    this.myParams = {
      particles: {
        number: {
          value: 120,
        },
        color: {
          value: '#fff'
        },
        shape: {
          type: 'star',
        },
        move: {
          attract: {
            enable: true
          }
        }
      }
    };
  }
}
