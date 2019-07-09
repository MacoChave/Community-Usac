export class Uri {

    static API_URI: string = 'http://localhost:3000/api';

    static CARGO: string = `${Uri.API_URI}/cargo`;
    static ROL: string= `${Uri.API_URI}/rol`;
    static USUARIO: string = `${Uri.API_URI}/usuario`;
    static FACULTAD: string = `${Uri.API_URI}/facultad`;
    static CARRERA: string = `${Uri.API_URI}/carrera`;
    static CIENCIA: string = `${Uri.API_URI}/ciencia`;
    static CHAT: string = `${Uri.API_URI}/chat`;
    static DETALLE_CARGO: string = `${Uri.API_URI}/cargo_detalle`;
    static ASIGNACION: string = `${Uri.API_URI}/usuario_asignacion`;
    static TEMA: string = `${Uri.API_URI}/tema`;
    static SRC_TEMA: string = `${Uri.API_URI}/tema_source`;
    static ETIQUETA: string = `${Uri.API_URI}/tema_etiqueta`;
    static COMENTARIO: string = `${Uri.API_URI}/tema_comentario`;
    static EXAMEN: string = `${Uri.API_URI}/examen`;
    static PREGUNTA: string = `${Uri.API_URI}/pregunta`;
    static TIPO_PREGUNTA: string = `${Uri.API_URI}/pregunta_tipo`;
    static DETALLE_PREGUNTA: string = `${Uri.API_URI}/pregunta_detalle`;
    static RESPUESTA: string = `${Uri.API_URI}/respuesta`;
    static DETALLE_RESPUESTA: string = `${Uri.API_URI}/respuesta_detalle`;
}