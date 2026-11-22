export interface Usuario{
    picture: {
        medium: string;
        original: string;
    };
    name: {
        first: string;
        last: string;
    };
    dob: {
        age: number;
    };
    email: string;
    location: {
        city: string;
        country: string;
    }
    phone: string;
}

/*
imagen
nombre (nombre, apellido)
edad
correo
ubicacion (ciudad, pais)
telefono
*/
