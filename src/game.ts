/// <reference path="../../phaser.d.ts"/>
import "phaser";
import {MainScene} from './mainScene';

const config: GameConfig = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: "game",
    scene: MainScene,
    physics: {
        default: "arcade",
        arcade:{
            gravity: {y:200}
        }
    }
};

export class Game extends Phaser.Game {
    constructor(config: GameConfig){
        super(config);
    }
}

window.addEventListener("load", () => {
    var game = new Game(config);
})