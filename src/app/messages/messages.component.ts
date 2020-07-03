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
    'Rachana': ['Hello.. Hw r ya?','cool','hw is it in bangalore','fine','how about hitachi?'],
    'Sreevani': ['I am fine..','cool','hw is jpmc','good'],
    'Taruni': ['Happy birthday bro!'],
    'Rajendra': ['Ok'],
    'Pranav': ['Met charan yesterday','nice']
  }

  set_current_name(name){
    this.current_name = name;
    this.current_message_list = this.messages[this.current_name];
  }

}
