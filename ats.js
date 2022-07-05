const sketchProc = function(processingInstance) {
	with (processingInstance) {
		size(3800, 800); 
		frameRate(60);
        


/////////////////////ProgramCodeGoesHere/////////////////////////////////////


// A visual of the ATS system
// By Alan
// Based on ProcessingJS library

//Code notes: xpositions are upper left (train, station)
//stationxPositions 130, 420, 540, 800, 1170, 1340, 1790, 1970, 2080, 2420, 3090, 3210, 3630

// Variables
const eastY = 350; //450
const westY = 246; //346
let power = true;
let systemH = false;
let speed = 60;         //speed
let speedf = 3;

// Constructors

// TrainConstructor
let Trains = function(x, y, run, dwell, number, direction, track, line, docked) {
	this.x = x;
	this.y = y;
	this.run = run;
  this.dwell = dwell;
	this.number = number;
	this.direction = direction;
	this.track = track;
	this.line = line;
  this.docked = docked;
};

// StationConstructor
let Stations = function(name, x, centerPlatform, ePlatform, wPlatform) {
	this.name = name;
	this.x = x;
	this.centerPlatform = centerPlatform;
	this.ePlatform = ePlatform;
	this.wPlatform = wPlatform;
};

// PlatformConstructor
// {p: 555, y: westY - 36, hold: false, close: false, occupied: false, dwell: 23, menu: false}
let Platforms = function(p, y, hold, close, occupied, dwell, menu) {
  this.p = p;
  this.y = y;
  this.hold = hold;
  this.close = close;
  this.occupied = occupied;
  this.dwell = dwell;
  this.menu = menu;
};

// PseudoConstructor
let Pseudos = function(name, x, both, hold, eastHold, westHold, eastClose, westClose) {
	this.name = name;
	this.x = x;
	this.both = both;
	this.eastHold = eastHold;
	this.westHold = westHold;
	this.eastClose = eastClose;
	this.westClose = westClose;
};

// ShadowConstructor
let Shadows = function(run, x, y, dwell, docked, near, jump, direction, track) {
    this.run = run;
    this.x = x;
    this.y = y;
    this.dwell = dwell;
    this.docked = docked;
    this.near = near;
    this.jump = jump;
    this.direction = direction;
    this.track = track;
};


// SignalConstructor
let Signals = function(x, y, aspect, direction, label) {
	this.x = x;
	this.y = y;
	this.aspect = aspect;
	this.direction = direction;
	this.label = label;
};

// MenuConstructor
let Menus = function(config) {
    this.x = config.x || 10;
    this.y = config.y || 10;
    this.w = config.w || 80;
    this.h = config.h || 80;
};

// ButtonConstructor
let Button = function(config) {
    this.x = config.x || 25;
    this.y = config.y || 0;
    this.width = config.width || 26;
    this.height = config.height || 12;
    this.label = config.label || " ";
    this.onClick = config.onClick || function() {};
};

// TrackConstructor
let Tracks = function(x, y, length, number, power, close, tsr, wz, westArrow, eastArrow, lma, mrr, select, menu) {
  this.x = x;
  this.y = y;
  this.length = length;
  this.number = number;
  this.power = power;
  this.close = close;
  this.tsr = tsr;
  this.wz = wz;
  this.westArrow = westArrow;
  this.eastArrow = eastArrow;
  this.lma = lma;
  this.mrr = mrr;
  this.select = select;
  this.menu = menu;
};

// CrossoverConstructor
let Crossover = function(x, y, up, lma) {
	this.x = x;
	this.y = y;
	this.up = up;
	this.lma = lma;
};

// SwitchConstructor
let Switches = function(x, y, track, number, tangent, disturbed, manual, blocked, reserved, flank, menu, type, owner) {
  this.x = x;
  this.y = y;
  this.track = track;
  this.number = number;
  this.tangent = tangent;
  this.disturbed = disturbed;
  this.manual = manual;
  this.blocked = blocked;
  this.reserved = reserved;
  this.flank = flank;
  this.menu = menu;
  this.type = type;
  this.owner = owner;
};


let tunw = new Platforms(130, westY - 36, false, false, false, 90, false);
let tune = new Platforms(130, eastY + 36, false, false, false, 23, false);
let bayw = new Platforms(420, westY - 36, false, false, false, 23, false);
let baye = new Platforms(420, eastY + 36, false, false, false, 23, false);
let pimw = new Platforms(540, westY + 42, false, false, false, 23, false);
let pime = new Platforms(540, eastY - 38, false, false, false, 23, false);
let lyow = new Platforms(800, westY - 36, false, false, false, 23, false);
let lyoe = new Platforms(800, eastY + 36, false, false, false, 23, false);
let parw = new Platforms(1170, westY - 36, false, false, false, 23, false);
let pare = new Platforms(1170, eastY + 36, false, false, false, 23, false);
let ridw = new Platforms(1340, westY - 36, false, false, false, 23, false);
let ride = new Platforms(1340, eastY + 36, false, false, false, 23, false);
let uotw = new Platforms(1790, westY - 36, false, false, false, 23, false);
let uote = new Platforms(1790, eastY + 36, false, false, false, 23, false);
let leew = new Platforms(1970, westY - 36, false, false, false, 23, false);
let leee = new Platforms(1970, eastY + 36, false, false, false, 23, false);
let hurw = new Platforms(2080, westY - 36, false, false, false, 23, false);
let hure = new Platforms(2080, eastY + 36, false, false, false, 23, false);
let trew = new Platforms(2420, westY - 36, false, false, false, 23, false);
let tree = new Platforms(2420, eastY + 36, false, false, false, 23, false);
let stlw = new Platforms(3090, westY - 36, false, false, false, 23, false);
let stle = new Platforms(3090, eastY + 36, false, false, false, 23, false);
let cyrw = new Platforms(3210, westY + 42, false, false, false, 23, false);
let cyre = new Platforms(3210, eastY - 38, false, false, false, 23, false);
let blaw = new Platforms(3630, westY + 42, false, false, false, 90, false);
let blae = new Platforms(3630, eastY - 38, false, false, false, 90, false);

const platformsArray = [tunw, tune, bayw, baye, pimw, pime, lyow, lyoe, parw, pare, ridw, ride, uotw, uote, leew, leee, hurw, hure, trew, tree, stlw, stle, cyrw, cyre, blaw, blae];

let platformMenuActive = [];

// name, x, centerPlatform, ePlatform, wPlatform
// {p: 555, y: westY - 36, hold: false, close: false, occupied: false, dwell: 23, menu: false}
let tun = new Stations("TUN", 130,  false, tune, tunw);
let bay = new Stations("BAY", 420,  false, baye, bayw);
let pim = new Stations("PIM", 540,  true,  pime, pimw);
let lyo = new Stations("LYO", 800,  false, lyoe, lyow);
let par = new Stations("PAR", 1170, false, pare, parw);
let rid = new Stations("RID", 1340, false, ride, ridw);
let uot = new Stations("UOT", 1790, false, uote, uotw);
let lee = new Stations("LEE", 1970, false, leee, leew);
let hur = new Stations("HUR", 2080, false, hure, hurw);
let tre = new Stations("TRE", 2420, false, tree, trew);
let stl = new Stations("STL", 3090, false, stle, stlw);
let cyr = new Stations("CYR", 3210, true,  cyre, cyrw);
let bla = new Stations("BLA", 3630, true,  blae, blaw);

const stationsArray = [tun, bay, pim, lyo, par, rid, uot, lee, hur, tre, stl, cyr, bla];

// pseudos(name, x, both, eastHold, westHold, eastClose, westClose)
let puot = new Pseudos("PUOT", 1520, true, false, false, false, false);
let phur = new Pseudos("PHUR", 2210, false, false, false, false, false);
let ptre = new Pseudos("PTRE", 2280, false, false, false, false, false);


// Methods
// x, y, docked, run, dwell, number, doorOpen, atpm, variance, hold, eb, direction, track, near, jump, line, swt, turnout, menu, safe
// trainDrawMethod

Trains.prototype.drawTrain = function() {	
	for(let j = 0; j < stationsArray.length; j++) {  //cycle stations
		if(this.x >= stationsArray[j].x - 10 && 
		this.x <= stationsArray[j].x + 10 &&
		this.x !== stationsArray[j].x) {  //if near, set dwell
			if(this.track === 1) {
			  this.dwell = stationsArray[j].wPlatform.dwell;
			  stationsArray[j].wPlatform.occupied = false;
			}
			if(this.track === 2) {
			  this.dwell = stationsArray[j].ePlatform.dwell;
			  stationsArray[j].ePlatform.occupied = false;
			}
			this.near = true;
			this.docked = false;
			j = stationsArray.length;
		} else {
			this.near = false;
		}
	}
	for(let d = 0; d < stationsArray.length; d++) {
		if(this.x === stationsArray[d].x && ((this.track === 1 && stationsArray[d].wPlatform.close === false) || (this.track === 2 && stationsArray[d].ePlatform.close === false))) {
			this.docked = true;
			if((this.track === 2 && stationsArray[d].ePlatform.hold === true) || (this.track === 1 && stationsArray[d].wPlatform.hold === true) || systemH === true) {
  			this.hold = true;
			} else {
			  this.hold = false;
			}
			if(this.track === 1) {
			  stationsArray[d].wPlatform.occupied = true;
			}
			if(this.track === 2) {
			  stationsArray[d].ePlatform.occupied = true;
			}
			d = stationsArray.length;
		}
	}
  	
  //moveDistances
	if(this.near === true && this.docked === false) {
		this.jump = 1;
	} else if(this.docked === true) { //possibly unnecessary?
		this.jump = 0;
	} else if(this.near === false && this.docked === false) {
		this.jump = floor(random(1, 9));
	}
	//move 
  
  if(this.safe === true) {	
  	if(frameCount % speed === 0 && this.docked === false && this.direction === 0 && power === true) {
  		this.x += this.jump;
  	}
  	if(frameCount % speed === 0 && this.docked === false && this.direction === 1 && power === true) {
  		this.x -= this.jump;
  	}
  }
  	  
  	  
	if(frameCount % speed === 0 && (this.track === 3 || this.track === 6) && power === true) {
    this.y += this.jump * 1.73;
  }
  if(frameCount % speed ===0 && (this.track === 4 || this.track === 5) && power === true) {
    this.y -= this.jump * 1.73;
  }
	//depart
	if(this.docked === true && this.hold === false && this.dwell <= 0 && this.direction === 0 && this.line > 0) {
		this.x += 1;
		this.docked = false;
	}
	if(this.docked === true && this.hold === false && this.dwell <= 0 && this.direction === 1 && this.line > 0) {
		this.x -= 1;
		this.docked = false;
	}
	//dwellCount
	if(frameCount % speed === 0 && this.docked === true) {
		this.dwell -= 1;
	}
  //dwellShow
  if(this.line > 0) {
  	textSize(13);
  	if(this.dwell < 0) {
  		fill(230, 0, 0);
  	} else {
  		fill(0, 0, 0);
  	}
  	if(this.docked === true && this.track === 2) {
  		text(this.dwell, this.x - 35, eastY + 38);
  	}
  	if(this.docked === true && this.track === 1) {
  		text(this.dwell, this.x - 35, westY - 17);
  	}
  }
  
  //line decisions
	if(this.line === 1 && this.direction === 0 && this.track === 1 && this.x >= 170 && this.x <= 178) {
	  this.track = 3;
	  this.x = 179;
	  this.y += 5;
	  this.turnout = true;
	}
	if(this.line === 1 && this.direction === 0 && this.track === 3 && this.x > 220) {
	  this.turnout = false;
	  this.track = 2;
	  this.x += 15;
	}
	
	if(this.line === 1 && this.direction === 0 && this.track === 2 && this.x >= 3531 && this.x <= 3539) {
	  this.track = 5;
	  this.x = 3540;
	  this.y -= 5;
	  this.turnout = true;
	}
	if(this.line === 1 && this.direction === 0 && this.track === 5 && this.x > 3581) {
	  this.turnout = false;
	  this.track = 1;
	  this.x += 15;
	  track281.lma = false;
	}
  	
  //draw
	strokeWeight(0.5);
	stroke(0, 0, 0);
	this.eb === true ? fill(255, 0, 0, 200) : fill(0, 250, 250, 150);
  	
	if(this.track === 1 && this.direction === 1) {
   	beginShape(); vertex(this.x, westY); vertex(this.x + 22, westY); 
				vertex(this.x + 22, westY + 15); vertex(this.x, westY + 15); 
				vertex(this.x - 8, westY + 8); vertex(this.x, westY); endShape();
		this.y = westY;
  	if(this.atpm === true && this.doorOpen === false) {
  		fill(80, 80, 80);
  		textSize(13);
  		text("P", this.x + 7, this.y + 12);
  	}
	}
	if(this.track === 1 && this.direction === 0) {
		beginShape(); vertex(this.x, westY); vertex(this.x + 22, westY); 
				vertex(this.x + 30, westY + 8); vertex(this.x + 22, westY + 15); 
				vertex(this.x, westY + 15); vertex(this.x, westY); endShape();
		this.y = westY;
  	if(this.atpm === true && this.doorOpen === false) {
  		fill(80, 80, 80);
  		textSize(13);
  		text("P", this.x + 7, this.y + 12);
  	}
	}
	if(this.track === 2 && this.direction === 0) {
		beginShape(); vertex(this.x, eastY); vertex(this.x + 22, eastY); 
				vertex(this.x + 30, eastY + 8); vertex(this.x + 22, eastY + 15); 
				vertex(this.x, eastY + 15); vertex(this.x, eastY); endShape();
		this.y = eastY;
  	if(this.atpm === true && this.doorOpen === false) {
  		fill(80, 80, 80);
  		textSize(13);
  		text("P", this.x + 7, this.y + 12);
  	}
	}
	if(this.track === 2 && this.direction === 1) {
   		beginShape(); vertex(this.x, eastY); vertex(this.x + 22, eastY); 
				vertex(this.x + 22, eastY + 15); vertex(this.x, eastY + 15); 
				vertex(this.x - 8, eastY + 8); vertex(this.x, eastY); endShape();
		this.y = eastY;
  	if(this.atpm === true && this.doorOpen === false) {
  		fill(80, 80, 80);
  		textSize(13);
  		text("P", this.x + 7, this.y + 12);
  	}
	}
	
  //rotators
	if(this.track === 3) {
  	pushMatrix();
    translate(this.x, this.y + 13); 
    rotate(1);
  	beginShape(); vertex(0, 0); vertex(0, -15); vertex(22, -15); vertex(30, -8); vertex(22, 0); vertex(0, 0); endShape();
  	if(this.atpm === true && this.doorOpen === false) {
  		fill(80, 80, 80);
  		textSize(13);
  		text("P", this.x + 7, this.y + 12);
  	}
  	popMatrix();
	}
	if(this.track === 4) {
	  pushMatrix();
    translate(this.x, this.y); 
    rotate(4);
	  beginShape(); vertex(0, 0); vertex(22, 0); vertex(22, 15); vertex(0, 15); vertex(8, 8); vertex(0, 0); endShape();
  	popMatrix();
	}
	if(this.track === 5) {
  	pushMatrix();
    translate(this.x, this.y); 
    rotate(-1);
  	beginShape(); vertex(0, 0); vertex(22, 0); vertex(30, 8); vertex(22, 15); vertex(0, 15); vertex(0, 0); endShape();
  	popMatrix();
	}
	if(this.track === 6) {
	  pushMatrix();
    translate(this.x, this.y); 
    rotate(4);
	  beginShape(); vertex(0, 0); vertex(22, 0); vertex(22, 15); vertex(0, 15); vertex(8, 8); vertex(0, 0); endShape();
  	popMatrix();
	}
  
  //labelColor
	if(this.variance > 20) {
		stroke(0, 0, 0);
		fill(255, 255, 0);
	} else if(this.variance <= 20 && this.variance >= -20) {
		stroke(255, 255, 255);
		fill(0, 0, 0);
	} else {
		stroke(0, 0, 0);
		fill(0, 255, 0);
	}
  	
	//label
	if(this.direction === 0 && (this.line === 1 || this.line === 7 || this.line === 12 || this.line === 16 || this.line === 18)) {
		textSize(11);
		text("0" + this.run + "BLW" + this.number, this.x - 18, this.y - 6);
	}
	if(this.direction === 1 && (this.line <= 6)) {
		textSize(11);
		text("0" + this.run + "TUW" + this.number, this.x - 18, this.y - 6);
	}
  	
	//doors
	if(this.docked === true && this.dwell > 4) {
	    this.doorOpen = true;
	} else {
	    this.doorOpen = false;
	}
  if(this.doorOpen === true && this.track === 2) {
  	noStroke();
		fill(90, 90, 90, 180);
		rect(this.x + 7, eastY + 3, 9, 9);
	}
	if(this.doorOpen === true && this.track === 1) {
    noStroke();
    fill(90, 90, 90, 180);
    rect(this.x + 6, westY + 3, 9, 9);
  }


  // Terminus End Changes
  if((this.line >= 1 && this.line <= 6) && this.x === tun.x) {
    this.direction = 0;
  }
  
  if((this.line === 1 || this.line === 7 || this.line === 12 || this.line === 16 || this.line === 18) && this.x === bla.x) {
    this.direction = 1;
  }
    
    
  // LMA Controls
  
  if(this.direction === 0 && this.track === 2) {
    for(let t = tracksArray.length / 2; t < tracksArray.length - 3; t++) {                    //this.x < 3410?
      if(this.x > tracksArray[t].x - 100 && this.x < tracksArray[t].x + tracksArray[t].length && this.x < 3410 && (this.docked === false || this.dwell <= 10)) {
        tracksArray[t].lma = true;
        tracksArray[t].eastArrow = true;
      }
      if(this.x > tracksArray[t].x - 100 && this.x < tracksArray[t].x + tracksArray[t].length + 14 && this.docked === true && this.dwell > 10) {
        tracksArray[t].lma = false;
        tracksArray[t].eastArrow = false;
      }
      if(this.x > tracksArray[t].x + tracksArray[t].length && this.x < tracksArray[t].x + tracksArray[t].length + 14) {
        tracksArray[t].lma = false;
        tracksArray[t].eastArrow = false;
      }
    }
  }
  
  
  if(this.direction === 1 && this.track === 1) {
    for(let t = 0; t < tracksArray.length / 2; t++) {                                         //this.x > 290?
      if(this.x < tracksArray[t].x + tracksArray[t].length + 74 && this.x > tracksArray[t].x - 26 && this.x > 290 && (this.docked === false || this.dwell <= 10)) {
        tracksArray[t].lma = true;
        tracksArray[t].westArrow = true;
      }
      if(this.x < tracksArray[t].x + tracksArray[t].length + 74 && this.x > tracksArray[t].x - 30 && this.docked === true && this.dwell > 10) {
        tracksArray[t].lma = false;
        tracksArray[t].westArrow = false;
      }
      if(this.x + 26 < tracksArray[t].x && this.x + 26 > tracksArray[t].x - 14) {
        tracksArray[t].lma = false;
        tracksArray[t].westArrow = false;
      }
    }
  }
  
  
  // TUN arrival
  if(this.x > 244 && this.x < 290 && this.track === 1 && this.direction === 1 && switch304.owner === "16") { // && tunw.occupied === false
    switch301.tangent = true;
    switch301.owner = this.number;
    switch302.tangent = true;
    switch302.owner = this.number;
    switch303.tangent = true;
    switch303.owner = this.number;
    switch304.tangent = true;
    switch304.owner = this.number;
    sig13.aspect = 1;
    
  }
  if(this.x > switch304.x - 10 && this.x < switch304.x && this.track === 1 && this.direction === 1) {
    sig13.aspect = 0;
  }
  if(this.x === tun.x) {
    track100.lma = false;
    track100.westArrow = false;
    track101.lma = false;
    track101.westArrow = false;
    track102.lma = false;
    track102.westArrow = false;
  }
  // TUN departure                        //  && this.hold === false
  if((this.x <= tun.x && this.track === 1 && this.dwell <= 10) || (this.direction === 0 && this.track === 1 && this.x > tun.x && this.x <= tun.x + 20)) {
    cross2.lma = true;
    track101.lma = true;
    track102.lma = true;
    track204.lma = true;
    sig11.aspect = 2;
    switch301.tangent = false;
    switch302.tangent = false;
    switch301.flank = true;
    switch301.owner = this.number;
    switch302.flank = true;
    switch302.owner = this.number;
    switch303.flank = true;
    switch303.owner = this.number;
    switch304.flank = true;
    switch304.owner = this.number;  
  }
  if(this.x > 180 && this.x < 190 && this.direction === 0) {
    sig11.aspect = 0;
  }
  if(this.x > 240 && this.x < 250 && this.direction === 0) {
    cross2.lma = false;
    track101.lma = false;
    track102.lma = false;
    switch301.flank = false;
    switch301.owner = "16";
    switch302.flank = false;
    switch302.owner = "16";
    switch303.flank = false;
    switch303.owner = "16";
    switch304.flank = false;
    switch304.owner = "16";
  }
  
  // for troubleshooting BLA arrivals
  // if(this.number === "14"){
  //   fill(0, 0, 0);
  //   text(switch327.owner, 3200, 100);
  // }
    
  // BLA arrival
  if(this.x >= 3410 && this.x < 3450 && this.track === 2 && this.direction === 0 && switch327.owner === "16") {
    track182.lma = true;
    track183.lma = true;
    cross14.lma = true;
    sig42.aspect = 2;
    switch327.owner = this.number;
    switch329.tangent = false;
    switch329.owner = this.number;
    switch330.tangent = false;
    switch330.owner = this.number;
  }
  if(this.x > switch328.x && this.x < switch328.x + 10 && this.direction === 0 && this.track === 2) {
    sig42.aspect = 0;
  }
  if(this.x === bla.x && this.docked === true) {
    track182.lma = false;
    track183.lma = false;
    cross14.lma = false;
    switch329.flank = false;
    switch330.flank = false;
    switch329.owner = "16";
    switch330.owner = "16";
  }
  // BLA departure
  if(this.direction === 1 && this.track === 1 && this.x === bla.x && this.dwell < 10) {
    switch327.tangent = true;
    switch327.owner = this.number;
    switch328.tangent = true;
    switch328.owner = this.number;
    switch329.tangent = true;
    switch329.owner = this.number;
    switch330.tangent = true;
    switch330.owner = this.number;
    sig43.aspect = 1;
  }
  if(this.x > switch330.x - 10 && this.x < switch330.x && this.direction === 1 && this.track === 1) {
    sig43.aspect = 0;
  }
  if(this.x > 3390 && this.x < 3410 && this.track === 1 && this.direction === 1) {
    switch327.owner = "16";
    switch328.owner = "16";
    switch329.owner = "16";
    switch330.owner = "16";
  }
  

};

/*
draw function
line 1 function
line 2 function

if line=1 call line 1
if line=2 call line 2
call draw
*/



// shorten conditions to 'return false'? save processing - shorter arrays first
Trains.prototype.checkSafeDistance = function() {
  let trainClear = true;
  let switchClear = true;
  let trackClear = true;
  let selfClear = true;
  for(let i = 0; i < trainsArray.length; i++) {
    if(this.track === 2) {
      if(trainsArray[i].track === 2 && trainsArray[i].x > this.x && this.x > trainsArray[i].x - 25) {
        trainClear = false;
        i = trainsArray.length;
      } else {
        trainClear = true;
      }
    }
    if(this.track === 1) {
      if(trainsArray[i].track === 1 && trainsArray[i].x < this.x && this.x < trainsArray[i].x + 25) {
        trainClear = false;
        i = trainsArray.length;
      } else {
        trainClear = true;
      }
    }
  }
  
  for(var i = 0; i < switchesArray.length; i++) {
    if(this.track === 2 && switchesArray[i].track === 2) {
      if((switchesArray[i].x > this.x && this.x > switchesArray[i].x - 25) && ((switchesArray[i].owner !== "16" && switchesArray[i].owner !== this.number) || switchesArray[i].blocked === true || switchesArray[i].manual === true)) {
        switchClear = false;
        i = switchesArray.length;
      } else {
        switchClear = true;
      }
    }
    if(this.track === 1 && switchesArray[i].track === 1) {
      if((switchesArray[i].x < this.x && this.x < switchesArray[i].x + 45) && ((switchesArray[i].owner !== "16" && switchesArray[i].owner !== this.number) || switchesArray[i].blocked === true || switchesArray[i].manual === true)) {
        switchClear = false;
        i = switchesArray.length;
      } else {
        switchClear = true;
      }
    }
  }
  
  if(this.track === 1) {
    for(let i = 0; i < tracksArray.length / 2; i++) {
      if((this.x > tracksArray[i].x + tracksArray[i].length + 2 && this.x < tracksArray[i].x + tracksArray[i].length + 12) && (tracksArray[i].close === true || (tracksArray[i].wz === true && this.atpm === false))) {
        trackClear = false;
        i = tracksArray.length / 2;
      } else {
        trackClear = true;
      }
    }
  }
  if(this.track === 2) {
    for(var i = tracksArray.length / 2; i < tracksArray.length; i++) {
      if((this.x < tracksArray[i].x - 15 && this.x > tracksArray[i].x - 30) && (tracksArray[i].close === true || (tracksArray[i].wz === true && this.atpm === false))) {
        trackClear = false;
        i = tracksArray.length;
      } else {
        trackClear = true;
      }
    }
  }
  
  if(this.eb === true) {
    selfClear = false;
  } else {
    selfClear = true;
  }
  
  if(trainClear === true && switchClear === true && trackClear === true && selfClear === true) {
    this.safe = true;
  } else {
    this.safe = false;
  }
};





//shadowDrawMethod  run, x, y, dwell, docked, near, jump, direction, track
Shadows.prototype.drawShadow = function() {
  for(let j = 0; j < stationsArray.length; j++) {
		if(this.x >= stationsArray[j].x +3 && 
		this.x <= stationsArray[j].x + 26 &&
		this.x !== stationsArray[j].x + 13) {
			if(this.track === 1) {
			  this.dwell = stationsArray[j].wPlatform.dwell;
			}
			if(this.track === 2) {
			  this.dwell = stationsArray[j].ePlatform.dwell;
			}
			this.near = true;
			this.docked = false;
			j = stationsArray.length;
		} else {
			this.near = false;
		}
	}
	for(let d = 0; d < stationsArray.length; d++) {
		if(this.x === stationsArray[d].x + 13) {
			this.docked = true;
			d = stationsArray.length;
		} 
	}

	if(this.near === true && this.docked === false) {
		this.jump = 1;
	} else if(this.docked === true) {
		this.jump = 0;
	} else if(this.near === false && this.docked === false) {
		this.jump = 4;
	}
	if(frameCount % speed === 0 && this.docked === false && this.direction === 0) {
		this.x += this.jump;
	}
	if(frameCount % speed === 0 && this.docked === false && this.direction === 1) {
		this.x -= this.jump;
	}
		if(frameCount % speed === 0 && (this.track === 3 || this.track === 6)) {
    this.y += this.jump * 1.73;
  }
  if(frameCount % speed ===0 && (this.track === 4 || this.track === 5)) {
    this.y -= this.jump * 1.73;
  }
	if(this.docked === true && this.dwell <= 0 && this.direction === 0) {
		this.x += 1;
		this.docked = false;
	}
	if(this.docked === true && this.dwell <= 0 && this.direction === 1) {
		this.x -= 1;
		this.docked = false;
	}
	if(frameCount % speed === 0 && this.docked === true) {
		this.dwell -= 1;
	}
	
	  //line decisions
	if(this.direction === 0 && this.track === 1 && this.x >= 175 && this.x <= 183) {
	  this.track = 3;
	  this.x = 184;
	  this.y += 5;
	}
	if(this.direction === 0 && this.track === 3 && this.x > 225) {
	  this.turnout = false;
	  this.track = 2;
	  this.x += 15;
	}
	
	if(this.direction === 0 && this.track === 2 && this.x >= 3536 && this.x <= 3544) {
	  this.track = 5;
	  this.x = 3545;
	  this.y -= 5;
	}
	if(this.direction === 0 && this.track === 5 && this.x > 3586) {
	  this.turnout = false;
	  this.track = 1;
	  this.x += 15;
	}
	
	if(this.track === 2) {
	  this.y = eastY;
  }
  if(this.track === 1) {
    this.y = westY;
  }
  
  strokeWeight(0.4);
  stroke(255, 255, 255);
  fill(0, 0, 0);
  // if(variance[7] > 100) {
  //   stroke(0, 0, 0);
  //   fill(255, 255, 0);
  // } else if(variance[7] <= 100 && variance[7] >- 11) {
  //   stroke(255, 255, 255);
  //   fill(0, 0, 0);
  // } else {
  //   stroke(0, 0, 0);
  //   fill(0, 255, 0);
  // }
  ellipse(this.x, this.y + 8, 14, 14);
	
  if(this.x === tun.x + 13) {
    this.direction = 0;
  }
  
  if(this.x === bla.x + 13) {
    this.direction = 1;
  }
	
};




//tracksDrawMethod  x, y, length, number, power, close, tsr, wz, westArrow, eastArrow, lma, mrr, select, menu
Tracks.prototype.drawTrack = function() {
  noStroke();
  if(this.close === true) {
    fill(255, 0, 0);
  } else if(this.tsr < 100 || this.wz === true) {
    fill(0, 128, 128);
  } else {
  fill(192, 192, 192);
  }
  rect(this.x, this.y + 2, this.length, 11);

  if(this.power === false) {
      stroke(0, 255, 0);
      strokeWeight(3);
      line(this.x + 1, this.y + 2, this.x + this.length - 2, this.y + 2);
      line(this.x + 1, this.y + 13, this.x + this. length - 2, this.y + 13);
  } else if(this.wz === true) {
      stroke(255, 130, 0);
      strokeWeight(4);
      line(this.x + 1, this.y + 1, this.x + this.length - 2, this.y + 1);
      line(this.x + 1, this.y + 14, this.x + this. length - 2, this.y + 14);
  }
  
  strokeWeight(3);
  if(this.select === true || this.lma === true || this.mrr === true) {
    if(this.select === true) {
      stroke(0, 0, 160);
      fill(0, 0, 160);
    } else if(this.lma === true) {
      stroke(0, 255, 0);
      fill(0, 255, 0);
    } else if(this.mrr === true) {
      stroke(255, 0, 0);
      fill(255, 0, 0);
    }
    line(this.x + 2, this.y + 7, this.x + this.length - 2, this.y + 7);
    noStroke();
    if(this.westArrow === true) {
      triangle(this.x + 1, this.y + 7, this.x + 7, this.y + 3, this.x + 7, this.y + 12);
    }
    if(this.eastArrow === true) {
      triangle(this.x + this.length, this.y + 7, this.x + this.length - 7, this.y + 3, this.x + this.length - 7, this.y + 12);
    }
  }
};
     
     
     
//x, track, number, tangent, disturbed, manual, reserved, flank, menu, type, owner
//switchDrawMethod
Switches.prototype.drawSwitch = function() {
  noStroke();
  fill(192, 192, 192);
  if(this.track === 1 && this.tangent === true) {
    rect(this.x, westY + 2, 20, 11);
  } else if(this.track === 2 && this.tangent === true) {
    rect(this.x, eastY + 2, 20, 11);
  }
  noStroke();
  fill(192, 192, 192);
  if(this.type === 1 && this.tangent === false) {
    beginShape(); vertex(this.x, westY + 2); vertex(this.x + 5, westY + 2); vertex(this.x + 17, westY + 24); 
        vertex(this.x + 10, westY + 29); vertex(this.x + 1, westY + 13); vertex(this.x, westY + 13); vertex(this.x, westY + 2); endShape();
  }
  if(this.type === 2 && this.tangent === false) {
    beginShape(); vertex(this.x + 1, eastY - 12); vertex(this.x + 8, eastY - 17); vertex(this.x + 19, eastY + 2); 
        vertex(this.x + 20, eastY + 2); vertex(this.x + 20, eastY + 13); vertex(this.x + 15, eastY + 13); vertex(this.x + 1, eastY - 12); endShape();
  }
  if(this.type === 3 && this.tangent === false) {
    beginShape(); vertex(this.x, eastY + 13); vertex(this.x + 5, eastY + 13); vertex(this.x + 17, eastY - 9); 
        vertex(this.x + 10, eastY - 14); vertex(this.x + 1, eastY + 2); vertex(this.x, eastY + 2); vertex(this.x, eastY + 13); endShape();
  }
  if(this.type === 4 && this.tangent === false) {
    beginShape(); vertex(this.x + 2, westY + 25); vertex(this.x + 10, westY + 29); vertex(this.x + 19, westY + 13); 
        vertex(this.x + 21, westY + 13); vertex(this.x + 21, westY + 2); vertex(this.x + 15, westY + 2); vertex(this.x + 2, westY + 25); endShape();
  }
  if(this.flank === true) {
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(255, 0, 255);
    if(this.type === 1) {
      ellipse(this.x + 4, westY + 7, 13, 13);
    }
    if(this.type === 2) {
      ellipse(this.x + 16, eastY + 7, 13, 13);
    }
    if(this.type === 3) {
      ellipse(this.x + 4, eastY + 7, 13, 13);
    }
    if(this.type === 4) {
      ellipse(this.x + 16, westY + 7, 13, 13);
    }
  }
  if(this.reserved === true) {
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(255, 128, 0);
    if(this.type === 1) {
      ellipse(this.x + 4, westY + 7, 13, 13);
    }
    if(this.type === 2) {
      ellipse(this.x + 16, eastY + 7, 13, 13);
    }
    if(this.type === 3) {
      ellipse(this.x + 4, eastY + 7, 13, 13);
    }
    if(this.type === 4) {
      ellipse(this.x + 16, westY + 7, 13, 13);
    }
  }
  if(this.manual === true) {
    strokeWeight(4);
    stroke(0, 0, 255);
    noFill();
    if(this.type === 1) {
      ellipse(this.x + 4, westY + 7, 55, 55);
    }
    if(this.type === 2) {
      ellipse(this.x + 16, eastY + 7, 55, 55);
    }
    if(this.type === 3) {
      ellipse(this.x + 4, eastY + 7, 55, 55);
    }
    if(this.type === 4) {
      ellipse(this.x + 16, westY + 7, 55, 55);
    }
  }

};


Crossover.prototype.drawCross = function(x, y, up, lma) { //x, 365, t/f
  fill(192, 192, 192);
  noStroke();
  if(this.up === true) {
    quad(this.x + 9, this.y + 73, this.x + 16, this.y + 78, this.x + 56, this.y + 8, this.x + 49, this.y + 3);
	} else {
    quad(this.x + 9, this.y + 8, this.x + 16, this.y + 3, this.x + 56, this.y + 73, this.x + 49, this.y + 78);
	}
	
	if(this.lma === true && this.up === true) {
	  strokeWeight(3);
	  stroke(0, 255, 0);
	  line(this.x + 12.5, this.y + 75.5, this.x + 52.5, this.y + 5.5);
	}
	if(this.lma === true && this.up === false) {
	  strokeWeight(3);
	  stroke(0, 255, 0);
	  line(this.x + 52.5, this.y + 75.5, this.x + 12.5, this.y + 5.5);
	}
};




//signalsDrawMethod
Signals.prototype.drawSignal = function() {
	strokeWeight(3);
	stroke(0, 0, 0);
	if(this.direction === 0) {
		line(this.x - 6, this.y - 4, this.x - 6, this.y + 4);
	} else {
		line(this.x + 5, this.y - 4, this.x + 5, this.y + 4);
	}
	strokeWeight(1);
	stroke(0, 0, 0);
	if(this.aspect === 1) {
		fill(0, 255, 0);
	} else if(this.aspect === 2) {
		fill(255, 255, 255);
	} else {
		fill(255, 0, 0);
	}
	ellipse(this.x, this.y, 7, 7);
};





function drawEastPortal(x) {
        strokeWeight(4);     //eastPortal
        noFill();
        stroke(0, 0, 0);
        beginShape(); vertex(x + 10, westY - 16); vertex(x, westY - 6); vertex(x, eastY + 20); vertex(x + 10, eastY + 30); endShape();
};

function drawWestPortal(x) {
        strokeWeight(4);
        noFill();
        stroke(0, 0, 0);
        beginShape(); vertex(x - 10, westY - 16); vertex(x, westY - 6); vertex(x, eastY + 20); vertex(x - 10, eastY + 30); endShape();
};

function markerDraw(x, y) {
    noFill();
    stroke(0, 0, 0);
    strokeWeight(0.4);
    triangle(x - 2.5, y - 4, x + 2.5, y - 4, x, y);    
};

function zoneBorderDraw(x) {
	for(i = 0; i < 18; i++) {
		fill(0, 0, 0);
		noStroke();
		rect(x, (westY - 48) + i*12, 3, 10);
	}
};

function gidsDraw(x) {
    stroke(0, 0, 0);
    fill(128, 128, 128);
    strokeWeight(0.2);
    rect(x, westY - 44, 4, 208);
};




//StationDrawMethod
Stations.prototype.drawStation = function() {
    //GIDS
    if(this.name != "TUN" && this.name != "BLA") {
      gidsDraw(this.x - 4);
      gidsDraw(this.x + 28);
    } else if(this.name === "TUN") {
      gidsDraw(this.x + 28);
    } else if(this.name === "BLA") {
      gidsDraw(this.x - 4);
    }
    
    //markers
    markerDraw(this.x + 5, westY - 2);
    markerDraw(this.x + 22, westY - 2);
    markerDraw(this.x + 5, eastY - 2);
    markerDraw(this.x + 22, eastY - 2);
    
    //platforms
    strokeWeight(0.5);
    if(this.centerPlatform === false) {
        if(this.ePlatform.close === true) {
            fill(195, 0, 0);
        } else {
            fill(0, 0, 255);
        }
        stroke(0, 0, 0);
        rect(this.x, eastY + 36, 26, 12);
        if(this.ePlatform.hold === true) {
            fill(255, 255, 0);
            rect(this.x, eastY + 36, 26, 6);
        }
        if(systemH === true) {
            fill(0, 255, 0);
            rect(this.x, eastY + 36, 26, 6);
        }
        
        if(this.wPlatform.close === true) {
            fill(195, 0, 0);
        } else {
            fill(0, 0, 230);
        }
        stroke(0, 0, 0);
        rect(this.x, westY - 36, 26, 12);
        if(this.wPlatform.hold === true) {
            fill(255, 255, 0);
            rect(this.x, westY - 30, 26, 6);
        }
        if(systemH === true) {
            fill(0, 255, 0);
            rect(this.x, westY - 30, 26, 6);
        }
    } else {                                //centerPlatform
        if(this.ePlatform.close === true) {
            fill(195, 0, 0);
        } else {
            fill(0, 0, 255);
        }
        stroke(0, 0, 0);
        rect(this.x, eastY - 38, 26, 12);
        if(this.ePlatform.hold === true) {
            fill(255, 255, 0);
            rect(this.x, eastY - 32, 26, 6);
        }
        if(systemH === true) {
            fill(0, 255, 0);
            rect(this.x, eastY - 32, 26, 6);
        }
        
        if(this.wPlatform.close === true) {
            fill(195, 0, 0);
        } else {
            fill(0, 0, 230);
        }
        stroke(0, 0, 0);
        rect(this.x, westY + 42, 26, 12);
        if(this.wPlatform.hold === true) {
          fill(255, 255, 0);
          rect(this.x, westY + 42, 26, 6);
        }
        if(systemH === true) {
          fill(0, 255, 0);
          rect(this.x, westY + 42, 26, 6);
        }
    }
    
    //platformLabels
    fill(0, 255, 0);
    textSize(13);
    if(this.centerPlatform === false) {
      text(this.name + "-E", this.x - 6, eastY + 71);
       text(this.name + "-W", this.x - 6, westY - 51);
    } else {
       text(this.name + "-E", this.x + 38, eastY - 26);
      text(this.name + "-W", this.x + 38, westY + 53);
    }

};

//PseudoDrawMethod
Pseudos.prototype.drawPseudo = function() {
    noStroke();
    fill(88, 88, 88);
    rect(this.x, westY - 36, 26, 12);

    fill(0, 255, 0);
    textSize(13);
    text(this.name + "-W", this.x - 12, westY - 46);
    if(this.both === true) {
      fill(88, 88, 88);
	    rect(this.x, eastY + 36, 26, 12);
	    fill(0, 255, 0);
      text(this.name + "-E", this.x - 12, eastY + 70);
    }
  	markerDraw(this.x + 1, westY - 2);
  	markerDraw(this.x + 19, westY - 2);
  	if(this.both === true) {
  		markerDraw(this.x + 1, eastY - 2);
  		markerDraw(this.x + 19, eastY - 2);
  	}
};


//ButtonMethods
Button.prototype.isMouseInside = function() {
	return mouseX > this.x &&
		mouseX < (this.x + this.width) &&
		mouseY > this.y &&
		mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
	if (this.isMouseInside()) {
		this.onClick();
		}
};

Button.prototype.draw = function() {
    fill(255, 255, 255);
    rect(this.x, this.y, this.width, this.height);
    //fill(0, 0, 0);
    //textSize(19);
    //textAlign(LEFT, TOP);
    //text(this.label, this.x+10, this.y+this.height/4);
    //text("test", this.x, this.y);
};


Switches.prototype.isUnderMouse = function(mx, y) {
  let go = true;
  if(trainMenuActive.length > 0) {
    go = false;
  }
  if(go === true) {
    return mx >= this.x && mx <= this.x + 20 &&
          y >= this.y && y <= this.y + 13
  }
};

Switches.prototype.drawSwitchMenu = function() {
  fill(210, 210, 210);
  stroke(0, 0, 0);
  strokeWeight(1);
  rect(switchMenu.x + 20, switchMenu.y + 15, 100, 80);
  fill(0, 0, 0);
  textSize(12);
  text('Reserve', switchMenu.x + 26, switchMenu.y + 31);
  text('Manual', switchMenu.x + 26, switchMenu.y + 47);
  text('Block', switchMenu.x + 26, switchMenu.y + 63);
  text('Move', switchMenu.x + 26, switchMenu.y + 79);
};



Platforms.prototype.isUnderMouse = function(mx, y) {
  var go = true;
  if(trainMenuActive.length > 0) {
    go = false;
  }
  if(go === true) {
    return mx >= this.p && mx <= this.p + 26 &&
          y >= this.y && y <= this.y + 12
  }
};

Platforms.prototype.drawPlatformMenu = function() {
  fill(210, 210, 210);
  stroke(0, 0, 0);
  strokeWeight(1);
  rect(platformMenu.x + 20, platformMenu.y + 15, 100, 80);
  fill(0, 0, 0);
  textSize(12);
  text("Set/Clear Hold", platformMenu.x + 26, platformMenu.y + 31);
  text("Open/Close", platformMenu.x + 26, platformMenu.y + 47);
  text("Adjust Dwells", platformMenu.x + 26, platformMenu.y + 63);
  text("Dwell: " + platformMenuActive[0].dwell, platformMenu.x + 26, platformMenu.y + 79);
};

Tracks.prototype.isUnderMouse = function(mx, y) {
  let go = true;
  if(platformMenuActive.length > 0) {
    go = false;
  }
  if(go === true) {
    return mx >= this.x && mx <= this.x + this.length  &&
          y >= this.y + 2 && y <= this.y + 13;
  }
};

Tracks.prototype.drawTrackMenu = function() {
    fill(210, 210, 210);
    stroke(0, 0, 0);
    strokeWeight(1);
    rect(trackMenu.x + 20, trackMenu.y + 15, 100, 80);
    fill(0, 0, 0);
    textSize(12);
    text("Open/Close", trackMenu.x + 26, trackMenu.y + 31);
    text("TSR", trackMenu.x + 26, trackMenu.y + 47);
    text("Work Zone", trackMenu.x + 26, trackMenu.y + 63);
};

Trains.prototype.isUnderMouse = function(mx, y) {
  let go = true;
  if(platformMenuActive.length > 0) {
    go = false;
  }
  if(go === true) {
    return mx >= this.x && mx <= this.x + 26 &&
          y >= this.y && y <= this.y + 15;
  }
};

Trains.prototype.drawTrainMenu = function() {
    fill(210, 210, 210);
    stroke(0, 0, 0);
    strokeWeight(1);
    rect(trainMenu.x + 20, trainMenu.y + 15, 100, 80);
    fill(0, 0, 0);
    textSize(12);
    text("Depart", trainMenu.x + 26, trainMenu.y + 31);
    text("Toggle ATPM", trainMenu.x + 26, trainMenu.y + 47);
    text("Toggle EB", trainMenu.x + 26, trainMenu.y + 63);
}; 
    
/////////////////////////////////////////////////////////////////////Instances

//TrackInstances      x, y, length, number, power, close, tsr, wz, westArrow, eastArrow, lma, mrr, select, menu

let track100 = new Tracks(50,  westY, 80, 100, true, false, 100, false, false, false, false, false, false, false);
let track101 = new Tracks(130, westY, 26, 101, true, false, 100, false, false, false, false, false, false, false);
let track102 = new Tracks(156, westY, 24, 102, true, false, 100, false, false, false, false, false, false, false);
let track103 = new Tracks(200, westY, 25, 103, true, false, 100, false, false, false, false, false, false, false);
let track104 = new Tracks(245, westY, 40, 104, true, false, 100, false, false, false, false, false, false, false);
let track105 = new Tracks(285, westY, 47, 105, true, false, 100, false, false, false, false, false, false, false);
let track106 = new Tracks(332, westY, 47, 106, true, false, 100, false, false, false, false, false, false, false);
let track107 = new Tracks(379, westY, 41, 107, true, false, 100, false, false, false, false, false, false, false);
let track108 = new Tracks(420, westY, 26, 108, true, false, 100, false, false, false, false, false, false, false);
let track109 = new Tracks(446, westY, 30, 109, true, false, 100, false, false, false, false, false, false, false);
let track110 = new Tracks(476, westY, 34, 110, true, false, 100, false, false, false, false, false, false, false);
let track111 = new Tracks(510, westY, 30, 111, true, false, 100, false, false, false, false, false, false, false);
let track112 = new Tracks(540, westY, 26, 112, true, false, 100, false, false, false, false, false, false, false);
let track113 = new Tracks(566, westY, 34, 113, true, false, 100, false, false, false, false, false, false, false);
let track114 = new Tracks(600, westY, 60, 114, true, false, 100, false, false, false, false, false, false, false);
let track115 = new Tracks(660, westY, 60, 115, true, false, 100, false, false, false, false, false, false, false);
let track116 = new Tracks(720, westY, 50, 116, true, false, 100, false, false, false, false, false, false, false);
let track117 = new Tracks(770, westY, 30, 117, true, false, 100, false, false, false, false, false, false, false);
let track118 = new Tracks(800, westY, 26, 118, true, false, 100, false, false, false, false, false, false, false);
let track119 = new Tracks(826, westY, 72, 119, true, false, 100, false, false, false, false, false, false, false);
let track120 = new Tracks(898, westY, 72, 120, true, false, 100, false, false, false, false, false, false, false);
let track121 = new Tracks(990, westY, 25, 121, true, false, 100, false, false, false, false, false, false, false);
let track122 = new Tracks(1035, westY, 72, 122, true, false, 100, false, false, false, false, false, false, false);
let track123 = new Tracks(1107, westY, 63, 123, true, false, 100, false, false, false, false, false, false, false);
let track124 = new Tracks(1170, westY, 26, 124, true, false, 100, false, false, false, false, false, false, false);
let track125 = new Tracks(1196, westY, 22, 125, true, false, 100, false, false, false, false, false, false, false);
let track126 = new Tracks(1218, westY, 50, 126, true, false, 100, false, false, false, false, false, false, false);
let track127 = new Tracks(1268, westY, 50, 127, true, false, 100, false, false, false, false, false, false, false);
let track128 = new Tracks(1318, westY, 22, 128, true, false, 100, false, false, false, false, false, false, false);
let track129 = new Tracks(1340, westY, 26, 129, true, false, 100, false, false, false, false, false, false, false);
let track130 = new Tracks(1366, westY, 19, 130, true, false, 100, false, false, false, false, false, false, false);
let track131 = new Tracks(1385, westY, 50, 131, true, false, 100, false, false, false, false, false, false, false);
let track132 = new Tracks(1435, westY, 50, 132, true, false, 100, false, false, false, false, false, false, false);
let track133 = new Tracks(1485, westY, 20, 133, true, false, 100, false, false, false, false, false, false, false);
let track134 = new Tracks(1505, westY, 65, 134, true, false, 100, false, false, false, false, false, false, false);
let track135 = new Tracks(1590, westY, 25, 135, true, false, 100, false, false, false, false, false, false, false);
let track136 = new Tracks(1635, westY, 65, 136, true, false, 100, false, false, false, false, false, false, false);
let track137 = new Tracks(1700, westY, 90, 137, true, false, 100, false, false, false, false, false, false, false);
let track138 = new Tracks(1790, westY, 26, 138, true, false, 100, false, false, false, false, false, false, false);
let track139 = new Tracks(1816, westY, 27, 139, true, false, 100, false, false, false, false, false, false, false);
let track140 = new Tracks(1843, westY, 50, 140, true, false, 100, false, false, false, false, false, false, false);
let track141 = new Tracks(1893, westY, 50, 141, true, false, 100, false, false, false, false, false, false, false);
let track142 = new Tracks(1943, westY, 27, 142, true, false, 100, false, false, false, false, false, false, false);
let track143 = new Tracks(1970, westY, 26, 143, true, false, 100, false, false, false, false, false, false, false);
let track144 = new Tracks(1996, westY, 19, 144, true, false, 100, false, false, false, false, false, false, false);
let track145 = new Tracks(2015, westY, 20, 145, true, false, 100, false, false, false, false, false, false, false);
let track146 = new Tracks(2035, westY, 10, 146, true, false, 100, false, false, false, false, false, false, false);
let track147 = new Tracks(2045, westY, 10, 147, true, false, 100, false, false, false, false, false, false, false);
let track148 = new Tracks(2055, westY, 25, 148, true, false, 100, false, false, false, false, false, false, false);
let track149 = new Tracks(2080, westY, 26, 149, true, false, 100, false, false, false, false, false, false, false);
let track150 = new Tracks(2106, westY, 34, 150, true, false, 100, false, false, false, false, false, false, false);
let track151 = new Tracks(2140, westY, 35, 151, true, false, 100, false, false, false, false, false, false, false);
let track152 = new Tracks(2195, westY, 26, 152, true, false, 100, false, false, false, false, false, false, false);
let track153 = new Tracks(2221, westY, 73, 153, true, false, 100, false, false, false, false, false, false, false);
let track154 = new Tracks(2294, westY, 26, 154, true, false, 100, false, false, false, false, false, false, false);
let track155 = new Tracks(2340, westY, 16, 155, true, false, 100, false, false, false, false, false, false, false);
let track156 = new Tracks(2356, westY, 32, 156, true, false, 100, false, false, false, false, false, false, false);
let track157 = new Tracks(2388, westY, 32, 157, true, false, 100, false, false, false, false, false, false, false);
let track158 = new Tracks(2420, westY, 26, 158, true, false, 100, false, false, false, false, false, false, false);
let track159 = new Tracks(2446, westY, 85, 159, true, false, 100, false, false, false, false, false, false, false);
let track160 = new Tracks(2531, westY, 44, 160, true, false, 100, false, false, false, false, false, false, false);
let track161 = new Tracks(2595, westY, 35, 161, true, false, 100, false, false, false, false, false, false, false);
let track162 = new Tracks(2650, westY, 30, 162, true, false, 100, false, false, false, false, false, false, false);
let track163 = new Tracks(2680, westY, 195, 163, true, false, 100, false, false, false, false, false, false, false);
let track164 = new Tracks(2875, westY, 30, 164, true, false, 100, false, false, false, false, false, false, false);
let track165 = new Tracks(2925, westY, 35, 165, true, false, 100, false, false, false, false, false, false, false);
let track166 = new Tracks(2980, westY, 90, 166, true, false, 100, false, false, false, false, false, false, false);
let track167 = new Tracks(3070, westY, 10, 167, true, false, 100, false, false, false, false, false, false, false);
let track168 = new Tracks(3080, westY, 10, 168, true, false, 100, false, false, false, false, false, false, false);
let track169 = new Tracks(3090, westY, 26, 169, true, false, 100, false, false, false, false, false, false, false);
let track170 = new Tracks(3116, westY, 44, 170, true, false, 100, false, false, false, false, false, false, false);
let track171 = new Tracks(3160, westY, 15, 171, true, false, 100, false, false, false, false, false, false, false);
let track172 = new Tracks(3175, westY, 20, 172, true, false, 100, false, false, false, false, false, false, false);
let track173 = new Tracks(3195, westY, 15, 173, true, false, 100, false, false, false, false, false, false, false);
let track174 = new Tracks(3210, westY, 26, 174, true, false, 100, false, false, false, false, false, false, false);
let track175 = new Tracks(3236, westY, 34, 175, true, false, 100, false, false, false, false, false, false, false);
let track176 = new Tracks(3270, westY, 30, 176, true, false, 100, false, false, false, false, false, false, false);
let track177 = new Tracks(3300, westY, 30, 177, true, false, 100, false, false, false, false, false, false, false);
let track178 = new Tracks(3330, westY, 10, 178, true, false, 100, false, false, false, false, false, false, false);
let track179 = new Tracks(3340, westY, 50, 179, true, false, 100, false, false, false, false, false, false, false);
let track180 = new Tracks(3390, westY, 50, 180, true, false, 100, false, false, false, false, false, false, false);
let track181 = new Tracks(3460, westY, 125, 181, true, false, 100, false, false, false, false, false, false, false);
let track182 = new Tracks(3605, westY, 25, 182, true, false, 100, false, false, false, false, false, false, false);
let track183 = new Tracks(3630, westY, 26, 183, true, false, 100, false, false, false, false, false, false, false);
let track184 = new Tracks(3656, westY, 80, 184, true, false, 100, false, false, false, false, false, false, false);

let track200 = new Tracks(50,  eastY, 80, 200, true, false, 100, false, false, false, false, false, false, false);
let track201 = new Tracks(130, eastY, 26, 201, true, false, 100, false, false, false, false, false, false, false);
let track202 = new Tracks(156, eastY, 24, 202, true, false, 100, false, false, false, false, false, false, false);
let track203 = new Tracks(200, eastY, 25, 203, true, false, 100, false, false, false, false, false, false, false);
let track204 = new Tracks(245, eastY, 40, 204, true, false, 100, false, false, false, false, false, false, false);
let track205 = new Tracks(285, eastY, 47, 205, true, false, 100, false, false, false, false, false, false, false);
let track206 = new Tracks(332, eastY, 47, 206, true, false, 100, false, false, false, false, false, false, false);
let track207 = new Tracks(379, eastY, 41, 207, true, false, 100, false, false, false, false, false, false, false);
let track208 = new Tracks(420, eastY, 26, 208, true, false, 100, false, false, false, false, false, false, false);
let track209 = new Tracks(446, eastY, 30, 209, true, false, 100, false, false, false, false, false, false, false);
let track210 = new Tracks(476, eastY, 34, 210, true, false, 100, false, false, false, false, false, false, false);
let track211 = new Tracks(510, eastY, 30, 211, true, false, 100, false, false, false, false, false, false, false);
let track212 = new Tracks(540, eastY, 26, 212, true, false, 100, false, false, false, false, false, false, false);
let track213 = new Tracks(566, eastY, 34, 213, true, false, 100, false, false, false, false, false, false, false);
let track214 = new Tracks(600, eastY, 60, 214, true, false, 100, false, false, false, false, false, false, false);
let track215 = new Tracks(660, eastY, 60, 215, true, false, 100, false, false, false, false, false, false, false);
let track216 = new Tracks(720, eastY, 50, 216, true, false, 100, false, false, false, false, false, false, false);
let track217 = new Tracks(770, eastY, 30, 217, true, false, 100, false, false, false, false, false, false, false);
let track218 = new Tracks(800, eastY, 26, 218, true, false, 100, false, false, false, false, false, false, false);
let track219 = new Tracks(826, eastY, 72, 219, true, false, 100, false, false, false, false, false, false, false);
let track220 = new Tracks(898, eastY, 72, 220, true, false, 100, false, false, false, false, false, false, false);
let track221 = new Tracks(990, eastY, 25, 221, true, false, 100, false, false, false, false, false, false, false);
let track222 = new Tracks(1035, eastY, 72, 222, true, false, 100, false, false, false, false, false, false, false);
let track223 = new Tracks(1107, eastY, 63, 223, true, false, 100, false, false, false, false, false, false, false);
let track224 = new Tracks(1170, eastY, 26, 224, true, false, 100, false, false, false, false, false, false, false);
let track225 = new Tracks(1196, eastY, 22, 225, true, false, 100, false, false, false, false, false, false, false);
let track226 = new Tracks(1218, eastY, 50, 226, true, false, 100, false, false, false, false, false, false, false);
let track227 = new Tracks(1268, eastY, 50, 227, true, false, 100, false, false, false, false, false, false, false);
let track228 = new Tracks(1318, eastY, 22, 228, true, false, 100, false, false, false, false, false, false, false);
let track229 = new Tracks(1340, eastY, 26, 229, true, false, 100, false, false, false, false, false, false, false);
let track230 = new Tracks(1366, eastY, 19, 230, true, false, 100, false, false, false, false, false, false, false);
let track231 = new Tracks(1385, eastY, 50, 231, true, false, 100, false, false, false, false, false, false, false);
let track232 = new Tracks(1435, eastY, 50, 232, true, false, 100, false, false, false, false, false, false, false);
let track233 = new Tracks(1485, eastY, 20, 233, true, false, 100, false, false, false, false, false, false, false);
let track234 = new Tracks(1505, eastY, 65, 234, true, false, 100, false, false, false, false, false, false, false);
let track235 = new Tracks(1590, eastY, 25, 235, true, false, 100, false, false, false, false, false, false, false);
let track236 = new Tracks(1635, eastY, 65, 236, true, false, 100, false, false, false, false, false, false, false);
let track237 = new Tracks(1700, eastY, 90, 237, true, false, 100, false, false, false, false, false, false, false);
let track238 = new Tracks(1790, eastY, 26, 238, true, false, 100, false, false, false, false, false, false, false);
let track239 = new Tracks(1816, eastY, 27, 239, true, false, 100, false, false, false, false, false, false, false);
let track240 = new Tracks(1843, eastY, 50, 240, true, false, 100, false, false, false, false, false, false, false);
let track241 = new Tracks(1893, eastY, 50, 241, true, false, 100, false, false, false, false, false, false, false);
let track242 = new Tracks(1943, eastY, 27, 242, true, false, 100, false, false, false, false, false, false, false);
let track243 = new Tracks(1970, eastY, 26, 242, true, false, 100, false, false, false, false, false, false, false);
let track244 = new Tracks(1996, eastY, 19, 244, true, false, 100, false, false, false, false, false, false, false);
let track245 = new Tracks(2015, eastY, 20, 245, true, false, 100, false, false, false, false, false, false, false);
let track246 = new Tracks(2035, eastY, 10, 246, true, false, 100, false, false, false, false, false, false, false);
let track247 = new Tracks(2045, eastY, 10, 247, true, false, 100, false, false, false, false, false, false, false);
let track248 = new Tracks(2055, eastY, 25, 248, true, false, 100, false, false, false, false, false, false, false);
let track249 = new Tracks(2080, eastY, 26, 249, true, false, 100, false, false, false, false, false, false, false);
let track250 = new Tracks(2106, eastY, 24, 250, true, false, 100, false, false, false, false, false, false, false);
let track251 = new Tracks(2150, eastY, 25, 251, true, false, 100, false, false, false, false, false, false, false);
let track252 = new Tracks(2175, eastY, 165, 252, true, false, 100, false, false, false, false, false, false, false);
let track253 = new Tracks(2340, eastY, 25, 253, true, false, 100, false, false, false, false, false, false, false);
let track254 = new Tracks(2385, eastY, 15, 254, true, false, 100, false, false, false, false, false, false, false);
let track255 = new Tracks(2400, eastY, 20, 255, true, false, 100, false, false, false, false, false, false, false);
let track256 = new Tracks(2420, eastY, 26, 256, true, false, 100, false, false, false, false, false, false, false);
let track257 = new Tracks(2446, eastY, 50, 257, true, false, 100, false, false, false, false, false, false, false);
let track258 = new Tracks(2496, eastY, 34, 258, true, false, 100, false, false, false, false, false, false, false);
let track259 = new Tracks(2550, eastY, 25, 259, true, false, 100, false, false, false, false, false, false, false);
let track260 = new Tracks(2575, eastY, 75, 260, true, false, 100, false, false, false, false, false, false, false);
let track261 = new Tracks(2650, eastY, 25, 261, true, false, 100, false, false, false, false, false, false, false);
let track262 = new Tracks(2695, eastY, 15, 262, true, false, 100, false, false, false, false, false, false, false);
let track263 = new Tracks(2730, eastY, 95, 263, true, false, 100, false, false, false, false, false, false, false);
let track264 = new Tracks(2845, eastY, 15, 264, true, false, 100, false, false, false, false, false, false, false);
let track265 = new Tracks(2880, eastY, 125, 265, true, false, 100, false, false, false, false, false, false, false);
let track266 = new Tracks(3025, eastY, 45, 266, true, false, 100, false, false, false, false, false, false, false);
let track267 = new Tracks(3070, eastY, 10, 267, true, false, 100, false, false, false, false, false, false, false);
let track268 = new Tracks(3080, eastY, 10, 268, true, false, 100, false, false, false, false, false, false, false);
let track269 = new Tracks(3090, eastY, 26, 269, true, false, 100, false, false, false, false, false, false, false);
let track270 = new Tracks(3116, eastY, 44, 270, true, false, 100, false, false, false, false, false, false, false);
let track271 = new Tracks(3160, eastY, 15, 271, true, false, 100, false, false, false, false, false, false, false);
let track272 = new Tracks(3175, eastY, 20, 272, true, false, 100, false, false, false, false, false, false, false);
let track273 = new Tracks(3195, eastY, 15, 273, true, false, 100, false, false, false, false, false, false, false);
let track274 = new Tracks(3210, eastY, 26, 274, true, false, 100, false, false, false, false, false, false, false);
let track275 = new Tracks(3236, eastY, 34, 275, true, false, 100, false, false, false, false, false, false, false);
let track276 = new Tracks(3270, eastY, 30, 276, true, false, 100, false, false, false, false, false, false, false);
let track277 = new Tracks(3300, eastY, 30, 277, true, false, 100, false, false, false, false, false, false, false);
let track278 = new Tracks(3330, eastY, 10, 278, true, false, 100, false, false, false, false, false, false, false);
let track279 = new Tracks(3340, eastY, 70, 279, true, false, 100, false, false, false, false, false, false, false);
let track280 = new Tracks(3410, eastY, 75, 280, true, false, 100, false, false, false, false, false, false, false);
let track281 = new Tracks(3505, eastY, 35, 281, true, false, 100, false, false, false, false, false, false, false);
let track282 = new Tracks(3560, eastY, 70, 282, true, false, 100, false, false, false, false, false, false, false);
let track283 = new Tracks(3630, eastY, 26, 283, true, false, 100, false, false, false, false, false, false, false);
let track284 = new Tracks(3656, eastY, 80, 284, true, false, 100, false, false, false, false, false, false, false);

const tracksArray = [track100, track101, track102, track103, track104, track105, track106, track107, track108, track109,
                  track110, track111, track112, track113, track114, track115, track116, track117, track118, track119,
                  track120, track121, track122, track123, track124, track125, track126, track127, track128, track129,
                  track130, track131, track132, track133, track134, track135, track136, track137, track138, track139,
                  track140, track141, track142, track143, track144, track145, track146, track147, track148, track149,
                  track150, track151, track152, track153, track154, track155, track156, track157, track158, track159,
                  track160, track161, track162, track163, track164, track165, track166, track167, track168, track169,
                  track170, track171, track172, track173, track174, track175, track176, track177, track178, track179,
                  track180, track181, track182, track183, track184,
                  track200, track201, track202, track203, track204, track205, track206, track207, track208, track209,
                  track210, track211, track212, track213, track214, track215, track216, track217, track218, track219,
                  track220, track221, track222, track223, track224, track225, track226, track227, track228, track229,
                  track230, track231, track232, track233, track234, track235, track236, track237, track238, track239, 
                  track240, track241, track242, track243, track244, track245, track246, track247, track248, track249,
                  track250, track251, track252, track253, track254, track255, track256, track257, track258, track259,
                  track260, track261, track262, track263, track264, track265, track266, track267, track268, track269,
                  track270, track271, track272, track273, track274, track275, track276, track277, track278, track279,
                  track280, track281, track282, track283, track284
                  ];

let trackSelect = [];
let trackClose = [];
let trackTsr = [];
let trackWz = [];
let trackMenuActive = [];

//switchInstances       //(x, track, number, tangent, disturbed, manual, blocked, reserved, flank, menu, type, owner)
let switch301 = new Switches(180, westY + 2, 1, 301, false, false, false, false, false, false, false, 1, "16");
let switch302 = new Switches(225, eastY + 2, 2, 302, false, false, false, false, false, false, false, 2, "16");
let switch303 = new Switches(180, eastY + 2, 2, 303, true, false, false, false, false, false, false, 3, "16");
let switch304 = new Switches(225, westY + 2, 1, 304, true, false, false, false, false, false, false, 4, "16");
let switch305 = new Switches(970, westY + 2, 1, 305, true, false, false, false, false, false, false, 1, "16");
let switch306 = new Switches(1015, eastY + 2, 2, 306, true, false, false, false, false, false, false, 2, "16");
let switch307 = new Switches(970, eastY + 2, 2, 307, true, false, false, false, false, false, false, 3, "16");
let switch308 = new Switches(1015, westY + 2, 1, 308, true, false, false, false, false, false, false, 4, "16");
let switch309 = new Switches(1570, westY + 2, 1, 309, true, false, false, false, false, false, false, 1, "16");
let switch310 = new Switches(1615, eastY + 2, 2, 310, true, false, false, false, false, false, false, 2, "16");
let switch311 = new Switches(1570, eastY + 2, 2, 311, true, false, false, false, false, false, false, 3, "16");
let switch312 = new Switches(1615, westY + 2, 1, 312, true, false, false, false, false, false, false, 4, "16");
let switch313 = new Switches(2130, eastY + 2, 2, 313, true, false, false, false, false, false, false, 3, "16");
let switch314 = new Switches(2175, westY + 2, 1, 314, true, false, false, false, false, false, false, 4, "16");
let switch315 = new Switches(2320, westY + 2, 1, 315, true, false, false, false, false, false, false, 1, "16");
let switch316 = new Switches(2365, eastY + 2, 2, 316, true, false, false, false, false, false, false, 2, "16");
let switch317 = new Switches(2530, eastY + 2, 2, 317, true, false, false, false, false, false, false, 3, "16");
let switch318 = new Switches(2575, westY + 2, 1, 318, true, false, false, false, false, false, false, 4, "16");
let switch319 = new Switches(2630, westY + 2, 1, 319, true, false, false, false, false, false, false, 1, "16");
let switch320 = new Switches(2675, eastY + 2, 2, 320, true, false, false, false, false, false, false, 2, "16");
let switch321 = new Switches(2710, eastY + 2, 2, 321, true, false, false, false, false, false, false, 5, "16");
let switch322 = new Switches(2825, eastY + 2, 2, 322, true, false, false, false, false, false, false, 6, "16");
let switch323 = new Switches(2860, eastY + 2, 2, 323, true, false, false, false, false, false, false, 3, "16");
let switch324 = new Switches(2905, westY + 2, 1, 324, true, false, false, false, false, false, false, 4, "16");
let switch325 = new Switches(2960, westY + 2, 1, 325, true, false, false, false, false, false, false, 1, "16");
let switch326 = new Switches(3005, eastY + 2, 2, 326, true, false, false, false, false, false, false, 2, "16");
let switch327 = new Switches(3440, westY + 2, 1, 327, true, false, false, false, false, false, false, 1, "16");
let switch328 = new Switches(3485, eastY + 2, 2, 328, true, false, false, false, false, false, false, 2, "16");
let switch329 = new Switches(3540, eastY + 2, 2, 329, true, false, false, false, false, false, false, 3, "16");
let switch330 = new Switches(3585, westY + 2, 1, 330, true, false, false, false, false, false, false, 4, "16");
    
const switchesArray = [switch301, switch302, switch303, switch304, switch305, switch306, switch307, switch308, switch309, switch310,
                    switch311, switch312, switch313, switch314, switch315, switch316, switch317, switch318, switch319, switch320, 
                    switch321, switch322, switch323, switch324, switch325, switch326, switch327, switch328, switch329, switch330];

let switchMenuActive = [];

let trainNums = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15"];
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(trainNums);

//x, y, run, dwell, number, direction, track, line, docked // new params
//x, y, docked, run, dwell, number, doorOpen, atpm, variance, hold, eb, direction, track, near, jump, line, swt, turnout, menu, safe
//Trains               (x, y, dock,   run,   dwl, num, drOpen, atpm, vrnc, hold, eb, dir, track, dock, jump, line, swt, turnout, menu, safe)

let trainA = new Trains(131,  eastY, 101, 20, trainNums[0],  0, 1, 1, false);
let trainB = new Trains(575,  eastY, 102, 20, trainNums[1],  0, 2, 1, false);
let trainC = new Trains(1155, eastY, 103, 20, trainNums[2],  0, 2, 1, false);
let trainD = new Trains(1610, eastY, 104, 20, trainNums[3],  0, 2, 1, false);
let trainE = new Trains(2058, eastY, 105, 20, trainNums[4],  0, 2, 1, false);
let trainF = new Trains(2800, eastY, 106, 20, trainNums[5],  0, 2, 1, false);
let trainG = new Trains(3300, eastY, 107, 20, trainNums[6],  0, 2, 1, false);
let trainH = new Trains(3630, westY, 108, 20, trainNums[7],  1, 1, 1, false);
let trainI = new Trains(3200, westY, 109, 20, trainNums[8],  1, 1, 1, false);
let trainJ = new Trains(2758, westY, 110, 20, trainNums[9],  1, 1, 1, false);
let trainK = new Trains(2199, westY, 111, 20, trainNums[10], 1, 1, 1, false);
let trainL = new Trains(1850, westY, 112, 20, trainNums[11], 1, 1, 1, false);
let trainM = new Trains(1345, westY, 113, 20, trainNums[12], 1, 1, 1, false);
let trainN = new Trains(856,  westY, 114, 20, trainNums[13], 1, 1, 1, false);
let trainO = new Trains(466,  westY, 115, 20, trainNums[14], 1, 1, 1, false);

let trainsArray = [trainA, trainB, trainC, trainD, trainE, trainF, trainG, 
                trainH, trainI, trainJ, trainK, trainL, trainM, trainN, trainO];

for(let i = 0; i < trainsArray.length; i++) {
  trainsArray[i].number = trainNums[i];
}


let trainMenuActive = [];

//runs (run, x, y, dwell, docked, near, jump, direction, track)
let run101 = new Shadows(101, 143, eastY, 25, false, false, 0, 0, 2);
let run102 = new Shadows(102, 685, eastY, 25, false, false, 0, 0, 2);
let run103 = new Shadows(103, 1155, eastY, 25, false, false, 0, 0, 2);
let run104 = new Shadows(104, 1610, eastY, 25, false, false, 0, 0, 2);
let run105 = new Shadows(105, 2158, eastY, 25, false, false, 0, 0, 2);
let run106 = new Shadows(106, 2600, eastY, 25, false, false, 0, 0, 2);
let run107 = new Shadows(107, 3100, eastY, 25, false, false, 0, 0, 2);
let run108 = new Shadows(108, 3550, westY, 25, false, false, 0, 1, 1);
let run109 = new Shadows(109, 3100, westY, 25, false, false, 0, 1, 1);
let run110 = new Shadows(110, 2658, westY, 25, false, false, 0, 1, 1);
let run111 = new Shadows(111, 2199, westY, 25, false, false, 0, 1, 1);
let run112 = new Shadows(112, 1650, westY, 25, false, false, 0, 1, 1);
let run113 = new Shadows(113, 1145, westY, 25, false, false, 0, 1, 1);
let run114 = new Shadows(114, 656, westY, 25, false, false, 0, 1, 1);
let run115 = new Shadows(115, 366, westY, 25, false, false, 0, 1, 1);

let runsArray = [run101, run102, run103, run104, run105, run106, run107, run108, run109, run110, run111, run112, run113, run114, run115];

//signalInstances      (x, y, aspect, direction, label)
let sig11 = new Signals(tun.x + 47, westY + 31, 0, 0, "1-E-1");
let sig12 = new Signals(tun.x + 41, eastY + 29, 0, 0, "1-E-2");
let sig13 = new Signals(tun.x + 130, westY - 14, 0, 1, "1-W-3");
let sig14 = new Signals(tun.x + 130, eastY - 14, 0, 1, "1-W-4");
let sig21 = new Signals(lyo.x + 157, westY + 31, 0, 0, "2-E-1");
let sig22 = new Signals(lyo.x + 166, eastY + 29, 0, 0, "2-E-2");
let sig23 = new Signals(lyo.x + 235, westY - 14, 0, 1, "2-W-3");
let sig24 = new Signals(lyo.x + 242, eastY - 14, 0, 1, "2-W-4");
let sig25 = new Signals(puot.x + 47, westY + 31, 0, 0, "2-E-5");
let sig26 = new Signals(puot.x + 24, eastY + 27, 0, 0, "2-E-6");
let sig27 = new Signals(puot.x + 130, westY - 14, 0, 1, "2-W-7");
let sig28 = new Signals(puot.x + 130, eastY - 14, 0, 1, "2-W-8");
let sig31 = new Signals(hur.x + 85, westY + 26, 0, 0, "3-E-1");
let sig32 = new Signals(hur.x + 47, eastY + 27, 0, 0, "3-E-2");
let sig33 = new Signals(hur.x + 129, westY - 15, 0, 1, "3-W-3");
let sig34 = new Signals(hur.x + 98, eastY - 15, 0, 1, "3-W-4");
let sig35 = new Signals(tre.x - 110, westY + 26, 0, 0, "3-E-5");
let sig36 = new Signals(tre.x - 67, eastY + 27, 0, 0, "3-E-6");
let sig37 = new Signals(tre.x - 69, westY - 15, 0, 1, "3-W-7");
let sig38 = new Signals(tre.x - 30, eastY - 15, 0, 1, "3-W-8");
let sig39 = new Signals(tre.x + 135, westY + 26, 0, 0, "3-E-9");
let sig310 = new Signals(tre.x + 97, eastY + 27, 0, 0, "3-E-10");
let sig311 = new Signals(tre.x + 179, westY - 15, 0, 1, "3-W-11");
let sig312 = new Signals(tre.x + 148, eastY - 15, 0, 1, "3-W-12");
let sig313 = new Signals(tre.x + 207, westY + 26, 0, 0, "3-E-13");
let sig314 = new Signals(tre.x + 242, eastY + 27, 0, 0, "3-E-14");
let sig315 = new Signals(tre.x + 250, westY - 15, 0, 1, "3-W-15");
let sig316 = new Signals(tre.x + 330, eastY - 12, 0, 1, "3-W-16");
let sig318 = new Signals(tre.x + 381, eastY + 26, 0, 0, "3-W-18");
let sig320 = new Signals(tre.x + 409, eastY - 12, 0, 1, "3-W-20");
let sig321 = new Signals(stl.x - 200, westY + 26, 0, 0, "3-E-21");
let sig322 = new Signals(stl.x - 230, eastY + 26, 0, 0, "3-E-22");
let sig323 = new Signals(stl.x - 115, westY - 15, 0, 1, "3-W-23");
let sig324 = new Signals(stl.x - 60, eastY - 15, 0, 1, "3-W-24");
let sig41 = new Signals(bla.x - 200, westY + 26, 0, 0, "4-E-1");
let sig42 = new Signals(bla.x - 152, eastY + 26, 0, 0, "4-E-2");
let sig43 = new Signals(bla.x - 20, westY - 15, 0, 1, "4-W-3");
let sig44 = new Signals(bla.x - 50, eastY - 15, 0, 1, "4-W-4");

const signalsArray = [sig11, sig12, sig13, sig14, sig21, sig22, sig23, sig24, sig25, sig26, sig27, sig28, sig31, sig32, sig33, sig34, sig35, sig36, sig37, sig38, sig39, sig310, sig311, sig312, sig313, sig314, sig315, sig316, sig318, sig320, sig321, sig322, sig323, sig324, sig41, sig42, sig43, sig44];

//crossovers (x, 365, up, lma)
let cross1 = new Crossover(tun.x + 50, westY + 19, true, false);	
let cross2 = new Crossover(tun.x + 50, westY + 19, false, false);
let cross3 = new Crossover(lyo.x + 170, westY + 19, true, false);
let cross4 = new Crossover(lyo.x + 170, westY + 19, false, false);
let cross5 = new Crossover(puot.x + 50, westY + 19, true, false);
let cross6 = new Crossover(puot.x + 50, westY + 19, false, false);
let cross7 = new Crossover(2130, westY + 19, true, false); //hur
let cross8 = new Crossover(2320, westY + 19, false, false);
let cross9 = new Crossover(2530, westY + 19, true, false);
let cross10 = new Crossover(2630, westY + 19, false, false);
let cross11 = new Crossover(2860, westY + 19, true, false);
let cross12 = new Crossover(2960, westY + 19, false, false);
let cross13 = new Crossover(3440, westY + 19, false, false);
let cross14 = new Crossover(3540, westY + 19, true, false);

const crossArray = [cross1, cross2, cross3, cross4, cross5, cross6, cross7, cross8, cross9, cross10, cross11, cross12, cross13, cross14];

//cross tun+50 lyo+170, puot+50, 2130, 2320, 2530, 2630, 2860, 2960, 3440, 3540

let switchMenu = new Menus({
  x: mouseX,
  y: mouseY, 
  w: 100,
  h: 80,
});

let platformMenu = new Menus({
  x: mouseX,
  y: mouseY,
  w: 100,
  h: 80,
});

let trainMenu = new Menus({
	x: mouseX,
	y: mouseY,
	w: 100,
	h: 80,
});

let trackMenu = new Menus({
	x: mouseX,
	y: mouseY,
	w: 100,
	h: 80,
});


let systemHoldButtonEl = document.getElementById('system-hold');
systemHoldButtonEl.addEventListener('click', () => {
  systemH = !systemH;
  systemH == true ? systemHoldButtonEl.style.backgroundColor = 'rgb(210, 210, 210)' : systemHoldButtonEl.style.backgroundColor = 'rgb(232, 232, 232)';
});

let systemPowerButtonEl = document.getElementById('system-power');
systemPowerButtonEl.addEventListener('click', () => {
  power = !power;
  power == false ? systemPowerButtonEl.style.backgroundColor = 'rgb(210, 210, 210)' : systemPowerButtonEl.style.backgroundColor = 'rgb(232, 232, 232)';
  for(var p = 0; p < tracksArray.length; p++) {
    tracksArray[p].power = !tracksArray[p].power;
  }
});

let tortoiseEl = document.getElementById('tortoise');
tortoiseEl.addEventListener('click', () => {
  if(speedf > 0) {
    speedf -= 1;
  }
  if(speedf == 0) {
    tortoiseEl.style.backgroundColor = 'rgb(190, 180, 180)';
  } else {
    hareEl.style.backgroundColor = 'rgb(232, 232, 232)';
  }
});

let hareEl = document.getElementById('hare');
hareEl.addEventListener('click', () => {
  if(speedf < 8) {
    speedf += 1;
  }
  if(speedf == 8) {
    hareEl.style.backgroundColor = 'rgb(245, 255, 245)';
  } else {
    tortoiseEl.style.backgroundColor = 'rgb(232, 232, 232)';
  }
});

let speedEl = document.getElementById('speed');

///////////////////////////////////////////////////////////////////////////////////
//                                                              DRAW
///////////////////////////////////////////////////////////////////////////////////

draw = function() {
    
  background(112, 112, 112); 
    
    
    // if(trackSelect.length !== 0) {
    //   text(trackSelect[0].number + " " + trackSelect[0].x + " and " + trackSelect[0].length, 3250, 200);
    // }

     
  if(speedf === 0) {
    speed = 0;
  } else if(speedf === 1) {
    speed = 240;
  } else if(speedf === 2) {
    speed = 120;
  } else if(speedf === 3) {
    speed = 60;
  } else if(speedf === 4) {
    speed = 30;
  } else if(speedf === 5) {
    speed = 15;
  } else if(speedf === 6) {
    speed = 8;
  } else if(speedf === 7) {
    speed = 4;
  } else if(speedf === 8) {
    speed = 1;
  }
  speedEl.textContent = speedf;
    
  //speed
  //runShadowsVisible
  //CombinedState
  //switchLabels


  if(track102.lma === true || track103.lma === true || track203.lma === true || track204.lma === true) {
    switch301.flank = true;
    switch302.flank = true;
    switch303.flank = true;
    switch304.flank = true;
  } else {
    switch301.flank = false;
    switch302.flank = false;
    switch303.flank = false;
    switch304.flank = false;
  }
  if(track120.lma === true || track121.lma === true || track221.lma === true || track222.lma === true) {
    switch305.flank = true;
    switch306.flank = true;
    switch307.flank = true;
    switch308.flank = true;
  } else {
    switch305.flank = false;
    switch306.flank = false;
    switch307.flank = false;
    switch308.flank = false;
  }
  if(track134.lma === true || track135.lma === true || track235.lma === true || track236.lma === true) {
    switch309.flank = true;
    switch310.flank = true;
    switch311.flank = true;
    switch312.flank = true;
  } else {
    switch309.flank = false;
    switch310.flank = false;
    switch311.flank = false;
    switch312.flank = false;
  }
  if(track151.lma === true || track251.lma === true) {
    switch313.flank = true;
    switch314.flank = true;
  } else {
    switch313.flank = false;
    switch314.flank = false;
  }
  if(track154.lma === true || track254.lma === true) {
    switch315.flank = true;
    switch316.flank = true;
  } else {
    switch315.flank = false;
    switch316.flank = false;
  }
  if(track160.lma === true || track259.lma === true) {
    switch317.flank = true;
    switch318.flank = true;
  } else {
    switch317.flank = false;
    switch318.flank = false;
  }
  if(track161.lma === true || track262.lma === true) {
    switch319.flank = true;
    switch320.flank = true;
  } else {
    switch319.flank = false;
    switch320.flank = false;
  }
  if(track164.lma === true || track265.lma === true) {
    switch323.flank = true;
    switch324.flank = true;
  } else {
    switch323.flank = false;
    switch324.flank = false;
  }
  if(track165.lma === true || track266.lma === true) {
    switch325.flank = true;
    switch326.flank = true;
  } else {
    switch325.flank = false;
    switch326.flank = false;
  }
  if(track180.lma === true || track281.lma === true) {
    switch327.flank = true;
    switch328.flank = true;
  } else {
    switch327.flank = true;
    switch328.flank = true;
  }
  if(track181.lma === true || track282.lma === true) {
    switch329.flank = true;
    switch330.flank = true;
  } else {
    switch329.flank = true;
    switch330.flank = true;
  }

  // Mid-line signal aspects
  if(track121.lma === true && track121.westArrow === true) {
    sig23.aspect = 1;
  } else {
    sig23.aspect = 0;
  }
  if(track221.lma === true && track221.eastArrow === true) {
    sig22.aspect = 1;
  } else {
    sig22.aspect = 0;
  }
  if(track135.lma === true && track135.westArrow === true) {
    sig27.aspect = 1;
  } else {
    sig27.aspect = 0;
  }
  if(track235.lma === true && track235.eastArrow === true) {
    sig26.aspect = 1;
  } else {
    sig26.aspect = 0;
  }
  if(track151.lma === true && track151.westArrow === true) {
    sig33.aspect = 1;
  } else {
    sig33.aspect = 0;
  }
  if(track251.lma === true && track251.eastArrow === true) {
    sig32.aspect = 1;
  } else {
    sig32.aspect = 0;
  }
  if(track154.lma === true && track154.westArrow === true) {
    sig37.aspect = 1;
  } else {
    sig37.aspect = 0;
  }
  if(track254.lma === true && track254.eastArrow === true) {
    sig36.aspect = 1;
  } else {
    sig36.aspect = 0;
  }
  if(track160.lma === true && track160.westArrow === true) {
    sig311.aspect = 1;
  } else {
    sig311.aspect = 0;
  }
  if(track259.lma === true && track259.eastArrow === true) {
    sig310.aspect = 1;
  } else {
    sig310.aspect = 0;
  }
  if(track161.lma === true && track161.westArrow === true) {
    sig315.aspect = 1;
  } else {
    sig315.aspect = 0;
  }
  if(track262.lma === true && track262.eastArrow === true) {
    sig314.aspect = 1;
  } else {
    sig314.aspect = 0;
  }
  if(track165.lma === true && track165.westArrow === true) {
    sig323.aspect = 1;
  } else {
    sig323.aspect = 0;
  }
  if(track265.lma === true && track265.eastArrow === true) {
    sig322.aspect = 1;
  } else {
    sig322.aspect = 0;
  }
  //connector
  if(track263.lma === true && track263.eastArrow === true) {
    sig318.aspect = 1;
  } else {
    sig318.aspect = 0;
  }
  

  let btnSwtReserve = new Button({
    x: switchMenu.x + 20,
    y: switchMenu.y + 15,
    width: 100,
    height: 16,
    onClick: function() {
      for(let i = 0; i < switchMenuActive.length; i++) {
        switchMenuActive[i].reserved = !switchMenuActive[i].reserved;
        switchMenuActive = [];
      }
    }
  });
  let btnSwtManual = new Button({
    x: switchMenu.x + 20,
    y: switchMenu.y + 32,
    width: 100,
    height: 16,
    onClick: function() {
      for(let i = 0; i < switchMenuActive.length; i++) {
        switchMenuActive[i].manual = !switchMenuActive[i].manual;
        switchMenuActive = [];
      }
    }
  });
  let btnSwtBlock = new Button({
    x: switchMenu.x + 20,
    y: switchMenu.y + 49,
    width: 100,
    height: 16,
    onClick: function() {
      for(let i = 0; i < switchMenuActive.length; i++) {
        switchMenuActive[i].blocked = !switchMenuActive[i].blocked;
        switchMenuActive = [];
      }
    }
  });
  let btnSwtMove = new Button({
    x: switchMenu.x + 20,
    y: switchMenu.y + 66,
    width: 100,
    height: 16,
    onClick: function() {
      for(let i = 0; i < switchMenuActive.length; i++) {
        if(switchMenuActive[i].manual === true) {
          switchMenuActive[i].tangent = !switchMenuActive[i].tangent;
        }
        switchMenuActive = [];
      }
    }
  });

  let btnTkClose = new Button({
  	x: trackMenu.x + 20,
  	y: trackMenu.y + 15,
  	width: 100,
  	height: 16,
  	onClick: function() {
  	  for(var i = 0; i < trackSelect.length; i++) {
        trackSelect[i].close = !trackSelect[i].close;
        trackSelect[i].select = false;
        trackSelect[i].westArrow = false;
        trackSelect[i].eastArrow = false;
        trackMenuActive = [];
      }
      trackSelect = [];
  	}
	});
	let btnTkTsr = new Button({
  	x: trackMenu.x + 20,
  	y: trackMenu.y + 32,
  	width: 100,
  	height: 16,
  	onClick: function() {
  	  for(var i = 0; i < trackSelect.length; i++) {
        if(trackSelect[i].tsr === 100) {
          trackSelect[i].tsr = 25;
        } else if(trackSelect[i].tsr < 100) {
          trackSelect[i].tsr = 100;
        }
        trackSelect[i].select = false;
        trackSelect[i].westArrow = false;
        trackSelect[i].eastArrow = false;
        trackMenuActive = [];
      }
  	  trackSelect = [];
  	}
	});
  let btnTkWz = new Button({
  	x: trackMenu.x + 20,
  	y: trackMenu.y + 49,
  	width: 100,
  	height: 16,
  	onClick: function() {
  	  for(var i = 0; i < trackSelect.length; i++) {
        trackSelect[i].wz = !trackSelect[i].wz;
        trackSelect[i].select = false;
        trackSelect[i].westArrow = false;
        trackSelect[i].eastArrow = false;
        trackMenuActive = [];
      }
      trackSelect = [];
  	}
	});

  let btnTrnDepart = new Button({
    x: trainMenu.x + 20,
    y: trainMenu.y + 15,
    width: 100,
    height: 16,
    onClick: function() {
      trainMenuActive[0].dwell = 0;
      trainMenuActive = [];
    }
  });
  let btnTrnAtpm = new Button({
    x: trainMenu.x + 20,
    y: trainMenu.y + 32,
    width: 100,
    height: 16,
    onClick: function() {
      trainMenuActive[0].atpm = !trainMenuActive[0].atpm;
      trainMenuActive = [];
    }
  });
  let btnTrnEb = new Button({
    x: trainMenu.x + 20,
    y: trainMenu.y + 49,
    width: 100,
    height: 16,
    onClick: function() {
      trainMenuActive[0].eb = !trainMenuActive[0].eb;
      trainMenuActive = [];
    }
  });
  
  let btnPlatHold = new Button({
    x: platformMenu.x + 20,
    y: platformMenu.y + 15,
    width: 100,
    height: 16,
    onClick: function() {
      platformMenuActive[0].hold = !platformMenuActive[0].hold;
      platformMenuActive = [];
    }
  });
  let btnPlatClose = new Button({
    x: platformMenu.x + 20,
    y: platformMenu.y + 32,
    width: 100,
    height: 16,
    onClick: function() {
      platformMenuActive[0].close = !platformMenuActive[0].close;
      platformMenuActive = [];
    }
  });
  let btnPlatDwell = new Button({
    x: platformMenu.x + 20,
    y: platformMenu.y + 49,
    width: 100,
    height: 16,
    onClick: function() {
      platformMenuActive[0].dwell = prompt("Enter new dwell:", "23");
      platformMenuActive = [];
    }
  });
  
	gidsDraw(puot.x + 35);		//portals
	drawEastPortal(puot.x - 2);
	
	gidsDraw(642);
	drawWestPortal(640);
	markerDraw(580, eastY - 2);
	markerDraw(580, westY - 2); //westDtPortal

	gidsDraw(3062);
	drawWestPortal(3060);
	markerDraw(3052, eastY - 2);
	markerDraw(3052, westY - 2); //westStlPortal

	gidsDraw(3144);
	drawEastPortal(3150);
	markerDraw(3158, eastY - 2);
	markerDraw(3158, westY - 2); //eastStlPortal


	zoneBorderDraw(600);			//zones
	zoneBorderDraw(2035);
	zoneBorderDraw(3175);

	markerDraw(600, westY - 2);		//zone markers
	markerDraw(600, eastY - 2);
	markerDraw(2035, westY - 2);
	markerDraw(2035, eastY - 2);
	markerDraw(3175, westY - 2);
	markerDraw(3175, eastY - 2);

	markerDraw(270, westY - 2);
	markerDraw(270, eastY - 2); //swt302marker
	markerDraw(1680, westY - 2);
	markerDraw(1680, eastY - 2); //swt310marker
	markerDraw(2630, eastY - 2);
	markerDraw(2610, westY - 2); //swt319markers
	markerDraw(2710, westY - 2);
	markerDraw(2845, eastY - 2);
	markerDraw(2880, westY - 2); //swt324markers
	markerDraw(2915, eastY - 2);
	markerDraw(3435, westY - 2); //swt327marker
	markerDraw(3455, eastY - 2);


	puot.drawPseudo();
	phur.drawPseudo();
	ptre.drawPseudo();


  
  for(let i = 0; i < stationsArray.length; i++) {
    stationsArray[i].drawStation();
  }


	fill(255, 130, 0);
	textSize(12);
	
	text("SW_301", tun.x - 13, westY + 35);     //swtNumber
	text("SW_302", tun.x + 140, eastY - 17);
	text("SW_303", tun.x - 5, eastY - 17);
	text("SW_304", tun.x + 130, westY + 35);
	
	text("SW_305", lyo.x + 95, westY + 35);
	text("SW_306", lyo.x + 260, eastY - 17);
	text("SW_307", lyo.x + 110, eastY - 17);
	text("SW_308", lyo.x + 245, westY + 35);

	text("SW_309", puot.x - 10, westY + 35);
	text("SW_310", puot.x + 140, eastY - 17);
	text("SW_311", puot.x + 5, eastY - 17);
	text("SW_312", puot.x + 125, westY + 35); 

	text("SW_313", 2170, eastY - 17);
	text("SW_314", 2155, westY - 11);
	text("SW_315", 2350, westY + 31);
	text("SW_316", 2398, eastY - 14);

	text("SW_317", 2485, eastY - 11);
	text("SW_318", 2490, westY + 35);
	text("SW_319", 2660, westY + 35);
	text("SW_320", 2700, eastY - 11);

	text("SW_323", 2890, eastY - 11);
	text("SW_324", 2850, westY + 35);
	text("SW_325", 2990, westY + 31);
	text("SW_326", 2950, eastY - 11);

	text("SW_327", 3470, westY + 35);
	text("SW_328", 3420, eastY - 11);
	text("SW_329", 3508, eastY - 22);
	text("SW_330", 3528, westY + 35);

  for(let i = 0; i < signalsArray.length; i++) {
    signalsArray[i].drawSignal();
  }
	
	for(let i = 0; i < tracksArray.length; i++) {
	  tracksArray[i].drawTrack();
	}
	
	for(let i = 0; i < switchesArray.length; i++) {
	  switchesArray[i].drawSwitch();
	}

	for(let i = 0; i < crossArray.length; i++) {
		crossArray[i].drawCross();
	}
  
  for(let i = 0; i < trainsArray.length; i++) {
		trainsArray[i].checkSafeDistance();
	}
    
	for(let i = 0; i < trainsArray.length; i++) {
		trainsArray[i].drawTrain();
	}

  for(let i = 0; i < runsArray.length; i++) {
    runsArray[i].drawShadow();
  }
  
  if(switchMenuActive.length === 0) {
    switchMenu.x = -200;
  }
  for(let i = 0; i < switchMenuActive.length; i++) {
    switchMenuActive[i].drawSwitchMenu();
  }
    
  if(trackMenuActive.length === 0) {
    trackMenu.x = -200;
  }
  for(let i = 0; i < trackMenuActive.length; i++) {
    trackMenuActive[i].drawTrackMenu();
	}
  
  if(trainMenuActive.length === 0) {
    trainMenu.x = -200;
  }
  for(let i = 0; i < trainMenuActive.length; i++) {
    trainMenuActive[i].drawTrainMenu();
	}
     
  if(platformMenuActive.length === 0) {
    platformMenu.x = -200;
  }
  for(let i = 0; i < platformMenuActive.length; i++) {
    platformMenuActive[i].drawPlatformMenu();
  }
   
     
mouseClicked = function() {
	  for(let i = 0; i < tracksArray.length; i++) {
      if(tracksArray[i].isUnderMouse(mouseX, mouseY)) {
        trackSelect.push(tracksArray[i]);
        trackMenuActive = [];
        trainMenuActive = [];
        switchMenuActive = [];
        platformMenuActive = [];
        trackMenuActive.push(tracksArray[i]);
        trackMenu.x = mouseX;
		    trackMenu.y = mouseY;
      }
    }
    for(let i = 0; i < trainsArray.length; i++) {
      if(trainsArray[i].isUnderMouse(mouseX, mouseY)) {
        trackMenuActive = [];
        trackSelect = [];
        trainMenuActive = [];
        platformMenuActive = [];
        switchMenuActive = [];
        trainMenuActive.push(trainsArray[i]);
        trainMenu.x = mouseX;
        trainMenu.y = mouseY;
      }
    }
    for(let i = 0; i < platformsArray.length; i++) {
      if(platformsArray[i].isUnderMouse(mouseX, mouseY)) {
        trackMenuActive = [];
        trackSelect = [];
        trainMenuActive = [];
        switchMenuActive = [];
        platformMenuActive = [];
        platformMenuActive.push(platformsArray[i]);
        platformMenu.x = mouseX;
        platformMenu.y = mouseY;
      }
    }
    for(let i = 0; i < switchesArray.length; i++) {
      if(switchesArray[i].isUnderMouse(mouseX, mouseY)) {
        trackMenuActive = [];
        trackSelect = [];
        trainMenuActive = [];
        platformMenuActive = [];
        switchMenuActive = [];
        switchMenuActive.push(switchesArray[i]);
        switchMenu.x = mouseX;
        switchMenu.y = mouseY;
      }
    }
    for(let i = 0; i < trackSelect.length; i++) {
      trackSelect[i].select = true;
      trackSelect[i].westArrow = true;
      trackSelect[i].eastArrow = true;
    }

    btnSwtReserve.handleMouseClick();
    btnSwtManual.handleMouseClick();
    btnSwtBlock.handleMouseClick();
    btnSwtMove.handleMouseClick();

	  btnTkTsr.handleMouseClick();
	  btnTkClose.handleMouseClick();
	  btnTkWz.handleMouseClick();
	  
    btnTrnDepart.handleMouseClick();
	  btnTrnAtpm.handleMouseClick();
    btnTrnEb.handleMouseClick();
  	
  	btnPlatHold.handleMouseClick();
  	btnPlatClose.handleMouseClick();
  	btnPlatDwell.handleMouseClick();
  	

  };//endMouseClicked
    
// debug tracks

  // for(var i = 0; i < trackSelect.length; i++) {
  //   fill(0, 0, 0);
  //   text(trackSelect[i].number, 50+50*i, 200);
  // }
  // for(var i = 0; i < trackMenuActive.length; i++) {
  //   fill(0, 0, 0);
  //   text(trackMenuActive[i].number, 50+50*i, 250);
  // }


    // Clock time
    let clock = new Date();
    let day = new Array();
    day[0] = "Sunday";
    day[1] = "Monday";
    day[2] = "Tuesday";
    day[3] = "Wednesday";
    day[4] = "Thursday";
    day[5] = "Friday";
    day[6] = "Saturday";
    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    let cHours = clock.getHours();
    let cMinutes = clock.getMinutes();
    cMinutes = cMinutes < 10 ? '0' + cMinutes : cMinutes;
    let cSeconds = clock.getSeconds();
    cSeconds = cSeconds < 10 ? '0' + cSeconds : cSeconds;
    
    let clockDateEl = document.querySelector('#date-span');
    let clockTimeEl = document.querySelector('#time-span');
    clockDateEl.textContent = (day[clock.getDay()] + ", " + month[clock.getMonth()] + " " + clock.getDate() + ", " + clock.getFullYear() + ".");
    clockTimeEl.textContent = (cHours + ':' + cMinutes + ':' + cSeconds);
    
}; //endDrawFunction

	}
};  //endProcessing/sketchFunctions

