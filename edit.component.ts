import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  save: any;
  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.save = this.fb.group({
      name: [''],
      marks:[''],
      id:['']
    });
  }
  ngOnInit() {}
  submitForm() {
    var formData: any = new FormData();
    let name = document.getElementById('fname') as HTMLInputElement;
    // formData.append('name', this.save.get('name').value);
    formData.append('name', name.value);
    let marks = document.getElementById('marks') as HTMLInputElement;
    // formData.append('marks', this.save.get('marks').value);
    formData.append('marks', marks.value);
    let id = document.getElementById('uid') as HTMLInputElement;
    // formData.append('id', this.save.get('id').value);
    formData.append('id', id.value);
    const data = {
      id:id.value,
      name:name.value,
      marks:marks.value
    }
    console.log(data);
    this.http.post('http://localhost:3000/student/', data)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }

}
