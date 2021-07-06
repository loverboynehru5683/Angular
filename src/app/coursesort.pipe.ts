import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coursesort'
})
export class CoursesortPipe implements PipeTransform {

  transform(value:any,sort_args:any) {
    if(sort_args=='1')
    {
      return value.sort((a:any,b:any)=>(a.courseName<b.courseName)?-1:1)
    }
    else
    {
      return value.sort((a:any,b:any)=>(a.coursePrice<b.coursePrice)?-1:1)
    }
  }


}