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
          desc: "The Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img1.jpg",
          link: "#"
        },
        {
          title: "Space travel",
          desc: "Space travel refers to the journey beyond Earth's atmosphere into outer space, typically involving spacecraft like rockets, shuttles, or satellites. It enables humans and robots to explore space, conduct scientific research, and potentially visit other celestial bodies like the Moon, Mars, or beyond.",
          img: "./img/img2.jpg",
          link: "#"
        },
        {
          title: "Forest landscapes",
          desc: "Forest landscapes are diverse, natural areas covered primarily by trees, plants, and wildlife, creating a rich ecosystem. These landscapes can range from tropical rainforests to temperate and boreal forests, each supporting unique species and biodiversity.",
          img: "./img/img3.jpeg",
          link: "#"
        },
        {
          title: "Sakhalin Fox",
          desc: "Sakhalin fox is a subspecies of red fox native to Sakhalin Island in Russia. Known for its adaptability, it inhabits the island's forests, mountains, and coastal areas, thriving in diverse environments.",
          img: "./img/img4.jpeg",
          link: "#"
        },
      ],
      [
        {
          title: "The Oracle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img5.jpg",
          link: "#"
        },
        {
          title: "The Viking",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img6.jpg",
          link: "#"
        },
        {
          title: "The Jungle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img7.jpeg",
          link: "#"
        },
        {
          title: "The Fox",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img8.jpg",
          link: "#"
        },
      ],
      [
        {
          title: "The Oracle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img9.jpg",
          link: "#"
        },
        {
          title: "The Viking",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img10.jpg",
          link: "#"
        },
        {
          title: "The Jungle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img11.jpg",
          link: "#"
        },
        {
          title: "The Fox",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img12.jpg",
          link: "#"
        },
      ],
      [
        {
          title: "The Oracle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img13.jpg",
          link: "#"
        },
        {
          title: "The Viking",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img14.jpg",
          link: "#"
        },
        {
          title: "The Jungle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img15.jpg",
          link: "#"
        },
        {
          title: "The Fox",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img16.jpg",
          link: "#"
        },
      ],
      [
        {
          title: "The Oracle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img17.jpg",
          link: "#"
        },
        {
          title: "The Viking",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img18.jpg",
          link: "#"
        },
        {
          title: "The Jungle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img19.jpg",
          link: "#"
        },
        {
          title: "The Fox",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img20.jpg",
          link: "#"
        },
      ],
      [
        {
          title: "The Oracle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img21.jpg",
          link: "#"
        },
        {
          title: "The Viking",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img22.jpg",
          link: "#"
        },
        {
          title: "The Jungle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img23.jpg",
          link: "#"
        },
        {
          title: "The Fox",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img24.jpg",
          link: "#"
        },
      ],
      [
        {
          title: "The Oracle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img25.jpg",
          link: "#"
        },
        {
          title: "The Viking",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img26.jpeg",
          link: "#"
        },
        {
          title: "The Jungle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img27.jpeg",
          link: "#"
        },
        {
          title: "The Fox",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img28.jpeg",
          link: "#"
        },
      ],
      [
        {
          title: "The Oracle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img29.jpg",
          link: "#"
        },
        {
          title: "The Viking",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img30.jpeg",
          link: "#"
        },
        {
          title: "The Jungle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img31.jpeg",
          link: "#"
        },
        {
          title: "The Fox",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img32.jpeg",
          link: "#"
        },
      ],
      [
        {
          title: "The Oracle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img33.jpeg",
          link: "#"
        },
        {
          title: "The Viking",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img34.jpeg",
          link: "#"
        },
        {
          title: "The Jungle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img35.jpeg",
          link: "#"
        },
        {
          title: "The Fox",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img36.jpeg",
          link: "#"
        },
      ],
      [
        {
          title: "The Oracle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img37.jpeg",
          link: "#"
        },
        {
          title: "The Viking",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img38.jpeg",
          link: "#"
        },
        {
          title: "The Jungle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img39.jpeg",
          link: "#"
        },
        {
          title: "The Fox",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img40.jpeg",
          link: "#"
        },
      ],
      [
        {
          title: "The Oracle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img41.jpg",
          link: "#"
        },
        {
          title: "The Viking",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img42.jpeg",
          link: "#"
        },
        {
          title: "The Jungle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img43.jpeg",
          link: "#"
        },
        {
          title: "The Fox",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img44.jpeg",
          link: "#"
        },
      ],
      [
        {
          title: "The Oracle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img45.jpeg",
          link: "#"
        },
        {
          title: "The Viking",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img46.jpeg",
          link: "#"
        },
        {
          title: "The Jungle",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img47.jpeg",
          link: "#"
        },
        {
          title: "The Fox",
          desc: "A Goddess Oracle is a type of divination tool, often presented as a deck of cards, used for spiritual guidance and introspection. Each card typically features a goddess from various mythologies and cultures, symbolizing specific energies, qualities, or messages.",
          img: "./img/img48.jpg",
          link: "#"
        },
      ],
    ]
  }
}
