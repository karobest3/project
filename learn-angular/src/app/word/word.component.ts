import { Component } from '@angular/core';

@Component({
    templateUrl: './word.component.html',
    selector: 'app-word',
    styleUrls:['./word.component.css']
})

export class WordComponent{
    en: string = 'hello';
    vn: string = 'Xin Chao';
    imageUrl = 'https://angularjs.org/img/angularjs-for-header-only.svg';
    forgot= false;

    toogleForgot(){
        this.forgot = !this.forgot;
    }
}
