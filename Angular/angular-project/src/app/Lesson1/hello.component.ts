import { Component } from '@angular/core';

const VALUES = [
    "Hello World", "Привет Мир","Привіт Світ", "Hola Mundo", "Bonjour le monde", "Hallo Welt", "Ciaomondo", "Witaj świecie", "Hej världen", "Pozdravljen, svet", "Прывітанне Сусвет"];

@Component({
    moduleId: module.id,
    templateUrl: 'hello.component.html'
})

export class HelloComponent {
    phrases = VALUES;
}