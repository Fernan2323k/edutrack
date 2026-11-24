/** Construye la ruta de una imagen respetando la base configurada en Vite. */
export const imagen = (archivo: string) => `${import.meta.env.BASE_URL}images/${archivo}`
