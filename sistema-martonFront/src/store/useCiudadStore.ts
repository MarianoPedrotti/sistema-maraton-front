import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

// Interfaz de Ciudad
export interface Ciudad {
  id: number;
  nombre: string;
}

export const useCiudadStore = defineStore('ciudades', () => {
  const ciudades = ref<Ciudad[]>([])
  const nombre = ref('')

  // Obtener ciudades del backend
  const obtenerCiudades = async () => {
    try {
      const response = await axios.get<Ciudad[]>('http://localhost:3000/ciudades')
      ciudades.value = response.data
    } catch (error) {
      console.error('Error al obtener ciudades', error)
    }
  }

  // Registrar ciudad
  const registrarCiudadFrom = async (nombreFrom: string) => {
    nombre.value = nombreFrom
    try {
      const response = await axios.post<Ciudad>('http://localhost:3000/ciudades', { nombre: nombre.value })
      console.log(response.data, 'Ciudad registrada')
      await obtenerCiudades()
    } catch (error) {
      console.error('Error al registrar ciudad', nombreFrom, error)
    }
  }

  // Modificar ciudad
  const modificarCiudadFrom = async (nombreFrom: string, id: number) => {
    nombre.value = nombreFrom
    try {
      const response = await axios.put<Ciudad>(`http://localhost:3000/ciudades/${id}`, { nombre: nombre.value })
      console.log(response.data, 'Ciudad modificada')
      await obtenerCiudades()
    } catch (error) {
      console.error('Error al modificar ciudad', error)
    }
  }

  // Eliminar ciudad
  const eliminarCiudadFrom = async (id: number) => {
    try {
      const response = await axios.delete(`http://localhost:3000/ciudades/${id}`)
      console.log(response.data, 'Ciudad eliminada')
      await obtenerCiudades()
    } catch (error) {
      console.error('Error al eliminar ciudad', error)
    }
  }

  return {
    ciudades,
    nombre,
    obtenerCiudades,
    registrarCiudadFrom,
    modificarCiudadFrom,
    eliminarCiudadFrom
  }
})
