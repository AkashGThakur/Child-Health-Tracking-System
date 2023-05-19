package project.chts.springboot.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class VisionNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

public VisionNotFoundException (String message) {
	 super(message);
}

}
