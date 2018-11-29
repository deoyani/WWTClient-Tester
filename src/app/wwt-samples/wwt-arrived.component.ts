import { Component } from '@angular/core';

@Component({
  selector: 'wwt-arrived',
  templateUrl: './wwt-arrived.component.html',
  styleUrls: ['./wwt-arrived.component.css']
})
export class WWTArrivedComponent {
  title = 'wwt-test';

  // Create the WorldWide telescope object variable
   wwt: any;

  // Create variables to hold the changeable settings
  bShowCrosshairs:boolean = true;
  bShowUI:boolean = true;
  bShowFigures:boolean = true;
  bShowCircles:boolean = false;

  // This function initializes the wwt object and registers the wwtReady event
  // once the initialization is done the wwtReady event will be fired
  initialize() {
    // this.wwt = wwtlib.WWTControl.initControl("WWTCanvas");
    this.wwt.add_ready(this.wwtReady);
    this.wwt.add_arrived(this.wwtArrived);
  }

  // A simple function to toggle the settings
  // This function is called from the checkbox entries setup in the html table
 toggleSetting(text) {
      switch (text) {
          case 'ShowUI':
          this.bShowUI = !this.bShowUI;
          this.wwt.hideUI(!this.bShowUI);
              break;

          case 'ShowCrosshairs':
          this.bShowCrosshairs = !this.bShowCrosshairs;
              this.wwt.settings.set_showCrosshairs(this.bShowCrosshairs);
              break;

          case 'ShowFigures':
          this.bShowFigures = !this.bShowFigures;
          this.wwt.settings.set_showConstellationFigures(this.bShowFigures);
              break;

          case 'ShowCircles':
          this.bShowCircles = !this.bShowCircles;
              if (!this.bShowCircles) {
                this.clearAnnotations();
              }
              break;
              
      }
  }

  // A function to change the view to different constellations
  // This function is called from the button entries in the html table
  GotoConstellation(text) {    
      
      switch (text) {
          case 'Sagittarius':
          this.wwt.gotoRaDecZoom(286.485, -27.5231666666667, 60, false);
              break;

          case 'Aquarius':
          this.wwt.gotoRaDecZoom(334.345, -9.21083333333333, 60, false);
              break;

          case 'Camelopardalis':
          this.wwt.gotoRaDecZoom(90.0, 72.000, 100, false);
              break;

          case 'Vulpecula':
          this.wwt.gotoRaDecZoom(303.47, 24.4426666666667, 100, false);
              break; 
      }
  }
  
  // A function to create a circle, and return a reference to the circle
  circleCount:number = 0;
 createWWTCircle(fill, lineColor, fillColor, lineWidth, opacity, radius, skyRelative, ra, dec) {
      var circle = this.wwt.createCircle(fill);
      this.circleCount++;
      circle.set_id("Circle" + this.circleCount.toString());
      circle.set_lineColor(lineColor);
      circle.set_fillColor(fillColor);
      circle.set_lineWidth(lineWidth);
      circle.set_opacity(opacity);
      circle.set_radius(radius);
      circle.set_skyRelative(skyRelative);
      circle.setCenter(ra, dec);
      return circle;
  }

  // Simple function to clear all the annotations from the view

clearAnnotations() {
      this.wwt.clearAnnotations();
  }

  // wwtArrived (similar to wwtReady) is a reserved name by the WWT Web Control
  // This function is called when a Goto action comes to a halt

 wwtArrived(obj, eventArgs) {
      if (this.bShowCircles) {
          // Show that we have arrived by drawing a red circle at the new ra, dec

          var circle = this.createWWTCircle(false, "red", "blue", 3, 1.0, 15, false, eventArgs.get_RA(), eventArgs.get_dec());
          this.wwt.addAnnotation(circle);

      }
  }

  // The wwtReady function is called by the WWT Web Control software
  // This function sets up the wwt object, and the initial defaults

  wwtReady() {
         this.wwt.loadImageCollection("http://www.worldwidetelescope.org/COMPLETE/wwtcomplete.wtml");
       // wwt.settings.set_showCrosshairs(bShowCrosshairs);
// 	    wwt.settings.set_showConstellationFigures(bShowFigures);
// 	    wwt.hideUI(!bShowUI);

// 	    wwt.settings.set_showConstellationBoundries(true);

  }

}
