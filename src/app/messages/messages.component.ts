import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  current_message_list = '';
  current_name = ''
  
  messages = {
    'C1': ['Hello.. Hw r ya?????? how r u doing.. hw is it in bangalore.. so long..!','cool','fine','how about hitachi?'],
    'C2': ['I am fine..','cool','hw is jpmc','good'],
    'C3': ['Happy birthday bro!'],
    'C4': ['Ok'],
    'C5': ['Met charan yesterday','nice']
  }

  set_current_name(name){
    this.current_name = name;
    this.current_message_list = this.messages[this.current_name];
  }

}
