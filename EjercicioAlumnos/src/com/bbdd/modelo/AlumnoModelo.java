package com.bbdd.modelo;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.bbdd.dto.AlumnoDTO;
import com.bbdd.utils.DBUtils;

public class AlumnoModelo {

	
	public Integer insertarAlumno(String nombre, String apellido, String edad, String DNI, String sexo)
			throws ClassNotFoundException, SQLException {

		Connection con = DBUtils.obtenerConexionBBDD();

		String insertInscripcion = "INSERT INTO alumnos (nombre, apellido, edad, DNI, sexo)" + "VALUES (?, ?, ?, ?, ?)";

		PreparedStatement psInsertInscripcion = con.prepareStatement(insertInscripcion);

		psInsertInscripcion.setString(1, nombre);
		psInsertInscripcion.setString(2, apellido);
		psInsertInscripcion.setString(3, edad);
		psInsertInscripcion.setString(4, DNI);
		psInsertInscripcion.setString(5, sexo);

		Integer resultado = psInsertInscripcion.executeUpdate();

		con.close();

		return resultado;
	}
	
	public List<AlumnoDTO> consultaAlumnoConFiltros(String nombre, String apellido, String edad,
			String DNI, String sexo) throws ClassNotFoundException, SQLException {

		Connection con = DBUtils.obtenerConexionBBDD();

		String sql = "SELECT a.nombre, a.apellido, a.edad, a.Nombre FROM alumnos a"
				+ "INNER JOIN inscripciones i on e.EstudianteID = i.EstudianteID "
				+ "INNER JOIN cursos c on c.CursoID = i.CursoID " + "WHERE c.CursoID LIKE ? "
				+ "AND c.Nombre_del_Curso LIKE ? " + "AND e.EstudianteID LIKE ? " + "AND e.Nombre LIKE ?";

		PreparedStatement ps = con.prepareStatement(sql);

		ps.setString(1, "%" + nombre + "%");
		ps.setString(2, "%" + apellido + "%");
		ps.setString(3, "%" + edad + "%");
		ps.setString(4, "%" + DNI + "%");
		ps.setString(5, "%" + sexo + "%");

		List<AlumnoDTO> listaInscripciones = new ArrayList<>();
		ResultSet rs = ps.executeQuery();

		while (rs.next()) {
			listaInscripciones.add(new AlumnoDTO(rs.getString("a.nombre"), rs.getString("a.apellido"),
					rs.getString("a.edad"), rs.getString("a.DNI"), rs.getString("a.sexo")));
		}

		rs.close();
		ps.close();
		con.close();

		return listaInscripciones;
	}
}
