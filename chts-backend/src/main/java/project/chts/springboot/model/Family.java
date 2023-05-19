package project.chts.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "family")
public class Family {
	
	@Id
	private int child_id;
	
	@Column(name = "Father_Name")
	private String fatherName;
	
	@Column(name = "Mother_Name")
	private String motherName;
	
	@Column(name = " Parents_Mobile_No")
	private long parentsMobileNo;
	
	@Column(name = "Siblings") 
	private int siblings;
	
	@Column(name = "father_Occupation")
	private String fatherOccupation;
	
	@Column(name = "mother_Occupation")
	private String motherOccupation;
	
	public Family() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Family(String fatherName, String motherName, long parentsMobileNo, int siblings, String fatherOccupation,String motherOccupation ) {
		super();
		this.fatherName = fatherName;
		this.motherName = motherName;
		this.parentsMobileNo = parentsMobileNo;
		this.siblings = siblings;
		this.fatherOccupation = fatherOccupation;
		this.motherOccupation = motherOccupation;
	}
	
	
	public int getChild_id() {
		return child_id;
	}
	public void setChild_id(int child_id) {
		this.child_id = child_id;
	}
	public String getFatherName() {
		return fatherName;
	}
	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}
	public String getMotherName() {
		return motherName;
	}
	public void setMotherName(String motherName) {
		this.motherName = motherName;
	}
	public long getParentsMobileNo() {
		return parentsMobileNo;
	}
	public void setParentsMobileNo(long parentsMobileNo) {
		this.parentsMobileNo = parentsMobileNo;
	}
	public int getSiblings() {
		return siblings;
	}
	public void setSiblings(int siblings) {
		this.siblings = siblings;
	}
	
	public String getFatherOccupation() {
		return fatherOccupation;
	}

	public void setFatherOccupation(String fatherOccupation) {
		this.fatherOccupation = fatherOccupation;
	}

	public String getMotherOccupation() {
		return motherOccupation;
	}

	public void setMotherOccupation(String motherOccupation) {
		this.motherOccupation = motherOccupation;
	}
	
	

}
