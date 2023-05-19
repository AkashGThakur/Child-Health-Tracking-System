package project.chts.springboot.model;

import java.sql.Date;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

//import java.sql.Date;

@Entity
@Table(name = "child")
public class Child {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int child_id;
	
	@Column(name = "first_Name")
	private String firstName;
	
	@Column(name = "last_Name")
	private String lastName;
	
	@Column(name = "gender")
	private String gender;
	
	@Column(name = "adhar_no")
	private long adhar_no;
	
	@Column(name = "age")
	private int age;
	
	@Column(name = "d_o_b")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date birthdate;
	
	@Column(name = "insurance_no")
	private int insurance_no;
	
	@ManyToOne(cascade=CascadeType.PERSIST)
	@JoinColumn(name = "registration_No", referencedColumnName = "registration_No" )
	private School school;
	
	@ManyToOne(cascade=CascadeType.PERSIST)
	@JoinColumn(name = "user_id" , referencedColumnName = "user_id" )
	private UserList userList;
	
	public Child() {
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
	
	public School getSchool() {
		return school;
	}
	public void setSchool(School school) {
		this.school = school;
	}


	public UserList getUserList() {
		return userList;
	}


	public void setUserList(UserList userList) {
		this.userList = userList;
	}
	

	public int getInsurance_no() {
		return insurance_no;
	}


	public void setInsurance_no(int insurance_no) {
		this.insurance_no = insurance_no;
	}


	public Child(int child_id, String firstName, String lastName, String gender, long adhar_no, int age, Date birthdate,
			int insurance_no, School school, UserList userList) {
		super();
		this.child_id = child_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.adhar_no = adhar_no;
		this.age = age;
		this.birthdate = birthdate;
		this.insurance_no = insurance_no;
		this.school = school;
		this.userList = userList;
	}

	
	
}
