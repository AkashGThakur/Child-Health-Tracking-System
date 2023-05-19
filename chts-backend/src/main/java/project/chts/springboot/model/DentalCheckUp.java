package project.chts.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class DentalCheckUp {
	
	@Id
	private int child_id;
	private String oral_hygiene;
	private String gum_condition;
	private String oral_ulcers;
	private String gum_bleeding;
	private String discoloration_of_teeth;
	private String food_impaction;
	private String carious_teeth;
	private String extraction_done;
	private String fluorosis;
	private String tooth_brushing_frequency;
	private String referred_to_speacialist;
	private String comments;
	
	
	public DentalCheckUp() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DentalCheckUp(String oral_hygiene, String gum_condition, String oral_ulcers, String gum_bleeding,
			String discoloration_of_teeth, String food_impaction, String carious_teeth, String extraction_done,
			String fluorosis, String tooth_brushing_frequency, String referred_to_speacialist, String comments) {
		super();
		this.oral_hygiene = oral_hygiene;
		this.gum_condition = gum_condition;
		this.oral_ulcers = oral_ulcers;
		this.gum_bleeding = gum_bleeding;
		this.discoloration_of_teeth = discoloration_of_teeth;
		this.food_impaction = food_impaction;
		this.carious_teeth = carious_teeth;
		this.extraction_done = extraction_done;
		this.fluorosis = fluorosis;
		this.tooth_brushing_frequency = tooth_brushing_frequency;
		this.referred_to_speacialist = referred_to_speacialist;
		this.comments = comments;
	}
	
	public int getChild_id() {
		return child_id;
	}
	public void setChild_id(int child_id) {
		this.child_id = child_id;
	}
	public String getOral_hygiene() {
		return oral_hygiene;
	}
	public void setOral_hygiene(String oral_hygiene) {
		this.oral_hygiene = oral_hygiene;
	}
	public String getGum_condition() {
		return gum_condition;
	}
	public void setGum_condition(String gum_condition) {
		this.gum_condition = gum_condition;
	}
	public String getOral_ulcers() {
		return oral_ulcers;
	}
	public void setOral_ulcers(String oral_ulcers) {
		this.oral_ulcers = oral_ulcers;
	}
	public String getGum_bleeding() {
		return gum_bleeding;
	}
	public void setGum_bleeding(String gum_bleeding) {
		this.gum_bleeding = gum_bleeding;
	}
	public String getDiscoloration_of_teeth() {
		return discoloration_of_teeth;
	}
	public void setDiscoloration_of_teeth(String discoloration_of_teeth) {
		this.discoloration_of_teeth = discoloration_of_teeth;
	}
	public String getFood_impaction() {
		return food_impaction;
	}
	public void setFood_impaction(String food_impaction) {
		this.food_impaction = food_impaction;
	}
	public String getCarious_teeth() {
		return carious_teeth;
	}
	public void setCarious_teeth(String carious_teeth) {
		this.carious_teeth = carious_teeth;
	}
	public String getExtraction_done() {
		return extraction_done;
	}
	public void setExtraction_done(String extraction_done) {
		this.extraction_done = extraction_done;
	}
	public String getFluorosis() {
		return fluorosis;
	}
	public void setFluorosis(String fluorosis) {
		this.fluorosis = fluorosis;
	}
	public String getTooth_brushing_frequency() {
		return tooth_brushing_frequency;
	}
	public void setTooth_brushing_frequency(String tooth_brushing_frequency) {
		this.tooth_brushing_frequency = tooth_brushing_frequency;
	}
	public String getReferred_to_speacialist() {
		return referred_to_speacialist;
	}
	public void setReferred_to_speacialist(String referred_to_speacialist) {
		this.referred_to_speacialist = referred_to_speacialist;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	
}
