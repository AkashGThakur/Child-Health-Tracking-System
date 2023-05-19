package project.chts.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "psychological") 

public class Psychological {
	
	
	@Id
	private int child_id;
	
	@Column(name = "Difficulty_In_Reading")
	private String difficultyInReading;
	
	@Column(name = "Difficulty_In_Writing")
	private String difficultyInWriting;
	
	@Column(name = "Hyper_Reactive_Behaviour")
	private String hyperReactiveBehaviour;
	
	@Column(name = "Aggresive_Behaviour")
	private String aggresiveBehaviour;
	
	@Column(name = "Passing_Urine_Bed_Classroom")
	private String passingUrineBedClassroom;
	
	@Column(name = "Poor_Mixing_With_Peers")
	private String poorMixingWithPeers;
	
	@Column(name = "Poor_Eye_Contact")
	private String poorEyeContact;
	
	@Column(name = "Scholostic_Backwardness")
	private String scholosticBackwardness;
	
	@Column(name = " Any_Other")
	private String anyOther;
	
	public Psychological() {
		
		
	}
	
	public Psychological(String difficultyInReading, String difficultyInWriting, String hyperReactiveBehaviour,
			String aggresiveBehaviour, String passingUrineBedClassroom, String poorMixingWithPeers,
			String poorEyeContact, String scholosticBackwardness, String anyOther) {
		super();
		this.difficultyInReading = difficultyInReading;
		this.difficultyInWriting = difficultyInWriting;
		this.hyperReactiveBehaviour = hyperReactiveBehaviour;
		this.aggresiveBehaviour = aggresiveBehaviour;
		this.passingUrineBedClassroom = passingUrineBedClassroom;
		this.poorMixingWithPeers = poorMixingWithPeers;
		this.poorEyeContact = poorEyeContact;
		this.scholosticBackwardness = scholosticBackwardness;
		this.anyOther = anyOther;
	}

	

	public int getChild_id() {
		return child_id;
	}

	public void setChild_id(int child_id) {
		this.child_id = child_id;
	}

	public String getDifficultyInReading() {
		return difficultyInReading;
	}

	public void setDifficultyInReading(String difficultyInReading) {
		this.difficultyInReading = difficultyInReading;
	}

	public String getDifficultyInWriting() {
		return difficultyInWriting;
	}

	public void setDifficultyInWriting(String difficultyInWriting) {
		this.difficultyInWriting = difficultyInWriting;
	}

	public String getHyperReactiveBehaviour() {
		return hyperReactiveBehaviour;
	}

	public void setHyperReactiveBehaviour(String hyperReactiveBehaviour) {
		this.hyperReactiveBehaviour = hyperReactiveBehaviour;
	}

	public String getAggresiveBehaviour() {
		return aggresiveBehaviour;
	}

	public void setAggresiveBehaviour(String aggresiveBehaviour) {
		this.aggresiveBehaviour = aggresiveBehaviour;
	}

	public String getPassingUrineBedClassroom() {
		return passingUrineBedClassroom;
	}

	public void setPassingUrineBedClassroom(String passingUrineBedClassroom) {
		this.passingUrineBedClassroom = passingUrineBedClassroom;
	}

	public String getPoorMixingWithPeers() {
		return poorMixingWithPeers;
	}

	public void setPoorMixingWithPeers(String poorMixingWithPeers) {
		this.poorMixingWithPeers = poorMixingWithPeers;
	}

	public String getPoorEyeContact() {
		return poorEyeContact;
	}

	public void setPoorEyeContact(String poorEyeContact) {
		this.poorEyeContact = poorEyeContact;
	}

	public String getScholosticBackwardness() {
		return scholosticBackwardness;
	}

	public void setScholosticBackwardness(String scholosticBackwardness) {
		this.scholosticBackwardness = scholosticBackwardness;
	}

	public String getAnyOther() {
		return anyOther;
	}

	public void setAnyOther(String anyOther) {
		this.anyOther = anyOther;
	}	
	
}
