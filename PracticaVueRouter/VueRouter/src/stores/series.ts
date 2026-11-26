import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import type { Serie } from "@/interfaces/Serie";

export const useSeriesStore = defineStore("series", () => {
    // State: donde se almacena la informacion
    const series = ref<Serie[]>([])
    const serie = ref<Serie | null>(null)
    const cargando = ref<boolean>(false)

    // Actions: funciones que modifican el state
    async function consumirSeries(): Promise<void> {
        cargando.value = true;
        try {
            const res = await axios.get<Serie[]>("https://api.tvmaze.com/shows")
            series.value = res.data
        } catch (e) {
            console.log(e)
        } finally {
            cargando.value = false;
        }
    }

    async function consumirSerie(id: number): Promise<void> {
        cargando.value = true;
        try {
            const res = await axios.get<Serie>(`https://api.tvmaze.com/shows/${id}`)
            serie.value = res.data
        } catch (e) {
            console.log(e)
        } finally {
            cargando.value = false;
        }
    }

    return {
        series,
        serie,
        cargando,
        consumirSeries,
        consumirSerie
    }
})
