using System;
using System.Collections.Generic;
using System.Text;

namespace TrafficLights
{
    public class CrossingLights
    {
        public TrafficLight LightA { get; set; }
        public TrafficLight LightB { get; set; }

        public CrossingLights()
        {
            LightA = new TrafficLight(TrafficLight.TrafficLightState.Red, "Light A");
            LightB = new TrafficLight(TrafficLight.TrafficLightState.Green, "Light B");
        }
    }
}
