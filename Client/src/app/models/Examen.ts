export interface Examen {
    COD_EXAMEN          ?: number;
    TITULO              ?: string;
    TEMA                ?: string;
    FECHA_CREACION      ?: Date;
    FECHA_MODIFICACION  ?:Date;
    TIEMPO              ?: number;
    DURACION            ?: number;
    ACTIVO              ?: number;
    LOG                 ?: string;
    USUARIO             ?: string;
    URL_FOTO            ?: string;
}