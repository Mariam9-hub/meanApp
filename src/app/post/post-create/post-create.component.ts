import { Component} from '@angular/core'
import { from } from 'rxjs';
import { templateJitUrl } from '@angular/compiler';
@Component({
    selector : 'app-post-create',
    templateUrl: './post-create.component.html'
})
export class PostCreateComponent{
    entredValue= '';
   newPost= 'NO CONTENT';
    onAddPost(){
       this.newPost= this.entredValue;
    }
}