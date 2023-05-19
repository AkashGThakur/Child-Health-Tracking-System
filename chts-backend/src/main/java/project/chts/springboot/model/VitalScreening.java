package project.chts.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class VitalScreening {
	
	@Id
	private int child_id;
	
	//@Column(name = "pulse-beats/min")
	private int pulse;
	
	//@Column(name = "rr/min")
	private int rr;
	private double hb;
	
	//@Column(name = "bp-mm_Hg")
	private int bp_sys;
	
	private int bp_dys;
	
	//@Column(name = "O2_sats-%")
	private int o2sats;
	
	//@Column(name = "Temperature-C")
	private double temp;
	
	
	public int getChild_id() {
		return child_id;
	}
	public void setChild_id(int child_id) {
		this.child_id = child_id;
	}
	public int getPulse() {
		return pulse;
	}
	public void setPulse(int pulse) {
		this.pulse = pulse;
	}
	public int getRr() {
		return rr;
	}
	public void setRr(int rr) {
		this.rr = rr;
	}
	public double getHb() {
		return hb;
	}
	public void setHb(double hb) {
		this.hb = hb;
	}
	
	public int getO2sats() {
		return o2sats;
	}
	public void setO2sats(int o2sats) {
		this.o2sats = o2sats;
	}
	public double getTemp() {
		return temp;
	}
	public void setTemp(double temp) {
		this.temp = temp;
	}
	public int getBp_sys() {
		return bp_sys;
	}
	public void setBp_sys(int bp_sys) {
		this.bp_sys = bp_sys;
	}
	public int getBp_dys() {
		return bp_dys;
	}
	public void setBp_dys(int bp_dys) {
		this.bp_dys = bp_dys;
	}
	public VitalScreening(int child_id, int pulse, int rr, double hb, int bp_sys, int bp_dys, int o2sats, double temp) {
		super();
		this.child_id = child_id;
		this.pulse = pulse;
		this.rr = rr;
		this.hb = hb;
		this.bp_sys = bp_sys;
		this.bp_dys = bp_dys;
		this.o2sats = o2sats;
		this.temp = temp;
	}
	public VitalScreening() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
