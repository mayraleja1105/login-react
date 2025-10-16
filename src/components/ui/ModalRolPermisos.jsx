import { useState, useEffect } from "react";
import './ModalPermiso.css';

export const ModalRolPermiso = ({
    onClose,
    onSave,
    roles = [],
    permisos = [],
    relacionSeleccionada,
}) => {
    const [idRol, setIdRol] = useStates("");
    const [permisosSeleccionados, setPermisosSeleccionados] =useState([]);

    useEffect(() => {
        if (relacionSeleccionada) {
            setIdRol(Number(relacionSeleccionada.id_rol || relacionSeleccionada.idRol || ""));
            setPermisosSeleccionados(
                (relacionSeleccionada.permisosSeleccionados || []).map((x) => Number(x))
            );
        }else{
            setIdRol("");
            setPermisosSeleccionados([]);
        }
    },[relacionSeleccionada]);
    
    const handleCheck = (idPermiso) => {
        const id = Number(idPermiso);
        setPermisosSeleccionados((prev) => 
            prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
        );
    };
}