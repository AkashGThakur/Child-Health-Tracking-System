package project.chts.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Auditory_Screening")
public class AuditoryScreening {
	
	@Id
	private int child_id;
	private String allergic_reaction;
	private String cleft_ip;
	private String cleft_palate;
	private String congenital_abnormality_of_ear;
	private String hearing_loss;
	private String tongue_tie;
	private String hearing_Right;
	private String hearing_Left;
	public int getChild_id() {
		return child_id;
	}
	public void setChild_id(int child_id) {
		this.child_id = child_id;
	}
	public String getAllergic_reaction() {
		return allergic_reaction;
	}
	public void setAllergic_reaction(String allergic_reaction) {
		this.allergic_reaction = allergic_reaction;
	}
	public String getCleft_ip() {
		return cleft_ip;
	}
	public void setCleft_ip(String cleft_ip) {
		this.cleft_ip = cleft_ip;
	}
	public String getCleft_palate() {
		return cleft_palate;
	}
	public void setCleft_palate(String cleft_palate) {
		this.cleft_palate = cleft_palate;
	}
	public String getCongenital_abnormality_of_ear() {
		return congenital_abnormality_of_ear;
	}
	public void setCongenital_abnormality_of_ear(String congenital_abnormality_of_ear) {
		this.congenital_abnormality_of_ear = congenital_abnormality_of_ear;
	}
	public String getHearing_loss() {
		return hearing_loss;
	}
	public void setHearing_loss(String hearing_loss) {
		this.hearing_loss = hearing_loss;
	}
	public String getTongue_tie() {
		return tongue_tie;
	}
	public void setTongue_tie(String tongue_tie) {
		this.tongue_tie = tongue_tie;
	}
	public String getHearing_Right() {
		return hearing_Right;
	}
	public void setHearing_Right(String hearing_Right) {
		this.hearing_Right = hearing_Right;
	}
	public String getHearing_Left() {
		return hearing_Left;
	}
	public void setHearing_Left(String hearing_Left) {
		this.hearing_Left = hearing_Left;
	}
	public AuditoryScreening() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AuditoryScreening(int child_id, String allergic_reaction, String cleft_ip, String cleft_palate,
			String congenital_abnormality_of_ear, String hearing_loss, String tongue_tie, String hearing_Right,
			String hearing_Left) {
		super();
		this.child_id = child_id;
		this.allergic_reaction = allergic_reaction;
		this.cleft_ip = cleft_ip;
		this.cleft_palate = cleft_palate;
		this.congenital_abnormality_of_ear = congenital_abnormality_of_ear;
		this.hearing_loss = hearing_loss;
		this.tongue_tie = tongue_tie;
		this.hearing_Right = hearing_Right;
		this.hearing_Left = hearing_Left;
	}
		

}
