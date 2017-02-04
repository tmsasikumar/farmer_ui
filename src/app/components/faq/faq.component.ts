import {Component, OnInit} from '@angular/core';
import {FaqService} from "../../services/faq-service";
import {Response} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'faq',
  templateUrl: 'faq.component.html'
})

export class FaqComponent implements OnInit {
  faqs: any;

  constructor(private faqService: FaqService) {
    //let faq = JSON.parse(localStorage.getItem("faq"));


  }

  ngOnInit() {
    this.faqService.getFaq().subscribe(
      faqs => this.faqs = faqs.faqs
    );

  }


}
