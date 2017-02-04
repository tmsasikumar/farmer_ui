import { Component } from '@angular/core';
import {FaqService} from "../../services/faq-service";
import {Response} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'faq',
  templateUrl: 'faq.component.html'
})

export class FaqComponent {
  faqs: any;
  constructor(private faqService: FaqService){
    //let faq = JSON.parse(localStorage.getItem("faq"));
    //if(faq == null){
      this.faqService.getFaq().subscribe(
        faqs => this.handleFaq
      );

   // }
  }

  private handleFaq (message: Response | any) {

    let qns = message.json();
    if (qns) {
      //localStorage.setItem('faqs', JSON.stringify(qns));
    }
    this.faqs= qns

  }
}
