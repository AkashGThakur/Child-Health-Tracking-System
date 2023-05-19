package project.chts.springboot.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "child_address")

public class ChildAddress {
	
	@Id
	private int child_id;
	
	@Column(name = "House_No")
	private int houseNo;
	
	@Column(name = "Street")
	private String street;
	
	@Column(name = "Area")
	private String area;
	
	@Column(name ="Pincode")
	private int pincode;
	
	public ChildAddress() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ChildAddress(int houseNo, String street, String area, int pincode) {
		super();
		this.houseNo = houseNo;
		this.street = street;
		this.area = area;
		this.pincode = pincode;
	}


	public int getChild_id() {
		return child_id;
	}

	public void setChild_id(int child_id) {
		this.child_id = child_id;
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

}
