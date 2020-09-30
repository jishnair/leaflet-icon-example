import { Component, OnInit } from "@angular/core";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import "leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css";
import "leaflet-extra-markers/dist/js/leaflet.extra-markers.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    var map = L.map("map").setView([52.246215, 21.223158], 14);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const redMarker = (L as any).ExtraMarkers.icon({
      icon: "fa-coffee",
      markerColor: "black",
      shape: "square",
      prefix: "fa fa-4x",
      iconColor: "red"
    });

    L.marker([52.246215, 21.223158], { icon: redMarker }).addTo(map);
  }
}
