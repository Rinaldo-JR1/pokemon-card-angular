import { PokemonData } from './../../models/pokemonData';
import { PokemonServiceService } from './../../services/pokemon-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  pokemon: PokemonData;

  atributes: string[] = ['Grass', 'rock'];

  constructor(private service: PokemonServiceService) {
    this.pokemon = {
      name: '',
      id: 0,
      sprites: { front_default: '' },
      types: [{ slot: 0, type: { name: '', url: '' } }],
    };
    this.getPokemon('pikachu');
  }

  ngOnInit(): void {}

  getPokemon(searchPokemon: string) {
    this.service.getPokemon(searchPokemon.toLocaleLowerCase()).subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types,
        };
      },
      error: (err) => {
        console.log('Not found');
      },
    });
  }
}
