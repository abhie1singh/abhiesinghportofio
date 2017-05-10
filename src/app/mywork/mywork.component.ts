import { Component } from '@angular/core';

@Component({
    selector: 'mywork',
    templateUrl: './mywork.component.html',
})
export class MyWorkComponent {
    showMore : boolean;
    buttonText : string;
    constructor(){
        this.showMore = false;
        this.buttonText = "Read More";
    }

    toggleShowState(){
        if(this.showMore){
            this.showMore = false;
            this.buttonText = "Read More";
        } else {
            this.showMore = true;
            this.buttonText = "Read Less"
        }   
    }
};