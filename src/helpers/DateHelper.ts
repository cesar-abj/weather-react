export default class DateHelper {
  getDateWithoutYear(dateParam: string){

    let date = new Date(dateParam);
    let atualDay = new Date().getDate();
    let day = `${date.getDate() < 10 ? '0' : '' }${date.getDate() + 1}`;
    let month = `${(date.getMonth() + 1) < 10 ? '0' : ''}${date.getMonth() + 1}`;
  
    if(date.getDate() + 1 === atualDay){
      return 'Hoje';
    } else {
      return `${day}/${month}`; 
    };
  };
  
  getLocalDate(dateLocalParam: string): string{
    
    let date = new Date(dateLocalParam);
    let day = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
    let month = `${(date.getMonth() + 1) < 10 ? '0' : ''}${date.getMonth() + 1}`;
    let year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  };
  
  getLocalTime(timeLocalParam: string): string{
  
    const time = new Date(timeLocalParam);
    let hours = time.getHours();
    let minutes = `${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}`;
  
    return `${hours}:${minutes} - Horário local`;
  };
  
  getHour(hourParam: string): string{
    let time = new Date(hourParam);
    let hours = time.getHours();
    let minutes = `${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}`;
    return `${hours}:${minutes}`;
  };
}