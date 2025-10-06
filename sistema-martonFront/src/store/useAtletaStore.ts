import axios from "axios";
import { defineStore } from "pinia"
import {ref} from 'vue'

export const useAtletaStore = defineStore('atletas', () =>{
    
   // const atletas = ref([]);
    const dni = ref(0);
    const nombre = ref ('');
    const tiempo = ref ('');
    const posicion = ref (0);
    const ciudad = ref ('');
    const regitrarAtletaForm = (nombreForm:string, 
        dniForm:number,
        tiempoForm:string, 
        posicionForm:number, 
        ciudadForm:string) => {
        dni.value = dniForm
        nombre.value = nombreForm
        tiempo.value = tiempoForm
        posicion.value = posicionForm
        ciudad.value = ciudadForm
        axios.post('http://localhost:3000/atletas', {
            dni: dni.value,
            nombre: nombre.value,
            tiempo: tiempo.value,
            posicion: posicion.value,
            ciudad: ciudad.value
        })
        .then(response => {
            console.log(response.data, 'Atleta registrado');
        })
        .catch(error => {
            console.error(error);
        });
    };
    return{
        dni,
        nombre,
        tiempo,
        posicion,
        ciudad,
        regitrarAtletaForm
    };
})
