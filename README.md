# ats

## Train control simulator

This is a simulation of the Automatic Train Control simulator, with added features:
 - It links to the IOS code reference.
 - It will hopefully work as an obstruction plan tool.
 - It doesn't take 1-3 hours to start up.
 - It doesn't crash frequently.
 - It is online and can be available on any computer.

I am a new programmer and this is my first major project. I have been learning JavaScript, HTML and CSS while working on this.

There are a lot of features I still hope to add, and a lot of work still to do.
  

### 1.0 - Proof of Concept - 2022-06-15

At the point now where it looks reasonably realistic and there is some basic functionality.
Working interactive features include: station hold/close, track close, system hold/power.
The trains run line 1 without overlapping, and the signals and switches operate at the terminus stations.
The rest of the signals don't work yet, and only one platform is used at the termini.

### 1.1 - Multi-File - 2022-06-23

Converted to a multi-file repository. Working on modifying DOM (alarms) with js.
Added train EB visual and functionality.