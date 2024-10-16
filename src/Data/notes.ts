type Props = {
    id: number;
    hour: string;
    fecha: string;
    notes: string;
    process: boolean;
    important: boolean;
    favorite: boolean;
    saved: boolean;
    comments: boolean;
}

// fecha
const date = new Date();

// cambiando la fecha a partir de las 13 hora
const numberHour: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let hour = date.getHours();

// construyendo la fecha
let afternoonNumber: number = 13;
const detailHour = () =>{
    for (let numbers of numberHour) {
        if (hour == 0){
            return 12;
        }
        if (hour == afternoonNumber){
            return numbers
        }
        afternoonNumber++;
    }
    return hour;
}

// funcionalidades de la hora
let getHour: number = detailHour();
let getMinute: number = date.getMinutes();

let stateDay: string = getHour < 12 ? "AM" : "PM";
let dateH: string = getHour < 10 ? `0${getHour}` : `${getHour}`;
let dateM: string = getMinute < 10 ? `0${getMinute}` : `${getMinute}`;

const dateHour: string = `${dateH} : ${dateM} ${stateDay}`;

// funcionalidades de la 
let getDay = date.getDate();
let getMonth = date.getMonth() + 1;

let dateDay: string = getDay < 10 ? `0${getDay}` : `${getDay}`;
let dateMonth: string = getMonth < 10 ? `0${getMonth}` : `${getMonth}`;
const dateActuality: string = `${dateDay} / ${dateMonth} / ${date.getFullYear()}`;

export const Note1:Props = {
    id: 1,
    hour: dateHour,
    fecha: dateActuality,
    notes: "Avanzar el proyecto",
    process: false,
    important: false,
    favorite: true,
    saved: false,
    comments: false,
}