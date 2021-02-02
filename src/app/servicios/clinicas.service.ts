import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClinicasService {
    
    private clinicas:any[] = [
        {
            "clinica": "Centro clinico chacarilla",
            "red": "Red SANNA",
            "Direccion": "av. Primavera 336, urb chacarilla del estanque. Santiago de surco",
            "servicio1": "Despistaje oncologico",
            "servicio2": "Emergencia",
            "servicio3": "Maternidad",
            "servicio4": "Ambulatorio",
            "programa1": "programa siempre sano",
            "programa2": "Chequeo preventivo medico general",
            "programa3": "Niño Sano",
            "Telefono": "01 6355000",
            "url": "https://sanna.pe/",
            "img": "assets/img/chaca.jpg"
        },
        {
            "clinica": "Clinica el golf",
            "red": "Red SANNA",
            "Direccion": "av. Aurelio miroquesada 1030, san isidro",
            "servicio1": "Ambulatorio",
            "servicio2": "Maternidad",
            "servicio3": "Emergencia",
            "servicio4": "Hospitalario",
            "programa1": "niño sano",
            "Telefono": "01 6355000",
            "url": "https://sanna.pe/",
            "img": "assets/img/golf.jpg"
        },
        {
            "clinica": "Clinica montefiori",
            "red": "Red 1 ",
            "Direccion": "AV. SEPARADORA INDUSTRIAL N° 1818-",
            "servicio1": "ambulatorio",
            "servicio2": "emergencia",
            "servicio3": "hospitalario",
            "servicio4": "Maternidad",
            "programa1": "niño sano",
            "Telefono": "01 2736473",
            "url": "https://www.montefiori.com.pe/",
            "img": "assets/img/monte.png"
        },
        {
            "clinica": "Centro medico la molina",
            "red": "RED SANNA",
            "Direccion": "AV. RAUL FERRERO N° 1256, LA MOLINA, LIMA, LIMA",
            "servicio1": "Maternidad",
            "servicio2": "despisataje oncologico",
            "servicio3": "oftalmologico",
            "servicio4": "ambulatorio",
            "programa1": "Chequeo preventivo medico general",
            "programa2": "Niño Sano",
            "programa3": "programa siempre sano",
            "Telefono": "01 6355000",
            "url": "https://sanna.pe/",
            "img": "assets/img/Sanna.png"
        },
        {
            "clinica": "clinica padre luis tezza",
            "red": "Red 1 ",
            "Direccion": "AV. EL POLO N° 570, SANTIAGO DE SURCO, LIMA, LIMA",
            "servicio1": "maternidad",
            "servicio2": "hospitalario",
            "servicio3": "oncologico",
            "servicio4": "emergencia",
            "programa1": "niño sano",
            "Telefono": "01 6105050",
            "url": "https://clinicatezza.com.pe/",
            "img": "assets/img/teza.png"
        },
        {
            "clinica": "Clinica javier prado",
            "red": "Red 1 ",
            "Direccion": "AV. JAVIER PRADO ESTE N° 499, SAN ISIDRO, LIMA, LIMA",
            "servicio1": "Oftalmologico",
            "servicio2": "Emergencia",
            "servicio3": "ambulatorio",
            "servicio4": "hospiotalario",
            "programa1": "niño sano",
            "Telefono": "01 440 2000",
            "url": "https://www.clinicajavierprado.com.pe/",
            "img": "assets/img/jp.jpg"
        }
    ]




    constructor(){
        console.log("servicio listo")
    }

    getClinicas() {
        return this.clinicas;
    }
    getclinica(idx: string) {
        return this.clinicas[idx];
    }
    buscarClinicas (termino:string) {
        let clinicaArr:any[] = [];
        termino = termino.toLowerCase();

        for(let i = 0; i< this.clinicas.length; i ++){
            let clinica = this.clinicas[i];
            let nombre = clinica.clinica.toLowerCase();
            let dir = clinica.Direccion.toLowerCase();
           
            
            if (nombre.indexOf(termino) >= 0) {
                clinica.idx = i;
                clinicaArr.push(clinica)
            } else if (dir.indexOf(termino) >= 0){
                clinica.idx = i;
                clinicaArr.push(clinica)

            }

        }


        return clinicaArr;




    }
}