const canvas = document.getElementById("mycanvas"); 
const processingInstance = new Processing(canvas, sketchProc); 

// DOM manipulations, except clock

let activeAlarmsEl = document.getElementById('activeAlarms');
activeAlarmsEl.textContent = 0;
    
let randomYardTrains = [];
for(let i = 0; i < 6; i++) {
  randomYardTrains.push(Math.floor(Math.random() * (56 - 35 + 1)) + 35);
}

let randomYardSwitch = Math.floor(Math.random() * (532 - 501 + 1)) + 501;

// End of message time
let aUTC = new Date();
let eYear = aUTC.getFullYear();
let eMonth = aUTC.getMonth() + 1;
eMonth = eMonth < 10 ? '0' + eMonth : eMonth;
let eDate = aUTC.getDate();
eDate = eDate < 10 ? '0' + eDate : eDate;
let eHours = aUTC.getHours();
let eMinutes = aUTC.getMinutes();
eMinutes = eMinutes < 10 ? '0' + eMinutes : eMinutes;
let eSeconds = aUTC.getSeconds();
eSeconds = eSeconds < 10 ? '0' + eSeconds : eSeconds;
let eMilliseconds = aUTC.getMilliseconds();
eMilliseconds = eMilliseconds < 100 && eMilliseconds >= 10 ? '0' + eMilliseconds : eMilliseconds < 10 && eMilliseconds >= 1 ? '00' + eMilliseconds : '000';
let edt = eYear + '-' + eMonth + '-' + eDate + ' ' + eHours + ':' + eMinutes + ':' + eSeconds + "." + eMilliseconds;

