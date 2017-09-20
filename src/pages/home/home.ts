import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    cards = [
        {
            imgPath: "travel2.jpg",
            title: "Travel Destination",
            desc: "This is my new travel destination",
            favorited: false
        },
        {
            imgPath: "travel3.jpg",
            title: "Travel Destination",
            desc: "This is my exciting new travel destination",
            favorited: false
        },
        {
            imgPath: "travel4.jpg",
            title: "Travel Destination",
            desc: "This is my crazy new travel destination",
            favorited: false
        }
    ];

    constructor(public navCtrl: NavController) {

    }

    clickFav(card) {
//        gets index value of card
        let index = this.cards.indexOf(card);
        if (index > -1) {
            if (card.favorited) {
                this.cards[index].favorited = false;
            } else {
                this.cards[index].favorited = true;
            }
        }
    }
}
