package com.bbdd.vista;

import java.sql.SQLException;
import java.util.List;
import java.util.Scanner;

import com.bbdd.controller.AlumnosController;
import com.bbdd.dto.AlumnoDTO;
import com.bbdd.modelo.AlumnoModelo;

public class AlumnoVista {

	Scanner sc = new Scanner(System.in);

	public void insertarInscripcion() throws ClassNotFoundException, SQLException {

		String nombre;

		System.out.println("Introduzca el nombre:");
		nombre = sc.nextLine();

		String apellido;

		System.out.println("Introduzca el apellido:");
		apellido = sc.nextLine();

		String edad;

		System.out.println("Introduzca el edad:");
		edad = sc.nextLine();

		String DNI;

		System.out.println("Introduzca el DNI:");
		DNI = sc.nextLine();

		String sexo;

		System.out.println("Introduzca el sexo:");
		sexo = sc.nextLine();

		AlumnoModelo alumno = new AlumnoModelo();
		Integer resultado = alumno.insertarAlumno(nombre, apellido, edad, DNI, sexo);

		if (resultado == 1) {
			System.out.println("alumno introducido con exito");
		} else {
			System.out.println("error");
		}

	}

	public void buscarAlumnoConFiltro() throws ClassNotFoundException, SQLException {

		System.out.println("Digame el nombre del alumno:");
		String nombre = sc.nextLine();
		System.out.println("Digame el apellido:");
		String apellido = sc.nextLine();
		System.out.println("Digame edad:");
		String edad = sc.nextLine();
		System.out.println("Digame el DNI:");
		String DNI = sc.nextLine();
		System.out.println("Digame el sexo:");
		String sexo = sc.nextLine();

		List<AlumnoDTO> listaAlumnos = new AlumnosController().consultaAlumnosConFiltros(nombre, apellido, edad, DNI,
				sexo);

		for (AlumnoDTO p : listaAlumnos) {
			System.out.println(p.toString());
		}
	}
}
