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
  serverCreated= false;
  servers=['Testserver','TestServer 2'];
  constructor() { 
    setTimeout(() =>{

      this.allowNewServer=true;
    },2000);

  }

  ngOnInit() {
  }

  onCreatServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='server was creadted name is '+ this.serverName;
  }

  onUpdateServerName(event:Event){
    console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
