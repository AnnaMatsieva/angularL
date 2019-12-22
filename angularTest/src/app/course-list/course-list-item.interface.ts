export interface CourseListItem {
  creationDate: string
  id: string | number
  title: string
  date?: string
  description?: string
  top: boolean
  duration?: number
}

export class CCourseListItem implements CourseListItem {
  constructor(
    public creationDate: string = '',
    public id: number = null,
    public title: string = '',
    public date: string = '',
    public description: string = '',
    public top: boolean = false,
    public duration: number = null
  ) {}
}
