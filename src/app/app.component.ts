import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface pokemon {
    id : number,
    name : string,
    type : string,
    isCool : boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    title : string;
    imgSrc : string;
    post : string;

    animal : string;
    pokemonName : string = "";
    inputVal : string = "";

    myPokemons : pokemon[] = [
        { id : 1, name : "Pikachu", type : "electric", isCool : true},
        { id : 2, name : "Squirttle", type : "water", isCool : false},
        { id : 3, name : "Charmander", type : "water", isCool : false },
    ]

    constructor(){
        this.title = "Acacaac";
        this.imgSrc = "https://www.constructionweekonline.com/cloud/2021/07/06/IMG-Worlds-of-Legends-Rendering.jpg";
        this.post = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quidem vitae explicabo consectetur aut ullam aliquid aliquam voluptate illum dolores necessitatibus sunt eligendi autem fugiat, rem quisquam modi sed dolorem.";
        this.animal = "";
    }

    handleClick(pokemonName : any){
        alert(pokemonName)
    }

    handleChange(e : any){
        this.inputVal = e.target.value;
    }


}