// Array of arrays of alarm messages [YardTrainLRV#][YardWaysideSWT#][ZC5WaysideNo#]
const falseAlarms = [
  [
    "Train " + randomYardTrains[0] + " [0" + randomYardTrains[0] + "](10" + randomYardTrains[0] + ") front position at chainage: Tk19Be60 : 1914115 reports: Train integrity is lost, Reason = 0, at time = " + edt,
    "Train " + randomYardTrains[0] + " [0" + randomYardTrains[0] + "](10" + randomYardTrains[0] + ") front position at chainage 0: 0 reports: Train integrity is reestablished, at time = " + edt,
    "Train " + randomYardTrains[1] + " [0" + randomYardTrains[1] + "] Manually driven (RM) without MRR",
    "VOBC 10" + randomYardTrains[2] + " cannot establish communication with ATS.",
    "External Fire and Smoke Detected on Train " + randomYardTrains[3] + " [0" + randomYardTrains[3] + "] front position at chainage 0 : 0",
    "VOBC 10" + randomYardTrains[4] + " on Train " + randomYardTrains[4] + " [0" + randomYardTrains[4] + "](10" + randomYardTrains[4] + ") front position at chainage: TK32e86 : 3226844 reports: An unexpected change in coupler status has been detected, at A end, at time=" + edt
  ], [
    "Switch SW_" + randomYardSwitch + " is disturbed"
  ], [
    "ZC5 reports: NCO in area NCO_Transition_Area_1 has been removed, at time = " + edt,
    "ZC5 reports: Signal 5Y19-2 Failed due to Mismatch between the Field Signal Status and the Signal Command, Signal Command is 0, at time = " + edt,
    "ZC5 Module 1617 reports: IC I/O Card Isolated for Replica 1, for IC 9, at time = " + edt,
    "ZC5 Module 1617 reports: IC Discrete Voltage Checkback detected when commanded low for Replica 1, for IC 9, for Car 4, with Bit = 0, at time = " + edt,
    "ZC ZC5 Rack Fan Failure Detected",
    "ZC ZC5 Rack Non-Vital 24Vdc Power Failure Detected"
  ]
];
const realAlarms = [];


