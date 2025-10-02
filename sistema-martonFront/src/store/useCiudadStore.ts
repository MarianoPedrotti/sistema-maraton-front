import { defineStore } from "pinia";
import { ref } from "vue";

export const useCiudadStore = defineStore ('ciudades', () => {
    const ciudades = ref ([]);
    const nombre = ref ('');
    const registrarCiudadFrom = (nombreFrom:string) => {
        nombre.value = nombreFrom;
    };
    return {
        nombre,
        registrarCiudadFrom
    };
})