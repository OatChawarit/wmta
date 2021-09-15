import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicScriptLoaderService } from 'src/app/shared-service/dynamic-script-loader.service';
import Swal from 'sweetalert2'
import { AuthService } from '../../home/login/service/auth.service'
import { ServiceService } from '../service/service.service';

declare const $: any;
declare const M: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  imageSrc: any;
  registerHospital : FormGroup;
  registerHotel: FormGroup;
  imageSelected:any;
  filesSelected:any;
  resData : any;
  fileArrName:any;

  selectedFiles: FileList | undefined;
  progressInfos :  any;

  menu: any;
  tabmenu = [
    { name: 'Register1', status: '', action: '' },
    { name: 'Register2', status: '', action: '' },
    { name: 'Register3', status: '', action: '' },
    { name: 'Register4', status: '', action: '' },
    { name: 'Register5', status: '', action: '' },
  ];
  
  renderer: any;
  ActionShow: any;


  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder, private dynamicScriptLoader : DynamicScriptLoaderService,
    private servRegister : ServiceService, private authService: AuthService) { 

      this.registerHospital = this.fb.group({
        email: ["", [Validators.required, Validators.email]],
        password: ["", Validators.required, Validators.minLength(6)],
        fname: "",
        lname: "",
        birthday: "",
        age : "",
        sex: "",
        phone: "",
        position: "",
        department: "",
        organization: "",
        line:  "",
        type: "2",  //0=สมาชิกทั่วไป 1=โรงแรม 2=โรงบาล
        image: "",
        files: []
      });


      this.registerHotel = this.fb.group({
        email: ["", [Validators.required, Validators.email]],
        password: ["", Validators.required, Validators.minLength(6)],
        fname: "",
        lname: "",
        birthday: "",
        age : "",
        sex: "",
        phone: "",
        position: "",
        department: "",
        organization: "",
        line:  "",
        type: "1",  //0=สมาชิกทั่วไป 1=โรงแรม 2=โรงบาล
        image: "",
        files: []
      });

    }

  ngOnInit(): void {

  }
      
  get emailHospital(): any { return this.registerHospital.get('email'); }
  get passwordHospital(): any { return this.registerHospital.get('password'); }
  get fnameHospital(): any { return this.registerHospital.get('fname'); }
  get lnameHospital(): any { return this.registerHospital.get('lname'); }
  get ageHospital(): any { return this.registerHospital.get('age'); }
  get sexHospital(): any { return this.registerHospital.get('sex'); }
  get phoneHospital(): any { return this.registerHospital.get('phone'); }
  get lineHospital(): any { return this.registerHospital.get('line'); }
  get typeHospital(): any { return this.registerHospital.get('type'); }
  get imageHospital(): any { return this.registerHospital.get('image'); }
  get fileHospital(): any { return this.registerHospital.get('file'); }


  get emailHotel(): any { return this.registerHotel.get('email'); }
  get passwordHotel(): any { return this.registerHotel.get('password'); }
  get fnameHotel(): any { return this.registerHotel.get('fname'); }
  get lnameHotel(): any { return this.registerHotel.get('lname'); }
  get ageHotel(): any { return this.registerHotel.get('age'); }
  get sexHotel(): any { return this.registerHotel.get('sex'); }
  get phoneHotel(): any { return this.registerHotel.get('phone'); }
  get lineHotel(): any { return this.registerHotel.get('line'); }
  get typeHotel(): any { return this.registerHotel.get('type'); }
  get imageHotel(): any { return this.registerHotel.get('image'); }
  get fileHotel(): any { return this.registerHotel.get('file'); }

  registerAccount(form: FormGroup) {
    if (form.value.email == undefined || form.value.email == "") {
      Swal.fire(
        "Found an Error", //title
        "Incomplete information !!", //main text
        "warning" //icon
      );
    } 
    else if (this.imageSelected== undefined || this.imageSelected == "") {
      Swal.fire(
        "Found an Error", //title
        "No profile picture, please include a profile picture. !!", //main text
        "warning" //icon
      );
    }
    else if (this.filesSelected== undefined || this.filesSelected == "") {
      Swal.fire(
        "Found an Error", //title
        "Attach files such as : Passport, Medical diagnosis, etc. (.pdf, word, images) !!", //main text
        "warning" //icon
      );
    }
     else {
      //console.log(this.registerHospital.value);
      let sendData = new FormData();
      sendData.append('email', form.value.email);
      sendData.append('password', form.value.password);
      sendData.append('fname', form.value.fname);
      sendData.append('lname', form.value.lname);
      sendData.append('birthday', form.value.birthday);
      sendData.append('age', form.value.age);
      sendData.append('sex', form.value.sex);
      sendData.append('phone', form.value.phone);
      sendData.append('line', form.value.line);
      sendData.append('type', form.value.type);
      if(this.imageSelected == undefined || this.imageSelected== ""){
        sendData.append('image', "")
      }else{
        sendData.append('image', this.imageSelected[0])
      }
      //sendData.append('files[]', this.filesSelected[0], this.filesSelected[1])
      for (let i = 0; i < this.filesSelected.length; i++) {
        sendData.append('files[]', this.filesSelected[i]);
      }
      sendData.append('position', form.value.position);
      sendData.append('department', form.value.department);
      sendData.append('organization', form.value.organization);

      this.servRegister.new(sendData).subscribe((res) => {
        this.resData = res;
        console.log(this.resData);
        if (this.resData.status == "false") {
          Swal.fire(
            "Found an Error", //title
            "Error or duplicate email, ", //main text
            "warning" //icon
          );
        } else {
          Swal.fire({ //alert confirm แบบ sweetalert
            title: 'Success, Thank you',
            // text: 'ออกจากระบบ ใช่หรือไม่ ?',
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK',
            //cancelButtonText: 'Cencel',
          }).then((val) => {
            if (val.value) {
              this.router.navigate(['/login']).then(() => {
                window.location.reload();
              });
            }
          });
        }
      });
    }
  }
  
  fileArrList(event : any) {
    const files: FileList = event.target.files;
    this.filesSelected = files;
    //console.log(event.target.files);
    let arrTxt = [];
    for(let i=0; i < files.length; i++){
      arrTxt.push({fileName : files[i].name, rows : i+1 });
    }
    //console.log(arrTxt);
    this.progressInfos = arrTxt;
  }

  clearFile(){
    this.progressInfos = [];
    $('.file-select').val('');
  }

  uploadBtn() : void {
    //console.log("click");
    $(".file-upload").click();
  }

  readFileImg(event:any): void {
    const files: FileList = event.target.files;
    this.imageSelected = files;
    //Array.from(files).forEach((file: File)=>{
    //  this.fileNames.push(file.name);    
    //});
    //this.fileChanged.emit(files);
    console.log(' file chage ', this.imageSelected)
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;
        reader.readAsDataURL(file);
    }
  }

  checkRegis(tab : String){
    console.log(tab);
  }
  
  onFileChange(file:any) {
    //this.imageSelected = file;
    let files : File = file[0];
  }

  async startScript() {
    await this.dynamicScriptLoader.load('custom', 'respond.min', 'jquery.swipebox','jquery.velocity','jquery.validate.min','jquery.meanmenu.min',
    'jquery.ui.core.min','jquery.jplayer.min','jquery-migrate-1.2.1.min','jquery-twitterFetcher','jquery.isotope.min','jquery.ui.datepicker.min',
    'jquery.form','jquery.flexslider-min','jquery.autosize.min','jquery.appear','jquery-2.2.3.min').then(data => {
    }).catch(error => console.log(error));
  }
}
