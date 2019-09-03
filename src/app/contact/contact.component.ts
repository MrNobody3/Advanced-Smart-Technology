import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  options: string[] = [];
  loading = false;
  constructor() { }

  ngOnInit() {
    this.options.push('Informatique');
    this.options.push('Industriel');
    this.options.push('Other');
  }
  onSubmit(f: NgForm) {
    this.loading = true;
    const obj  = {
      name: f.value.name,
      from: f.value.email,
      subject: f.value.subject,
      service: f.value.service || '',
      body: f.value.comment,
      new: true,
      date: new Date(),
      done: false
    };
  }

}
