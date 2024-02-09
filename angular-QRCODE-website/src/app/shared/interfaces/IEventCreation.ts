export interface IEventCreation{
    name: string;
    date: string;
    time: string;
    hour: string;
    presentList : IPresentList[];

}
export interface IPresentList{
  id:String;
  name: string;
}
