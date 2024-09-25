package com.bbdd.utils;
import java.sql.SQLException;
import java.util.Scanner;

import com.bbdd.vista.AlumnoVista;

public class MenuPrincipal {

	public void menuPrincipal() throws ClassNotFoundException, SQLException {
		Scanner sc = new Scanner(System.in);
		int opcion = 0;

		while (opcion != 6) {
			System.out.println("       MENUuuu PRINCIPAL           ");
			System.out.println("===============================================");
			System.out.println("1. Insertar Alumno");
			System.out.println("2. Busqueda por filtros");
			System.out.println("3. Atualizar pedido");
			System.out.println("4. Salir de la Aplicacion");
			System.out.println("===============================================");
			System.out.print("Elige una opcion: ");

			opcion = sc.nextInt();
			sc.nextLine();

			if (opcion >= 1 && opcion <= 4) {
				switch (opcion) {
				case 1:
					System.out.println("Insertar Pedido");
					AlumnoVista av = new AlumnoVista();
					av.insertarInscripcion();
					break;
				case 2:
					System.out.println("Consultadddds Pedido");
					
					break;
				case 3:
					System.out.println("Actualizdddddar Pedido");
					
				case 4:
					System.out.println("Salir seleccionado. Saliendo del programa.");
					break;
				default:
					System.out.println("Opcion no valida. Por favor, intente de nuevo.");
					break;
				}
			} else {
				System.out.println("Opción no válida. Por favor, elige un número entre 1 y 4.");
			}
		}

		sc.close();
	}
}
