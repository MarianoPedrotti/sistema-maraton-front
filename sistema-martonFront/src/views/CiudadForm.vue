<script setup>
    import { useCiudadStore } from '../store/useCiudadStore.ts';
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';

    const router = useRouter();
    const nombre = ref('');
    const {registarCiudadForm} = useCiudadStore();
    const submitForm = (event) => {
            if(!nombre.value) {
                alert('completar el campo ');
                event.preventDefault();
                return;
            }
        registarCiudadForm(nombre.value);
        router.push('/ciudad');    
    }
</script>

<template>
    <div class="container mt-5">
        <h2 class="text-center mb-4">Formulario Agregar Ciudad</h2>
        <div class="row justify-content-center">
            <form  method="post" @submit.prevent="submitForm" >
                <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" class="form-control" id="nombre" v-model="nombre" placeholder="Ingrese el nombre de la ciudad">
                </div>
                <div class="text-center">
                    <button type="submit" >Enviar</button>
                </div>
            </form>
        </div>
    </div>
    <h2 class="text-center">Ciudades</h2>
    <div v-if="cargando">
            <div class="spinner-border spinner-border-sm" role="status">
            <span class="visually-hidden">Cargando...</span>
        </div>
    </div>
    
    <div v-if="data">
        <h5>Ciudades<div>/h5>
        <table >
            <thead>
                <tr>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="value in ciudades" :key="value.id">
                    <td>{{ value.nombre }}</td>
                    <td>
                        <button  @click="eliminar(value.id)">X</button>
                        <button  @click="editar(value.id)">                      
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-if="error">
        <p>No exiten ciudades registradas</p>
    </div>
    <RouterLink to="/">Volver</RouterLink>
    <RoterLink to="/atleta">Ir a Atleta<RouterLink>
    
</template>