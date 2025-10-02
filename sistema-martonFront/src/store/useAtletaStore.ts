import { defineStore } from "pinia"
import {ref} from 'vue'

export const useAtletaStore = defineStore('atletas', () =>{
    
    const atletas = ref([]);
    const dni = ref(0);
    const nombre = ref ('');
    const tiempo = ref ('');
    const posicion = ref (0);
    const ciudad = ref ('');
    const regitrarAtletaFrom = (nombreFrom:string, 
        dniFrom:number,
        tiempoFrom:string, 
        posicionFrom:number, 
        ciudadFrom:string) => {
        dni.value = dniFrom
        nombre.value = nombreFrom
        tiempo.value = tiempoFrom
        posicion.value = posicionFrom
        ciudad.value = ciudadFrom
    };
    return{
        dni,
        nombre,
        tiempo,
        posicion,
        ciudad,
        regitrarAtletaFrom
    };
})
