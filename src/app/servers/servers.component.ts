import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  //template: `
    //<app-server></ app-server>
    //<app-server></app-server>`,
    templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer= false;
  serverCreationStatus='No server was created!';
  serverName="testServer";
  constructor() { 
    setTimeout(() =>{

      this.allowNewServer=true;
    },2000);

  }

  ngOnInit() {
  }

  onCreatServer(){
    this.serverCreationStatus='server was creadted';
  }

  onUpdateServerName(event:Event){
    console.log(event);
    this.ServerName=(<HTMLInputElement>event.target).value;
  }

}
