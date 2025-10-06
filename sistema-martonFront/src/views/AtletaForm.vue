<script setup>
import { useAtletaStore } from '..useAtletaStore.ts';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const nombre = ref('');
const dni = ref(0);
const posicion = ref(0);
const tiempo = ref('');
const ciudad = ref('');
const { registarAtletaForm } = useAtletaStore();

const submitForm = (event) => {
    if (!nombre.value || !dni.value || !posicion.value || !tiempo.value || !ciudad.value) {
        alert('Por favor, complete todos los campos del formulario.');
        event.preventDefault();
        return;
    }
    const ciudadId = Number(ciudad.value);
    registarAtletaForm(nombre.value, dni.value, tiempo.value, posicion.value, ciudadId);
    router.push('/atleta');
}
</script>

<template>
<div>
        <h2>Formulario de Atletas</h2>
        <div class="row justify-content-center">
            <form method="post" @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="nombre">Nombre del atleta</label>
                    <input type="text" id="nombre" v-model="nombre" placeholder="Ingrese el nombre">
                </div>
                <div class="form-group">
                    <label for="tiempo">Tiempo </label>
                    <input type="text" id="tiempo" v-model="tiempo" placeholder="00:00:00">
                </div>
                <div class="form-group">
                    <label for="dni">DNI </label>
                    <input type="number"  id="dni" v-model="dni" placeholder="Ingrese DNI del atleta">
                </div>
                <div class="form-group">
                    <label for="posicion">Posición </label>
                    <input type="number"  id="posicion" v-model="posicion" placeholder="Ingrese la posicion">
                </div>
                
                <div class="form-group">
                    <label for="ciudad">Oriuno de la ciudad:</label>
                    <SelectCiudad v-model="ciudad"></SelectCiudad>
                </div>
                <div class="text-center">
                    <button type="submit" ">Enviar</button>
                </div>
            </form>
        </div>
    </div>
    <h3 class="ms-3">Atletas</h3>
    <div v-if="cargando">
            <div class="spinner-border spinner-border-sm" role="status">
            <span >Cargando</span>
        </div>
    </div>
    <div v-if="data">
        

        <table >
            <thead >
                <tr>
                    <th>Posición</th>
                    <th>Nombre</th>
                    <th>Ciudad</th>
                    <th>Tiempo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="value in atletasOrdenados" :key="value.id" >
                    <div v-if="value.posicion >= 1 && value.posicion <= 3" class="table-warning">
                        <td ">{{ value.posicion }}</td>
                    </div>
                    <div v-else>
                        <td>{{ value.posicion }}</td>
                    </div>
                    <td>{{ value.nombre }}</td>
                    <td>{{ value.tiempo }}</td>
                    <td>{{ value.ciudad }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-if="error">
        <p>No existen atletas registrados</p>
    </div>
        <RouterLink to="/">Volver</RouterLink>
    <RoterLink to="/ciudad">Ir a Ciudad<RouterLink>

</template>