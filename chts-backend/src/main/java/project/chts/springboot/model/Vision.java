package project.chts.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "vision")

public class Vision {
	
	@Id
	private int child_id;
	
	@Column(name = "Exophthalmos")
	private String exophthalmos;
	
	@Column(name = "Squint_nys")
	private String squintNys;
	
	@Column(name = "Tagmus")
	private String tagmus;
	
	@Column(name = "Other")
	private String other;
	
	@Column(name = "If_Other_Comment")
	private String ifOtherComment;
	
	@Column(name = "Reffered_To_Specialist")
	private String refferedToSpecialist;
	
	@Column(name = "colorBlind")
	private String colorBlind;
	
	@Column(name = "vision_With_Glasses")
	private String visionWithGlasses;
	
	@Column(name = "vision_Without_Glasses")
	private String visionWithoutGlasses;
	
	@Column(name = "eye_Muscle_Control")
	private String eyeMuscleControl;
	

	public Vision() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Vision(int child_id, String exophthalmos, String squintNys, String tagmus, String other,
			String ifOtherComment, String refferedToSpecialist, String colorBlind, String visionWithGlasses,
			String visionWithoutGlasses, String eyeMuscleControl) {
		super();
		this.child_id = child_id;
		this.exophthalmos = exophthalmos;
		this.squintNys = squintNys;
		this.tagmus = tagmus;
		this.other = other;
		this.ifOtherComment = ifOtherComment;
		this.refferedToSpecialist = refferedToSpecialist;
		this.colorBlind = colorBlind;
		this.visionWithGlasses = visionWithGlasses;
		this.visionWithoutGlasses = visionWithoutGlasses;
		this.eyeMuscleControl = eyeMuscleControl;
	}




	public int getChild_id() {
		return child_id;
	}

	public void setChild_id(int child_id) {
		this.child_id = child_id;
	}


	public String getIfOtherComment() {
		return ifOtherComment;
	}

	public void setIfOtherComment(String ifOtherComment) {
		this.ifOtherComment = ifOtherComment;
	}

	public String getRefferedToSpecialist() {
		return refferedToSpecialist;
	}

	public void setRefferedToSpecialist(String refferedToSpecialist) {
		this.refferedToSpecialist = refferedToSpecialist;
	}


	public String getExophthalmos() {
		return exophthalmos;
	}


	public void setExophthalmos(String exophthalmos) {
		this.exophthalmos = exophthalmos;
	}


	public String getSquintNys() {
		return squintNys;
	}


	public void setSquintNys(String squintNys) {
		this.squintNys = squintNys;
	}


	public String getTagmus() {
		return tagmus;
	}


	public void setTagmus(String tagmus) {
		this.tagmus = tagmus;
	}


	public String getOther() {
		return other;
	}


	public void setOther(String other) {
		this.other = other;
	}


	public String getColorBlind() {
		return colorBlind;
	}


	public void setColorBlind(String colorBlind) {
		this.colorBlind = colorBlind;
	}


	public String getVisionWithGlasses() {
		return visionWithGlasses;
	}


	public void setVisionWithGlasses(String visionWithGlasses) {
		this.visionWithGlasses = visionWithGlasses;
	}


	public String getVisionWithoutGlasses() {
		return visionWithoutGlasses;
	}


	public void setVisionWithoutGlasses(String visionWithoutGlasses) {
		this.visionWithoutGlasses = visionWithoutGlasses;
	}


	public String getEyeMuscleControl() {
		return eyeMuscleControl;
	}


	public void setEyeMuscleControl(String eyeMuscleControl) {
		this.eyeMuscleControl = eyeMuscleControl;
	}
	
	
	

}
