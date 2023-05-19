package project.chts.springboot.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class PsychologicalNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

public PsychologicalNotFoundException (String message) {
      super(message);
}
}