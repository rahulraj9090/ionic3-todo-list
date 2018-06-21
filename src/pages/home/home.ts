import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos= [];
  public reorderIsEnabled= false;

  constructor(public navCtrl: NavController, private alertController:AlertController) {

  }
  toggleReorder(){
    this.reorderIsEnabled=!this.reorderIsEnabled;
  }
  
  itemReordered($event){
    reorderArray(this.todos, $event);
  }

  openTodoAlert(){
    let addTodoAlert = this.alertController.create({
      title:"Add a Todo",
      message:"Enter your todo",
      inputs:[
      {
        type:"text",
        name:"addTodoInput"
      }],
      buttons:[
      {
        text:"Cancel"
      },
      {
        text:"Add Todo",
        handler:(inputData)=>{
          let todoText;
          todoText= inputData.addTodoInput;
          this.todos.push(todoText);
        }
      }]
    });
    addTodoAlert.present()
  }
}
