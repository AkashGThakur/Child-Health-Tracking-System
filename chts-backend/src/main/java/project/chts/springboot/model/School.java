package project.chts.springboot.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.HashSet;
import java.util.Set;



@Entity
@Table(name = "school")

public class School {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "registration_No")
	private int registrationNo;
	
	
	@Column(name = "Contact_No")
	private long contactNo;
	
	@Column(name = "School_Name")
	private String schoolName;
	
	@Column(name = "School_Email")
	private String schoolEmail; 
	
	@Column(name = "Block")
	private String block; 
	
	@JsonIgnore
	@OneToMany(mappedBy = "school")
	private Set<Child> child = new HashSet<>();
	
	
	public School() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public School(int registrationNo, long contactNo, String schoolName, String schoolEmail, String block,
			Set<Child> child) {
		super();
		this.registrationNo = registrationNo;
		this.contactNo = contactNo;
		this.schoolName = schoolName;
		this.schoolEmail = schoolEmail;
		this.block = block;
		this.child = child;
	}



	public long getContactNo() {
		return contactNo;
	}
	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
	}
	public String getSchoolName() {
		return schoolName;
	}
	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}
	public String getBlock() {
		return block;
	}
	public void setBlock(String block) {
		this.block = block;
	}
	
	public Set<Child> getChild() {
		return child;
	}
	public void setChild(Set<Child> child) {
		this.child = child;
	}
	
	public int getRegistrationNo() {
		return registrationNo;
	}

	public void setRegistrationNo(int registrationNo) {
		this.registrationNo = registrationNo;
	}

	public String getSchoolEmail() {
		return schoolEmail;
	}

	public void setSchoolEmail(String schoolEmail) {
		this.schoolEmail = schoolEmail;
	}
	
	
	

}
