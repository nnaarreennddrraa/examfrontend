import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  constructor(private userService:UserService, private snack:MatSnackBar){}
public user={
  userName:'',
    firstName:'',
  lastName:'',
  password:'',
  email:'',
  phone:'',
}


  
  ngOnInit(): void {
  
}
formSubmit(){
  if (this.user.userName==''||this.user.userName==null){
    //alert("user is required");
    this.snack.open('usename is required','',{
      duration:3000,verticalPosition:'top',
      horizontalPosition:'right'
    });
    return;
  }

  console.log(this.user);

  this.userService.addUser(this.user).subscribe(

    (data)=>{
      console.log(data);
      //alert("success");
      Swal.fire('success done!!','user is registered ');
    },
    (error)=>{
      console.log(error);
      //alert("something went wrong");
       this.snack.open('somethimg went wrong !!','',{
        duration:3000,
       });

    }
  )
}
}
