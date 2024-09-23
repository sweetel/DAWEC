import java.sql.SQLException;
import java.util.Scanner;

public class AlumnoVista {
	
	Scanner sc = new Scanner(System.in);
	
	public void insertarInscripcion() throws ClassNotFoundException, SQLException {

		String nombre;
		
			System.out.println("Introduzca el estudianteID:");
			nombre = sc.nextLine();

		String apellido;
		
			System.out.println("Introduzca el cursoID:");
			apellido = sc.nextLine();

		String edad;
			
			System.out.println("Introduzca el cursoID:");
			edad = sc.nextLine();
	
		String DNI;
			
			System.out.println("Introduzca el cursoID:");
			DNI = sc.nextLine();

		String sexo;
			
			System.out.println("Introduzca el cursoID:");
			sexo = sc.nextLine();

		
		
		AlumnoModelo alumno = new AlumnoModelo();
		Integer resultado = alumno.insertarAlumno(nombre, DNI);
		
	}
}
