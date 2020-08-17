using Stateless;
using Stateless.Graph;
using System;
using System.Collections.Generic;
using System.Text;
using TrafficLights;

namespace TrafficLights
{
    /// <summary>
    /// Represents and manages the state of traffic lights at a crossing.
    /// </summary>
    public class Crossing
    {
        public enum Trigger { Button1, Button2 }
        public enum CrossingState { LightACrossing, LightBCrossing }
        private readonly StateMachine<CrossingState, Trigger> _machine;
        public readonly CrossingLights State;

        public Crossing()
        {
            _machine = new StateMachine<CrossingState, Trigger>(CrossingState.LightBCrossing);
            State = new CrossingLights();

            _machine.Configure(CrossingState.LightACrossing)
                .OnEntry(t => OnStartLightACrossing())
                .Permit(Trigger.Button2, CrossingState.LightBCrossing)
                .Ignore(Trigger.Button1); // If the crossing is already going we don't mind the user pressing the button again

            _machine.Configure(CrossingState.LightBCrossing)
                .OnEntry(t => OnStartLightBCrossing())
                .Permit(Trigger.Button1, CrossingState.LightACrossing)
                .Ignore(Trigger.Button2); // If the crossing is already going we don't mind the user pressing the button again
        }


        /// <summary>
        /// Stop light B and start light A.
        /// </summary>
        void OnStartLightACrossing()
        {
            State.LightB.WarnTraffic();
            Console.WriteLine(State);
            State.LightB.StopTraffic();
            State.LightA.PermitTraffic();
            Console.WriteLine(State);
        }


        /// <summary>
        /// Stop light A and start light B
        /// </summary>
        void OnStartLightBCrossing()
        {
            State.LightA.WarnTraffic();
            Console.WriteLine(State);

            State.LightA.StopTraffic();
            State.LightB.PermitTraffic();
            Console.WriteLine(State);
        }


        public void PushButton(Trigger trigger)
        {
            _machine.Fire(trigger);
        }
    }
}
