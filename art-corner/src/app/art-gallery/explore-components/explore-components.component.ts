import { Component, NgModule } from '@angular/core';
import { CreateExplore } from './CreateExplore';
import { CardHoldersComponent } from "../card-holders/card-holders.component";

@Component({
  selector: 'app-explore-components',
  standalone: true,
  imports: [CardHoldersComponent],
  templateUrl: './explore-components.component.html',
  styleUrl: './explore-components.component.css'
})

export class ExploreComponentsComponent{

  artifacts: CreateExplore[][];

  constructor() {
    this.artifacts = [
      [
        {
          title: "The Oracle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img1.jpg"
        },
        {
          title: "The Viking",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img2.jpg"
        },
        {
          title: "The Jungle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img3.jpeg"
        },
        {
          title: "The Fox",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img4.jpeg"
        },
      ],
      [
        {
          title: "The Oracle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img5.jpg"
        },
        {
          title: "The Viking",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img6.jpg"
        },
        {
          title: "The Jungle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img7.jpeg"
        },
        {
          title: "The Fox",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img8.jpg"
        },
      ],
      [
        {
          title: "The Oracle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img9.jpg"
        },
        {
          title: "The Viking",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img10.jpg"
        },
        {
          title: "The Jungle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img11.jpg"
        },
        {
          title: "The Fox",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img12.jpg"
        },
      ],
      [
        {
          title: "The Oracle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img13.jpg"
        },
        {
          title: "The Viking",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img14.jpg"
        },
        {
          title: "The Jungle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img15.jpg"
        },
        {
          title: "The Fox",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img16.jpg"
        },
      ],
      [
        {
          title: "The Oracle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img17.jpg"
        },
        {
          title: "The Viking",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img18.jpg"
        },
        {
          title: "The Jungle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img19.jpg"
        },
        {
          title: "The Fox",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img20.jpg"
        },
      ],
      [
        {
          title: "The Oracle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img21.jpg"
        },
        {
          title: "The Viking",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img22.jpg"
        },
        {
          title: "The Jungle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img23.jpg"
        },
        {
          title: "The Fox",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img24.jpg"
        },
      ],
      [
        {
          title: "The Oracle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img25.jpg"
        },
        {
          title: "The Viking",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img26.jpeg"
        },
        {
          title: "The Jungle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img27.jpeg"
        },
        {
          title: "The Fox",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img28.jpeg"
        },
      ],
      [
        {
          title: "The Oracle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img29.jpg"
        },
        {
          title: "The Viking",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img30.jpeg"
        },
        {
          title: "The Jungle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img31.jpeg"
        },
        {
          title: "The Fox",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img32.jpeg"
        },
      ],
      [
        {
          title: "The Oracle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img33.jpeg"
        },
        {
          title: "The Viking",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img34.jpeg"
        },
        {
          title: "The Jungle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img35.jpeg"
        },
        {
          title: "The Fox",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img36.jpeg"
        },
      ],
      [
        {
          title: "The Oracle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img37.jpeg"
        },
        {
          title: "The Viking",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img38.jpeg"
        },
        {
          title: "The Jungle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img39.jpeg"
        },
        {
          title: "The Fox",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img40.jpeg"
        },
      ],
      [
        {
          title: "The Oracle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img41.jpg"
        },
        {
          title: "The Viking",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img42.jpeg"
        },
        {
          title: "The Jungle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img43.jpeg"
        },
        {
          title: "The Fox",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img44.jpeg"
        },
      ],
      [
        {
          title: "The Oracle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img45.jpeg"
        },
        {
          title: "The Viking",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img46.jpeg"
        },
        {
          title: "The Jungle",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img47.jpeg"
        },
        {
          title: "The Fox",
          time: "1000 BC",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img48.jpg"
        },
      ],
    ]
  }
}
