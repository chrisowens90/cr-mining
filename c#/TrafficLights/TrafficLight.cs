using Stateless;
using System;
using System.Collections.Generic;
using System.Text;

namespace TrafficLights
{
    /// <summary>
    /// Represents and manages the state of a single traffic light at a crossing.
    /// </summary>
    public class TrafficLight
    {
        public TrafficLightState State { get { return _machine.State; } }

        public enum TrafficLightState { Red, Green, Orange }

        public enum TrafficLightTrigger { StopTraffic, PermitTraffic, WarnTraffic }

        private readonly StateMachine<TrafficLightState, TrafficLightTrigger> _machine;

        private readonly StateMachine<TrafficLightState, TrafficLightTrigger>.TriggerWithParameters<string> _assignTrigger;

        public TrafficLight(TrafficLightState initialState, string name)
        {
            // Instantiate a new state machine
            _machine = new StateMachine<TrafficLightState, TrafficLightTrigger>(initialState);

            _machine.Configure(TrafficLightState.Red)
                .Permit(TrafficLightTrigger.PermitTraffic, TrafficLightState.Green)
                .Ignore(TrafficLightTrigger.WarnTraffic)
                .Ignore(TrafficLightTrigger.StopTraffic);

            _machine.Configure(TrafficLightState.Orange)
                .Permit(TrafficLightTrigger.StopTraffic, TrafficLightState.Red)
                .Ignore(TrafficLightTrigger.WarnTraffic);

            _machine.Configure(TrafficLightState.Green)
                .Permit(TrafficLightTrigger.WarnTraffic, TrafficLightState.Orange)
                .Ignore(TrafficLightTrigger.PermitTraffic);
        }


        public void StopTraffic()
        {
            _machine.Fire(TrafficLightTrigger.StopTraffic);
        }


        public void WarnTraffic()
        {
            _machine.Fire(TrafficLightTrigger.WarnTraffic);
        }


        public void PermitTraffic()
        {
            _machine.Fire(TrafficLightTrigger.PermitTraffic);
        }
    }
}
