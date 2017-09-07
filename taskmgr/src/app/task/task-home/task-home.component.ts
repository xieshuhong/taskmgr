import { Component, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material";
import { NewTaskComponent } from "../new-task/new-task.component";
import { CopyTaskComponent } from "../copy-task/copy-task.component";
import { ConfirmDialogComponent } from "../../shared/confirm-dialog/confirm-dialog.component";
import { NewTaskListComponent } from "../new-task-list/new-task-list.component";

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }
  
  lists = [
    {
      id:1,
      name:'待办',
      tasks: [
                  {
                    id:1,
                    desc:'任务一:去星巴克买杯咖啡',
                    completed:true,
                    priority: 3,
                    owner:{
                      id:1,
                      name:'张三',
                      avatar:'avatars:svg-11'
                    },
                    dueDate: new Date(),
                    reminder: new Date()
                  },
                  {
                    id:2,
                    desc:'任务二:完成老师布置的ppt作业',
                    completed:false,
                    priority: 2,                    
                    owner:{
                      id:1,
                      name:'李四',
                      avatar:'avatars:svg-12'
                    },
                    dueDate: new Date(),
                  }
      ]
    },
    {
      id:1,
      name:'待办',
      tasks: [
                  {
                    id:1,
                    desc:'任务一:去星巴克买杯咖啡',
                    completed:true,
                    priority: 1,                    
                    owner:{
                      id:1,
                      name:'张三',
                      avatar:'avatars:svg-11'
                    },
                    dueDate: new Date(),
                  },
                  {
                    id:2,
                    desc:'任务二:完成老师布置的ppt作业',
                    completed:false,
                    priority: 2,                    
                    owner:{
                      id:1,
                      name:'李四',
                      avatar:'avatars:svg-12'
                    },
                    dueDate: new Date(),
                    reminder: new Date()
                  }
      ]
    }
  ];

  launchNewTaskDialog(){
    const dialogref =  this.dialog.open(NewTaskComponent, {data: {title:'新建任务:'}});    
  }

  launchCopyTaskDialog(){
    const dialogref = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }
  launchUpdateTaskDialog(task){
    const dialogref =  this.dialog.open(NewTaskComponent, {data: {title:'修改任务:', task: task}});
    
  }
  
  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除任务列表:', content: '您确认删除该任务列表吗?'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '更改列表名称:'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  
  launchNewListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '新建列表:'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

}
