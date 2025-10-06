import axios from "axios";
import { ref } from "vue";

export const useGetData = () =>{
    const data = ref('');
    const error =ref('');
    const cargando = ref(true)

    const getData = async(url:string) =>{
        cargando.value = true;
        try {
            const res = await axios.get(url);
            data.value = res.data;
        } catch {
            error.value= 'Error del servidor ';
        }finally{
            cargando.value = false;
        }
    };
    return { data, error, cargando, getData};
};