function clearAlarm(event) {
  if(event.target.tagName === "p") {
    event.target.remove();
  } else { //else if(event.target.tagName === "span") {
    event.target.parentNode.remove();
  }
  activeAlarmsEl.textContent --;
  window.setTimeout(generateAlarm, 200000);
};
    
//VOBC 1001 on Train 7 [007](1007) front position at chainage: TK32e86 : 3226844 reports: An unexpected change in coupler status has been detected, at A end, at time=
//VOBC 1001 on Train 7 [007](1007) front position at chainage: TK32e86 : 3226844 reports: An unexpected change in coupler status has been detected - cleared, at time =

function generateAlarm() {

  // Start of Alarm Time
  let aDate = new Date();
  let aHours = aDate.getHours();
  aHours = aHours < 10 ? '0' + aHours : aHours;
  let aMinutes = aDate.getMinutes();
  aMinutes = aMinutes < 10 ? '0' + aMinutes : aMinutes;
  let aSeconds = aDate.getSeconds();
  aSeconds = aSeconds < 10 ? '0' + aSeconds : aSeconds;
  let adt = aDate.getMonth() + "/" + aDate.getDate() + "/" + aDate.getFullYear();
  let aTime = aHours + ":" + aMinutes + ":" + aSeconds;

      
  let messageI1 = Math.floor(Math.random() * 3);
  let messageSet = falseAlarms[messageI1];
  let messageI2 = Math.floor(Math.random() * messageSet.length);
  let message = falseAlarms[messageI1][messageI2];
  // [YardTrainLRV#][YardWaysideSWT#][ZC5WaysideNo#]
  let category = messageI1 == 0 ? "Train" : "Wayside";
  let region = messageI1 == 2 ? "ZC5" : "Yard";
      
  let alarmEl = document.createElement('p');
  alarmEl.setAttribute("class", "alarm");
  alarmEl.innerHTML = "<span>" + adt + " " + aTime + "</span> <span>" + category + "</span> <span>" + region + "</span> <span>" + message + "</span>";
  let alarmsEl = document.getElementById('alarms');
  alarmsEl.prepend(alarmEl);
  activeAlarmsEl.textContent ++;
  document.querySelector('.alarm').addEventListener('dblclick', clearAlarm);
}

    
window.setTimeout(generateAlarm, 2000);
// window.setTimeout(generateAlarm, 8000);
window.setTimeout(generateAlarm, 10000);
// window.setTimeout(generateAlarm, 22000);
window.setTimeout(generateAlarm, 50000);
    
// generateAlarm();

