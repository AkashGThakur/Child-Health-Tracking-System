package project.chts.springboot.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.format.annotation.DateTimeFormat;

public class AddChild {
	
	private int child_id;
	private String firstName;
	private String lastName;
	private String gender;
	private long adhar_no;
	private int age;
	private int insurance_no;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date birthdate;
	
	private String fatherName;
	private String motherName;
	private long parentsMobileNo;
	private int siblings;
	private String fatherOccupation;
	private String motherOccupation;
	
	private int registrationNo;
	private long contactNo;
	private String schoolName;
	private String block; 
	
	private int houseNo;
	private String street;
	private String area;
	private int pincode;
	
	private int user_Id;
	
	public AddChild() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getChild_id() {
		return child_id;
	}
	public void setChild_id(int child_id) {
		this.child_id = child_id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public long getAdhar_no() {
		return adhar_no;
	}
	public void setAdhar_no(long adhar_no) {
		this.adhar_no = adhar_no;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public Date getBirthdate() {
		return birthdate;
	}
	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
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
	public int getHouseNo() {
		return houseNo;
	}
	public void setHouseNo(int houseNo) {
		this.houseNo = houseNo;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	
	public int getRegistrationNo() {
		return registrationNo;
	}
	public void setRegistrationNo(int registrationNo) {
		this.registrationNo = registrationNo;
	}
	public int getUser_Id() {
		return user_Id;
	}
	public void setUser_Id(int user_Id) {
		this.user_Id = user_Id;
	}
	
	public int getInsurance_no() {
		return insurance_no;
	}
	public void setInsurance_no(int insurance_no) {
		this.insurance_no = insurance_no;
	}
	public AddChild(int child_id, String firstName, String lastName, String gender, long adhar_no, int age,
			int insurance_no, Date birthdate, String fatherName, String motherName, long parentsMobileNo, int siblings,
			String fatherOccupation, String motherOccupation, int registrationNo, long contactNo, String schoolName,
			String block, int houseNo, String street, String area, int pincode, int user_Id) {
		super();
		this.child_id = child_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.adhar_no = adhar_no;
		this.age = age;
		this.insurance_no = insurance_no;
		this.birthdate = birthdate;
		this.fatherName = fatherName;
		this.motherName = motherName;
		this.parentsMobileNo = parentsMobileNo;
		this.siblings = siblings;
		this.fatherOccupation = fatherOccupation;
		this.motherOccupation = motherOccupation;
		this.registrationNo = registrationNo;
		this.contactNo = contactNo;
		this.schoolName = schoolName;
		this.block = block;
		this.houseNo = houseNo;
		this.street = street;
		this.area = area;
		this.pincode = pincode;
		this.user_Id = user_Id;
	}
	
	

}
