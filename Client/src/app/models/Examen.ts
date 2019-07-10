export interface Examen {
    COD_EXAMEN          ?: number;
    TITULO              ?: string;
    TEMA                ?: string;
    SALA                ?: string;
    FECHA_CREACION      ?: Date;
    FECHA_MODIFICACION  ?: Date;
    DURACION            ?: number;
    ESTADO              ?: number;
    LOG                 ?: string;
    CIENCIA             ?: string;
    CARRERA             ?: string;
    FACULTAD            ?: string;
    NOMBRE              ?: string;
    URL_FOTO            ?: string;
    COD_CIENCIA         ?: number;
    COD_CARRERA         ?: number;
    COD_FACULTAD        ?: number;
    COD_NOMBRE          ?: number;
}