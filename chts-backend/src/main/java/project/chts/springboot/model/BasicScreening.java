package project.chts.springboot.model;

import javax.persistence.*;

@Entity
@Table(name="Basic_Screening")
public class BasicScreening {
	
	@Id
	private int child_id;
	
	@Column(name="head")
	private String head;
	
	@Column(name="neck")
	private String neck;
	
	@Column(name="skin_Color")
	private String skinColor;
	
	@Column(name="skin_Texture")
	private String skinTexture;
	
	@Column(name="mouth_Gums")
	private String mouthGums;
	
	@Column(name="mouth_Tongue")
	private String mouthTongue;
	
	@Column(name="hair_Color")
	private String hairColor;
	
	@Column(name="hair_Density")
	private String hairDensity;
	
	@Column(name="hair_Texture")
	private String hairTexture;
	
	@Column(name="chest")
	private String chest;
	
	@Column(name="abdomen")
	private String abdomen;
	
	@Column(name="treatment_For")
	private String TreatmentFor;
	
	@Column(name="referal")
	private String referal;
	
	@Column(name="reason_For_Referal")
	private String reasonForReferal;
	
	@Column(name="place_Referal")
	private String placeReferal;
	
	@Column(name="outcome")
	private String outcome;
	
	public BasicScreening() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BasicScreening(int child_id, String head, String neck, String skinColor, String skinTexture,
			String mouthGums, String mouthTongue, String hairColor, String hairDensity, String hairTexture,
			String chest, String abdomen, String treatmentFor, String referal, String reasonForReferal,
			String placeReferal, String outcome) {
		super();
		this.child_id = child_id;
		this.head = head;
		this.neck = neck;
		this.skinColor = skinColor;
		this.skinTexture = skinTexture;
		this.mouthGums = mouthGums;
		this.mouthTongue = mouthTongue;
		this.hairColor = hairColor;
		this.hairDensity = hairDensity;
		this.hairTexture = hairTexture;
		this.chest = chest;
		this.abdomen = abdomen;
		TreatmentFor = treatmentFor;
		this.referal = referal;
		this.reasonForReferal = reasonForReferal;
		this.placeReferal = placeReferal;
		this.outcome = outcome;
	}

	@Override
	public String toString() {
		return "BasicScreening [child_id=" + child_id + ", head=" + head + ", neck=" + neck + ", skinColor=" + skinColor
				+ ", skinTexture=" + skinTexture + ", mouthGums=" + mouthGums + ", mouthTongue=" + mouthTongue
				+ ", hairColor=" + hairColor + ", hairDensity=" + hairDensity + ", hairTexture=" + hairTexture
				+ ", chest=" + chest + ", abdomen=" + abdomen + ", TreatmentFor=" + TreatmentFor + ", referal="
				+ referal + ", reasonForReferal=" + reasonForReferal + ", placeReferal=" + placeReferal + ", outcome="
				+ outcome + "]";
	}

	public int getChild_id() {
		return child_id;
	}

	public void setChild_id(int child_id) {
		this.child_id = child_id;
	}

	public String getHead() {
		return head;
	}

	public void setHead(String head) {
		this.head = head;
	}

	public String getNeck() {
		return neck;
	}

	public void setNeck(String neck) {
		this.neck = neck;
	}

	public String getSkinColor() {
		return skinColor;
	}

	public void setSkinColor(String skinColor) {
		this.skinColor = skinColor;
	}

	public String getSkinTexture() {
		return skinTexture;
	}

	public void setSkinTexture(String skinTexture) {
		this.skinTexture = skinTexture;
	}

	public String getMouthGums() {
		return mouthGums;
	}

	public void setMouthGums(String mouthGums) {
		this.mouthGums = mouthGums;
	}

	public String getMouthTongue() {
		return mouthTongue;
	}

	public void setMouthTongue(String mouthTongue) {
		this.mouthTongue = mouthTongue;
	}

	public String getHairColor() {
		return hairColor;
	}

	public void setHairColor(String hairColor) {
		this.hairColor = hairColor;
	}

	public String getHairDensity() {
		return hairDensity;
	}

	public void setHairDensity(String hairDensity) {
		this.hairDensity = hairDensity;
	}

	public String getHairTexture() {
		return hairTexture;
	}

	public void setHairTexture(String hairTexture) {
		this.hairTexture = hairTexture;
	}

	public String getChest() {
		return chest;
	}

	public void setChest(String chest) {
		this.chest = chest;
	}

	public String getAbdomen() {
		return abdomen;
	}

	public void setAbdomen(String abdomen) {
		this.abdomen = abdomen;
	}

	public String getTreatmentFor() {
		return TreatmentFor;
	}

	public void setTreatmentFor(String treatmentFor) {
		TreatmentFor = treatmentFor;
	}

	public String getReferal() {
		return referal;
	}

	public void setReferal(String referal) {
		this.referal = referal;
	}

	public String getReasonForReferal() {
		return reasonForReferal;
	}

	public void setReasonForReferal(String reasonForReferal) {
		this.reasonForReferal = reasonForReferal;
	}

	public String getPlaceReferal() {
		return placeReferal;
	}

	public void setPlaceReferal(String placeReferal) {
		this.placeReferal = placeReferal;
	}

	public String getOutcome() {
		return outcome;
	}

	public void setOutcome(String outcome) {
		this.outcome = outcome;
	}


}
