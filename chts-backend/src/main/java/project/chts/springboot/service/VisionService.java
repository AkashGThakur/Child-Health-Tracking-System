package project.chts.springboot.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import project.chts.springboot.exception.VisionNotFoundException;
import project.chts.springboot.model.Vision;
import project.chts.springboot.repository.VisionRepository;


@Service
public class VisionService {
	
	@Autowired
	private VisionRepository visionRepository;

	public List<Vision> findAllVision() {
		
		return visionRepository.findAll();
	}

	public Vision saveVision(Vision vision) {
		
		return visionRepository.save(vision);
	}
	
	public Vision findById(Integer id) {
		Vision vision = visionRepository.findById(id)
				.orElseThrow(() -> new VisionNotFoundException("Child not exist with id :" + id));
		return vision;
	}
	
	public Vision updateVision(Integer id, Vision visionDetails) {
		
		Vision vision = visionRepository.findById(id)
				.orElseThrow(() -> new VisionNotFoundException("Child not exist with id :" + id));
				
		vision.setExophthalmos(visionDetails.getExophthalmos());
		vision.setSquintNys(visionDetails.getSquintNys());
		vision.setTagmus(visionDetails.getTagmus());
		vision.setOther(visionDetails.getOther());
		vision.setIfOtherComment(visionDetails.getIfOtherComment());
		vision.setRefferedToSpecialist(visionDetails.getRefferedToSpecialist());
		vision.setColorBlind(visionDetails.getColorBlind());
		vision.setEyeMuscleControl(visionDetails.getEyeMuscleControl());
		vision.setVisionWithGlasses(visionDetails.getVisionWithGlasses());
		vision.setVisionWithoutGlasses(visionDetails.getVisionWithoutGlasses());
		Vision updatedVision = visionRepository.save(vision);
				return updatedVision;
	}
	
	public Vision deleteVision(Integer id) {
		Vision vision = visionRepository.findById(id)
			.orElseThrow(() -> new VisionNotFoundException("Child not exist with id :" + id));
		visionRepository.delete(vision);
		return vision;
	}


}
