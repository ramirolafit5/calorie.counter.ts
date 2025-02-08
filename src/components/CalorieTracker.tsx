import { useMemo } from "react"
import { Activity } from "../types"
import CaloriesDisplay from "./CaloriesDisplay"

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({activities}: CalorieTrackerProps) {
  
    const caloriesConsumed = useMemo(() => activities.reduce((total, act) => act.category === 1 ? total + act.calories : total, 0), [activities])

    const caloriesBurned = useMemo(() => activities.reduce((total, act) => act.category === 2 ? total + act.calories : total, 0), [activities])

    //CREAMOS UN COMPONENTE REUTILIZABLE PARA CADA PARRAFO QUE SE COMPONE POR ALGO PARECIDO
    return (
    <>
        <h2 className="text-4xl font-black text-white text-center">Resumen de calorias</h2>
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
            <CaloriesDisplay
                calories={caloriesConsumed}
                text="Consumidas"
            />

            <CaloriesDisplay
                calories={caloriesBurned}
                text="Quemadas"
            />

            <CaloriesDisplay
                calories={caloriesConsumed - caloriesBurned}
                text="hola"
            />
        </div>
        
        
    </>
  )
}
