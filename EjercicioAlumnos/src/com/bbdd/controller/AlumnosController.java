package com.bbdd.controller;
import java.sql.SQLException;
import java.util.List;

import com.bbdd.dto.AlumnoDTO;
import com.bbdd.modelo.AlumnoModelo;

public class AlumnosController {

	public Integer insertarAlumno(String nombre, String apellido, String edad, String DNI, String sexo)
			throws ClassNotFoundException, SQLException {

		return new AlumnoModelo().insertarAlumno(nombre, apellido, edad, DNI, sexo);
	}

	public List<AlumnoDTO> consultaAlumnosConFiltros(String nombre, String apellido, String edad,
			String DNI, String sexo) throws ClassNotFoundException, SQLException {
		return new AlumnoModelo().consultaAlumnoConFiltros(nombre, apellido, edad, DNI, sexo);
	}
}
