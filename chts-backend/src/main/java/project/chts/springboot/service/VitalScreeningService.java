package project.chts.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.chts.springboot.exception.VitalScreeningException;
import project.chts.springboot.model.BmiScreening;
import project.chts.springboot.model.VitalScreening;
import project.chts.springboot.repository.VitalScreeningRepository;

@Service
public class VitalScreeningService {

	@Autowired
	private VitalScreeningRepository vitalScreeningRepository;

	public List<VitalScreening> findAllVitalScreening() {
		
		return vitalScreeningRepository.findAll();
	}

	public VitalScreening saveVitalScreening(VitalScreening vitalScreening) {
		return vitalScreeningRepository.save(vitalScreening);
	}
	
	public VitalScreening findById(Integer id) {
		VitalScreening vitalScreening= vitalScreeningRepository.findById(id)
				.orElseThrow(() -> new VitalScreeningException("VitalScreening record not exist with id :" + id));
		return vitalScreening;
	}
	
	public VitalScreening updateVitalScreening(Integer id, VitalScreening vitalScreeningDetails ) {
		
		VitalScreening vitalScreening = vitalScreeningRepository.findById(id)
				.orElseThrow(() -> new VitalScreeningException("VitalScreening record not exist with id :" + id));
				
		vitalScreening.setPulse(vitalScreeningDetails.getPulse());
		vitalScreening.setRr(vitalScreeningDetails.getRr());
		vitalScreening.setHb(vitalScreeningDetails.getHb());
		vitalScreening.setBp_sys(vitalScreeningDetails.getBp_sys());
		vitalScreening.setBp_dys(vitalScreeningDetails.getBp_dys());
		vitalScreening.setO2sats(vitalScreeningDetails.getO2sats());
		vitalScreening.setTemp(vitalScreeningDetails.getTemp());
		VitalScreening updatevitalScreening = vitalScreeningRepository.save(vitalScreening);
		return updatevitalScreening;
	}
	
	public VitalScreening deleteVitalScreening(Integer id) {
		VitalScreening vitalScreening = vitalScreeningRepository.findById(id)
			.orElseThrow(() -> new VitalScreeningException("VitalScreening record not exist with id :" + id));
		vitalScreeningRepository.delete(vitalScreening);
		return vitalScreening;
	}

}
