package project.chts.springboot.service;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import project.chts.springboot.exception.PsychologicalNotFoundException;
import project.chts.springboot.model.DentalCheckUp;
import project.chts.springboot.model.Psychological;
import project.chts.springboot.repository.PsychologicalRepository;

@Service
public class PsychologicalService {
	
	@Autowired
	private PsychologicalRepository psychologicalRepository;

	public List<Psychological> findAllPsychological() {
		
		return psychologicalRepository.findAll();
	}

	public Psychological savePsychological(Psychological psychological) {
		// TODO Auto-generated method stub
		return psychologicalRepository.save(psychological);
	}
	
	public Psychological findById(Integer id) {
		Psychological psychological = psychologicalRepository.findById(id)
				.orElseThrow(() -> new PsychologicalNotFoundException("Child not exist with id :" + id));
		return psychological;
	}
	
	public Psychological updatePsychological(Integer id, Psychological psychologicalDetails) {
		
		Psychological psychological = psychologicalRepository.findById(id)
				.orElseThrow(() -> new PsychologicalNotFoundException("Child not exist with id :" + id));
				
		psychological.setDifficultyInReading(psychologicalDetails.getDifficultyInReading());
		psychological.setDifficultyInWriting(psychologicalDetails.getDifficultyInWriting());
		psychological.setHyperReactiveBehaviour(psychologicalDetails.getHyperReactiveBehaviour());
		psychological.setAggresiveBehaviour(psychologicalDetails.getAggresiveBehaviour());
		psychological.setPassingUrineBedClassroom(psychologicalDetails.getPassingUrineBedClassroom());
		psychological.setPoorMixingWithPeers(psychologicalDetails.getPoorMixingWithPeers());
		psychological.setPoorEyeContact(psychologicalDetails.getPoorEyeContact());
		psychological.setScholosticBackwardness(psychologicalDetails.getScholosticBackwardness());
		psychological.setAnyOther(psychologicalDetails.getAnyOther());
		Psychological updatedPsychological = psychologicalRepository.save(psychological);
				return updatedPsychological;
	}
	
	public Psychological deletePsychological(Integer id) {
		Psychological psychological = psychologicalRepository.findById(id)
			.orElseThrow(() -> new PsychologicalNotFoundException("Child not exist with id :" + id));
		psychologicalRepository.delete(psychological);
		return psychological;
	}

}
