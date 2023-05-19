package project.chts.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.chts.springboot.exception.ChildNotFoundException;
import project.chts.springboot.model.AuditoryScreening;
import project.chts.springboot.model.BasicScreening;
import project.chts.springboot.model.Child;
import project.chts.springboot.repository.BasicScreeningRepository;

@Service
public class BasicScreeningService {

	@Autowired
	private BasicScreeningRepository basicScreeningRepository;

	public List<BasicScreening> findAllBasicScreening() {
		
		return basicScreeningRepository.findAll();
	}

	public BasicScreening saveBasicScreening(BasicScreening basicScreening) {
		return basicScreeningRepository.save(basicScreening);
	}
	
	public BasicScreening findById(Integer id) {
		BasicScreening basicScreening= basicScreeningRepository.findById(id)
				.orElseThrow(() -> new ChildNotFoundException("Child not exist with id :" + id));
		return basicScreening;
	}
	
	public BasicScreening updateBasicScreening(Integer id, BasicScreening basicScreeningDetails ) {
		
		BasicScreening basicScreening = basicScreeningRepository.findById(id)
				.orElseThrow(() -> new ChildNotFoundException("Child not exist with id :" + id));
				
		basicScreening.setHead(basicScreeningDetails.getHead());
		basicScreening.setNeck(basicScreeningDetails.getNeck());
		basicScreening.setSkinColor(basicScreeningDetails.getSkinColor());
		basicScreening.setSkinTexture(basicScreeningDetails.getSkinTexture());
		basicScreening.setMouthGums(basicScreeningDetails.getMouthGums());
		basicScreening.setMouthTongue(basicScreeningDetails.getMouthTongue());
		basicScreening.setHairColor(basicScreeningDetails.getHairColor());
		basicScreening.setHairDensity(basicScreeningDetails.getHairDensity());
		basicScreening.setHairTexture(basicScreeningDetails.getHairTexture());
		basicScreening.setChest(basicScreeningDetails.getChest());
		basicScreening.setAbdomen(basicScreeningDetails.getAbdomen());
		basicScreening.setTreatmentFor(basicScreeningDetails.getTreatmentFor());
		basicScreening.setReferal(basicScreeningDetails.getReferal());
		basicScreening.setReasonForReferal(basicScreeningDetails.getReasonForReferal());
		basicScreening.setPlaceReferal(basicScreeningDetails.getPlaceReferal());
		basicScreening.setOutcome(basicScreeningDetails.getOutcome());
		BasicScreening updatebasicScreening = basicScreeningRepository.save(basicScreening);
		return updatebasicScreening;
	}
	
	public BasicScreening deleteBasicScreening(Integer id) {
		BasicScreening basicScreening = basicScreeningRepository.findById(id)
			.orElseThrow(() -> new ChildNotFoundException("Child not exist with id :" + id));
		basicScreeningRepository.delete(basicScreening);
		return basicScreening;
	}
	
}
