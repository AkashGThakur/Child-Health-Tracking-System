package project.chts.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.chts.springboot.exception.DentalCheckUpException;
import project.chts.springboot.model.BasicScreening;
import project.chts.springboot.model.DentalCheckUp;
import project.chts.springboot.repository.DentalCheckUpRepository;

@Service
public class DentalCheckUpService {

	@Autowired
	private DentalCheckUpRepository dentalCheckUpRepository;

	public List<DentalCheckUp> findAllDentalCheckUp() {
		
		return dentalCheckUpRepository.findAll();
	}

	public DentalCheckUp saveDentalCheckUp(DentalCheckUp dentalCheckUp) {
		return dentalCheckUpRepository.save(dentalCheckUp);
	}
	
	public DentalCheckUp findById(Integer id) {
		DentalCheckUp dentalCheckUp= dentalCheckUpRepository.findById(id)
				.orElseThrow(() -> new DentalCheckUpException("DentalCheckUp record not exist with id :" + id));
		return dentalCheckUp;
	}
	
	public DentalCheckUp updateDentalCheckUp(Integer id, DentalCheckUp dentalCheckUpDetails ) {
		
		DentalCheckUp dentalCheckUp = dentalCheckUpRepository.findById(id)
				.orElseThrow(() -> new DentalCheckUpException("DentalCheckUp record not exist with id :" + id));
				
		dentalCheckUp.setOral_hygiene(dentalCheckUpDetails.getOral_hygiene());
		dentalCheckUp.setGum_condition(dentalCheckUpDetails.getGum_condition());
		dentalCheckUp.setOral_ulcers(dentalCheckUpDetails.getOral_ulcers());
		dentalCheckUp.setGum_bleeding(dentalCheckUpDetails.getGum_bleeding());
		dentalCheckUp.setDiscoloration_of_teeth(dentalCheckUpDetails.getDiscoloration_of_teeth());
		dentalCheckUp.setFood_impaction(dentalCheckUpDetails.getFood_impaction());
		dentalCheckUp.setCarious_teeth(dentalCheckUpDetails.getCarious_teeth());
		dentalCheckUp.setExtraction_done(dentalCheckUpDetails.getExtraction_done());
		dentalCheckUp.setFluorosis(dentalCheckUpDetails.getFluorosis());
		dentalCheckUp.setTooth_brushing_frequency(dentalCheckUpDetails.getTooth_brushing_frequency());
		dentalCheckUp.setReferred_to_speacialist(dentalCheckUpDetails.getReferred_to_speacialist());
		dentalCheckUp.setComments(dentalCheckUpDetails.getComments());
		DentalCheckUp updatedentalCheckUp = dentalCheckUpRepository.save(dentalCheckUp);
		return updatedentalCheckUp;
	}
	
	public DentalCheckUp deleteDentalCheckUp(Integer id) {
		DentalCheckUp dentalCheckUp = dentalCheckUpRepository.findById(id)
			.orElseThrow(() -> new DentalCheckUpException("DentalCheckUp record not exist with id :" + id));
		dentalCheckUpRepository.delete(dentalCheckUp);
		return dentalCheckUp;
	}
}
